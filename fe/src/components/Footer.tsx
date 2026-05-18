import { Link } from 'react-router-dom'
import { footerLinks, siteData } from '../data/products'

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm py-12 sm:py-16 lg:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={siteData.logo} alt={siteData.brandName} className="h-8 w-8 object-contain" />
              <h3 className="text-lg font-bold text-white">{siteData.brandName}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium luxury wigs and styling essentials crafted for confidence and elegance.
            </p>
            <div className="mt-6 flex gap-4">
              {footerLinks.social.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 transition hover:bg-white/10 hover:border-gray-600 hover:text-white"
                  aria-label={link.label}
                >
                  <span className="text-xs font-semibold">{link.label.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/products" className="text-sm text-gray-400 transition hover:text-white">
                All Products
              </Link>
              <Link to="/appointment" className="text-sm text-gray-400 transition hover:text-white">
                Book Appointment
              </Link>
              <Link to="/checkout" className="text-sm text-gray-400 transition hover:text-white">
                Checkout
              </Link>
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Track Order
              </a>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Customer Service</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.contact.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Returns & Exchanges
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Shipping Info
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">Legal</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Accessibility
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                Cookie Settings
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 sm:pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {siteData.brandName}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-gray-300">Privacy</a>
              <a href="#" className="transition hover:text-gray-300">Terms</a>
              <a href="#" className="transition hover:text-gray-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
