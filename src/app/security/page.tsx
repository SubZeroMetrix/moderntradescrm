import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Security',
  description: 'What is actually verified about how Modern Trades CRM and this website handle data today -- and what remains unconfirmed.',
  path: '/security',
})

export default function SecurityPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Security', url: '/security' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Security"
        title="Security -- What's Verified, What's Not"
        description="This page lists only what has been independently checked about how this site and Modern Trades CRM handle data. Where something hasn't been verified, it's labeled UNKNOWN rather than assumed."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Security', href: '/security' }]}
      />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>This Website</h2>
          <ul>
            <li><strong>Hosting:</strong> This marketing site is hosted on Vercel, which provisions HTTPS/TLS automatically for the custom domain -- verified live on moderntradescrm.com.</li>
            <li><strong>No credentials in this site&apos;s code or configuration:</strong> As of this review, this project has zero environment variables configured on its Vercel deployment -- verified via the Vercel CLI. No CRM credentials, API keys, or tokens are wired into this website, client-side or server-side.</li>
            <li><strong>No live data collection yet:</strong> The <Link href="/contact">contact</Link> and <Link href="/request-access">request access</Link> pages do not submit to a live form or database -- they link out to a working contact channel instead. Nothing typed into this site is currently stored by it.</li>
          </ul>

          <h2>The CRM Platform</h2>
          <p>
            Modern Trades CRM is built on GoHighLevel, a third-party SaaS CRM platform -- the underlying contact,
            pipeline, and workflow data lives there, not in this website&apos;s code.
          </p>
          <ul>
            <li><strong>Consent fields:</strong> SMS and email consent status, source, and timestamp fields exist on the contact record (verified built as of 2026-08-25). Whether an automation currently enforces those consent values before sending is a separate question -- see the <Link href="/capabilities">capabilities matrix</Link>.</li>
            <li><strong>Access controls:</strong> Not yet independently documented on this page. User-level permissions within the platform are managed by the account owner; specifics have not been published here.</li>
            <li><strong>Encryption specifications, SOC 2 or other compliance certifications, uptime guarantees, disaster-recovery/backup posture:</strong> UNKNOWN -- not independently verified as of this review. We are not publishing a claim about any of these until it has been confirmed directly, and we will not describe GoHighLevel&apos;s infrastructure using language we haven&apos;t verified against their own current documentation.</li>
          </ul>

          <h2>Data Minimization</h2>
          <p>
            No form on this site currently collects information, so there is currently nothing to minimize on the
            website side. When a live form is connected, it will collect only the fields needed for the stated
            purpose, with consent state tracked per the fields above -- and this page will be updated to reflect
            what actually goes live, not what&apos;s planned.
          </p>

          <h2>Customer Responsibilities</h2>
          <p>
            Once live, account owners are responsible for who on their team has access to their CRM account, for
            honoring consent and opt-out requests they receive directly, and for their own compliance obligations
            (e.g. TCPA consent requirements -- see the <a href="https://www.moderntrades.io/resources/phone-and-sms-readiness">Phone &amp; SMS Readiness guide</a>) under any applicable law.
          </p>

          <h2>Known Limitations</h2>
          <p>
            This page reflects a review conducted 2026-08-25 against this repository&apos;s configuration, this
            site&apos;s Vercel deployment settings, and the available internal build-status notes for the CRM
            platform account. It does not reflect a third-party security audit or penetration test -- none has
            been conducted. Items marked UNKNOWN above will be updated only once independently confirmed, not
            assumed favorably.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
