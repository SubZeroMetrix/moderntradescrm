import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { StartSignupForm } from '@/components/StartSignupForm'

export const metadata = buildMetadata({
  title: 'Start Setup',
  description: 'Send a Modern Trades CRM setup request. This does not create an account, subscription, or trial -- plan, usage charges, and activation are confirmed before anything is billed.',
  path: '/start',
})

const VALID_PLANS = ['contractor-crm', 'revenue-recovery', 'ai-front-desk']

export default function StartPage({ searchParams }: { searchParams: { plan?: string } }) {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Start Setup', url: '/start' }])
  const plan = VALID_PLANS.includes(searchParams.plan || '') ? (searchParams.plan as string) : 'contractor-crm'

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Start Setup"
        title="Start Setup -- Choose Your Plan"
        description="This sends a setup request so we can confirm your plan and what activation involves. It does not create an account, subscription, or trial, and no payment information is collected."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Start Setup', href: '/start' }]}
      />
      <div className="section-container max-w-2xl py-16">
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { slug: 'contractor-crm', name: 'Contractor CRM', price: 99 },
            { slug: 'revenue-recovery', name: 'Revenue Recovery', price: 199 },
            { slug: 'ai-front-desk', name: 'AI Front Desk', price: 299 },
          ].map((p) => (
            <div key={p.slug} className={`rounded-lg border p-3 text-center ${plan === p.slug ? 'border-brand-electric border-2 bg-surface-light-alt' : 'border-gray-200'}`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{p.name}</p>
              <p className="text-lg font-bold text-gray-900">${p.price}<span className="text-xs font-normal text-gray-500">/mo</span></p>
              {plan === p.slug && <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-electric mt-1">Selected</p>}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Base plan pricing. Phone numbers, calls, SMS/MMS, email, and premium AI usage may carry separate usage
          charges, disclosed before activation. <Link href="/pricing" className="text-brand-electric underline">Compare plans in full</Link>.
        </p>
        <StartSignupForm defaultPlan={plan} />
      </div>
    </div>
  )
}
