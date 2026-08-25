import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs Jobber',
  description: 'An honest comparison: Jobber is a full job-management platform for home-service businesses; Modern Trades CRM is a lead-response and customer-growth layer. Sourced to Jobber\'s own current pricing page.',
  path: '/compare/jobber',
})

export default function CompareJobberPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare/jobber' }, { name: 'vs Jobber', url: '/compare/jobber' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs Jobber', description: 'Sourced comparison of Jobber and Modern Trades CRM.', path: '/compare/jobber', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Comparison" title="Modern Trades CRM vs Jobber" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs Jobber', href: '/compare/jobber' }]} />
      <ComparisonBody
        competitorName="Jobber"
        directAnswer="These aren't the same category. Jobber is a mature, full job-management platform -- quoting, scheduling, invoicing, payments, job costing. Modern Trades CRM is an early-stage lead-response and customer-growth layer. If you need to run jobs end-to-end today, Jobber does substantially more. If you already have job management and your gap is follow-up and recovery, that's the narrower thing we're built for."
        competitorIntendedCustomer="Home-service businesses that want one platform to quote, schedule, invoice, and get paid. Jobber publicly states it serves 400,000+ home-service professionals."
        mtcrmIntendedCustomer="Contractors whose gap is lead response, estimate follow-up, and customer reactivation -- either as a first CRM, or alongside an operational platform that already runs their jobs."
        rows={[
          { capability: 'Quoting / estimates', mtcrm: 'Not part of this product -- pipeline tracks that an estimate exists, but does not create or send one', competitor: 'Core feature from the Core plan up, including customizable quotes with images on Grow' },
          { capability: 'Invoicing and payments', mtcrm: 'Not part of this product', competitor: 'Core feature from the Core plan up' },
          { capability: 'Scheduling', mtcrm: 'Available -- appointment booking, reschedule, cancel, assignment', competitor: 'Core feature; job scheduling and dispatch' },
          { capability: 'Contact / customer records', mtcrm: 'Available -- verified working', competitor: 'Included' },
          { capability: 'Sales pipeline', mtcrm: 'Available -- 9-stage pipeline exists and is usable', competitor: 'Pipeline lead tracking listed on the Plus plan' },
          { capability: 'Automated quote/invoice follow-up', mtcrm: 'Prepared -- won/lost field exists, no automation triggers on it yet', competitor: 'Automated quote and invoice follow-ups listed from Connect up' },
          { capability: 'Two-way SMS', mtcrm: 'UNKNOWN -- phone/SMS configuration not independently verified', competitor: 'Two-way SMS listed on the Grow plan' },
          { capability: 'Missed-call recovery / text-back', mtcrm: 'Planned -- not built', competitor: 'Not listed by that name on the pricing page; AI Receptionist is listed on Plus' },
          { capability: 'AI receptionist / call answering', mtcrm: 'Planned -- no live AI feature exists for this product', competitor: 'AI-powered Receptionist listed on the Plus plan' },
          { capability: 'Job costing', mtcrm: 'Not part of this product', competitor: 'Job costing and profitability tracking on Grow; automated job costing on Plus' },
          { capability: 'QuickBooks sync', mtcrm: 'Not part of this product', competitor: 'QuickBooks Online sync listed from Connect up' },
          { capability: 'Reporting', mtcrm: 'Planned -- no reporting layer exists yet', competitor: 'Built-in reporting from the Core plan' },
          { capability: 'Mobile access', mtcrm: 'Available via the underlying platform', competitor: 'Included' },
          { capability: 'Customer reactivation campaigns', mtcrm: 'Planned -- records exist, no automated outreach yet', competitor: 'Marketing Suite listed on the Plus plan' },
        ]}
        whenCompetitorFits={[
          'You need to quote, schedule, invoice, and collect payment in one system -- Jobber does this today and we do not.',
          'You need job costing or QuickBooks sync.',
          'You want a mature product with a large existing user base and established support.',
          'You want an AI receptionist that is already live rather than planned.',
        ]}
        whenMtcrmFits={[
          'Your operational software is fine but leads and estimates still fall through the cracks.',
          'You want a lead-response and follow-up layer without replacing what already runs your jobs.',
          'You value being told plainly what is and is not built -- see our capabilities matrix.',
        ]}
        pricingNote="Jobber's published pricing (retrieved 2026-08-25) lists Core at $21/mo, Connect at $70/mo, Grow at $105/mo, and Plus at $280/mo when billed annually; regular monthly rates listed are $49, $139, $199, and $499 respectively. Verify current pricing on Jobber's own page before deciding -- vendor pricing changes."
        limitations="This comparison is based on Jobber's public pricing page as retrieved 2026-08-25 and does not reflect hands-on testing of Jobber's product. Feature availability by plan tier can change. We have not independently tested Jobber's AI Receptionist or any other Jobber feature. Where Modern Trades CRM's own status is uncertain (e.g. two-way SMS), it is marked UNKNOWN rather than claimed."
        sources={[
          { label: 'Jobber pricing page (retrieved 2026-08-25)', url: 'https://www.getjobber.com/pricing/' },
          { label: 'Jobber AI Receptionist product page', url: 'https://www.getjobber.com/features/ai-receptionist/' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
