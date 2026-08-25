import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs Contractor Foreman',
  description: 'An honest comparison: Contractor Foreman is construction project-management software priced by user count; Modern Trades CRM is a lead-response and customer-growth layer for service contractors. Sourced to Contractor Foreman\'s own pricing page.',
  path: '/compare/contractor-foreman',
})

export default function CompareContractorForemanPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs Contractor Foreman', url: '/compare/contractor-foreman' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs Contractor Foreman', description: 'Sourced comparison of Contractor Foreman and Modern Trades CRM.', path: '/compare/contractor-foreman', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs Contractor Foreman" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs Contractor Foreman', href: '/compare/contractor-foreman' }]} />
      <ComparisonBody
        competitorName="Contractor Foreman"
        directAnswer="These solve genuinely different problems and are often not alternatives at all. Contractor Foreman is construction project-management software -- built around projects, crews, documents, and job costing, and priced by number of users. Modern Trades CRM is a lead-response and customer-growth layer for service-and-repair contractors. If you run multi-week construction projects, Contractor Foreman addresses a problem we do not touch."
        competitorIntendedCustomer="Construction and specialty contractors managing projects, crews, documents, change orders, and job costs -- with pricing structured around how many users need access."
        mtcrmIntendedCustomer="Service-and-repair contractors whose gap is lead response, estimate follow-up, and customer reactivation -- typically shorter-cycle, higher-volume residential work."
        rows={[
          { capability: 'Primary problem solved', mtcrm: 'Lead response, follow-up, customer growth', competitor: 'Construction project management, job costing, crew/document coordination' },
          { capability: 'Pricing model', mtcrm: 'Flat base price per plan: $99 / $199 / $299 per month, not per-user', competitor: 'Priced by user count: Basic (1 user) through Unlimited (unlimited users)' },
          { capability: 'Published pricing', mtcrm: '$99 / $199 / $299 per month base', competitor: 'Annual: Basic $49/mo, Standard $105/mo, Plus $166/mo, Pro $221/mo, Unlimited $332/mo (retrieved 2026-08-25)' },
          { capability: 'Free trial', mtcrm: 'None -- we do not advertise a trial because none is active', competitor: '30-day free trial listed on all plans' },
          { capability: 'Money-back guarantee', mtcrm: 'None advertised', competitor: '100-day money-back guarantee listed on all plans' },
          { capability: 'Project management', mtcrm: 'Not part of this product', competitor: 'Core purpose of the product' },
          { capability: 'Job costing', mtcrm: 'Not part of this product', competitor: 'Core capability -- UNKNOWN which specific tiers, not itemized in our source' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included; specific CRM depth not itemized on the pricing page -- UNKNOWN' },
          { capability: 'Sales pipeline for estimates', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Not itemized by that name in our source -- UNKNOWN' },
          { capability: 'Missed-call recovery / text-back', mtcrm: 'Planned -- not built', competitor: 'Not listed in our source -- UNKNOWN' },
          { capability: 'Customer reactivation campaigns', mtcrm: 'Planned -- records exist, no automated outreach yet', competitor: 'Not listed in our source -- UNKNOWN' },
          { capability: 'Review / referral workflows', mtcrm: 'Prepared -- engine exists, completed-job trigger not built', competitor: 'Not listed in our source -- UNKNOWN' },
        ]}
        whenCompetitorFits={[
          'You run construction projects with schedules, submittals, change orders, and job costing.',
          'You need many users on one system and prefer user-count pricing.',
          'You want to try before you buy -- they list a 30-day trial and a 100-day money-back guarantee, and we offer neither.',
        ]}
        whenMtcrmFits={[
          'Your work is service-and-repair volume, not project management.',
          'Your leak is inbound lead response and estimate follow-up, not project coordination.',
          'You want flat pricing that does not scale with headcount.',
        ]}
        pricingNote="Contractor Foreman's published annual-plan pricing (retrieved 2026-08-25): Basic $49/mo, Standard $105/mo, Plus $166/mo, Pro $221/mo, Unlimited $332/mo, with quarterly rates listed higher. Their pricing scales with user count; ours does not. Neither model is inherently better -- it depends on team size."
        limitations="Based on Contractor Foreman's public pricing page as retrieved 2026-08-25, without hands-on testing. Their pricing page lists plans by user count and price but does not itemize CRM, follow-up, or marketing-automation features by tier, so several rows above are honestly marked UNKNOWN rather than guessed. These products often are not direct alternatives."
        sources={[
          { label: 'Contractor Foreman pricing page (retrieved 2026-08-25)', url: 'https://www.contractorforeman.com/pricing/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
