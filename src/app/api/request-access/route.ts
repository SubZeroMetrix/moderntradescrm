import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// ---------------------------------------------------------------------------
// GHL field keys below are the real, OBSERVED keys from
// GHL_WEBSITE_INTEGRATION_CONTRACT.md (verified 2026-08-25). Field keys are
// NOT the blocker for this route. What IS missing, and genuinely blocks
// activating live sends, is recorded in isConfigured() below -- never
// silently faked.
// ---------------------------------------------------------------------------

const CONTACT_FIELD_KEYS = {
  originalDomain: 'contact.original_domain',
  originalLandingPage: 'contact.original_landing_page',
  sourceTool: 'contact.source_tool',
  firstContentTopic: 'contact.first_content_topic',
  trade: 'contact.trade',
  county: 'contact.county',
  geographicPriority: 'contact.geographic_priority',
  customerType: 'contact.customer_type',
  utmSource: 'contact.utm_source',
  utmMedium: 'contact.utm_medium',
  utmCampaign: 'contact.utm_campaign',
  utmContent: 'contact.utm_content',
  utmTerm: 'contact.utm_term',
  emailConsentStatus: 'contact.email_consent_status',
  emailConsentSource: 'contact.email_consent_source',
  emailConsentTimestamp: 'contact.email_consent_timestamp',
  smsConsentStatus: 'contact.sms_consent_status',
  smsConsentSource: 'contact.sms_consent_source',
  smsConsentTimestamp: 'contact.sms_consent_timestamp',
  crmPlanInterest: 'contact.crm_plan_interest',
  consultingInterest: 'contact.consulting_interest',
  unsubscribeStatus: 'contact.unsubscribe_status',
} as const

const OPPORTUNITY_FIELD_KEYS = {
  opportunitySource: 'opportunity.opportunity_source',
  productOrServiceInterest: 'opportunity.product_or_service_interest',
  originalLeadSource: 'opportunity.original_lead_source',
  primaryProblem: 'opportunity.primary_problem',
  attributionSummary: 'opportunity.attribution_summary',
} as const

const ALLOWED_FIELDS = [
  'firstName', 'lastName', 'email', 'phone', 'companyName',
  'trade', 'city', 'state', 'primaryProblem',
  'original_domain', 'original_landing_page', 'source_tool', 'first_content_topic',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'email_consent', 'sms_consent',
] as const

const MAX_LEN = 300
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, number[]>()

function isConfigured() {
  // Real blocker (owner-confirmed 2026-08-25): NO AUTHORIZED PRODUCTION GHL
  // LOCATION EXISTS FOR NATIONAL MODERN TRADES CRM LEADS. This is not just a
  // missing token:
  //   - 01-CORE-DEV: test/template subaccount only, never real traffic
  //   - Arbor Addicts: a real customer account -- CRM-product leads must
  //     NEVER be sent here, wrong business entirely
  //   - TMT operating account: a real, existing production business, but
  //     NOT yet authorized as the Modern Trades CRM national-lead
  //     destination -- sending there without that authorization would
  //     contaminate TMT's own operating pipeline
  //   - Starter plan has no room for a 4th subaccount
  // Do not connect this route to CORE-DEV or Arbor under any circumstance,
  // even if a token becomes available for either. Stay disabled until
  // Terminal 1 supplies all five of: an authorized production locationId,
  // a token scoped to that location, pipelineId, stageId, and an assigned-
  // user id if the destination requires one.
  return !!(
    process.env.GHL_PRIVATE_INTEGRATION_TOKEN &&
    process.env.GHL_LOCATION_ID &&
    process.env.GHL_REVENUE_PIPELINE_ID &&
    process.env.GHL_REVENUE_PIPELINE_NEW_LEAD_STAGE_ID
  )
}

