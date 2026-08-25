import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moderntradescrm.com'
  const now = new Date().toISOString()
  const staticRoutes = ['', '/capabilities', '/about', '/contact', '/privacy', '/terms']

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route === '/capabilities' ? 0.9 : 0.5,
  }))
}
