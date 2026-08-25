import Link from 'next/link'

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumb: { name: string; href: string }[]
}) {
  return (
    <div className="bg-gradient-navy dark-section py-16">
      <div className="section-container max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
          {breadcrumb.map((item, i) => (
            <span key={item.href}>
              {i > 0 && <span className="mx-2" aria-hidden="true">/</span>}
              {i === breadcrumb.length - 1 ? (
                <span className="text-white">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-brand-cyan transition-colors">{item.name}</Link>
              )}
            </span>
          ))}
        </nav>
        <p className="text-label text-brand-cyan mb-3">{eyebrow}</p>
        <h1 className="text-headline text-white mb-4">{title}</h1>
        {description && <p className="text-body-lg max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}
