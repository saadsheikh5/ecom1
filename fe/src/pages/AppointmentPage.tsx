import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: 'wig styling',
    date: '',
    notes: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:py-16 sm:px-8">
      <section className="mt-6 sm:mt-10 rounded-lg sm:rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm" style={{backgroundImage: 'url(/data/images/3.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
        <div className="space-y-2 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Appointment booking</p>
          <h1 className="text-2xl sm:text-4xl font-semibold text-slate-900">Book an expert wig styling consultation</h1>
          <p className="max-w-2xl text-sm leading-6 sm:leading-7 text-slate-600">
            Secure your appointment with a professional stylist. Select your preferred service, choose a date, and let us handle the rest.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-lg sm:rounded-2xl bg-black p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Appointment request received</h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 text-slate-300">Our team will contact you soon to confirm availability and next steps.</p>
            <Link to="/" className="mt-6 sm:mt-8 inline-flex rounded-full bg-white px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-black transition hover:bg-slate-100">
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Full name</span>
                <input
                  type="text"
                  value={form.fullname}
                  onChange={(event) => setForm({ ...form, fullname: event.target.value })}
                  required
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </label>
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  required
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Phone</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  required
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </label>
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Preferred service</span>
                <select
                  value={form.service}
                  onChange={(event) => setForm({ ...form, service: event.target.value })}
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                >
                  <option value="wig styling">Wig styling consultation</option>
                  <option value="custom wig fitting">Custom wig fitting</option>
                  <option value="hair care advice">Hair care advice</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Preferred date</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => setForm({ ...form, date: event.target.value })}
                  required
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </label>
              <label className="block">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Notes</span>
                <input
                  type="text"
                  value={form.notes}
                  onChange={(event) => setForm({ ...form, notes: event.target.value })}
                  placeholder="Any preferences or questions"
                  className="mt-1 sm:mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </label>
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-900 active:scale-95">
              Request appointment
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

export default AppointmentPage
