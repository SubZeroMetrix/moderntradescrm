import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moderntradescrm.com'
  const now = new Date().toISOString()
  const staticRoutes = [
    '', '/pricing', '/start', '/capabilities', '/revenue-recovery',
    '/for-hvac', '/for-plumbing', '/for-electrical', '/for-roofing',
    '/for-tree-service', '/for-garage-door', '/for-pest-control', '/for-cleaning-businesses',
    '/compare', '/compare/jobber', '/compare/housecall-pro', '/compare/service-titan', '/compare/fieldedge',
    '/compare/service-fusion', '/compare/workiz', '/compare/contractor-foreman', '/compare/gohighlevel',
    '/security', '/implementation', '/support', '/request-access', '/ownership-disclosure', '/about', '/contact', '/privacy', '/terms',
  ]
  const highPriority = [
    '/pricing', '/start', '/capabilities', '/revenue-recovery',
    '/for-hvac', '/for-plumbing', '/for-electrical', '/for-roofing',
    '/for-tree-service', '/for-garage-door', '/for-pest-control', '/for-cleaning-businesses',
    '/compare',
  ]

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : highPriority.includes(route) ? 0.9 : 0.5,
  }))
}
