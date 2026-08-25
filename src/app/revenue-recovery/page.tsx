import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { CapabilityBadge } from '@/components/CapabilityBadge'

export const metadata = buildMetadata({
  title: 'Revenue Recovery',
  description: 'How Modern Trades CRM approaches missed calls, stalled estimates, and dormant customers -- with an honest split between what is built today and what is planned.',
  path: '/revenue-recovery',
})

export default function RevenueRecoveryPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Revenue Recovery', url: '/revenue-recovery' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Solution"
        title="Revenue Recovery"
        description="Missed calls, stalled estimates, and dormant customers are the three places contractor revenue leaks most. Here is exactly what Modern Trades CRM does about each one today, and what is still being built."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Revenue Recovery', href: '/revenue-recovery' }]}
      />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>Missed Calls</h2>
          <p>
            Automated missed-call text-back is not built yet. Today, a missed call lands in your pipeline as a
            contact record if it comes through a connected channel, but nothing automatically follows up on your
            behalf.
          </p>
          <div className="my-3"><CapabilityBadge status="PLANNED" /></div>

          <h2>Stalled Estimates</h2>
          <p>
            The 9-stage sales pipeline exists and is usable today, including a won/lost field. Automatic stage
            advancement, and automation that triggers off a won/lost change, is not yet built -- moving a deal
            through the pipeline is currently a manual step.
          </p>
          <div className="my-3"><CapabilityBadge status="PREPARED" /></div>

          <h2>Dormant Customers</h2>
          <p>
            Reactivation campaigns for past customers are not built yet. Contact records persist and are searchable,
            so the underlying data exists to identify dormant customers manually; there is no automated outreach.
          </p>
          <div className="my-3"><CapabilityBadge status="PLANNED" /></div>

          <h2>Why We Publish It This Way</h2>
          <p>
            Most CRM sales pages describe features as if they already work for every customer. We would rather
            tell you exactly what is available now, what is prepared but not automated, and what is planned --
            see the full <Link href="/capabilities">capabilities matrix</Link> for every row, not just the ones
            related to revenue recovery.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">
            For the general research behind why speed-to-lead and follow-up discipline matter, read the deeper
            guide on <a href="https://www.moderntrades.io/resources/revenue-recovery">Modern Trades</a>.
          </p>
          <Link href="/contact?interest=demo" className="btn-primary">Request Info</Link>
        </div>
      </div>
    </div>
  )
}
