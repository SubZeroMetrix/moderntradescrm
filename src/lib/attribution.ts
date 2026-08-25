// Privacy-safe first-touch attribution. First-party only, no third-party
// trackers, no financial/operational tool inputs ever captured here.

export const ATTRIBUTION_COOKIE = 'mt_first_touch'
export const LAST_TOUCH_COOKIE = 'mt_last_touch'
const MAX_AGE_DAYS = 90
const MAX_FIELD_LEN = 200

export const SITE_DOMAIN = 'moderntradescrm.com'

export interface AttributionData {
  original_domain: string
  original_landing_page: string
  first_content_topic: string
  source_tool: string
  trade: string
  geographic_interest: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  initial_referrer: string
  consent_state: string
  captured_at: string
}

// Only these query-string keys are ever read from an incoming URL --
// anything else is ignored, never echoed, never stored.
const ALLOWED_PARAM_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'trade', 'geo', 'source_tool', 'topic', 'ref_domain',
] as const

const KNOWN_DOMAINS = ['metrixaudit.com', 'moderntradescrm.com', 'moderntradescrm.com']

function clamp(v: string | null | undefined): string {
  if (!v) return ''
  return v.replace(/[<>]/g, '').slice(0, MAX_FIELD_LEN)
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax; Secure`
}

function safeAllowedParams(search: string): Record<string, string> {
  const params = new URLSearchParams(search)
  const out: Record<string, string> = {}
  for (const key of ALLOWED_PARAM_KEYS) {
    const v = params.get(key)
    if (v) out[key] = clamp(v)
  }
  return out
}

/** Runs once per page load. Sets first-touch cookie only if not already present. Always refreshes last-touch. */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return

  const params = safeAllowedParams(window.location.search)
  const referrer = clamp(document.referrer)
  const landingPage = clamp(window.location.pathname)

  // If the visitor arrived carrying a ref_domain (from a cross-domain CTA on
  // one of our other sites) and has no existing first-touch here, credit the
  // true origin site rather than this one -- cookies are first-party/site-
  // scoped, so this is how first-touch survives a cross-domain hop.
  const incomingRefDomain = params.ref_domain && KNOWN_DOMAINS.includes(params.ref_domain) ? params.ref_domain : ''
  const hasExistingFirstTouch = !!readCookie(ATTRIBUTION_COOKIE)
  const originalDomain = !hasExistingFirstTouch && incomingRefDomain ? incomingRefDomain : SITE_DOMAIN

  const lastTouch: AttributionData = {
    original_domain: originalDomain,
    original_landing_page: landingPage,
    first_content_topic: params.topic || '',
    source_tool: params.source_tool || '',
    trade: params.trade || '',
    geographic_interest: params.geo || '',
    utm_source: params.utm_source || '',
    utm_medium: params.utm_medium || '',
    utm_campaign: params.utm_campaign || '',
    utm_content: params.utm_content || '',
    utm_term: params.utm_term || '',
    initial_referrer: referrer,
    consent_state: 'unknown',
    captured_at: new Date().toISOString(),
  }
  writeCookie(LAST_TOUCH_COOKIE, JSON.stringify(lastTouch), MAX_AGE_DAYS)

  const existing = readCookie(ATTRIBUTION_COOKIE)
  if (existing) return // never overwrite a valid first-touch value

  writeCookie(ATTRIBUTION_COOKIE, JSON.stringify(lastTouch), MAX_AGE_DAYS)
}

export function getFirstTouch(): AttributionData | null {
  const raw = readCookie(ATTRIBUTION_COOKIE)
  if (!raw) return null
  try {
    return JSON.parse(raw) as AttributionData
  } catch {
    return null
  }
}

/** Appends the stored first-touch attribution as query params to a cross-domain CTA link. Only ever targets the three known SubZeroMetrix domains -- never an arbitrary redirect. */
export function withAttribution(url: string, extra?: { source_tool?: string; topic?: string }): string {
  let target: URL
  try {
    target = new URL(url)
  } catch {
    return url
  }
  if (!KNOWN_DOMAINS.some((d) => target.hostname === d || target.hostname === `www.${d}`)) {
    return url // refuse to attach attribution data to an unknown destination
  }

  const first = getFirstTouch()
  if (first) {
    if (first.utm_source) target.searchParams.set('utm_source', first.utm_source)
    if (first.utm_medium) target.searchParams.set('utm_medium', first.utm_medium)
    if (first.utm_campaign) target.searchParams.set('utm_campaign', first.utm_campaign)
    if (first.trade) target.searchParams.set('trade', first.trade)
    if (first.geographic_interest) target.searchParams.set('geo', first.geographic_interest)
  }
  target.searchParams.set('ref_domain', SITE_DOMAIN)
  if (extra?.source_tool) target.searchParams.set('source_tool', extra.source_tool)
  if (extra?.topic) target.searchParams.set('topic', extra.topic)

  return target.toString()
}
