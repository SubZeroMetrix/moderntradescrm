import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM for Pest Control Companies',
  description: 'How the verified Modern Trades CRM pipeline, scheduling, and contact tools apply to pest control workflows -- recurring service plans, renewals, missed appointments, and lapsed-customer reactivation.',
  path: '/for-pest-control',
})

export default function ForPestControlPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'For Pest Control', url: '/for-pest-control' }])
  const article = articleSchema({
    headline: 'Modern Trades CRM for Pest Control Companies',
    description: 'How the core CRM applies to pest control workflows and recurring-revenue economics.',
    path: '/for-pest-control',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="For Pest Control" title="Modern Trades CRM for Pest Control Companies" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'For Pest Control', href: '/for-pest-control' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Pest control is a recurring-revenue business wearing a service-business costume. The one-time
            treatment is the acquisition cost; the quarterly or annual plan is the actual product. That means
            retention, renewal, and silent churn matter more than lead volume -- and lapsed customers are usually
            the largest recoverable asset on the books.
          </p>
        </div>

        <div className="prose-content">
          <h2>Churn Is Usually Silent</h2>
          <p>
            Customers rarely cancel a pest plan explicitly. They skip a treatment, then another, then stop
            responding. Without a system that flags a customer as overdue rather than waiting for a cancellation,
            churn is only discovered months later when someone notices revenue dropped.
          </p>

          <h2>The Recurring Cycle Is the Workflow</h2>
          <ol>
            <li><strong>New inquiry in</strong> &rarr; contact record created; the real goal is a recurring plan, not a one-time treatment.</li>
            <li><strong>Initial treatment</strong> &rarr; job recorded; plan enrollment (if any) captured on the customer record.</li>
            <li><strong>Recurring service due</strong> &rarr; needs a reminder before the visit and a rebooking path if missed. This is the highest-leverage automation in the trade.</li>
            <li><strong>Missed appointment</strong> &rarr; should trigger rebooking, not quietly become churn.</li>
            <li><strong>Renewal window</strong> &rarr; annual plans need a proactive conversation before expiry.</li>
            <li><strong>Lapsed customer</strong> &rarr; identifiable list, ready for reactivation outreach.</li>
          </ol>

          <h2>A Worked Example (Hypothetical)</h2>
          <p>
            Say a pest control company has 500 plan customers at $45/quarter ($180/year). If 8% silently lapse
            each year without anyone noticing (40 customers), that is roughly $7,200 in annual recurring revenue
            gone -- and because they never formally cancelled, most are reachable. Recovering even a quarter of
            them is worth more than several new-customer acquisitions. Illustrative figures, not measured
            outcomes for any real business.
          </p>

          <h2>Pest-Control-Specific Checklist</h2>
          <ul>
            <li>Can you produce a list, right now, of customers overdue for their next scheduled treatment?</li>
            <li>Does a missed appointment trigger a rebooking attempt, or does it just sit?</li>
            <li>Do you know which annual plans expire in the next 60 days?</li>
            <li>Do you track why a customer lapsed, or only that they did?</li>
            <li>Is there a defined reactivation attempt for customers who stopped 12+ months ago?</li>
          </ul>

          <h2>What the CRM Can Handle Now</h2>
          <table className="w-full text-sm border-collapse my-4">
            <thead><tr className="border-b border-gray-300 text-left"><th className="py-2 pr-4">Workflow need</th><th className="py-2">Status</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Contact record with service history</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Appointment scheduling for recurring visits</td><td className="py-2 text-emerald-700 font-medium">Available</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Customer Growth pipeline (active / at-risk / inactive stages)</td><td className="py-2 text-emerald-700 font-medium">Available -- pipeline structure exists</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Automated recurring-service reminders</td><td className="py-2 text-gray-600 font-medium">Planned -- not built</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4">Automated renewal outreach</td><td className="py-2 text-gray-600 font-medium">Planned -- not built</td></tr>
              <tr><td className="py-2 pr-4">Automated lapsed-customer reactivation</td><td className="py-2 text-gray-600 font-medium">Planned -- records exist, no automated outreach yet</td></tr>
            </tbody>
          </table>

          <h2>What Is Not Currently Included</h2>
          <p>
            Being direct, because this trade depends on it: the recurring-reminder and renewal automations that
            would matter most to a pest control business are <strong>not built yet</strong>. The record structure
            and pipeline stages exist to track the cycle manually today. Chemical/application logging, technician
            licensing records, and regulatory reporting are also not part of this product. See the full{' '}
            <Link href="/capabilities">capabilities matrix</Link>.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.bls.gov/ooh/building-and-grounds-cleaning/pest-control-workers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics, Occupational Outlook Handbook -- Pest Control Workers</a></li>
            <li><a href="https://www.epa.gov/safepestcontrol" target="_blank" rel="noopener noreferrer">U.S. EPA, safe pest control and pesticide regulation resources</a></li>
            <li><a href="https://www.pestworld.org" target="_blank" rel="noopener noreferrer">National Pest Management Association (NPMA), industry resources</a></li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The 8% silent-lapse figure is illustrative, chosen to demonstrate the arithmetic -- not a benchmark
            from any study. Actual churn varies widely by market, pricing, and service quality.
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
