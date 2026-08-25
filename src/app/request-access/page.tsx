import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { RequestAccessForm } from '@/components/RequestAccessForm'

export const metadata = buildMetadata({
  title: 'Request Access',
  description: 'Request access to Modern Trades CRM -- no pricing, checkout, or free trial exists yet. This starts a real conversation, not a purchase.',
  path: '/request-access',
})

export default function RequestAccessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Request Access', url: '/request-access' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Request Access"
        title="Request Access to Modern Trades CRM"
        description="Tell us about your business and what you need. If our submission system isn't live yet when you try, we'll tell you honestly and point you to a working contact path instead."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Request Access', href: '/request-access' }]}
      />
      <div className="section-container max-w-2xl py-16">
        <RequestAccessForm />
      </div>
    </div>
  )
}
