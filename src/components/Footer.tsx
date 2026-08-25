import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 mt-24">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-3">Modern Trades CRM</p>
            <p className="text-sm leading-relaxed">
              A contractor lead and sales system built by The Modern Trades Mentor, offered nationally by
              SubZeroMetrix LLC. TMT is a SubZeroMetrix LLC affiliate.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Product</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="/revenue-recovery" className="hover:text-white transition-colors">Revenue Recovery</Link></li>
              <li><Link href="/for-hvac" className="hover:text-white transition-colors">For HVAC</Link></li>
              <li><Link href="/for-plumbing" className="hover:text-white transition-colors">For Plumbing</Link></li>
              <li><Link href="/for-electrical" className="hover:text-white transition-colors">For Electrical</Link></li>
              <li><Link href="/for-roofing" className="hover:text-white transition-colors">For Roofing</Link></li>
              <li><Link href="/implementation" className="hover:text-white transition-colors">Implementation</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><a href="https://www.moderntrades.io" className="hover:text-white transition-colors">Modern Trades</a></li>
              <li><a href="https://www.subzerometrix.com" className="hover:text-white transition-colors">SubZeroMetrix</a></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-600 border-t border-white/10 pt-6">
          &copy; {new Date().getFullYear()} SubZeroMetrix LLC. Capability descriptions on this site reflect what has
          been verified working as of the last internal review -- not a complete or final feature set.
        </p>
      </div>
    </footer>
  )
}
