import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { CapabilityBadge, type CapabilityStatus } from '@/components/CapabilityBadge'

export const metadata = buildMetadata({
  title: 'Capabilities',
  description: 'What Modern Trades CRM has verified working today, and what is still in development. No invented features.',
  path: '/capabilities',
})

interface Row {
  name: string
  status: CapabilityStatus
  note: string
}

const GROUPS: { group: string; rows: Row[] }[] = [
  {
    group: 'Lead & Contact Management',
    rows: [
      { name: 'Contact records, custom fields, tags', status: 'AVAILABLE', note: 'Verified working -- every lead gets a real, searchable record.' },
      { name: 'Search across contacts and records', status: 'AVAILABLE', note: 'Verified working.' },
      { name: 'Duplicate-contact detection', status: 'PREPARED', note: 'Exists at the data layer; no workflow-level duplicate-prevention guard yet.' },
      { name: 'Lead source / campaign attribution', status: 'PREPARED', note: 'Capture mechanism exists; not yet wired into every client intake path.' },
      { name: 'Consent capture (email/SMS)', status: 'PREPARED', note: 'Consent fields exist; no automation currently enforces them.' },
      { name: 'Lead import from web forms, chat, phone, social', status: 'UNKNOWN', note: 'Not independently verified for this product as of this review.' },
    ],
  },
  {
    group: 'Sales Pipeline',
    rows: [
      { name: '9-stage sales pipeline (existence)', status: 'AVAILABLE', note: 'Pipeline exists and is usable today.' },
      { name: 'Stage-to-stage automation', status: 'PLANNED', note: 'Moving a deal through the pipeline is currently a manual step.' },
      { name: 'Lead qualification workflow', status: 'PLANNED', note: 'Not yet built.' },
      { name: 'Won/lost handling with reason tracking', status: 'PREPARED', note: 'The field and stage exist; no automation triggers on won/lost yet.' },
      { name: 'Sales-cycle / pipeline reporting', status: 'PLANNED', note: 'No reporting layer exists yet.' },
    ],
  },
  {
    group: 'Scheduling',
    rows: [
      { name: 'Appointment booking, reschedule, cancel', status: 'AVAILABLE', note: 'Verified end-to-end on our own calendar setup. Rolling out per-customer calendars is in progress.' },
      { name: 'Salesperson/technician assignment', status: 'AVAILABLE', note: 'Verified on our own calendar.' },
      { name: 'Round-robin routing', status: 'UNKNOWN', note: 'Observed as a calendar option; not yet verified as a supported feature for customers.' },
    ],
  },
  {
    group: 'Communications',
    rows: [
      { name: 'Two-way SMS and unified conversation inbox', status: 'UNKNOWN', note: 'Phone/SMS configuration not independently verified as of this review.' },
      { name: 'Email sending', status: 'UNKNOWN', note: 'Not independently verified as of this review.' },
      { name: 'Missed-call recovery / text-back', status: 'PLANNED', note: 'Not built yet.' },
      { name: 'Customer appointment confirmations', status: 'PREPARED', note: 'The mechanism exists in test form; live delivery to real customers is unverified.' },
      { name: 'Unsubscribe and bounce handling', status: 'PREPARED', note: 'The underlying fields exist; no automation currently enforces suppression.' },
    ],
  },
  {
    group: 'Marketing & Retention',
    rows: [
      { name: 'Customer reactivation campaigns', status: 'PLANNED', note: 'Not built yet.' },
      { name: 'Review and referral request automation', status: 'PREPARED', note: 'The underlying engine exists in code; the trigger that connects it to a real completed job is not built.' },
      { name: 'Maintenance / seasonal reminders', status: 'PLANNED', note: 'Not built yet.' },
      { name: 'Broadcast email/SMS campaigns', status: 'UNKNOWN', note: 'Not independently verified as of this review.' },
    ],
  },
  {
    group: 'Reporting & AI',
    rows: [
      { name: 'Reporting and analytics dashboards', status: 'PLANNED', note: 'No reporting layer exists yet.' },
      { name: 'AI-assisted features', status: 'PLANNED', note: 'No AI capability is verified live for this product. Any future AI feature will be labeled here only once confirmed working, never marketed ahead of that.' },
    ],
  },
  {
    group: 'Explicitly Not Part of This Product',
    rows: [
      { name: 'Estimates, proposals, quote acceptance', status: 'UNAVAILABLE', note: 'Not a CRM capability -- would require a separate estimating tool.' },
      { name: 'Dispatch, technician routing, job costing, inventory', status: 'UNAVAILABLE', note: 'Field-service management is out of scope for this product.' },
      { name: 'Payroll, accounting, QuickBooks sync', status: 'UNAVAILABLE', note: 'Would require a dedicated accounting integration.' },
      { name: 'Deposits and payment processing', status: 'UNAVAILABLE', note: 'Requires a separate, verified payment integration -- not configured.' },
    ],
  },
]

export default function CapabilitiesPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Capabilities', url: '/capabilities' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Capabilities"
        title="What's Actually Verified Working"
        description="Modern Trades CRM is being built by a working contractor consultant, not marketed ahead of what exists. Every row below is classified against our own internal build-status review -- updated as things actually get built, not as they get planned. Nothing here is a binding feature commitment."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Capabilities', href: '/capabilities' }]}
      />
      <div className="section-container max-w-4xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10 text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-2">How to read this page</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <CapabilityBadge status="AVAILABLE" />
            <CapabilityBadge status="CONFIGURED_BUT_DISABLED" />
            <CapabilityBadge status="PREPARED" />
            <CapabilityBadge status="PLANNED" />
            <CapabilityBadge status="UNAVAILABLE" />
            <CapabilityBadge status="UNKNOWN" />
          </div>
          <p>
            Only <strong>Available</strong> means a customer can rely on it today. Everything else is disclosed
            honestly rather than omitted -- including capabilities we simply haven&apos;t verified yet.
          </p>
        </div>

        {GROUPS.map((g) => (
          <div key={g.group} className="mb-10">
            <h2 className="text-subhead text-gray-900 mb-4">{g.group}</h2>
            <div className="space-y-3">
              {g.rows.map((r) => (
                <div key={r.name} className="card-panel flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-40 shrink-0"><CapabilityBadge status={r.status} /></div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">Want to know when a specific capability goes live, or discuss what you actually need?</p>
          <Link href="/contact?interest=demo" className="btn-primary">Request Info</Link>
        </div>
      </div>
    </div>
  )
}
