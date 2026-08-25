import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Cleaning Businesses',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to cleaning-business workflows -- fast quoting, recurring bookings, cancellations, referrals, and reactivation.',
  path: '/for-cleaning-businesses',
})

export default function ForCleaningBusinessesPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Cleaning Businesses', url: '/for-cleaning-businesses' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Cleaning Businesses',
    description: 'How the core CRM applies to cleaning-business workflows and recurring-booking economics.',
    path: '/for-cleaning-businesses',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Cleaning Businesses" title="Modern Trades CRM for Cleaning Businesses" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Cleaning Businesses', href: '/for-cleaning-businesses' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Cleaning businesses win on two things most competitors do badly: quoting fast (often same-hour, from
            square footage and frequency rather than a site visit) and holding onto recurring clients. A single
            biweekly client is worth 26 visits a year -- so one avoidable cancellation costs far more than one
            missed one-time job.
          </p>
        </div>

        <div className="prose-content">
          <h2>Speed of Quote Is the Competitive Edge</h2>
          <p>
            Unlike trades that need a site visit to price anything, most residential cleaning can be quoted from
            a few structured inputs: bedrooms/bathrooms, square footage, frequency, and whether it&apos;s a
            standard clean or a deep/move-out clean. The company that returns a real number in an hour usually
            wins over the one that schedules an estimate visit for Thursday.
          </p>

          <h2>The Real Asset Is the Recurring Schedule</h2>
          <p>
            A weekly or biweekly client is an annuity. That reframes the priorities: preventing a cancellation,
            rebooking a skipped visit, and asking a happy recurring client for a referral all outrank chasing new
            one-time leads. Referrals matter disproportionately here because trust-in-the-home is the buying
            criterion.
          </p>

          <h2>Workflow Map</h2>
          <ol>
            <li><strong>Inquiry in</strong> &rarr; contact record created with structured inputs (size, frequency, clean type) so a quote can go out fast.</li>
            <li><strong>Quote sent</strong> &rarr; enters the pipeline; speed matters more than polish at this stage.</li>
            <li><strong>First clean booked</strong> &rarr; the goal is conversion to a recurring schedule, not a one-time transaction.</li>
            <li><strong>Recurring schedule</strong> &rarr; reminders reduce lockouts and last-minute cancellations; a skipped visit needs an active rebooking path.</li>
            <li><strong>Happy recurring client</strong> &rarr; the best moment for both a review request and a referral ask.</li>
            <li><strong>Lapsed client</strong> &rarr; identifiable list for reactivation, often recoverable with one call.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a cleaning business serves 60 biweekly clients at $140/visit. One client lost is roughly $3,640 in
            annual revenue (26 visits x $140). If 6 clients lapse in a year without any reactivation attempt,
            that is about $21,800 in annualized revenue -- against a marketing budget that was probably spent
            chasing new leads instead. Illustrative figures, not measured outcomes.
          </p>

          <h2>Cleaning-Business-Specific Checklist</h2>
          <ul>
            <li>How long does a typical quote actually take to go out -- measured, not estimated?</li>
            <li>Do you capture enough structured info at inquiry to quote without a visit?</li>
            <li>When a recurring client skips a visit, is there a defined rebooking attempt?</li>
            <li>Do you ask recurring clients for referrals at a specific point, or only when it occurs to someone?</li>
            <li>Can you list every client who stopped scheduling in the last 12 months?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record with structured intake fields</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Pipeline for quotes through to booking</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Customer Growth pipeline (active / at-risk / inactive)</td><td className="py-2 text-emerald-700 font-medium">Available -- structure exists</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Automated appointment reminders</td><td className="py-2 text-amber-700 font-medium">Prepared -- mechanism exists in test form, live delivery unverified</td></tr>
              <tr><td className="py-2 pr-4">Automated referral and reactivation campaigns</td><td className="py-2 text-gray-600 font-medium">Planned -- not built</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Recurring-schedule automation, crew assignment/routing, supply tracking, and automated referral
            campaigns are not part of this product today. Recurring visits can be scheduled manually on the
            calendar; they are not yet auto-generated. See the full <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/ooh/building-and-grounds-cleaning/maids-and-housekeeping-cleaners.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Occupational Outlook Handbook -- Maids and Housekeeping Cleaners</a></li>
            <li><a href="https://www.issa.com" target="_blank" rel="noopener noreferrer">ISSA (worldwide cleaning industry association), standards and resources</a></li>
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The churn and visit-value figures above are illustrative arithmetic, not measured benchmarks. Actual
            client retention varies widely by market and service quality.
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
