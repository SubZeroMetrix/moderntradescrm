import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for HVAC Contractors',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to HVAC-specific workflows -- seasonal demand, replacement follow-up, maintenance agreements, and multi-system customers.',
  path: '/for-hvac',
})

export default function ForHvacPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For HVAC', url: '/for-hvac' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for HVAC Contractors',
    description: 'How the core CRM applies to HVAC-specific workflows and economics.',
    path: '/for-hvac',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For HVAC" title="Modern Trades CRM for HVAC Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For HVAC', href: '/for-hvac' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            This page is for HVAC contractors evaluating whether a general-purpose CRM can handle HVAC-specific
            realities -- seasonal swings, emergency-versus-planned service, multi-system customers, and
            maintenance-agreement tracking. Modern Trades CRM has no HVAC-exclusive feature; what it has is a
            pipeline and record structure that maps onto those realities. This page explains how, and where it
            doesn&apos;t yet.
          </p>
        </div>

        <div className="prose-content">
          <h2>The HVAC Workflow Is Different From a Generic Service Call</h2>
          <p>
            An HVAC business runs at least two speeds at once: no-notice emergency no-cool/no-heat calls that need
            same-day routing, and planned replacement or maintenance work that moves through a longer estimate and
            decision cycle. On top of that, demand is not steady -- most HVAC businesses see the bulk of emergency
            volume compressed into a handful of peak weeks per season, with maintenance-agreement customers as the
            steadier base underneath it.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Emergency call in</strong> &rarr; contact record created (or matched to an existing one), routed for same-day response.</li>
            <li><strong>Planned/replacement inquiry in</strong> &rarr; contact record created, moves into the sales pipeline for an on-site estimate.</li>
            <li><strong>Estimate delivered</strong> &rarr; pipeline stage advances manually to Estimate/Proposal Sent; won/lost is recorded when the customer decides.</li>
            <li><strong>Job won</strong> &rarr; customer record persists with service history, ready to be flagged for a maintenance agreement.</li>
            <li><strong>Maintenance agreement customer</strong> &rarr; record exists and is searchable, but recurring seasonal-tune-up reminders are not yet automated.</li>
            <li><strong>Multiple systems at one address</strong> &rarr; handled today as a single contact record with equipment/service-history notes; dedicated per-system asset records are not yet a distinct object.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a two-truck HVAC business runs roughly 30 replacement estimates a month during shoulder season,
            rising to 60 during a peak summer month. If even a conservative 20% of shoulder-season estimates and
            35% of peak-season estimates are lost purely to inconsistent follow-up (not price or fit), that is
            roughly 6 and 21 jobs a month, respectively, going nowhere for a reason that has nothing to do with
            the sale itself. These numbers are illustrative, not a benchmark -- the real figures depend entirely
            on the individual business&apos;s own follow-up discipline before any software is involved.
          </p>

          <h2>HVAC-Specific Checklist</h2>
          <ul>
            <li>Do you have a documented emergency-versus-planned intake path, or does everything funnel through one queue?</li>
            <li>Is every open replacement estimate assigned a follow-up date, or do they age out silently after the visit?</li>
            <li>Do you know how many maintenance-agreement customers are coming due for renewal in the next 90 days?</li>
            <li>Can you find every past customer with more than one system at their address without checking a paper file?</li>
            <li>Do you have a list of customers who went quiet before last year&apos;s peak season, ready to re-contact before this one?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record per customer, searchable</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">9-stage sales pipeline for replacement estimates</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling and technician assignment</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Won/lost tracking on estimates</td><td className="py-2 text-amber-700 font-medium">Prepared -- field exists, no automation triggers on it yet</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Seasonal maintenance-agreement reminders</td><td className="py-2 text-gray-500 font-medium">Planned -- not built</td></tr>
              <tr><td className="py-2 pr-4">Per-system equipment/asset records</td><td className="py-2 text-gray-500 font-medium">Planned -- currently notes on the contact record, not a dedicated object</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Automated missed-call text-back, automated maintenance-agreement renewal outreach, per-system equipment
            tracking as a distinct record type, and dispatch/technician-routing beyond basic calendar assignment
            are not part of this product today. See the full <Link href="/capabilities">capabilities matrix</Link>{' '}
            for every row.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.eia.gov/energyexplained/use-of-energy/heating-and-cooling.php" target="_blank" rel="noopener noreferrer">U.S. Energy Information Administration, seasonal heating and cooling demand data</a></li>
            <li><a href="https://www.bls.gov/oes/current/oes499021.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, HVAC/R Mechanics and Installers Occupational Employment data</a></li>
            <li><a href="https://www.acca.org" target="_blank" rel="noopener noreferrer">Air Conditioning Contractors of America (ACCA), industry standards and technician resources</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example above uses illustrative numbers, not measured outcomes for any real business. Actual
            estimate volume, seasonal swing, and follow-up loss rates vary widely by market and business size and
            are not independently benchmarked here.
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
