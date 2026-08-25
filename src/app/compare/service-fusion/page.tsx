import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs Service Fusion',
  description: 'An honest comparison: Service Fusion is a full field-service platform with unlimited-user pricing starting at $208/mo; Modern Trades CRM is a lead-response and customer-growth layer starting at $99/mo. Sourced to Service Fusion\'s own pricing page.',
  path: '/compare/service-fusion',
})

export default function CompareServiceFusionPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs Service Fusion', url: '/compare/service-fusion' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs Service Fusion', description: 'Sourced comparison of Service Fusion and Modern Trades CRM.', path: '/compare/service-fusion', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs Service Fusion" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs Service Fusion', href: '/compare/service-fusion' }]} />
      <ComparisonBody
        competitorName="Service Fusion"
        directAnswer="Service Fusion is a full field-service management platform sold with unlimited users on every plan -- which makes it structurally attractive to larger teams. Modern Trades CRM is a narrower, earlier-stage lead-response and customer-growth layer. The honest headline for a buyer comparing on price: Service Fusion's entry plan is roughly double our entry plan, but it includes unlimited users and job-management functionality we simply do not have."
        competitorIntendedCustomer="Field-service businesses -- often with larger teams -- that want scheduling, dispatch, estimates, invoicing, and customer management in one platform, with unlimited users included rather than priced per seat."
        mtcrmIntendedCustomer="Contractors whose specific gap is lead response, estimate follow-up, and customer reactivation -- either as a first CRM, or alongside an existing operational platform."
        rows={[
          { capability: 'Published pricing', mtcrm: '$99 / $199 / $299 per month base', competitor: 'Starter $208/mo, Plus $325/mo, Pro $533/mo billed annually; $245 / $382 / $627 billed monthly (retrieved 2026-08-25)' },
          { capability: 'User limits', mtcrm: 'Not published per-seat; contact us for team-size specifics -- UNKNOWN as a published policy', competitor: 'Unlimited users listed on all plans' },
          { capability: 'Field-service job management', mtcrm: 'Not part of this product', competitor: 'Core purpose of the platform' },
          { capability: 'Dispatch', mtcrm: 'Not part of this product', competitor: 'Core capability; specific tier breakdown not itemized in our source -- UNKNOWN' },
          { capability: 'Estimates and invoicing', mtcrm: 'Not part of this product', competitor: 'Core capability' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included' },
          { capability: 'Sales pipeline for estimates', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Not itemized by that name in our source -- UNKNOWN' },
          { capability: 'Scheduling', mtcrm: 'Available -- appointment booking, reschedule, cancel, assignment', competitor: 'Core capability' },
          { capability: 'Missed-call recovery / text-back', mtcrm: 'Planned -- not built', competitor: 'Not itemized in our source -- UNKNOWN' },
          { capability: 'Estimate follow-up automation', mtcrm: 'Prepared -- won/lost field exists, no automation triggers on it yet', competitor: 'Not itemized in our source -- UNKNOWN' },
          { capability: 'Customer reactivation campaigns', mtcrm: 'Planned -- records exist, no automated outreach yet', competitor: 'Not itemized in our source -- UNKNOWN' },
          { capability: 'AI capabilities', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: 'Not itemized in our source -- UNKNOWN' },
        ]}
        whenCompetitorFits={[
          'You have a larger team and unlimited-user pricing works out cheaper per head.',
          'You need dispatch, estimating, and invoicing in one operational platform.',
          'You want an established field-service product rather than an early-stage one.',
        ]}
        whenMtcrmFits={[
          'You are a small team where a $208/mo entry point for unlimited users is more platform than you need.',
          'Your operational software is already handled and the leak is in follow-up.',
          'You want a published statement of exactly what is and is not built.',
        ]}
        pricingNote="Service Fusion's published pricing (retrieved 2026-08-25): Starter $208/mo, Plus $325/mo, Pro $533/mo when billed annually; $245/mo, $382/mo, and $627/mo billed monthly, with a stated 15% annual discount. All plans list unlimited users. Compare on total cost for your actual team size, not on entry price alone."
        limitations="Based on Service Fusion's public pricing page as retrieved 2026-08-25, without hands-on testing. Their pricing page publishes plan prices but does not itemize CRM, follow-up, or marketing-automation features by tier, so several rows are honestly marked UNKNOWN rather than guessed."
        sources={[
          { label: 'Service Fusion pricing page (retrieved 2026-08-25)', url: 'https://www.servicefusion.com/pricing/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
