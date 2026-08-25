'use client'

import { useState } from 'react'
import { getFirstTouch } from '@/lib/attribution'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'disabled'

export function RequestAccessForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [emailConsent, setEmailConsent] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const first = getFirstTouch()

    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('phone'),
      companyName: data.get('companyName'),
      trade: data.get('trade'),
      city: data.get('city'),
      state: data.get('state'),
      primaryProblem: data.get('primaryProblem'),
      original_domain: first?.original_domain || 'moderntradescrm.com',
      original_landing_page: first?.original_landing_page || '',
      source_tool: first?.source_tool || 'request-access-form',
      first_content_topic: first?.first_content_topic || '',
      utm_source: first?.utm_source || '',
      utm_medium: first?.utm_medium || '',
      utm_campaign: first?.utm_campaign || '',
      utm_content: first?.utm_content || '',
      utm_term: first?.utm_term || '',
      email_consent: emailConsent,
      sms_consent: smsConsent,
    }

    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.status === 503 && json.disabled) {
        setStatus('disabled')
      } else if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Could not reach the server. Please try again or contact us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="card-panel">
        <p className="font-semibold text-gray-900 mb-2">Request received.</p>
        <p className="text-sm text-gray-500">We&apos;ll be in touch. No pricing, checkout, or automated onboarding exists yet -- this starts a real conversation.</p>
      </div>
    )
  }

  if (status === 'disabled') {
    return (
      <div className="card-panel border-amber-300 bg-amber-50">
        <p className="font-semibold text-gray-900 mb-2">This form isn&apos;t connected to a live system yet.</p>
        <p className="text-sm text-gray-700 mb-4">
          We&apos;d rather tell you honestly than pretend a submission went somewhere it didn&apos;t. Reach us
          through the working contact path instead.
        </p>
        <a href="https://www.subzerometrix.com/contact?subject=Modern+Trades+CRM+access+request" className="btn-primary inline-block">Contact SubZeroMetrix</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-1.5">First name *</label>
          <input id="firstName" name="firstName" type="text" required maxLength={100} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-1.5">Last name</label>
          <input id="lastName" name="lastName" type="text" maxLength={100} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1.5">Email *</label>
        <input id="email" name="email" type="email" required maxLength={200} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1.5">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={30} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-800 mb-1.5">Company</label>
          <input id="companyName" name="companyName" type="text" maxLength={150} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="trade" className="block text-sm font-medium text-gray-800 mb-1.5">Trade</label>
          <input id="trade" name="trade" type="text" maxLength={100} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-800 mb-1.5">City</label>
          <input id="city" name="city" type="text" maxLength={100} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-800 mb-1.5">State</label>
          <input id="state" name="state" type="text" maxLength={50} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
      </div>
      <div>
        <label htmlFor="primaryProblem" className="block text-sm font-medium text-gray-800 mb-1.5">What are you hoping software would fix?</label>
        <textarea id="primaryProblem" name="primaryProblem" rows={3} maxLength={1000} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
      </div>

      <fieldset className="space-y-3 border-t border-gray-200 pt-5">
        <legend className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Consent (optional -- not required to submit)</legend>
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={emailConsent} onChange={(e) => setEmailConsent(e.target.checked)} className="mt-0.5" />
          Send me occasional email updates about Modern Trades CRM.
        </label>
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5" />
          Text me updates (standard rates may apply). Unchecked by default.
        </label>
      </fieldset>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-50">
        {status === 'submitting' ? 'Submitting...' : 'Request Access'}
      </button>
      <p className="text-xs text-gray-400">No pricing, checkout, or free trial exists yet -- this starts a conversation, not a purchase.</p>
    </form>
  )
}
