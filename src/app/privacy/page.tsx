import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Modern Trades CRM handles visitor and prospect information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy', url: '/privacy' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Privacy" title="Privacy Policy" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>Modern Trades CRM is offered nationally by SubZeroMetrix LLC, built by The Modern Trades Mentor.</p>
          <h2>Analytics</h2>
          <p>This site uses privacy-conscious analytics (Vercel Analytics) to understand aggregate traffic. It does not use tracking cookies or sell any data.</p>
          <h2>Contact Information</h2>
          <p>If you contact us through the SubZeroMetrix.com contact form linked from this site, that submission is governed by <a href="https://www.subzerometrix.com/privacy">SubZeroMetrix&apos;s privacy policy</a>.</p>
          <h2>Product Data</h2>
          <p>If you become a Modern Trades CRM customer, how your business&apos;s data is handled inside the product will be covered by a separate data processing agreement provided at that time -- not yet published because the product isn&apos;t generally available.</p>
        </div>
      </div>
    </div>
  )
}
