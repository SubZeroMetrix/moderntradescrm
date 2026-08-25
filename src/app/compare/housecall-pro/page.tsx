import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs Housecall Pro',
  description: 'An honest comparison: Housecall Pro is a full field-service platform with dispatch, payments, and route optimization; Modern Trades CRM is a lead-response and customer-growth layer. Sourced to Housecall Pro\'s own pricing page.',
  path: '/compare/housecall-pro',
})

export default function CompareHousecallProPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs Housecall Pro', url: '/compare/housecall-pro' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs Housecall Pro', description: 'Sourced comparison of Housecall Pro and Modern Trades CRM.', path: '/compare/housecall-pro', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs Housecall Pro" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs Housecall Pro', href: '/compare/housecall-pro' }]} />
      <ComparisonBody
        competitorName="Housecall Pro"
        directAnswer="Housecall Pro is a full field-service operating platform -- dispatch, route optimization, payments, GPS tracking, recurring service plans. Modern Trades CRM is a much narrower, earlier-stage lead-response and customer-growth layer. If you need to dispatch technicians and collect payment, Housecall Pro does that today and we do not."
        competitorIntendedCustomer="Home-service businesses that want scheduling, dispatch, invoicing, payments, and customer communication in one platform. Housecall Pro publicly states it serves 200,000+ professionals."
        mtcrmIntendedCustomer="Contractors whose gap is lead response, estimate follow-up, and customer reactivation -- either as a first CRM, or as a layer alongside an operational platform."
        rows={[
          { capability: 'Scheduling and dispatch', mtcrm: 'Appointment scheduling available; technician dispatch and routing are not part of this product', competitor: 'Core feature from the Basic plan' },
          { capability: 'Route optimization', mtcrm: 'Not part of this product', competitor: 'Listed on Essentials and Max' },
          { capability: 'Invoicing and payments', mtcrm: 'Not part of this product', competitor: 'Included from Basic; card processing included in all plans' },
          { capability: 'Online booking', mtcrm: 'Web lead capture available; 24/7 self-service booking not independently verified', competitor: 'Listed from Basic -- book and pay online 24/7' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included' },
          { capability: 'Sales pipeline', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Not listed by that name on the pricing page' },
          { capability: 'Estimates / quotes / proposals', mtcrm: 'Not part of this product', competitor: 'Quotes and proposals from Basic; sales proposal tool on Max' },
          { capability: 'Review management', mtcrm: 'Prepared -- review-request engine exists in code, completed-job trigger not built', competitor: 'Review management listed from the Basic plan' },
          { capability: 'Recurring service plans', mtcrm: 'Planned -- not built', competitor: 'Listed on the Max plan' },
          { capability: 'AI call handling (CSR AI)', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: 'Housecall Pro markets a CSR AI product; plan inclusion not stated on the pricing page -- UNKNOWN' },
          { capability: 'Employee GPS tracking', mtcrm: 'Not part of this product', competitor: 'Listed on Essentials and Max' },
          { capability: 'QuickBooks integration', mtcrm: 'Not part of this product', competitor: 'QuickBooks Online integration on Essentials and Max' },
          { capability: 'Open API access', mtcrm: 'UNKNOWN -- not documented for this product', competitor: 'Listed on the Max plan' },
          { capability: 'Reporting', mtcrm: 'Planned -- no reporting layer exists yet', competitor: 'Not itemized by tier on the pricing page -- UNKNOWN' },
        ]}
        whenCompetitorFits={[
          'You dispatch technicians and need routing, GPS, or capacity-aware scheduling.',
          'You need to invoice and take payment inside the same system.',
          'You sell recurring service plans and want them managed natively.',
          'You want live phone and chat support, which Housecall Pro lists across all plans.',
        ]}
        whenMtcrmFits={[
          'Your dispatch and payments are already handled and the leak is in follow-up.',
          'You want lead-source attribution and pipeline visibility without replacing your operational platform.',
          'You want an explicit, published statement of what is and is not built.',
        ]}
        pricingNote="Housecall Pro's published pricing (retrieved 2026-08-25) lists Basic at $59/mo, Essentials at $149/mo, and Max at $299/mo when billed annually; monthly rates listed are $79, $189, and $329 respectively. Verify current pricing on their own page before deciding."
        limitations="Based on Housecall Pro's public pricing page as retrieved 2026-08-25, without hands-on product testing. Their CSR AI product is marketed separately from the pricing page, so which plans include it is UNKNOWN to us -- we have not assumed an answer. Feature availability by tier can change."
        sources={[
          { label: 'Housecall Pro pricing page (retrieved 2026-08-25)', url: 'https://www.housecallpro.com/pricing/' },
          { label: 'Housecall Pro CSR AI product page', url: 'https://www.housecallpro.com/features/ai-team/csr-ai/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
