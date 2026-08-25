import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-surface-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/brand/modern-trades-crm-logo.png" alt="Modern Trades CRM" width={200} height={56} className="hidden sm:block h-9 w-auto" priority />
          <Image src="/brand/modern-trades-crm-mark.png" alt="Modern Trades CRM" width={56} height={56} className="sm:hidden h-9 w-9" priority />
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/capabilities" className="hover:text-brand-electric transition-colors">Capabilities</Link>
          <Link href="/revenue-recovery" className="hover:text-brand-electric transition-colors">Revenue Recovery</Link>
          <Link href="/about" className="hover:text-brand-electric transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-electric transition-colors">Contact</Link>
        </nav>
        <Link href="/contact?interest=demo" className="btn-primary !px-5 !py-2 !text-sm shrink-0">Request Info</Link>
      </div>
    </header>
  )
}
