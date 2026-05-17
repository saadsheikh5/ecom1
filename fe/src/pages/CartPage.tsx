import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:py-16 sm:px-8">
      <div className="mt-6 sm:mt-10 rounded-lg sm:rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm" style={{backgroundImage: 'url(/data/images/1.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
        <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Your cart</p>
            <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold text-slate-900">Ready for checkout</h1>
          </div>
          <span className="w-fit rounded-full bg-slate-100 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700">
            {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-8 sm:mt-12 rounded-lg sm:rounded-3xl border border-dashed border-slate-300 px-6 sm:px-8 py-12 sm:py-16 text-center text-slate-600">
            <p className="text-base sm:text-lg font-semibold text-slate-900">Your cart is empty</p>
            <p className="mt-2 sm:mt-3 text-sm">Add a couple of products to begin your checkout journey.</p>
            <Link to="/products" className="mt-6 sm:mt-8 inline-flex rounded-full bg-black px-6 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-900">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="rounded-lg sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                  <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-start">
                    <img src={item.image} alt={item.title} className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg sm:rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-500 font-medium">WIGS</p>
                      <h2 className="mt-1 sm:mt-2 text-base sm:text-xl font-semibold text-slate-900 line-clamp-2">{item.title}</h2>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600 line-clamp-2">{item.subtitle}</p>
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                        <label className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-slate-700">
                          Qty
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(event) => updateQuantity(item.id, Math.max(1, Number(event.target.value) || 1))}
                            className="w-12 sm:w-16 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs sm:text-sm text-slate-900 outline-none"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full border border-red-200 bg-red-50 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-slate-500 font-medium">Price</p>
                      <p className="mt-1 sm:mt-2 text-lg sm:text-2xl font-semibold text-slate-900">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-lg sm:rounded-2xl border border-slate-200 p-4 sm:p-8 shadow-sm" style={{backgroundImage: 'url(/data/images/3.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-slate-500 font-semibold">Order summary</p>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 sm:pb-3">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 sm:pb-3">
                  <span>Shipping</span>
                  <span className="font-medium text-slate-900">$12.00</span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(cartTotal.replace(/[^0-9.]/g, '')) + 12)}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="mt-6 sm:mt-8 w-full rounded-full bg-black px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-900 active:scale-95"
              >
                Proceed to checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}

export default CartPage
