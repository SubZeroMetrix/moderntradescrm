import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ComparisonBody } from '@/components/ComparisonPage'

export const metadata = buildMetadata({
  title: 'Modern Trades CRM vs GoHighLevel',
  description: 'The most important disclosure on this site: Modern Trades CRM is built on GoHighLevel. This page explains exactly what that means, what you are paying us for, and when going direct is the better choice.',
  path: '/compare/gohighlevel',
})

export default function CompareGoHighLevelPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'vs GoHighLevel', url: '/compare/gohighlevel' }])
  const article = articleSchema({ headline: 'Modern Trades CRM vs GoHighLevel', description: 'Modern Trades CRM is built on GoHighLevel -- what that means for buyers.', path: '/compare/gohighlevel', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader
        eyebrow="Comparison"
        title="Modern Trades CRM vs GoHighLevel"
        description="This is the comparison we have the strongest obligation to be straight about."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'vs GoHighLevel', href: '/compare/gohighlevel' }]}
      />
      <ComparisonBody
        competitorName="GoHighLevel"
        directAnswer="Modern Trades CRM is built on GoHighLevel. That is not a competitor comparison -- it is a disclosure. GoHighLevel is the underlying platform; what we add is contractor-specific configuration: trade-appropriate pipelines, field structure, consent handling, and intake design, plus the decision about what actually gets turned on. If you are technical, patient, and want to configure a general-purpose platform yourself, going direct to GoHighLevel is a legitimate and cheaper choice, and we would rather say so than pretend otherwise."
        competitorIntendedCustomer="Agencies, marketers, and technically-comfortable operators who want a general-purpose CRM/marketing automation platform they configure themselves. GoHighLevel publicly states it powers 2.2 million businesses across industries."
        mtcrmIntendedCustomer="Contractors who want a working contractor-shaped configuration rather than an empty general-purpose platform, and who would rather not spend weeks learning pipeline design, field registries, and consent architecture."
        rows={[
          { capability: 'Underlying platform', mtcrm: 'GoHighLevel -- this product is built on it', competitor: 'The platform itself' },
          { capability: 'Published pricing', mtcrm: '$99 / $199 / $299 per month base', competitor: 'Starter $97/mo, Unlimited $297/mo, Agency Pro $497/mo, Enterprise custom (retrieved 2026-08-25)' },
          { capability: 'What you are paying for', mtcrm: 'Contractor-specific configuration, pipeline/field design, consent structure, intake design, and setup support', competitor: 'Raw platform access; you design and configure everything yourself' },
          { capability: 'Contractor-specific pipelines', mtcrm: 'Available -- purpose-built Revenue Pipeline, Revenue Recovery, Customer Growth', competitor: 'You build these yourself from a blank platform' },
          { capability: 'Contractor field structure', mtcrm: 'Available -- trade, service address, emergency flag, consent fields, attribution fields already defined', competitor: 'You define every custom field yourself' },
          { capability: 'Sub-account limits', mtcrm: 'Not applicable -- you get an account, not an agency platform', competitor: '3 sub-accounts on Starter; unlimited on Unlimited and above' },
          { capability: 'Reselling / SaaS Mode', mtcrm: 'Not applicable -- we are not selling you a reseller platform', competitor: 'SaaS Mode is exclusive to Agency Pro at $497/mo' },
          { capability: 'Usage charges (phone, SMS, email, AI)', mtcrm: 'Separate and disclosed before activation -- same underlying usage model', competitor: 'Separate usage charges; rebilling with markup available on Agency Pro' },
          { capability: 'AI features', mtcrm: 'Planned -- no live AI feature is verified working for this product', competitor: 'AI features exist on the platform; availability and cost vary by plan and add-on' },
          { capability: 'Job management / invoicing / dispatch', mtcrm: 'Not part of this product', competitor: 'Not a field-service management platform either' },
          { capability: 'Support', mtcrm: 'Direct, no published SLA -- see our support page', competitor: '24/7 support listed from the Starter plan' },
        ]}
        whenCompetitorFits={[
          'You are comfortable configuring a general-purpose platform and enjoy that work.',
          'You want to resell to your own clients -- that requires GoHighLevel Agency Pro, not us.',
          'You need more than one sub-account or want full platform-level API access.',
          'Cost is the deciding factor and you would rather invest your own time than pay for configuration.',
        ]}
        whenMtcrmFits={[
          'You want a contractor-shaped setup rather than a blank platform.',
          'You do not want to design pipelines, field registries, and consent architecture yourself.',
          'You want someone to tell you plainly which capabilities are actually working before you rely on them.',
        ]}
        pricingNote="GoHighLevel's published pricing (retrieved 2026-08-25): Starter $97/mo, Unlimited $297/mo, Agency Pro $497/mo, Enterprise custom. Note the honest implication: our $99 entry plan sits near GoHighLevel's own $97 Starter price. You are paying for configuration and support, not for cheaper platform access -- and if you would rather do that configuration yourself, going direct is the rational choice."
        limitations="Based on GoHighLevel's public pricing page as retrieved 2026-08-25. Platform feature availability, AI pricing, and usage rates change and are not fully itemized here. We have a direct commercial interest in this comparison and have tried to state the case for going direct as fairly as the case for using us."
        sources={[
          { label: 'GoHighLevel pricing page (retrieved 2026-08-25)', url: 'https://www.gohighlevel.com/pricing' },
          { label: 'HighLevel pricing and billing guide', url: 'https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide' },
          { label: 'Modern Trades CRM capabilities matrix (our own verified status)', url: 'https://www.moderntradescrm.com/capabilities' },
        ]}
      />
    </div>
  )
}
