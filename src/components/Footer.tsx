import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 mt-24">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-3">Modern Trades CRM</p>
            <p className="text-sm leading-relaxed">
              Modern Trades CRM is a contractor lead and sales system operated by SubZeroMetrix LLC.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Product</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/start" className="hover:text-white transition-colors">Start Now</Link></li>
              <li><Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="/implementation" className="hover:text-white transition-colors">Implementation</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/ownership-disclosure" className="hover:text-white transition-colors">Ownership &amp; Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 border-t border-white/10 pt-6">
          &copy; {new Date().getFullYear()} SubZeroMetrix LLC.
        </p>
      </div>
    </footer>
  )
}
