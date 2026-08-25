import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Modern Trades CRM -- Contractor Lead & Sales System',
    description: 'A contractor lead, pipeline, and scheduling system by The Modern Trades Mentor. Verified capabilities only, no invented features.',
  }),
  other: { 'msvalidate.01': 'ED3E0E42CACAB84B496D06CE30344926' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
