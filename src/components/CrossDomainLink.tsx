'use client'

import { useState, useEffect } from 'react'
import { withAttribution } from '@/lib/attribution'

/** Renders a plain anchor for SSR/crawlers, then rewrites href client-side to
 * carry first-touch attribution to another SubZeroMetrix domain on click. */
export function CrossDomainLink({
  href,
  sourceTool,
  topic,
  className,
  children,
}: {
  href: string
  sourceTool?: string
  topic?: string
  className?: string
  children: React.ReactNode
}) {
  const [resolvedHref, setResolvedHref] = useState(href)

  useEffect(() => {
    setResolvedHref(withAttribution(href, { source_tool: sourceTool, topic }))
  }, [href, sourceTool, topic])

  return (
    <a href={resolvedHref} className={className}>
      {children}
    </a>
  )
}
