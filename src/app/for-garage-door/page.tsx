import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Garage Door Companies',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to garage door workflows -- urgent same-day service intake, repair-vs-replace decisions, and review generation.',
  path: '/for-garage-door',
})

export default function ForGarageDoorPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Garage Door', url: '/for-garage-door' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Garage Door Companies',
    description: 'How the core CRM applies to garage door workflows and economics.',
    path: '/for-garage-door',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Garage Door" title="Modern Trades CRM for Garage Door Companies" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Garage Door', href: '/for-garage-door' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Garage door work is dominated by urgency: a stuck door means a car trapped inside or a house left open.
            Most inquiries want same-day service and will call the next company if you don&apos;t answer. Speed of
            response matters more here than in almost any other residential trade -- which makes missed calls the
            single most expensive failure mode.
          </p>
        </div>

        <div className="prose-content">
          <h2>Urgency Compresses the Entire Sales Cycle</h2>
          <p>
            There is rarely a comparison-shopping phase for a broken spring or an opener that died. The decision
            window is often minutes. That inverts the usual priority: a fast, competent phone answer is worth more
            than a polished estimate delivered three hours later.
          </p>

          <h2>Repair vs. Replace Is the Real Estimate</h2>
          <p>
            The higher-value conversation isn&apos;t the service call -- it&apos;s whether a 20-year-old door
            should be repaired again or replaced. That decision has a genuinely longer cycle and is the one worth
            tracking as an open estimate with follow-up, rather than treating every job as a one-visit close.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Urgent service call in</strong> &rarr; contact record created, scheduled same-day where possible; response speed is the primary variable.</li>
            <li><strong>Service completed</strong> &rarr; job recorded; if replacement was discussed, that becomes an open estimate rather than a lost conversation.</li>
            <li><strong>Replacement estimate</strong> &rarr; enters the sales pipeline with a real follow-up date -- this is where most garage door revenue leaks.</li>
            <li><strong>Job complete</strong> &rarr; customer record persists; review requests are most effective immediately after a same-day rescue.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a garage door company misses 25 calls a month during business hours. Because urgency is high,
            assume a conservative 50% of those callers book with someone else within the hour. At a $280 average
            service ticket, that is roughly $3,500/month -- before counting any replacement estimates that
            conversation would have produced. Illustrative figures, not measured outcomes.
          </p>

          <h2>Garage-Door-Specific Checklist</h2>
          <ul>
            <li>Do you know how many calls go unanswered during business hours in a typical week?</li>
            <li>Is there any defined path for a call that comes in while both techs are on a roof?</li>
            <li>When a tech recommends replacement instead of another repair, does that become a tracked estimate or just a verbal comment?</li>
            <li>Are review requests sent while the same-day-rescue goodwill is still fresh?</li>
            <li>Do you have a list of customers with aging doors you&apos;ve already repaired more than once?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record per customer, searchable</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Pipeline for replacement estimates</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Same-day appointment scheduling</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Missed-call text-back</td><td className="py-2 text-gray-600 font-medium">Planned -- not built</td></tr>
              <tr><td className="py-2 pr-4">Automated review requests after job completion</td><td className="py-2 text-amber-700 font-medium">Prepared -- engine exists, completed-job trigger not built</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Automated missed-call text-back is the capability that would matter most for this trade, and it is
            explicitly <strong>not built yet</strong> -- we&apos;d rather say so than sell it. See the full{' '}
            <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
            <li><a href="https://www.doorandaccesssystems.com" target="_blank" rel="noopener noreferrer">International Door Association (IDA), industry resources</a></li>
            <li><a href="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Garage-Door-Openers" target="_blank" rel="noopener noreferrer">U.S. Consumer Product Safety Commission, garage door opener safety requirements</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The 50% same-hour rebooking assumption above is illustrative reasoning about urgency, not a measured
            statistic. Your actual missed-call loss rate is unknown until you track it.
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
