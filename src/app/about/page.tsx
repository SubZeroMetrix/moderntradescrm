import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'About & Disclosure',
  description: 'Modern Trades CRM is built by The Modern Trades Mentor and offered nationally by SubZeroMetrix LLC.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="About" title="About Modern Trades CRM" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>
            Modern Trades CRM is built by <strong>The Modern Trades Mentor (TMT)</strong>, a contractor operations
            consultancy, and offered nationally under <strong>SubZeroMetrix LLC</strong>.
          </p>
          <h2>Ownership &amp; Affiliation</h2>
          <p>SubZeroMetrix LLC is affiliated with:</p>
          <ul>
            <li><strong>The Modern Trades Mentor</strong> -- local, hands-on contractor consulting in Pinellas County, FL, and the team that built this product. TMT consulting is optional; it is not required to use Modern Trades CRM.</li>
            <li><strong>Modern Trades</strong> -- a national contractor growth publication that routes readers here. An affiliate, not an independent third party.</li>
            <li><strong>Metrix Audit</strong> -- a free contractor diagnostic. Also an affiliate.</li>
          </ul>
          <h2>Where We Are</h2>
          <p>
            This is an early product. We describe what&apos;s verified working on the{' '}
            <a href="/capabilities">Capabilities page</a> and are direct about what&apos;s still in development. We
            don&apos;t publish pricing, a checkout flow, testimonials, or customer counts because none of those are
            real yet.
          </p>
        </div>
      </div>
    </div>
  )
}
