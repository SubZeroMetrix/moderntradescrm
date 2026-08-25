import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { StartSignupForm } from '@/components/StartSignupForm'

export const metadata = buildMetadata({
  title: 'Start Now',
  description: 'Start your Modern Trades CRM setup request. No charge is made by submitting this form -- plan, usage charges, and activation are confirmed before billing begins.',
  path: '/start',
})

const VALID_PLANS = ['contractor-crm', 'revenue-recovery', 'ai-front-desk']

export default function StartPage({ searchParams }: { searchParams: { plan?: string } }) {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Start Now', url: '/start' }])
  const plan = VALID_PLANS.includes(searchParams.plan || '') ? (searchParams.plan as string) : 'contractor-crm'

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Start Now"
        title="Start Your Setup Request"
        description="This submits a real setup request -- not automated billing. No charge is made here."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Start Now', href: '/start' }]}
      />
      <div className="section-container max-w-2xl py-16">
        <StartSignupForm defaultPlan={plan} />
      </div>
    </div>
  )
}
