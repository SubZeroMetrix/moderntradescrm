import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for the Modern Trades CRM website.',
  path: '/terms',
})

export default function TermsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms', url: '/terms' }])

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Legal</p>
        <h1 className="text-headline text-gray-900 mb-8">Terms of Use</h1>
        <div className="prose-content">
          <p>This site is operated by SubZeroMetrix LLC on behalf of The Modern Trades Mentor.</p>
          <h2>Product Status</h2>
          <p>Modern Trades CRM is an early-stage product. The <a href="/capabilities">Capabilities page</a> reflects our current honest assessment of what is verified working; it is not a binding feature commitment, and capabilities described as &quot;in development&quot; may change or take longer than expected.</p>
          <h2>No Pricing or Purchase</h2>
          <p>This site does not currently offer pricing, checkout, or a free trial. Contacting us starts a conversation, not a transaction.</p>
          <h2>Affiliate Links</h2>
          <p>This site links to Modern Trades and Metrix Audit, both SubZeroMetrix LLC affiliates.</p>
        </div>
      </div>
    </div>
  )
}
