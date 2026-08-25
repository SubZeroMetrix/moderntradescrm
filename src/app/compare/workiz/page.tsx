import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs Workiz',
  description: 'An honest comparison: Workiz is a field-service platform with AI tools and automations; Modern Trades CRM is a lead-response and customer-growth layer. Workiz does not publish pricing -- recorded as UNKNOWN.',
  path: '/compare/workiz',
})

export default function CompareWorkizPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs Workiz', url: '/compare/workiz' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs Workiz', description: 'Sourced comparison of Workiz and Modern Trades CRM.', path: '/compare/workiz', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs Workiz" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs Workiz', href: '/compare/workiz' }]} />
      <ComparisonBody
        competitorName="Workiz"
        directAnswer="Workiz is a field-service management platform with built-in phone tools, AI features, and tiered automation limits. Modern Trades CRM is an earlier-stage lead-response and customer-growth layer with no job-management or invoicing side. One meaningful practical difference for buyers: Workiz does not publish prices, so you must contact them to learn cost; our base pricing is published."
        competitorIntendedCustomer="Field-service businesses wanting jobs, invoicing, phone, and AI-assisted scheduling in one platform. Workiz publicly states it serves 120,000+ professionals."
        mtcrmIntendedCustomer="Contractors whose gap is lead response, estimate follow-up, and customer reactivation -- either as a first CRM, or alongside an existing operational platform."
        rows={[
          { capability: 'Published pricing', mtcrm: 'Published: $99 / $199 / $299 per month base', competitor: 'Not published -- their pricing page shows "Request pricing" for all three tiers (retrieved 2026-08-25)' },
          { capability: 'Jobs, invoices, estimates', mtcrm: 'Not part of this product', competitor: 'Unlimited jobs, invoices, estimates, and clients listed from the Standard plan' },
          { capability: 'Automation limits', mtcrm: 'No published automation cap; most automation is not yet built', competitor: 'Explicitly tiered: 5 (Standard), 10 (Pro), 30 (Ultimate)' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Client management listed from Standard' },
          { capability: 'Sales pipeline', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Not itemized by that name on the pricing page -- UNKNOWN' },
          { capability: 'Scheduling', mtcrm: 'Available -- appointment booking, reschedule, cancel, assignment', competitor: 'Smart scheduling and dispatching listed as included in all plans' },
          { capability: 'AI lead / scheduling tools', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: '"Genius leads" and "Genius scheduling" listed from the Pro plan' },
          { capability: 'AI phone answering', mtcrm: 'Planned -- not built', competitor: 'Workiz markets Genius Answering separately; plan inclusion not stated on the pricing page -- UNKNOWN' },
          { capability: 'Online payments', mtcrm: 'Not part of this product', competitor: 'Listed from the Standard plan' },
          { capability: 'QuickBooks integration', mtcrm: 'Not part of this product', competitor: 'Listed from the Standard plan' },
          { capability: 'Inventory / equipment tracking', mtcrm: 'Not part of this product', competitor: 'Inventory management and equipment tracking listed on Ultimate' },
          { capability: 'Service plans (recurring)', mtcrm: 'Planned -- not built', competitor: 'Service plans listed on the Ultimate plan' },
          { capability: 'Open API', mtcrm: 'UNKNOWN -- not documented for this product', competitor: 'Open API listed on the Ultimate plan' },
          { capability: 'Custom reporting', mtcrm: 'Planned -- no reporting layer exists yet', competitor: 'Custom reports listed from the Pro plan' },
        ]}
        whenCompetitorFits={[
          'You need job management, invoicing, and payments in one platform.',
          'You want built-in phone tools and AI-assisted scheduling that are live today.',
          'You need inventory, equipment tracking, or franchise management.',
          'You are comfortable going through a sales conversation to learn pricing.',
        ]}
        whenMtcrmFits={[
          'You want to know the price before talking to anyone.',
          'Your job management is handled and the leak is in lead follow-up.',
          'You want an explicit published statement of what is and is not built.',
        ]}
        pricingNote="Workiz does not publish plan prices. Their pricing page (retrieved 2026-08-25) shows 'Request pricing' for Standard, Pro, and Ultimate. We are not going to estimate or repeat third-party guesses at their pricing -- treat Workiz pricing as UNKNOWN until you request a quote from them directly."
        limitations="Based on Workiz's public pricing-plans page as retrieved 2026-08-25, without hands-on testing. Because Workiz withholds pricing, no price comparison is possible and none is implied. Their Genius Answering product is marketed separately from the pricing page, so plan inclusion is UNKNOWN."
        sources={[
          { label: 'Workiz pricing plans page (retrieved 2026-08-25)', url: 'https://www.workiz.com/pricing-plans/' },
          { label: 'Workiz Genius Answering product page', url: 'https://www.workiz.com/features/genius-answering/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
