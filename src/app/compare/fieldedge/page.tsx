import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs FieldEdge',
  description: 'An honest comparison: FieldEdge is established field-service software with deep QuickBooks integration, sold by quote; Modern Trades CRM is a lead-response and customer-growth layer with published pricing.',
  path: '/compare/fieldedge',
})

export default function CompareFieldEdgePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs FieldEdge', url: '/compare/fieldedge' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs FieldEdge', description: 'Sourced comparison of FieldEdge and Modern Trades CRM.', path: '/compare/fieldedge', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs FieldEdge" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs FieldEdge', href: '/compare/fieldedge' }]} />
      <ComparisonBody
        competitorName="FieldEdge"
        directAnswer="FieldEdge is established field-service management software, long associated with HVAC, plumbing, and electrical contractors, and known particularly for deep QuickBooks integration and service-agreement management. Modern Trades CRM is an earlier-stage lead-response and customer-growth layer with no dispatch, invoicing, or accounting side. If your pain is office-to-field-to-accounting flow, FieldEdge addresses a problem we do not."
        competitorIntendedCustomer="Established HVAC, plumbing, and electrical contractors that need dispatch, service agreements, technician mobile workflows, and tight accounting integration -- typically with an office team already in place."
        mtcrmIntendedCustomer="Small contractor teams whose gap is lead response, estimate follow-up, and customer reactivation -- either as a first CRM, or alongside an existing operational platform."
        rows={[
          { capability: 'Published pricing', mtcrm: '$99 / $199 / $299 per month base', competitor: 'Not published -- quote-based. UNKNOWN until you request a quote; we will not repeat third-party estimates' },
          { capability: 'QuickBooks integration', mtcrm: 'Not part of this product', competitor: 'A primary, long-standing selling point of the product' },
          { capability: 'Dispatch and technician management', mtcrm: 'Not part of this product', competitor: 'Core capability' },
          { capability: 'Service agreements / maintenance contracts', mtcrm: 'Planned -- not built', competitor: 'Established capability for the trades it serves' },
          { capability: 'Invoicing and payments', mtcrm: 'Not part of this product', competitor: 'Core capability' },
          { capability: 'Technician mobile app', mtcrm: 'Mobile access via the underlying platform; no field-technician workflow', competitor: 'Core capability' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included' },
          { capability: 'Sales pipeline for estimates', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Included; depth not itemized in a citable public source -- UNKNOWN' },
          { capability: 'Missed-call recovery / text-back', mtcrm: 'Planned -- not built', competitor: 'UNKNOWN from public sources' },
          { capability: 'Estimate follow-up automation', mtcrm: 'Prepared -- won/lost field exists, no automation triggers yet', competitor: 'UNKNOWN from public sources' },
          { capability: 'Customer reactivation campaigns', mtcrm: 'Planned -- records exist, no automated outreach yet', competitor: 'UNKNOWN from public sources' },
          { capability: 'AI capabilities', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: 'UNKNOWN from public sources' },
        ]}
        whenCompetitorFits={[
          'You need tight QuickBooks integration -- this is FieldEdge\'s best-known strength and we have nothing comparable.',
          'You manage service agreements and maintenance contracts as a core part of the business.',
          'You need technicians working jobs in a mobile field app.',
          'You have an office team and want established, mature software.',
        ]}
        whenMtcrmFits={[
          'Your field and accounting workflow is already handled and the leak is in lead follow-up.',
          'You want published pricing rather than a sales-call quote.',
          'You are a small team where full field-service software is more than you need.',
        ]}
        pricingNote="FieldEdge does not publish plan pricing; it is quote-based. Recorded as UNKNOWN rather than estimated. Our published base pricing is $99/$199/$299 per month, but note that a lower price is not a like-for-like comparison -- FieldEdge includes dispatch, invoicing, and accounting integration that we do not offer at all."
        limitations="FieldEdge does not publish pricing or a public feature-by-tier matrix, so most competitor rows are honestly marked UNKNOWN rather than guessed. We have not tested FieldEdge. Characterizations of its strengths reflect its established market positioning rather than hands-on verification, and should be confirmed with the vendor directly."
        sources={[
          { label: 'FieldEdge official site', url: 'https://fieldedge.com/' },
          { label: 'Capterra field-service management software category (category capability baseline)', url: 'https://www.capterra.com/field-service-management-software/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
