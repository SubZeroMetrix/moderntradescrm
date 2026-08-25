import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Electrical Contractors',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to electrical-specific workflows -- panel upgrades, generators, EV chargers, longer decision cycles, and change-order visibility.',
  path: '/for-electrical',
})

export default function ForElectricalPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Electrical', url: '/for-electrical' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Electrical Contractors',
    description: 'How the core CRM applies to electrical-specific workflows and economics.',
    path: '/for-electrical',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Electrical" title="Modern Trades CRM for Electrical Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Electrical', href: '/for-electrical' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            This page is for electrical contractors weighing a general-purpose CRM against electrical-specific
            realities -- a mix of short service calls and larger project work (panel upgrades, service upgrades,
            generators, EV chargers), longer decision cycles on big-ticket items, and permit/inspection milestones
            that sit outside the CRM entirely. This page explains how the core pipeline and records map onto that,
            and where the boundaries are.
          </p>
        </div>

        <div className="prose-content">
          <h2>Service Calls and Projects Move at Different Speeds</h2>
          <p>
            A short service call (a dead outlet, a tripped breaker) closes in one visit. A panel upgrade, service
            upgrade, whole-home generator, or EV charger installation involves a proposal, a decision that often
            takes the homeowner weeks, and separately, a permit and inspection process that the CRM does not manage
            -- that stays with the permitting authority and your own project tracking.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Service call in</strong> &rarr; contact record created/matched, scheduled directly, typically closes same-visit.</li>
            <li><strong>Panel/generator/EV-charger inquiry in</strong> &rarr; contact record created, enters the sales pipeline for an on-site proposal.</li>
            <li><strong>Proposal delivered</strong> &rarr; pipeline stage advances manually; the CRM does not track permit or inspection status -- that milestone tracking happens outside this product.</li>
            <li><strong>Job won</strong> &rarr; won/lost recorded; any change order during the project is currently a manual pipeline note, not a distinct tracked object.</li>
            <li><strong>Residential vs. light-commercial customer</strong> &rarr; both use the same contact record structure today; there is no separate commercial-account object.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say an electrical contractor sends 15 panel-upgrade or generator proposals a month, each with an
            average 3-week decision window. If 25% of those proposals go unsold simply because no one followed up
            during that window, that is roughly 4 jobs a month lost to timing rather than price or fit. This is an
            illustrative figure, not a measured benchmark for any real business.
          </p>

          <h2>Electrical-Specific Checklist</h2>
          <ul>
            <li>Do short service calls and larger proposals share one intake path, or are they tracked separately?</li>
            <li>Is every open panel/generator/EV-charger proposal assigned a follow-up date during its decision window?</li>
            <li>Do you have a way to note permit/inspection milestones against a job, even if the CRM itself doesn&apos;t track permitting?</li>
            <li>Can you find every change order tied to a job without checking a separate paper trail?</li>
            <li>Do you have a list of past electrical customers due for a recurring inspection or service check?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record per customer, searchable</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">9-stage sales pipeline for larger proposals</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling for service and project visits</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Won/lost tracking on proposals</td><td className="py-2 text-amber-700 font-medium">Prepared -- field exists, not automated</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Permit/inspection milestone tracking</td><td className="py-2 text-gray-500 font-medium">Not part of this product -- track outside the CRM</td></tr>
              <tr><td className="py-2 pr-4">Dedicated change-order object</td><td className="py-2 text-gray-500 font-medium">Planned -- currently a pipeline note</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Permit or inspection management, a dedicated change-order record type, and a separate commercial-account
            structure are not part of this product today. See the full <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Occupational Outlook Handbook -- Electricians</a></li>
            <li><a href="https://www.necanet.org" target="_blank" rel="noopener noreferrer">National Electrical Contractors Association (NECA), industry standards</a></li>
            <li><a href="https://www.energy.gov/eere/electricvehicles/charging-home" target="_blank" rel="noopener noreferrer">U.S. Department of Energy, home EV charging installation guidance</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example uses illustrative numbers, not measured outcomes. Actual decision-window length and
            follow-up loss rates vary by market and project type and are not independently benchmarked here.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">See the full capability matrix, or start a conversation about your setup.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/capabilities" className="btn-secondary">Capabilities Matrix</Link>
            <Link href="/request-access" className="btn-primary">Request Access</Link>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
