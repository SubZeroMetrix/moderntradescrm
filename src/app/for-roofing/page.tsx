import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Roofing Contractors',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to roofing-specific workflows -- inspection-to-estimate flow, weather-driven lead surges, retail vs. insurance jobs, and long follow-up cycles.',
  path: '/for-roofing',
})

export default function ForRoofingPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Roofing', url: '/for-roofing' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Roofing Contractors',
    description: 'How the core CRM applies to roofing-specific workflows and economics.',
    path: '/for-roofing',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Roofing" title="Modern Trades CRM for Roofing Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Roofing', href: '/for-roofing' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            This page is for roofing contractors weighing a general-purpose CRM against roofing-specific realities
            -- inspection-driven leads, weather-triggered volume surges, a split between retail and
            insurance-related jobs, and follow-up cycles that can run months, not days. There is no
            roofing-exclusive feature here; this explains how the core pipeline and records map onto that, and
            where they don&apos;t yet. This page does not provide insurance advice.
          </p>
        </div>

        <div className="prose-content">
          <h2>Inspection-Led, Weather-Driven, and Slow to Close</h2>
          <p>
            Roofing leads usually start with an inspection, not a firm request for a specific job. Volume is
            uneven -- a hailstorm or major wind event can generate a surge of inquiries in a single week that
            dwarfs a normal month. And the path to a signed job can run long, especially on insurance-related
            claims where the homeowner is waiting on an adjuster, not just deciding on price.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Inspection request in</strong> &rarr; contact record created/matched, appointment scheduled.</li>
            <li><strong>Inspection completed</strong> &rarr; enters the sales pipeline; estimate or scope of work delivered.</li>
            <li><strong>Retail job</strong> &rarr; moves through the pipeline on the homeowner&apos;s own decision timeline.</li>
            <li><strong>Insurance-related job</strong> &rarr; moves through the same pipeline, but the decision clock is largely outside your control -- the CRM records where the job sits, not the claim status itself, and this site is not insurance guidance.</li>
            <li><strong>Job won</strong> &rarr; won/lost recorded; handoff to production (the actual roof installation) is currently a manual note, not a tracked production-management workflow.</li>
            <li><strong>Job complete</strong> &rarr; customer record persists with warranty and job history, available for neighborhood reactivation and referral outreach later.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a storm event drives 80 inspection requests into a roofing business in a single week, well above
            the normal 10-15/week baseline. If even 15% of that surge (12 leads) never gets a timely follow-up
            because the volume outran manual tracking, that is 12 potential jobs lost to process, not to the
            underlying demand. This is an illustrative figure, not a measured outcome for any real business.
          </p>

          <h2>Roofing-Specific Checklist</h2>
          <ul>
            <li>Do you have a way to see every open inspection request that hasn&apos;t converted to an estimate yet?</li>
            <li>Can your intake process handle a 5x volume surge without leads falling through silently?</li>
            <li>Is every insurance-related job clearly distinguished from retail in your records, without claiming to track the claim itself?</li>
            <li>Do you know which past customers are in neighborhoods where you&apos;re currently doing work, for referral outreach?</li>
            <li>Is warranty information findable per customer without checking a separate file?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record per customer, searchable</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">9-stage sales pipeline from inspection to close</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling for inspections</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Won/lost tracking on estimates</td><td className="py-2 text-amber-700 font-medium">Prepared -- field exists, not automated</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Production/installation-handoff tracking</td><td className="py-2 text-gray-500 font-medium">Not part of this product -- currently a manual note</td></tr>
              <tr><td className="py-2 pr-4">Neighborhood-based reactivation outreach</td><td className="py-2 text-gray-500 font-medium">Planned -- records exist, no automated outreach yet</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Insurance claim tracking, production/installation management, and automated neighborhood-reactivation
            campaigns are not part of this product today. See the full <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/ooh/construction-and-extraction/roofers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Occupational Outlook Handbook -- Roofers</a></li>
            <li><a href="https://www.nrca.net" target="_blank" rel="noopener noreferrer">National Roofing Contractors Association (NRCA), industry standards</a></li>
            <li><a href="https://www.iii.org/article/hail-and-your-property" target="_blank" rel="noopener noreferrer">Insurance Information Institute, hail and property-damage claims background (general reference, not insurance advice)</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example uses illustrative numbers, not measured outcomes. This page does not offer insurance
            or claims advice; consult a licensed adjuster or insurance professional for claim-specific questions.
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
