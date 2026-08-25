import Link from 'next/link'

export interface ComparisonRow {
  capability: string
  mtcrm: string
  competitor: string
}

export interface ComparisonSource {
  label: string
  url: string
}

export function ComparisonBody({
  competitorName,
  directAnswer,
  competitorIntendedCustomer,
  mtcrmIntendedCustomer,
  rows,
  whenCompetitorFits,
  whenMtcrmFits,
  limitations,
  sources,
  pricingNote,
}: {
  competitorName: string
  directAnswer: string
  competitorIntendedCustomer: string
  mtcrmIntendedCustomer: string
  rows: ComparisonRow[]
  whenCompetitorFits: string[]
  whenMtcrmFits: string[]
  limitations: string
  sources: ComparisonSource[]
  pricingNote: string
}) {
  return (
    <div className="section-container max-w-4xl py-16">
      <div className="card-panel bg-surface-light-alt mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
        <p className="text-gray-800">{directAnswer}</p>
      </div>

      <div className="card-panel bg-amber-50 border-amber-300 mb-10 text-sm text-amber-900">
        <p>
          <strong>Disclosure:</strong> Modern Trades CRM is operated by SubZeroMetrix LLC, which also publishes this
          page. This comparison is not independent. We&apos;ve sourced every {competitorName} claim to their own
          current public documentation and marked anything we could not verify as UNKNOWN rather than guessing.
        </p>
      </div>

      <div className="prose-content">
        <h2>Who Each Product Is Built For</h2>
        <p><strong>{competitorName}:</strong> {competitorIntendedCustomer}</p>
        <p><strong>Modern Trades CRM:</strong> {mtcrmIntendedCustomer}</p>

        <h2>Capability Comparison</h2>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300 text-left">
              <th className="py-2 pr-4 font-semibold">Capability</th>
              <th className="py-2 pr-4 font-semibold">Modern Trades CRM</th>
              <th className="py-2 font-semibold">{competitorName}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.capability} className="border-b border-gray-200 align-top">
                <td className="py-2 pr-4 text-gray-700">{r.capability}</td>
                <td className="py-2 pr-4 text-gray-600">{r.mtcrm}</td>
                <td className="py-2 text-gray-600">{r.competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-content">
        <h2>When {competitorName} Is the Better Choice</h2>
        <ul>{whenCompetitorFits.map((w) => <li key={w}>{w}</li>)}</ul>

        <h2>When Modern Trades CRM Is a Useful Layer</h2>
        <ul>{whenMtcrmFits.map((w) => <li key={w}>{w}</li>)}</ul>

        <h2>Pricing</h2>
        <p>{pricingNote}</p>
        <p>
          Modern Trades CRM base pricing: <strong>Contractor CRM $99/mo</strong>,{' '}
          <strong>Revenue Recovery $199/mo</strong>, <strong>AI Front Desk $299/mo</strong>. Phone numbers, calls,
          SMS/MMS, email, and premium AI usage may carry separate usage charges, disclosed before activation.
        </p>

        <h2>Limitations of This Comparison</h2>
        <p>{limitations}</p>

        <h2>Sources</h2>
        <ul className="text-sm">
          {sources.map((s) => (
            <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
          ))}
        </ul>
      </div>

      <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
        <p className="text-gray-700 mb-4">Plans start at $99/month. See exactly what&apos;s verified working before deciding.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/capabilities" className="btn-secondary">Capabilities Matrix</Link>
          <Link href="/pricing" className="btn-secondary">Compare Plans</Link>
          <Link href="/start" className="btn-primary">Start Setup</Link>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
    </div>
  )
}
