import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM -- Contractor Revenue Capture & Customer Growth',
  description: 'Respond faster, follow up consistently, and recover opportunities that would otherwise be forgotten. Use it on its own, or alongside your existing field-service platform. Verified capabilities only.',
})

const PILLARS = [
  { n: '01', title: 'Revenue Capture', body: 'Leads are missed or handled inconsistently -- a shared pipeline and contact record so nothing falls through by accident.' },
  { n: '02', title: 'Revenue Recovery', body: 'Estimates and old opportunities get forgotten -- the field and pipeline structure exist today to track and re-engage them.' },
  { n: '03', title: 'Customer Growth', body: 'Too little repeat work, reviews, and referrals -- past-customer records persist and are searchable, ready for outreach.' },
  { n: '04', title: 'AI Front Desk', body: 'Calls and messages after hours or mid-job -- not yet built. We will not sell this until it is tested, not just claimed.', future: true },
  { n: '05', title: 'Owner Visibility', body: 'Seeing what is stuck vs. working -- reporting is planned, not live yet.', future: true },
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
            <p className="text-label text-brand-cyan mb-4">Contractor Revenue Capture CRM</p>
            <h1 className="text-display text-white mb-6">Respond Faster. Follow Up Consistently. Recover More Opportunities.</h1>
            <p className="text-body-lg mb-10 max-w-xl">
              Modern Trades CRM helps contractors manage leads, customer conversations, estimate follow-up,
              reactivation, reviews, and referrals. Use it as your primary customer-growth CRM, or alongside the
              field-service software that already runs your jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn-primary">Start Setup -- Plans From $99/month</Link>
              <Link href="/pricing" className="btn-outline-visible !text-white !border-white/40">Compare Plans</Link>
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

      <section className="py-20">
        <div className="section-container max-w-5xl">
          <h2 className="text-headline text-gray-900 mb-3 text-center">The Five Problems Contractors Actually Have</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Not &quot;another CRM.&quot; Five specific revenue leaks -- built and labeled honestly, not marketed
            ahead of what exists.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.n} className={`card-panel ${p.future ? 'opacity-70' : ''}`}>
                <p className="text-xs font-semibold text-brand-electric mb-3">{p.n}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}{p.future && <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Planned</span>}</h3>
                <p className="text-sm text-gray-500">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/capabilities" className="btn-secondary">See the Full Capability Matrix</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light-alt">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">Works Alongside What You Already Use</h2>
          <p className="text-body-lg mb-8">
            Modern Trades CRM is not trying to replace your dispatch, job-costing, or accounting software. It
            handles the lead, follow-up, and customer-growth side -- on its own, or next to a platform like
            Jobber, Housecall Pro, or ServiceTitan. TMT consulting is optional and not required to use it.
          </p>
          <Link href="/pricing" className="btn-primary">See Pricing</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">An Honest Starting Point</h2>
          <p className="text-body-lg mb-8">
            Modern Trades CRM is under active development by The Modern Trades Mentor, a SubZeroMetrix LLC
            affiliate. Starting a setup request does not mean automated billing has begun -- we confirm your plan,
            usage charges, and activation requirements before anything is charged.
          </p>
          <Link href="/start" className="text-brand-electric underline">Start Setup</Link>
        </div>
      </section>
    </div>
  )
}
