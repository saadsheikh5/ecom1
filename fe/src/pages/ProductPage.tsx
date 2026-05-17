import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-white">Product not found</p>
          <button
            onClick={() => navigate('/products')}
            className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            Browse products
          </button>
        </div>
      </main>
    )
  }

  const handleAdd = () => {
    addToCart(product, quantity)
    setAdded(true)
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:py-16 sm:px-8">
      <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.95fr_0.8fr]">
        <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 shadow-sm sm:shadow-soft">
          <img src={product.image} alt={product.title} className="h-80 sm:h-96 lg:h-[520px] w-full object-cover" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-black p-6 sm:p-8 shadow-sm text-white">
          <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Wig
          </span>
          <h1 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-semibold text-white">{product.title}</h1>
          <p className="mt-3 sm:mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">{product.price}</p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">{product.details}</p>
          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Texture</p>
              <p className="mt-2 text-base sm:text-lg font-semibold text-white">{product.subtitle}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-400 font-medium">Density</p>
              <p className="mt-2 text-base sm:text-lg font-semibold text-white">250</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <label className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">Quantity</label>
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 p-2 sm:p-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-800 text-white text-sm sm:text-base transition hover:bg-slate-700 active:scale-95"
              >
                −
              </button>
              <span className="w-6 sm:w-8 text-center text-sm sm:text-base font-semibold text-white">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-800 text-white text-sm sm:text-base transition hover:bg-slate-700 active:scale-95"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="mt-6 sm:mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition hover:bg-slate-100 active:scale-95"
          >
            Add to cart
          </button>
          {added && (
            <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm font-medium text-green-400">✓ Added to cart</p>
          )}
          <button
            onClick={() => navigate('/checkout')}
            className="mt-3 sm:mt-4 inline-flex w-full items-center justify-center rounded-full border border-white bg-transparent px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10 active:scale-95"
          >
            Buy now
          </button>
        </div>
      </div>
    </main>
  )
}

export default ProductPage
