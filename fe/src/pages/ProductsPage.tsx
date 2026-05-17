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
    <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
      <section className="mt-10 rounded-[2rem] border border-slate-200 p-8 shadow-sm sm:p-10" style={{backgroundImage: 'url(/data/images/2.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Shop the collection</p>
            <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold text-slate-900">Browse premium wigs and styling essentials</h1>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {['All', ...categories.map((category) => category.name)].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                className={`rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold transition ${
                  activeCategory === label ? 'bg-black text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-600">
            No products matched your search. Try another filter or browse our best sellers.
          </p>
        )}
      </section>
    </main>
  )
}

export default ProductsPage
