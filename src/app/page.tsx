import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM -- Contractor Lead & Sales System',
  description: 'A contractor lead, pipeline, and scheduling system by The Modern Trades Mentor. Verified capabilities only, no invented features.',
})

const VERIFIED = [
  { label: 'Contact & Lead Records', status: 'Verified' },
  { label: 'Sales Pipeline', status: 'Verified' },
  { label: 'Appointment Scheduling', status: 'Verified' },
  { label: 'Search & Organization', status: 'Verified' },
]

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

      <section className="relative overflow-hidden bg-gradient-navy dark-section py-24">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="section-container relative grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
          <div>
            <p className="text-label text-brand-cyan mb-4">Built by The Modern Trades Mentor</p>
            <h1 className="text-display text-white mb-6">One Place for Leads, Pipeline, and Scheduling</h1>
            <p className="text-body-lg mb-10 max-w-xl">
              Modern Trades CRM is early -- built by a working contractor consultant, not a large software company.
              This site describes exactly what&apos;s verified working today, nothing more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/capabilities" className="btn-primary">See What&apos;s Verified Working</Link>
              <Link href="/contact?interest=demo" className="btn-outline-visible !text-white !border-white/40">Request Info</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-electric/20 blur-3xl" />
            <Image
              src="/brand/modern-trades-crm-mark.png"
              alt="Modern Trades CRM mark"
              width={420}
              height={420}
              className="relative w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-brand-navy-light border-y border-white/10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {VERIFIED.map((v) => (
              <div key={v.label} className="bg-brand-navy px-4 py-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-1.5">{v.status}</p>
                <p className="text-sm text-gray-300">{v.label}</p>
              </div>
            ))}
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
