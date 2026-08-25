import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Modern Trades CRM',
    short_name: 'Modern Trades CRM',
    description: 'A contractor lead, sales, and scheduling system by The Modern Trades Mentor.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      { src: '/brand/modern-trades-crm-mark.png', sizes: 'any', type: 'image/png' },
    ],
  }
}
