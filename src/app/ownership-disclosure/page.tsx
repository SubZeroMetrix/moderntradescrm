import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Ownership & Disclosure',
  description: 'Who operates Modern Trades CRM and how it relates to The Modern Trades Mentor and other SubZeroMetrix LLC properties.',
  path: '/ownership-disclosure',
})

export default function OwnershipDisclosurePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ownership & Disclosure', url: '/ownership-disclosure' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Ownership & Disclosure" title="Ownership & Disclosure" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Ownership & Disclosure', href: '/ownership-disclosure' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>Who Operates This Site</h2>
          <p>
            Modern Trades CRM is operated by <strong>SubZeroMetrix LLC</strong>. The product itself is built by{' '}
            <strong>The Modern Trades Mentor (TMT)</strong>, a contractor operations consultancy.
          </p>

          <h2>Affiliated Businesses</h2>
          <p>SubZeroMetrix LLC also owns or is affiliated with:</p>
          <ul>
            <li><strong>The Modern Trades Mentor</strong> -- local, hands-on contractor consulting in Pinellas County, FL. TMT consulting is optional and is not required to use Modern Trades CRM.</li>
            <li><strong>Modern Trades</strong> (moderntrades.io) -- a national contractor operations publication.</li>
            <li><strong>Metrix Audit</strong> (metrixaudit.com) -- a free contractor operating diagnostic.</li>
            <li><strong>SubZeroMetrix</strong> (subzerometrix.com) and other SubZeroMetrix LLC properties.</li>
          </ul>
          <p>
            When any of these properties recommends Modern Trades CRM or The Modern Trades Mentor, that
            recommendation is not independent -- it comes from a commonly-owned affiliate. We disclose this
            directly next to any such recommendation, not only here.
          </p>

          <h2>Affiliate Business Standing</h2>
          <p>
            The Modern Trades Mentor LLC, an affiliated company, has a{' '}
            <a href="https://www.bbb.org/us/fl/dunedin/profile/consultant/the-modern-trades-mentor-llc-0653-90465091">BBB Business Profile with BBB Serving West Florida</a>.
            This profile and its status do not apply to Modern Trades CRM.
          </p>

          <h2>What We Don&apos;t Do</h2>
          <p>
            We don&apos;t use fake testimonials, invented user counts, or unsupported ROI claims. We don&apos;t
            claim third-party endorsement from BBB, SCORE, or any other institution. Every capability described on
            this site is labeled against what&apos;s actually verified working -- see the{' '}
            <a href="/capabilities">capabilities matrix</a>.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
