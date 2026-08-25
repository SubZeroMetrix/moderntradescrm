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
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/pricing" className="hover:text-brand-electric transition-colors">Pricing</Link>
          <Link href="/capabilities" className="hover:text-brand-electric transition-colors">Capabilities</Link>
          <div className="relative group">
            <button className="hover:text-brand-electric transition-colors">By Trade</button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-surface-border rounded-lg shadow-lg py-2 w-44">
                <Link href="/for-hvac" className="block px-4 py-2 text-sm hover:bg-surface-light-alt">HVAC</Link>
                <Link href="/for-plumbing" className="block px-4 py-2 text-sm hover:bg-surface-light-alt">Plumbing</Link>
                <Link href="/for-electrical" className="block px-4 py-2 text-sm hover:bg-surface-light-alt">Electrical</Link>
                <Link href="/for-roofing" className="block px-4 py-2 text-sm hover:bg-surface-light-alt">Roofing</Link>
              </div>
            </div>
          </div>
          <Link href="/implementation" className="hover:text-brand-electric transition-colors">Implementation</Link>
          <Link href="/security" className="hover:text-brand-electric transition-colors">Security</Link>
          <Link href="/about" className="hover:text-brand-electric transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-electric transition-colors">Contact</Link>
        </nav>
        <Link href="/pricing" className="btn-primary !px-5 !py-2 !text-sm shrink-0">Start Now</Link>
      </div>
    </header>
  )
}
