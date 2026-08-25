'use client'

import { useState } from 'react'
import { getFirstTouch } from '@/lib/attribution'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PLAN_OPTIONS = [
  { value: 'contractor-crm', label: 'Contractor CRM -- $99/mo' },
  { value: 'revenue-recovery', label: 'Revenue Recovery -- $199/mo' },
  { value: 'ai-front-desk', label: 'AI Front Desk -- $299/mo' },
]

const NEED_OPTIONS = [
  'Respond to leads faster',
  'Recover missed calls',
  'Follow up on estimates',
  'Reactivate old customers',
  'Generate more reviews and referrals',
  'Organize customer communication',
  'Add an AI receptionist',
  'Improve pipeline visibility',
  'Replace spreadsheets',
  'Connect marketing to an existing field-service platform',
]

export function StartSignupForm({ defaultPlan }: { defaultPlan: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [emailConsent, setEmailConsent] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [submittedPlan, setSubmittedPlan] = useState(defaultPlan)

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
      teamSize: data.get('teamSize'),
      currentSoftware: data.get('currentSoftware'),
      primaryNeed: data.get('primaryNeed'),
      plan: data.get('plan'),
      state: data.get('state'),
      original_domain: first?.original_domain || 'moderntradescrm.com',
      original_landing_page: first?.original_landing_page || '',
      source_tool: first?.source_tool || 'start-signup-form',
      utm_source: first?.utm_source || '',
      utm_medium: first?.utm_medium || '',
      utm_campaign: first?.utm_campaign || '',
      email_consent: emailConsent,
      sms_consent: smsConsent,
    }

    try {
      const res = await fetch('/api/start-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setSubmittedPlan(String(data.get('plan') || defaultPlan))
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
      <div className="card-panel" role="status" aria-live="polite">
        <p className="font-semibold text-gray-900 mb-2">Your Modern Trades CRM setup request has been received.</p>
        <p className="text-sm text-gray-700 mb-4">
          Plan you selected: <strong>{PLAN_OPTIONS.find((p) => p.value === submittedPlan)?.label || submittedPlan}</strong>
        </p>
        <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700 mb-4">
          <p className="font-semibold text-gray-900 mb-2">What this is, and what it isn&apos;t</p>
          <p className="mb-2">
            <strong>No charge has been made.</strong> This request did <strong>not</strong> create an account,
            a subscription, or a trial, and no payment information was collected.
          </p>
          <p>
            What happens next: a real person reviews your request, confirms the plan and any applicable usage
            charges (phone, SMS, email, AI), and walks through what setup involves for your business. Nothing is
            activated or billed until you agree to it.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/capabilities" className="btn-secondary text-center">See What&apos;s Verified Working</a>
          <a href="/implementation" className="btn-outline-visible text-center">How Implementation Works</a>
        </div>
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1.5">Work email *</label>
        <input id="email" name="email" type="email" required maxLength={200} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1.5">Mobile phone</label>
          <input id="phone" name="phone" type="tel" maxLength={30} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-800 mb-1.5">Company name</label>
          <input id="companyName" name="companyName" type="text" maxLength={150} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="trade" className="block text-sm font-medium text-gray-800 mb-1.5">Trade</label>
          <input id="trade" name="trade" type="text" maxLength={100} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-800 mb-1.5">Team size</label>
          <input id="teamSize" name="teamSize" type="text" maxLength={50} placeholder="e.g. 2-5" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-800 mb-1.5">State</label>
          <input id="state" name="state" type="text" maxLength={50} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
        </div>
      </div>
      <div>
        <label htmlFor="currentSoftware" className="block text-sm font-medium text-gray-800 mb-1.5">Current CRM or field-service software (if any)</label>
        <input id="currentSoftware" name="currentSoftware" type="text" maxLength={150} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric" />
      </div>
      <div>
        <label htmlFor="primaryNeed" className="block text-sm font-medium text-gray-800 mb-1.5">Primary need</label>
        <select id="primaryNeed" name="primaryNeed" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric">
          {NEED_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-800 mb-1.5">Selected plan</label>
        <select id="plan" name="plan" defaultValue={defaultPlan} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric">
          {PLAN_OPTIONS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
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
        {status === 'submitting' ? 'Submitting...' : 'Start Setup'}
      </button>
      <p className="text-xs text-gray-500">
        Submitting this sends a setup request. It does not create an account, subscription, or trial, and no
        payment information is collected. We confirm your plan and any usage charges before anything is activated.
      </p>
    </form>
  )
}