function clamp(v: unknown): string {
  if (typeof v !== 'string') return ''
  return v.replace(/[<>]/g, '').trim().slice(0, MAX_LEN)
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  hits.push(now)
  rateLimitStore.set(ip, hits)
  return hits.length > RATE_LIMIT_MAX
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ success: false, error: 'Too many requests. Please try again in a minute.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 })
  }

  // Allow-list every incoming field -- reject anything not on the list,
  // never pass through arbitrary attacker-supplied keys.
  const clean: Record<string, string> = {}
  for (const key of ALLOWED_FIELDS) {
    if (key in body) clean[key] = clamp(body[key])
  }

  if (!clean.email || !isValidEmail(clean.email)) {
    return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 })
  }
  if (!clean.firstName) {
    return NextResponse.json({ success: false, error: 'First name is required.' }, { status: 400 })
  }
  // Marketing/promotional consent is never required to submit a product
  // inquiry -- only collected if explicitly checked.
  const emailConsent = body.email_consent === true
  const smsConsent = false // SMS consent is never inferred from this form; always starts unchecked/false server-side regardless of client payload.

  if (!isConfigured()) {
    // Honest, disabled state -- logged with no sensitive data, no attempt
    // to fake a success response.
    console.log('[request-access] submission received but no authorized production GHL location exists for Modern Trades CRM leads -- not sent anywhere, not sent to CORE-DEV or Arbor.')
    return NextResponse.json({
      success: false,
      disabled: true,
      error: 'This form is not yet connected to a live system. Please reach out through the SubZeroMetrix contact form instead.',
    }, { status: 503 })
  }

  // --- Live path (only reachable once isConfigured() is true) ---
  try {
    const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN!
    const locationId = process.env.GHL_LOCATION_ID!

    const contactPayload = {
      locationId,
      firstName: clean.firstName,
      lastName: clean.lastName || '',
      email: clean.email,
      phone: clean.phone || '',
      companyName: clean.companyName || '',
      city: clean.city || '',
      state: clean.state || '',
      customFields: [
        { key: CONTACT_FIELD_KEYS.originalDomain, field_value: clean.original_domain || 'moderntradescrm.com' },
        { key: CONTACT_FIELD_KEYS.originalLandingPage, field_value: clean.original_landing_page || '' },
        { key: CONTACT_FIELD_KEYS.sourceTool, field_value: clean.source_tool || 'request-access-form' },
        { key: CONTACT_FIELD_KEYS.firstContentTopic, field_value: clean.first_content_topic || '' },
        { key: CONTACT_FIELD_KEYS.trade, field_value: clean.trade || '' },
        { key: CONTACT_FIELD_KEYS.county, field_value: '' },
        { key: CONTACT_FIELD_KEYS.customerType, field_value: 'crm-prospect' },
        { key: CONTACT_FIELD_KEYS.utmSource, field_value: clean.utm_source || '' },
        { key: CONTACT_FIELD_KEYS.utmMedium, field_value: clean.utm_medium || '' },
        { key: CONTACT_FIELD_KEYS.utmCampaign, field_value: clean.utm_campaign || '' },
        { key: CONTACT_FIELD_KEYS.utmContent, field_value: clean.utm_content || '' },
        { key: CONTACT_FIELD_KEYS.utmTerm, field_value: clean.utm_term || '' },
        { key: CONTACT_FIELD_KEYS.emailConsentStatus, field_value: emailConsent ? 'Subscribed' : 'Unknown' },
        { key: CONTACT_FIELD_KEYS.emailConsentSource, field_value: 'request-access-form' },
        { key: CONTACT_FIELD_KEYS.emailConsentTimestamp, field_value: new Date().toISOString() },
        { key: CONTACT_FIELD_KEYS.smsConsentStatus, field_value: smsConsent ? 'Express' : 'Unknown' },
        { key: CONTACT_FIELD_KEYS.crmPlanInterest, field_value: ['Yes'] },
      ],
    }

    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    })

    if (!contactRes.ok) {
      console.log(`[request-access] contact upsert failed, status ${contactRes.status}`)
      return NextResponse.json({ success: false, error: 'Submission could not be processed. Please try again or contact us directly.' }, { status: 502 })
    }

    const contactData = await contactRes.json()
    const contactId = contactData?.contact?.id

    if (contactId) {
      const opportunityPayload = {
        pipelineId: process.env.GHL_REVENUE_PIPELINE_ID,
        pipelineStageId: process.env.GHL_REVENUE_PIPELINE_NEW_LEAD_STAGE_ID,
        locationId,
        contactId,
        name: `${clean.firstName} ${clean.lastName || ''} -- Modern Trades CRM inquiry`.trim(),
        status: 'open',
        customFields: [
          { key: OPPORTUNITY_FIELD_KEYS.opportunitySource, field_value: 'moderntradescrm.com request-access form' },
          { key: OPPORTUNITY_FIELD_KEYS.productOrServiceInterest, field_value: 'Modern Trades CRM' },
          { key: OPPORTUNITY_FIELD_KEYS.originalLeadSource, field_value: clean.original_domain || 'moderntradescrm.com' },
          { key: OPPORTUNITY_FIELD_KEYS.primaryProblem, field_value: clean.primaryProblem || '' },
          { key: OPPORTUNITY_FIELD_KEYS.attributionSummary, field_value: `source_tool=${clean.source_tool || ''}; utm_source=${clean.utm_source || ''}` },
        ],
        // Deliberately no monetary value assigned per instructions.
      }

      const oppRes = await fetch('https://services.leadconnectorhq.com/opportunities/upsert', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(opportunityPayload),
      })
      if (!oppRes.ok) {
        console.log(`[request-access] opportunity upsert failed, status ${oppRes.status} -- contact was still saved`)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    console.log('[request-access] unexpected error during submission')
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again or contact us directly.' }, { status: 500 })
  }
}
