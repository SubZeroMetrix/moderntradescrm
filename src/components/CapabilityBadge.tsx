export type CapabilityStatus =
  | 'AVAILABLE'
  | 'CONFIGURED_BUT_DISABLED'
  | 'PREPARED'
  | 'PLANNED'
  | 'UNAVAILABLE'
  | 'UNKNOWN'

const LABELS: Record<CapabilityStatus, string> = {
  AVAILABLE: 'Available',
  CONFIGURED_BUT_DISABLED: 'Configured, not yet enabled',
  PREPARED: 'Prepared, not yet automated',
  PLANNED: 'Planned',
  UNAVAILABLE: 'Not part of this product',
  UNKNOWN: 'Not yet verified',
}

const STYLES: Record<CapabilityStatus, string> = {
  AVAILABLE: 'bg-emerald-100 text-emerald-700',
  CONFIGURED_BUT_DISABLED: 'bg-blue-100 text-blue-700',
  PREPARED: 'bg-amber-100 text-amber-700',
  PLANNED: 'bg-gray-200 text-gray-600',
  UNAVAILABLE: 'bg-gray-100 text-gray-400',
  UNKNOWN: 'bg-gray-100 text-gray-400',
}

export function CapabilityBadge({ status }: { status: CapabilityStatus }) {
  return (
    <span className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ${STYLES[status]}`}>
      {LABELS[status]}
    </span>
  )
}
