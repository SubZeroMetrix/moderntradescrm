import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Compare Modern Trades CRM',
  description: 'Honest, sourced comparisons against Jobber, Housecall Pro, ServiceTitan, FieldEdge, Service Fusion, Workiz, Contractor Foreman, and GoHighLevel -- including when the other product is the better choice.',
  path: '/compare',
})

const COMPARISONS = [
  { href: '/compare/jobber', name: 'Jobber', note: 'Full job management -- quoting, invoicing, payments. Published pricing.' },
  { href: '/compare/housecall-pro', name: 'Housecall Pro', note: 'Dispatch, routing, payments, recurring plans. Published pricing.' },
  { href: '/compare/service-titan', name: 'ServiceTitan', note: 'Enterprise field-service for larger contractors. Quote-based.' },
  { href: '/compare/fieldedge', name: 'FieldEdge', note: 'Established FSM with deep QuickBooks integration. Quote-based.' },
  { href: '/compare/service-fusion', name: 'Service Fusion', note: 'Full FSM with unlimited users on every plan. Published pricing.' },
  { href: '/compare/workiz', name: 'Workiz', note: 'FSM with AI tools and tiered automation limits. Pricing not published.' },
  { href: '/compare/contractor-foreman', name: 'Contractor Foreman', note: 'Construction project management, priced per user. Published pricing.' },
  { href: '/compare/gohighlevel', name: 'GoHighLevel', note: 'The platform we are built on. Read this one first.' },
]

export default function ComparePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Compare"
        title="Honest Comparisons"
        description="Every comparison below states plainly when the other product is the better choice. We source competitor claims to their own current documentation and mark anything we cannot verify as UNKNOWN rather than guessing."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Compare', href: '/compare' }]}
      />
      <div className="section-container max-w-4xl py-16">
        <div className="card-panel bg-amber-50 border-amber-300 mb-8 text-sm text-amber-900">
          <p>
            <strong>Disclosure:</strong> These comparisons are published by SubZeroMetrix LLC, which operates
            Modern Trades CRM. They are not independent reviews. Read the{' '}
            <Link href="/compare/gohighlevel" className="underline">GoHighLevel comparison</Link> first -- it explains
            what this product actually is and when going direct to the underlying platform is the smarter buy.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {COMPARISONS.map((c) => (
            <Link key={c.href} href={c.href} className="card-panel hover:border-brand-electric/30 transition-colors">
              <h2 className="text-lg font-bold text-gray-900 mb-2">vs {c.name}</h2>
              <p className="text-sm text-gray-500">{c.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
