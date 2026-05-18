import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categories, siteData } from '../data/products'

function Header() {
  const { cartCount } = useCart()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur-md text-white">
      {/* Announcement Bar */}
      <div className="bg-gray-800 px-4 py-2 text-center text-xs font-semibold text-white md:text-sm">
        ✨ Enjoy 10% OFF Your First Purchase - Use Code: WELCOME10
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={siteData.logo} alt={siteData.brandName} className="h-10 w-10 object-contain" />
            <div>
              <p className="text-sm font-semibold leading-none">{siteData.brandName}</p>
              <p className="text-xs text-amber-300">Luxury Wigs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink 
              to="/products" 
              className={({ isActive }) => `transition-colors hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-400'}`}
            >
              All Products
            </NavLink>
            
            <div className="relative group">
              <button className="inline-flex items-center gap-1 transition-colors hover:text-gray-300 text-gray-300">
                Categories
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="rounded-lg border border-gray-700 bg-gray-900 shadow-lg p-2 min-w-max">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to="/products"
                      className="block px-4 py-2 text-sm text-gray-300 rounded-md transition hover:bg-gray-800 hover:text-white"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink 
              to="/appointment" 
              className={({ isActive }) => `transition-colors hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-400'}`}
            >
              Appointment
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Button */}
            <button className="p-2 rounded-lg hover:bg-gray-800 transition text-gray-300 hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Button */}
            <Link 
              to="/cart" 
              className="relative p-2 rounded-lg hover:bg-gray-800 transition text-gray-300 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 top-20 z-30 bg-black/50 md:hidden" onClick={closeSidebar} />
          <nav className="absolute left-0 top-full w-full bg-gray-900 border-t border-gray-800 md:hidden z-30">
            <div className="flex flex-col gap-0">
              <NavLink
                to="/products"
                onClick={closeSidebar}
                className={({ isActive }) => `px-4 py-3 text-sm font-medium border-b border-gray-800 transition ${
                  isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                All Products
              </NavLink>
              
              <details className="border-b border-gray-800 group">
                <summary className="px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800/50 transition cursor-pointer flex items-center justify-between">
                  Categories
                  <svg className="h-4 w-4 transition group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="bg-gray-800/50">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to="/products"
                      onClick={closeSidebar}
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>

              <NavLink
                to="/appointment"
                onClick={closeSidebar}
                className={({ isActive }) => `px-4 py-3 text-sm font-medium border-b border-gray-800 transition ${
                  isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                Book Appointment
              </NavLink>
              
              <NavLink
                to="/checkout"
                onClick={closeSidebar}
                className={({ isActive }) => `px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                Checkout
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default Header
