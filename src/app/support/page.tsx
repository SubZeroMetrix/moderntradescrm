import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Support',
  description: 'What support actually exists for Modern Trades CRM today, and how support terms are established.',
  path: '/support',
})

export default function SupportPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Support', url: '/support' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Support" title="Support" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Support', href: '/support' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>What Exists Today</h2>
          <p>
            Modern Trades CRM is under active development by a small, working team -- there is no published support
            phone line, ticketing system, or guaranteed response-time SLA on this site as of this review. Support
            today is direct: you reach us through the working contact channel on SubZeroMetrix.com, and a real
            person responds.
          </p>

          <h2>What We Are Not Claiming</h2>
          <p>
            We do not offer 24/7 support, a published hours-of-operation guarantee, or a formal escalation tier
            structure at this stage, and we won&apos;t claim one until it&apos;s actually built and staffed.
          </p>

          <h2>How Support Terms Get Set</h2>
          <p>
            Specific response-time expectations and support channels for your account are confirmed directly during
            onboarding, once your setup and account are established -- not published as a blanket promise here,
            because they depend on what you&apos;re using and how.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
