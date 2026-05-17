import { footerLinks } from '../data/products'

function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-black py-8 sm:py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-[1fr_0.9fr_0.9fr]">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">JTS Beauty</h3>
            <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm leading-6 text-slate-300">
              Premium wigs, styling products, and beauty essentials crafted for a confident, polished look.
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400 font-semibold">Browse</p>
            <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-white">
              <a href="/products" className="transition hover:text-slate-300">Products</a>
              <a href="/appointment" className="transition hover:text-slate-300">Appointments</a>
              <a href="/checkout" className="transition hover:text-slate-300">Checkout</a>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400 font-semibold">Contact</p>
            <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-white">
              {footerLinks.contact.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-slate-300">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400 font-semibold">Follow us</p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white">
              {footerLinks.social.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 border-t border-slate-900 pt-4 sm:pt-6 text-xs sm:text-sm text-slate-400 text-center">
          © 2026 JTS Beauty. Crafted for premium wig and serum shopping.
        </div>
      </div>
    </footer>
  )
}

export default Footer
