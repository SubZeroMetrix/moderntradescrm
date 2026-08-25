import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Capabilities',
  description: 'What Modern Trades CRM has verified working today, and what is still in development. No invented features.',
  path: '/capabilities',
})

export default function CapabilitiesPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Capabilities', url: '/capabilities' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Capabilities"
        title="What's Actually Verified Working"
        description="Modern Trades CRM is being built by a working contractor consultant, not marketed ahead of what exists. This page reflects our own internal capability review -- updated as things actually get built, not as they get planned."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Capabilities', href: '/capabilities' }]}
      />
      <div className="section-container max-w-3xl py-16">
        <h2 className="text-subhead text-gray-900 mb-5">Verified Working Today</h2>
        <div className="space-y-4 mb-12">
          <div className="card-panel border-emerald-200 bg-emerald-50/40">
            <p className="font-semibold text-gray-900 mb-1">Contact &amp; Lead Records</p>
            <p className="text-sm text-gray-600">Every lead gets a real, searchable contact record with custom fields and tags for organizing by trade, source, or status.</p>
          </div>
          <div className="card-panel border-emerald-200 bg-emerald-50/40">
            <p className="font-semibold text-gray-900 mb-1">Sales Pipeline</p>
            <p className="text-sm text-gray-600">A 9-stage pipeline exists for tracking leads through to won or lost. Stage-to-stage automation is still in development -- moving a deal through the pipeline today is a manual step.</p>
          </div>
          <div className="card-panel border-emerald-200 bg-emerald-50/40">
            <p className="font-semibold text-gray-900 mb-1">Appointment Scheduling</p>
            <p className="text-sm text-gray-600">Booking, rescheduling, and cancellation are verified working end-to-end. Currently proven on our own calendar setup; rolling out to individual customer calendars is in progress.</p>
          </div>
          <div className="card-panel border-emerald-200 bg-emerald-50/40">
            <p className="font-semibold text-gray-900 mb-1">Search &amp; Organization</p>
            <p className="text-sm text-gray-600">Fast search across contacts and records, with tags and custom fields for filtering.</p>
          </div>
        </div>

        <h2 className="text-subhead text-gray-900 mb-5">In Development -- Not Yet Live</h2>
        <p className="text-sm text-gray-500 mb-5">
          These are real parts of the roadmap, not vague future promises -- but none of them are ready for a
          customer to rely on yet. We&apos;d rather tell you that directly than let a features list imply otherwise.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            'Two-way SMS and unified conversations',
            'Missed-call recovery automation',
            'Automated estimate follow-up',
            'Customer reactivation campaigns',
            'Review and referral request automation',
            'Broader workflow automation',
            'Reporting and analytics dashboards',
            'AI-assisted features',
          ].map((item) => (
            <div key={item} className="card-panel bg-gray-50">
              <p className="text-sm text-gray-600">{item}</p>
            </div>
          ))}
        </div>

        <h2 className="text-subhead text-gray-900 mb-5">Explicitly Not Part of This Product</h2>
        <p className="text-body-lg mb-6">
          Modern Trades CRM is a lead, sales, and scheduling system -- not a field-service management platform.
          Dispatch, technician routing, job costing, inventory, pricebooks, and accounting are outside its scope and
          would require a separate, dedicated tool.
        </p>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">Want to know when a specific capability goes live, or discuss what you actually need?</p>
          <Link href="/contact?interest=demo" className="btn-primary">Request Info</Link>
        </div>
      </div>
    </div>
  )
}
