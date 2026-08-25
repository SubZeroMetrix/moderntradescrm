import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-surface-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-brand-navy tracking-tight">Modern Trades <span className="font-normal text-brand-electric">CRM</span></Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/capabilities" className="hover:text-brand-electric transition-colors">Capabilities</Link>
          <Link href="/about" className="hover:text-brand-electric transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-electric transition-colors">Contact</Link>
        </nav>
        <Link href="/contact?interest=demo" className="btn-primary !px-5 !py-2 !text-sm">Request Info</Link>
      </div>
    </header>
  )
}
