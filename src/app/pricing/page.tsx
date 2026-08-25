import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Pricing',
  description: 'Modern Trades CRM pricing: Contractor CRM $99/mo, Revenue Recovery $199/mo, AI Front Desk $299/mo. Phone, messaging, and AI usage disclosed separately.',
  path: '/pricing',
})

const PLANS = [
  {
    name: 'Contractor CRM',
    slug: 'contractor-crm',
    price: 99,
    tagline: 'Capture and organize contractor leads and customer communication.',
    features: [
      'Contact and company records',
      'Contractor sales pipeline',
      'Lead-source attribution',
      'Unified customer conversation history',
      'Web lead capture',
      'Appointment calendar',
      'Email follow-up',
      'Tasks and owner assignments',
      'Basic opportunity reporting',
      'Mobile access (via the underlying platform)',
    ],
  },
  {
    name: 'Revenue Recovery',
    slug: 'revenue-recovery',
    price: 199,
    tagline: 'Everything in Contractor CRM, plus recovering what would otherwise get forgotten.',
    highlighted: true,
    features: [
      'Everything in Contractor CRM',
      'Estimate follow-up workflows',
      'Missed-opportunity recovery',
      'Dormant-lead reactivation',
      'Past-customer reactivation',
      'Review-request workflows',
      'Referral-request workflows',
      'Advanced pipeline automation',
      'Revenue Recovery pipeline',
      'Customer Growth pipeline',
      'Owner reporting dashboard',
    ],
  },
  {
    name: 'AI Front Desk',
    slug: 'ai-front-desk',
    price: 299,
    tagline: 'Everything in Revenue Recovery, plus AI call and message handling.',
    features: [
      'Everything in Revenue Recovery',
      'Voice AI',
      'Conversation AI',
      'After-hours inquiry handling',
      'Lead qualification',
      'Appointment booking',
      'Human escalation',
      'Call summaries',
      'AI-assisted review responses',
      'AI-assisted customer follow-up',
    ],
    future: true,
  },
]

export default function PricingPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Pricing', url: '/pricing' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Pricing"
        title="Straightforward Plans"
        description="Three plans, base price shown. No setup fee, discount, or guarantee is advertised because none is active yet."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]}
      />
      <div className="section-container max-w-6xl py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`card-panel flex flex-col ${p.highlighted ? 'border-brand-electric border-2 relative' : ''}`}>
              {p.highlighted && <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-electric text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Most Common Starting Point</p>}
              <h2 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h2>
              {p.future && <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">Not yet live -- see note below</p>}
              <p className="text-3xl font-extrabold text-gray-900 mb-1">${p.price}<span className="text-base font-normal text-gray-500">/month</span></p>
              <p className="text-sm text-gray-500 mb-6">{p.tagline}</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-600 shrink-0">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/start?plan=${p.slug}`} className={p.highlighted ? 'btn-primary text-center' : 'btn-secondary text-center'}>
                Start Setup
              </Link>
            </div>
          ))}
        </div>

        <div className="card-panel bg-gray-50 mt-10 text-sm text-gray-600">
          <p>
            Phone numbers, calls, SMS/MMS, email, and premium AI usage may carry separate usage charges. Applicable
            charges are disclosed before activation. Modern Trades CRM does not require a consulting engagement.
            Optional implementation services are available separately through{' '}
            <a href="https://www.themoderntradesmentor.com" className="text-brand-electric underline">The Modern Trades Mentor</a>, a SubZeroMetrix LLC affiliate.
          </p>
        </div>

        <div className="card-panel bg-amber-50 border-amber-300 mt-6 text-sm text-amber-900">
          <p>
            <strong>AI Front Desk (Voice AI, Conversation AI, and related features)</strong> is not yet live --
            those capabilities have not been configured or tested end-to-end. If you select this plan, you&apos;ll
            be started on Revenue Recovery today with AI Front Desk features added once they&apos;re verified
            working, not before. See the <Link href="/capabilities" className="underline">capabilities matrix</Link> for
            exactly what&apos;s live right now.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-2">Not sure which plan fits? Talk to us before choosing.</p>
          <Link href="/request-access" className="text-brand-electric underline">Request Access instead</Link>
        </div>
      </div>
    </div>
  )
}
