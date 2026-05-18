import { Link } from 'react-router-dom'
import { benefits, categories, products, siteData } from '../data/products'
import ProductCard from '../components/ProductCard'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src={siteData.heroImage} 
            alt="Featured collection" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex w-fit rounded-full bg-amber-500/20 border border-amber-500/50 px-4 py-1.5 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300">
                  ✨ Luxury Wigs Collection
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Elevate Your Style with Premium Wigs
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-lg">
                {siteData.description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:from-amber-700 hover:to-amber-600 active:from-amber-800 active:to-amber-700 shadow-lg hover:shadow-amber-500/30 whitespace-nowrap"
                >
                  Shop Now
                </Link>
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-700/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700 active:bg-slate-800 whitespace-nowrap"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Benefits */}
              <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item.title} className="rounded-lg border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-4">
                    <h3 className="text-sm font-semibold text-amber-300">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image (Visible on larger screens) */}
            <div className="hidden lg:block relative h-96 lg:h-[500px]">
              <img 
                src={siteData.heroImage} 
                alt="Featured collection" 
                className="h-full w-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl">
        {/* Collections Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-slate-800">
          {/* Section Header */}
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Shop Collections</span>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Explore Our Curated Collections
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Discover our premium selection of wigs, serums, and styling tools curated for every style.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/products"
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm p-6 sm:p-7 transition hover:border-amber-500/50 hover:bg-slate-800 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:to-amber-600/0 transition" />

                <div className="relative z-10">
                  <div className="inline-flex rounded-lg bg-amber-500/20 border border-amber-500/50 px-3 py-1 mb-4">
                    <span className="text-xs font-semibold text-amber-300">{category.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition">{category.name}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{category.description}</p>
                  
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:gap-3 transition">
                    Explore
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-slate-800" aria-labelledby="featured-products">
          {/* Section Header */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Featured Picks</span>
              </div>
              <h2 id="featured-products" className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Best Sellers for Every Style
              </h2>
            </div>
            <Link 
              to="/products"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-amber-700 hover:to-amber-600 whitespace-nowrap shadow-lg hover:shadow-amber-500/30"
            >
              Explore All Products
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mx-4 my-16 sm:mx-6 lg:mx-8 lg:my-24 rounded-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-amber-600/20 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Newsletter</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Join Our Exclusive List
              </h2>
              
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Get first access to new collections, exclusive discounts, and special offers delivered to your inbox.
              </p>

              {/* Newsletter Form */}
              <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg border border-slate-600/50 bg-slate-800/50 backdrop-blur-sm px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition"
                />
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-amber-700 hover:to-amber-600 whitespace-nowrap shadow-lg hover:shadow-amber-500/30"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
