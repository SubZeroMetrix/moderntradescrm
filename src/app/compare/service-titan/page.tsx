import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs ServiceTitan',
  description: 'An honest comparison: ServiceTitan is enterprise field-service software for larger, operationally complex contractors; Modern Trades CRM is a small-team lead-response layer. These are rarely alternatives to each other.',
  path: '/compare/service-titan',
})

export default function CompareServiceTitanPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs ServiceTitan', url: '/compare/service-titan' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs ServiceTitan', description: 'Sourced comparison of ServiceTitan and Modern Trades CRM.', path: '/compare/service-titan', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs ServiceTitan" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs ServiceTitan', href: '/compare/service-titan' }]} />
      <ComparisonBody
        competitorName="ServiceTitan"
        directAnswer="Being blunt: if you are seriously evaluating ServiceTitan, you are probably not our customer, and that is fine. ServiceTitan is enterprise field-service software built for larger, operationally complex contractors -- dispatch optimization, capacity planning, pricebooks, deep reporting. Modern Trades CRM is an early-stage lead-response layer for small teams. We would be doing you a disservice pretending these compete."
        competitorIntendedCustomer="Larger residential and commercial contractors with dedicated dispatch, CSR teams, and operational complexity that justifies enterprise software and a real implementation project. ServiceTitan reported approximately 10,800 active customers in its FY2026 results."
        mtcrmIntendedCustomer="Small contractor teams -- roughly 2-15 people, often with the owner still answering phones -- whose gap is lead response and follow-up, not dispatch optimization."
        rows={[
          { capability: 'Published pricing', mtcrm: '$99 / $199 / $299 per month base', competitor: 'Not published -- quote-based. Treat as UNKNOWN until you get a quote; industry-reported figures are not authoritative and we will not repeat them' },
          { capability: 'Target customer size', mtcrm: 'Small teams, roughly 2-15 people', competitor: 'Larger, operationally complex contractors' },
          { capability: 'Implementation', mtcrm: 'Configuration conversation; no published timeline because none is standardized yet', competitor: 'Enterprise implementation project -- specifics UNKNOWN to us, discuss with them directly' },
          { capability: 'Dispatch and capacity optimization', mtcrm: 'Not part of this product', competitor: 'Core enterprise capability' },
          { capability: 'Pricebooks', mtcrm: 'Not part of this product', competitor: 'Core capability for the trades it serves' },
          { capability: 'Job costing / payroll', mtcrm: 'Not part of this product', competitor: 'Core enterprise capability' },
          { capability: 'AI virtual agent / booking', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: 'ServiceTitan markets an AI Virtual Agent that books from real operational availability' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included as part of the platform' },
          { capability: 'Sales pipeline for estimates', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Included; depth not itemized in a public source we can cite -- UNKNOWN' },
          { capability: 'Estimate follow-up automation', mtcrm: 'Prepared -- won/lost field exists, no automation triggers yet', competitor: 'Included; specifics UNKNOWN from public sources' },
          { capability: 'Reporting', mtcrm: 'Planned -- no reporting layer exists yet', competitor: 'Deep operational reporting is a core selling point' },
        ]}
        whenCompetitorFits={[
          'You have multiple crews and a dispatch function that needs real optimization.',
          'You need pricebooks, job costing, or payroll integration.',
          'You have the budget and appetite for an enterprise implementation project.',
          'You want AI booking that is live today against real operational availability.',
          'Honestly: most contractors evaluating ServiceTitan seriously should choose ServiceTitan over us.',
        ]}
        whenMtcrmFits={[
          'You are a small team and ServiceTitan is more platform than the business can absorb.',
          'Your bottleneck is answering and following up on leads, not coordinating crews.',
          'You want flat, published, small-team pricing rather than an enterprise quote.',
        ]}
        pricingNote="ServiceTitan does not publish plan pricing; it is quote-based. We are recording that as UNKNOWN rather than repeating third-party estimates. What we can say factually is that our published base pricing is $99/$199/$299 per month, and that the two products target very different business sizes."
        limitations="ServiceTitan does not publish pricing or a public feature-by-tier matrix, so most competitor rows here are honestly marked UNKNOWN rather than filled with guesses. We have not tested ServiceTitan. Customer-count figure is from ServiceTitan's own FY2026 investor results. This comparison exists mainly to help you rule us out quickly if you need enterprise capability."
        sources={[
          { label: 'ServiceTitan FY2026 fourth-quarter and full-year results (customer count)', url: 'https://investors.servicetitan.com/news-releases/news-release-details/servicetitan-announces-fiscal-fourth-quarter-and-full-fiscal/' },
          { label: 'ServiceTitan AI Virtual Agent product page', url: 'https://www.servicetitan.com/features/pro/virtual-agent' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
