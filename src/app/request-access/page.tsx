import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Request Access',
  description: 'Request access to Modern Trades CRM. No live signup form is connected yet -- this page explains why and how to reach us in the meantime.',
  path: '/request-access',
})

export default function RequestAccessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Request Access', url: '/request-access' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Request Access" title="Request Access to Modern Trades CRM" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Request Access', href: '/request-access' }]} />
      <div className="section-container max-w-lg py-16">
        <p className="text-body-lg mb-8">
          There is no live signup or account-provisioning form connected on this site yet. We would rather send
          you to a working contact path than collect information into a form with nowhere verified to send it.
        </p>
        <div className="card-panel">
          <a href="https://www.subzerometrix.com/contact?subject=Modern+Trades+CRM+access+request" className="btn-primary inline-block">Contact SubZeroMetrix</a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Modern Trades CRM is under active development. Access, onboarding, and pricing are discussed directly,
          not through automated signup, while the product is at this stage.
        </p>
      </div>
    </div>
  )
}
