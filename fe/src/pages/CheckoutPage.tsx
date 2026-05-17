import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    payment: 'card'
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    clearCart()
  }

  if (cartItems.length === 0 && !submitted) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">Your checkout is empty</p>
          <p className="mt-3 text-slate-600">Add products to your cart before you finalize your order.</p>
          <Link to="/products" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Continue shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-[2rem] border border-slate-200 p-8 shadow-sm sm:p-10" style={{backgroundImage: 'url(/data/images/1.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Checkout</p>
          {submitted ? (
            <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-center">
              <h1 className="text-3xl font-semibold text-white">Order confirmed</h1>
              <p className="mt-4 text-sm leading-6 text-slate-300">Your order is on its way. We’ll reach out soon with shipping details and appointment scheduling help.</p>
              <Link to="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Back to home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Full name</span>
                  <input
                    value={form.fullname}
                    onChange={(event) => setForm({ ...form, fullname: event.target.value })}
                    required
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Phone</span>
                  <input
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">City</span>
                  <input
                    value={form.city}
                    onChange={(event) => setForm({ ...form, city: event.target.value })}
                    required
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Shipping address</span>
                <textarea
                  value={form.address}
                  onChange={(event) => setForm({ ...form, address: event.target.value })}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
                />
              </label>
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-700">Payment method</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: 'card', label: 'Credit card' },
                    { value: 'paypal', label: 'PayPal' },
                    { value: 'cash', label: 'Cash on delivery' }
                  ].map((method) => (
                    <label key={method.value} className="inline-flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-slate-500">
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={form.payment === method.value}
                        onChange={() => setForm({ ...form, payment: method.value })}
                        className="h-4 w-4 accent-slate-500"
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                Complete order
              </button>
            </form>
          )}
        </section>

        <aside className="rounded-[2rem] border border-slate-200 p-8 shadow-sm" style={{backgroundImage: 'url(/data/images/2.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Your order</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 rounded-3xl bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500">Qty {item.quantity}</p>
                </div>
                <span className="font-semibold text-slate-900">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <div className="flex items-center justify-between pb-3">
              <span>Subtotal</span>
              <span>{cartTotal}</span>
            </div>
            <div className="flex items-center justify-between pb-3">
              <span>Shipping</span>
              <span>$12.00</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(cartTotal.replace(/[^0-9.]/g, '')) + 12)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default CheckoutPage
