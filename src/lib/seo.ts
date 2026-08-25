import type { Metadata } from 'next'

const SITE_NAME = 'Modern Trades CRM'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moderntradescrm.com'

export function buildMetadata(opts: { title: string; description: string; path?: string; noIndex?: boolean }): Metadata {
  const url = opts.path ? `${SITE_URL}${opts.path}` : SITE_URL

  return {
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: { title: `${opts.title} | ${SITE_NAME}`, description: opts.description, url, siteName: SITE_NAME, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${opts.title} | ${SITE_NAME}`, description: opts.description },
    robots: opts.noIndex ? { index: false, follow: false } : undefined,
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Modern Trades CRM',
    legalName: 'SubZeroMetrix LLC',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/modern-trades-crm-logo.png`,
    parentOrganization: { '@type': 'Organization', name: 'SubZeroMetrix LLC' },
  }
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: `${SITE_URL}${item.url}` })),
  }
}

export function articleSchema(opts: { headline: string; description: string; path: string; dateModified?: string; reviewedByPractitioner?: boolean }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { '@type': 'Organization', name: 'SubZeroMetrix LLC' },
    publisher: { '@type': 'Organization', name: 'SubZeroMetrix LLC' },
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.reviewedByPractitioner
      ? { reviewedBy: { '@type': 'Person', name: 'Richard Fritzke', jobTitle: 'Recommissioning & Optimization Engineer; 26 years HVAC/R, facilities, and mechanical operations leadership' } }
      : {}),
  }
}
