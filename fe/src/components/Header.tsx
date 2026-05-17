import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categories, siteData } from '../data/products'

function Header() {
  const { cartCount } = useCart()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-900 bg-black text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={siteData.logo} alt="JTS Beauty" className="h-11 w-11 rounded-full object-cover shadow-sm" />
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white">{siteData.brandName}</p>
            <p className="text-xs text-slate-400">Luxury wig boutique</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-white">
          <NavLink to="/products" className={({ isActive }) => isActive ? 'text-white' : 'transition hover:text-slate-300'}>Products</NavLink>
          <div className="relative group">
            <button type="button" className="inline-flex items-center gap-1 transition hover:text-slate-300">
              Categories
            </button>
            <div className="pointer-events-none absolute left-0 top-full z-10 hidden w-56 rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-soft group-hover:block group-hover:pointer-events-auto">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to="/products"
                  className="block rounded-3xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/appointment" className={({ isActive }) => isActive ? 'text-white' : 'transition hover:text-slate-300'}>Appointment</NavLink>
          <NavLink to="/checkout" className={({ isActive }) => isActive ? 'text-white' : 'transition hover:text-slate-300'}>Checkout</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
            Cart
            <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-slate-900">{cartCount}</span>
          </Link>
          <Link to="/appointment" className="hidden rounded-full border border-slate-700 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900 md:inline-flex">
            Book Appointment
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700 bg-black p-2 text-white transition hover:bg-slate-900"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-10 bg-black/50 md:hidden"
            onClick={closeSidebar}
          />
          
          {/* Sidebar */}
          <div className="fixed left-0 top-20 z-20 w-64 border-r border-slate-800 bg-black text-white md:hidden">
            <nav className="flex flex-col gap-1 p-4">
              <NavLink
                to="/products"
                onClick={closeSidebar}
                className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                Products
              </NavLink>
              
              <div className="px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400 mb-3">Categories</p>
                <div className="flex flex-col gap-1 ml-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to="/products"
                      onClick={closeSidebar}
                      className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <NavLink
                to="/appointment"
                onClick={closeSidebar}
                className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                Appointment
              </NavLink>
              
              <NavLink
                to="/checkout"
                onClick={closeSidebar}
                className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                Checkout
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
