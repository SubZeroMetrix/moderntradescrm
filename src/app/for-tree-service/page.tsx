import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Tree Service Companies',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to tree service workflows -- site-visit qualification, storm surges, photo-based estimates, and seasonal reactivation.',
  path: '/for-tree-service',
})

export default function ForTreeServicePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Tree Service', url: '/for-tree-service' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Tree Service Companies',
    description: 'How the core CRM applies to tree service workflows and economics.',
    path: '/for-tree-service',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Tree Service" title="Modern Trades CRM for Tree Service Companies" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Tree Service', href: '/for-tree-service' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Tree service has a qualification problem most trades don&apos;t: you often can&apos;t quote anything
            useful until you know tree size, proximity to structures and power lines, and site access for
            equipment. That makes the intake conversation itself the bottleneck -- and storm events make it worse
            by compressing weeks of demand into days.
          </p>
        </div>

        <div className="prose-content">
          <h2>Why Intake Is the Bottleneck</h2>
          <p>
            A caller asking &quot;how much to take down a tree?&quot; can mean a $400 job or a $6,000 crane job.
            Without structured intake -- species/size, distance from the house, power-line proximity, gate width
            and yard access, whether the stump is included -- every inquiry requires a site visit before you know
            if it&apos;s even worth driving to. Photos from the customer up front change that math substantially.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Inquiry in</strong> &rarr; contact record created, structured intake captures service type, site details, and whether photos are available.</li>
            <li><strong>Qualified for a site visit</strong> &rarr; appointment scheduled; unqualified or out-of-area inquiries are recorded rather than silently dropped.</li>
            <li><strong>Estimate delivered</strong> &rarr; pipeline stage advances manually; won/lost recorded on decision.</li>
            <li><strong>Storm/emergency call</strong> &rarr; routed as an urgent-response signal, not a routine sales-cycle lead -- different clock, different priority.</li>
            <li><strong>Job complete</strong> &rarr; customer record persists with property details, available for seasonal reactivation (pre-hurricane trimming, post-storm cleanup).</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a storm drives 60 inquiries into a two-crew tree service in four days, against a normal baseline of
            10-12/week. If 20% (12 inquiries) never get a callback because the volume outran a paper notepad, and
            the average job is $1,200, that is roughly $14,400 lost to intake capacity rather than to demand or
            price. Illustrative figures, not measured outcomes for any real business.
          </p>

          <h2>Tree-Service-Specific Checklist</h2>
          <ul>
            <li>Does your intake capture proximity to structures and power lines before you commit to a site visit?</li>
            <li>Can customers send photos at the moment of inquiry, or do they have to be asked separately later?</li>
            <li>Is there a defined path for storm/emergency calls that&apos;s different from routine estimates?</li>
            <li>Do you record out-of-area or unqualified inquiries, or do they just disappear?</li>
            <li>Do you have a list of past customers due for seasonal trimming before the next storm season?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record with structured intake fields</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">9-stage sales pipeline for estimates</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling for site visits</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Separate routing for storm/emergency intake</td><td className="py-2 text-emerald-700 font-medium">Available -- separate recovery pipeline exists</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Won/lost tracking on estimates</td><td className="py-2 text-amber-700 font-medium">Prepared -- field exists, not automated</td></tr>
              <tr><td className="py-2 pr-4">Automated seasonal reactivation campaigns</td><td className="py-2 text-gray-600 font-medium">Planned -- records exist, no automated outreach yet</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Crane/equipment scheduling, crew routing, ISA certification tracking, and automated seasonal campaigns
            are not part of this product today. See the full <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/oes/current/oes373013.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Tree Trimmers and Pruners occupational data</a></li>
            <li><a href="https://www.tcia.org" target="_blank" rel="noopener noreferrer">Tree Care Industry Association (TCIA), industry standards and safety resources</a></li>
            <li><a href="https://www.osha.gov/etools/electric-power/tree-trimming" target="_blank" rel="noopener noreferrer">OSHA, tree trimming near power lines guidance</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The worked example uses illustrative numbers, not measured outcomes. Storm-driven demand varies
            enormously by region and season and is not benchmarked here.
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
