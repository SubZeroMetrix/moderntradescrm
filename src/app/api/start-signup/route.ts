import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// ---------------------------------------------------------------------------
// /start signup intake. No production GHL destination exists for Modern
// Trades CRM leads yet (see /api/request-access for that blocker, unchanged
// by this route). Per explicit owner instruction, this route reuses the
// ALREADY-LIVE, ALREADY-VERIFIED production intake path -- subzerometrix.com's
// real /api/contact endpoint, which persists to Supabase (confirmed live via
// a direct test POST, 2026-08-25, HTTP 200 {success:true}).
//
// This is a server-to-server call (Node fetch, not a browser request), so it
// is not subject to browser CORS restrictions and requires no new credentials
// or token. Structured fields are serialized into subject/message since that
// endpoint's schema is only {name, email, subject, message}.
//
// Honest limitation, recorded not hidden: the downstream endpoint exposes no
// read/query API, so true cross-session deduplication by email/phone against
// EXISTING records is not possible from here. This route only prevents rapid
// duplicate clicks within its own rate-limit window.
// ---------------------------------------------------------------------------

const VALID_PLANS = ['contractor-crm', 'revenue-recovery', 'ai-front-desk'] as const
const PLAN_LABELS: Record<string, string> = {
  'contractor-crm': 'Contractor CRM ($99/mo)',
  'revenue-recovery': 'Revenue Recovery ($199/mo)',
  'ai-front-desk': 'AI Front Desk ($299/mo)',
}

const ALLOWED_FIELDS = [
  'firstName', 'lastName', 'email', 'phone', 'companyName', 'trade',
  'teamSize', 'currentSoftware', 'primaryNeed', 'plan', 'state',
  'original_domain', 'original_landing_page', 'source_tool',
  'utm_source', 'utm_medium', 'utm_campaign',
  'email_consent', 'sms_consent',
] as const

const MAX_LEN = 300
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, number[]>()
const recentSubmissions = new Map<string, number>() // email -> timestamp, best-effort short-window dedupe only

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

  const clean: Record<string, string> = {}
  for (const key of ALLOWED_FIELDS) {
    if (key in body) clean[key] = clamp(body[key])
  }

  if (!clean.email || !isValidEmail(clean.email)) {
    return NextResponse.json({ success: false, error: 'A valid work email is required.' }, { status: 400 })
  }
  if (!clean.firstName) {
    return NextResponse.json({ success: false, error: 'First name is required.' }, { status: 400 })
  }
  const plan = VALID_PLANS.includes(clean.plan as typeof VALID_PLANS[number]) ? clean.plan : 'contractor-crm'

  // Best-effort short-window dedupe (not a substitute for real cross-session
  // dedup, which the downstream endpoint doesn't support -- see file header).
  const dedupeKey = clean.email.toLowerCase()
  const lastSeen = recentSubmissions.get(dedupeKey)
  if (lastSeen && Date.now() - lastSeen < 5 * 60_000) {
    return NextResponse.json({ success: true, note: 'Already received -- no need to resubmit.' })
  }

  const emailConsent = body.email_consent === true
  const smsConsent = false // Never inferred; server-side default always false regardless of client payload.

  const structuredSummary = [
    `PRODUCT: Modern Trades CRM signup request`,
    `Selected plan: ${PLAN_LABELS[plan] || plan}`,
    `Company: ${clean.companyName || 'not given'}`,
    `Trade: ${clean.trade || 'not given'}`,
    `Team size: ${clean.teamSize || 'not given'}`,
    `Current software: ${clean.currentSoftware || 'not given'}`,
    `Primary need: ${clean.primaryNeed || 'not given'}`,
    `State: ${clean.state || 'not given'}`,
    `Phone: ${clean.phone || 'not given'}`,
    `Email marketing consent: ${emailConsent ? 'yes' : 'no'}`,
    `SMS consent: ${smsConsent ? 'yes' : 'no'} (never inferred; always starts false)`,
    `original_domain: ${clean.original_domain || 'moderntradescrm.com'}`,
    `original_landing_page: ${clean.original_landing_page || ''}`,
    `source_tool: ${clean.source_tool || 'start-signup-form'}`,
    `utm_source: ${clean.utm_source || ''}`,
    `utm_medium: ${clean.utm_medium || ''}`,
    `utm_campaign: ${clean.utm_campaign || ''}`,
  ].join('\n')

  try {
    const res = await fetch('https://www.subzerometrix.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${clean.firstName} ${clean.lastName || ''}`.trim(),
        email: clean.email,
        subject: `Modern Trades CRM signup -- ${PLAN_LABELS[plan] || plan}`,
        message: structuredSummary,
      }),
    })

    if (!res.ok) {
      console.log(`[start-signup] downstream intake failed, status ${res.status}`)
      return NextResponse.json({ success: false, error: 'Submission could not be processed. Please try again or contact us directly.' }, { status: 502 })
    }

    recentSubmissions.set(dedupeKey, Date.now())
    return NextResponse.json({ success: true })
  } catch {
    console.log('[start-signup] unexpected error during submission')
    return NextResponse.json({ success: false, error: 'Something went wrong. Please try again or contact us directly.' }, { status: 500 })
  }
}
