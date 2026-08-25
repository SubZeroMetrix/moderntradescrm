import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moderntradescrm.com'
  const now = new Date().toISOString()
  const staticRoutes = [
    '', '/capabilities', '/revenue-recovery', '/for-hvac', '/for-plumbing', '/for-electrical', '/for-roofing',
    '/security', '/implementation', '/support', '/request-access', '/about', '/contact', '/privacy', '/terms',
  ]
  const highPriority = ['/capabilities', '/revenue-recovery', '/for-hvac', '/for-plumbing', '/for-electrical', '/for-roofing']

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : highPriority.includes(route) ? 0.9 : 0.5,
  }))
}
