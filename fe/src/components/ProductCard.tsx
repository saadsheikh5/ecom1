import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-black bg-black text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-48 sm:h-64 w-full object-cover" />
      </Link>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between gap-2 text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-400">
          <span>WIGS</span>
          <span className="font-semibold text-white">{product.price}</span>
        </div>
        <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white line-clamp-2">{product.title}</h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-300 line-clamp-2">{product.subtitle}</p>
        <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center justify-center rounded-full border border-white bg-black px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-900 hover:border-slate-300"
          >
            View product
          </Link>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black transition hover:bg-slate-200"
          >
            Add to cart
          </button>
        </div>
        {added && <p className="mt-2 text-xs sm:text-sm text-green-400 font-medium">✓ Added to cart</p>}
      </div>
    </article>
  )
}

export default ProductCard
