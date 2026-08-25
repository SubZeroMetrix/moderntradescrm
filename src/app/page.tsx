import Link from 'next/link'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM -- Contractor Lead & Sales System',
  description: 'A contractor lead, pipeline, and scheduling system by The Modern Trades Mentor. Verified capabilities only, no invented features.',
})

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

      <section className="bg-gradient-navy dark-section py-24">
        <div className="section-container max-w-3xl text-center">
          <p className="text-label text-brand-cyan mb-4">Built by The Modern Trades Mentor</p>
          <h1 className="text-display text-white mb-6">One Place for Leads, Pipeline, and Scheduling</h1>
          <p className="text-body-lg mb-10 max-w-xl mx-auto">
            Modern Trades CRM is early -- built by a working contractor consultant, not a large software company.
            This site describes exactly what&apos;s verified working today, nothing more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/capabilities" className="btn-primary">See What&apos;s Verified Working</Link>
            <Link href="/contact?interest=demo" className="btn-outline-visible !text-white !border-white/40">Request Info</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">An Honest Starting Point</h2>
          <p className="text-body-lg mb-8">
            Modern Trades CRM is under active development by The Modern Trades Mentor, a SubZeroMetrix LLC
            affiliate. Rather than list a feature set we haven&apos;t built yet, this site lists what has actually
            been verified working -- and is explicit about what hasn&apos;t.
          </p>
          <Link href="/capabilities" className="btn-secondary">Read the Capabilities Page</Link>
        </div>
      </section>
    </div>
  )
}
