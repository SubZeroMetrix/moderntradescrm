import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Plumbing Contractors',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to plumbing-specific workflows -- emergency calls, repipe/water-heater estimates, property-management relationships, and membership opportunities.',
  path: '/for-plumbing',
})

export default function ForPlumbingPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Plumbing', url: '/for-plumbing' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Plumbing Contractors',
    description: 'How the core CRM applies to plumbing-specific workflows and economics.',
    path: '/for-plumbing',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Plumbing" title="Modern Trades CRM for Plumbing Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Plumbing', href: '/for-plumbing' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            This page is for plumbing contractors weighing a general-purpose CRM against plumbing-specific needs --
            same-day emergency dispatch alongside larger repipe/water-heater/sewer estimates, property-management
            relationships, and membership-style recurring revenue. There is no plumbing-exclusive feature here; this
            page explains how the core pipeline and records map onto that workflow, and where they don&apos;t yet.
          </p>
        </div>

        <div className="prose-content">
          <h2>Two Very Different Sales Cycles Under One Roof</h2>
          <p>
            A plumbing business fields same-day emergency calls (a burst pipe, an active leak, no hot water) on
            one track, and larger planned work -- water heater replacement, repipe, sewer line repair or
            replacement, fixture upgrades -- on a slower, estimate-driven track. Property managers and landlords
            add a third pattern: a single account contact responsible for multiple physical addresses.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Emergency call in</strong> &rarr; contact record created/matched, routed for same-day response, no formal estimate stage needed.</li>
            <li><strong>Repipe/water-heater/sewer inquiry in</strong> &rarr; contact record created, enters the sales pipeline for an on-site estimate.</li>
            <li><strong>Estimate delivered</strong> &rarr; pipeline stage advances manually; won/lost recorded on decision.</li>
            <li><strong>Property-management account</strong> &rarr; today handled as one contact per person, with each property tracked in notes -- not yet a dedicated multi-location object.</li>
            <li><strong>Membership/inspection customer</strong> &rarr; record persists and is searchable; recurring inspection reminders are not yet automated.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a plumbing business sends 25 water-heater and repipe estimates a month. If 30% go unsold purely
            because no one followed up after the initial visit -- not because of price -- that is roughly 7-8 jobs
            a month with no clear reason attached to the loss. These figures are illustrative only, not a
            benchmark; actual follow-up loss rates vary by business and are not measured here.
          </p>

          <h2>Plumbing-Specific Checklist</h2>
          <ul>
            <li>Do emergency calls and planned-project inquiries funnel through the same intake, or are they separated?</li>
            <li>Is every open repipe/water-heater/sewer estimate assigned a follow-up date?</li>
            <li>Can you list every property tied to a given property-management contact without checking a spreadsheet?</li>
            <li>Do you know which membership/inspection customers are due for their next visit in the next 60 days?</li>
            <li>Do you have a working list of customers whose estimate went cold, ready for a second look?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record per customer, searchable</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">9-stage sales pipeline for larger estimates</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling for emergency and planned visits</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Won/lost tracking on estimates</td><td className="py-2 text-amber-700 font-medium">Prepared -- field exists, not automated</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Membership/inspection renewal reminders</td><td className="py-2 text-gray-500 font-medium">Planned -- not built</td></tr>
              <tr><td className="py-2 pr-4">Dedicated multi-property/asset object per account</td><td className="py-2 text-gray-500 font-medium">Planned -- currently notes on a contact record</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Automated missed-call text-back, automated membership-renewal outreach, and a dedicated
            multi-location/property object are not part of this product today. See the full{' '}
            <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Occupational Outlook Handbook -- Plumbers, Pipefitters, and Steamfitters</a></li>
            <li><a href="https://www.phccweb.org" target="_blank" rel="noopener noreferrer">Plumbing-Heating-Cooling Contractors Association (PHCC), industry standards</a></li>
            <li><a href="https://www.epa.gov/watersense" target="_blank" rel="noopener noreferrer">U.S. EPA WaterSense, plumbing fixture and water-efficiency program data</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example uses illustrative, hypothetical numbers, not measured outcomes for a real business.
            Actual loss rates vary by market and are not independently benchmarked here.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">Plans start at $99/month. Base pricing, with usage charges disclosed before activation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="btn-secondary">Compare Plans</Link>
            <Link href="/start" className="btn-primary">Start Setup</Link>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
