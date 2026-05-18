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
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-800/80">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative overflow-hidden bg-slate-700">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {added && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <svg className="h-8 w-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-semibold text-white">Added to Cart</p>
            </div>
          </div>
        )}
      </Link>

      {/* Content Container */}
      <div className="flex flex-grow flex-col px-4 py-4 sm:px-5 sm:py-5">
        {/* Product Title */}
        <Link 
          to={`/product/${product.id}`}
          className="mb-2 line-clamp-2 text-sm font-semibold text-slate-100 transition hover:text-amber-400"
        >
          {product.title}
        </Link>
        
        {/* Product Subtitle/Category */}
        <p className="mb-3 line-clamp-1 text-xs text-slate-400">{product.subtitle}</p>
        
        {/* Price */}
        <div className="mb-4 flex items-baseline gap-1">
          <p className="text-2xl font-bold text-amber-400">
            {product.price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2.5 text-center text-xs font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-700 active:bg-slate-800"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-3 py-2.5 text-center text-xs font-semibold text-white transition hover:from-amber-700 hover:to-amber-600 active:from-amber-800 active:to-amber-700 shadow-lg hover:shadow-amber-500/20"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
