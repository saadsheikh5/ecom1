import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

function ProductsPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = [product.title, product.subtitle, product.details]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesCategory = activeCategory === 'All' || product.title.toLowerCase().includes(activeCategory.toLowerCase())
      return matchesQuery && matchesCategory
    })
  }, [activeCategory, query])

  return (
    <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="mt-8 sm:mt-12">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 font-medium">Shop the collection</p>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Browse premium wigs and styling essentials
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Discover our curated collection of luxury wigs crafted for style, comfort, and confidence.
            </p>
          </div>

          {/* Category Filter - Horizontal Scroll on Mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
            {['All', ...categories.map((category) => category.name)].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition whitespace-nowrap ${
                  activeCategory === label 
                    ? 'bg-black text-white' 
                    : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search wigs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
            />
          </div>
        </div>
      </section>

      {/* Products Grid - Mobile First */}
      <section className="mt-10 sm:mt-12">
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24">
            <p className="text-center text-base sm:text-lg text-slate-600 mb-4">
              No products matched your search.
            </p>
            <button
              onClick={() => {
                setQuery('')
                setActiveCategory('All')
              }}
              className="mt-4 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default ProductsPage
