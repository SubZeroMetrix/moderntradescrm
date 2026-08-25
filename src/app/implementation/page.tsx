import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Implementation',
  description: 'The actual implementation pathway for Modern Trades CRM -- readiness review through launch -- without promising timelines or outcomes that have not been verified.',
  path: '/implementation',
})

const STEPS = [
  { title: 'Readiness Review', body: 'A conversation about your current workflow, existing software, and what data you have to bring over. No CRM change happens before this.' },
  { title: 'Account Configuration', body: 'Your account is set up on the underlying CRM platform, using the field, pipeline, and tagging structure that exists today -- see the capabilities matrix for what that includes.' },
  { title: 'Data Preparation', body: 'Existing contact and customer data is reviewed and prepared for import. The scope and format of what can be imported depends on your current system and has not been standardized into a single guaranteed process yet.' },
  { title: 'Pipeline and Field Setup', body: 'The sales pipeline and contact fields are configured for your business. Custom pipeline stages beyond the current 9-stage structure are not yet a self-service option.' },
  { title: 'User Configuration', body: 'Team members are added with the access appropriate to their role.' },
  { title: 'Forms and Calendars', body: 'Booking calendars are configured. A public-facing lead-capture form connected to your CRM account is set up here if one is part of your setup -- this is separate from this marketing website\'s own contact form, which is not currently wired to any backend.' },
  { title: 'Workflow Configuration', body: 'Automated workflows (e.g. missed-call handling, reminders) are, as of this review, largely not yet built as reusable templates -- see the capabilities matrix for exactly what is automated today versus manual.' },
  { title: 'Testing', body: 'Before go-live, the pipeline, calendar, and any connected form are tested with real (not sample) data to confirm they behave as expected for your account.' },
  { title: 'Launch Readiness', body: 'Go-live happens once testing confirms the configured pieces work -- not on a fixed calendar date. We have not published a standard timeline because it depends on how much of the above is customized for your business.' },
  { title: 'Customer Responsibility', body: 'You are responsible for the accuracy of data you provide for import, for training your team on day-to-day use, and for your own compliance obligations (e.g. consent records) under applicable law.' },
]

export default function ImplementationPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Implementation', url: '/implementation' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Implementation"
        title="How Implementation Actually Works"
        description="No fixed timeline is promised here because none has been verified. This is the real sequence, and what depends on your specific setup."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Implementation', href: '/implementation' }]}
      />
      <div className="section-container max-w-3xl py-16">
        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="card-panel flex gap-4">
              <div className="text-brand-electric font-bold text-lg shrink-0 w-8">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                <p className="text-sm text-gray-500">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose-content mt-10">
          <h2>Features That Require Separate Activation or Expense</h2>
          <p>
            Anything not marked Available on the <Link href="/capabilities">capabilities matrix</Link> is not
            included by default -- some items there are planned future work, not paid add-ons, and this page will
            be updated if that changes. There is no published pricing on this site yet; see{' '}
            <Link href="/request-access">Request Access</Link> to start a conversation.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
