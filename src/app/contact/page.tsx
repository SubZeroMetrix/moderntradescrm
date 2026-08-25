import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Request Info',
  description: 'Request information about Modern Trades CRM or ask about a demo.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="section-container max-w-lg">
        <p className="text-label text-brand-electric mb-3">Request Info</p>
        <h1 className="text-headline text-gray-900 mb-4">Talk to Us About Modern Trades CRM</h1>
        <p className="text-body-lg mb-8">
          A live request form isn&apos;t connected on this site yet -- we don&apos;t want to collect information into
          a form that isn&apos;t actually wired up. In the meantime, reach us through the working contact form on
          SubZeroMetrix.com and mention Modern Trades CRM.
        </p>
        <div className="card-panel">
          <a href="https://www.subzerometrix.com/contact?subject=Modern+Trades+CRM+interest" className="btn-primary inline-block">Contact SubZeroMetrix</a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          No pricing, checkout, or free trial exists yet for this product -- reaching out starts a conversation, not a purchase.
        </p>
      </div>
    </div>
  )
}
