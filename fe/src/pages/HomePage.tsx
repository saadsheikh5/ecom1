import { Link } from 'react-router-dom'
import { benefits, categories, products, siteData } from '../data/products'
import ProductCard from '../components/ProductCard'

function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center rounded-[2rem] overflow-hidden shadow-soft">
        <div className="rounded-[2rem] p-8 sm:p-10" style={{backgroundImage: 'url(/data/images/bg-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.92)', backgroundBlendMode: 'lighten'}}>
          <div>
          <p className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Luxury Wig Boutique
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Discover premium wigs, serums, and styling tools for standout glamour.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-600">{siteData.description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:text-base"
            >
              Shop Best Sellers
            </Link>
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:text-base"
            >
              Book Appointment
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-5 shadow-sm" style={{backgroundImage: 'url(/data/images/1.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.93)', backgroundBlendMode: 'lighten'}}>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/70 via-transparent to-slate-950" />
          <img src={siteData.heroImage} alt="Featured wig" className="relative h-[420px] w-full object-cover" />
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] p-8 sm:p-10" style={{backgroundImage: 'url(/data/images/bg-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.92)', backgroundBlendMode: 'lighten'}}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore collections</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Shop by style, shade, and shape</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Curated looks for lace lovers, natural textures, and bold new colors.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="group overflow-hidden rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-soft" style={{backgroundImage: 'url(/data/images/2.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.93)', backgroundBlendMode: 'lighten'}}>
              <div className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                {category.badge}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] p-8 sm:p-10" aria-labelledby="featured-products-heading" style={{backgroundImage: 'url(/data/images/bg-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.92)', backgroundBlendMode: 'lighten'}}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Featured picks</p>
            <h2 id="featured-products-heading" className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Our best sellers for every style
            </h2>
          </div>
          <Link to="/products" className="rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
            Explore all products
          </Link>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-black px-6 py-14 text-white shadow-soft sm:px-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Stay in the loop</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Join our list for exclusive launch access</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Be first to know about new wig drops, beauty restocks, and appointment openings.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-3xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-white/70 focus:border-white focus:ring-4 focus:ring-white/20"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Unlock My Welcome Gift
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default HomePage
