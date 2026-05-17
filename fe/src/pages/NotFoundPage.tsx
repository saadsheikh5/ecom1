import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-6 py-16 sm:px-8">
      <div className="rounded-3xl border border-slate-200 p-10 text-center shadow-sm" style={{backgroundImage: 'url(/data/images/3.PNG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', backgroundBlendMode: 'lighten'}}>
        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">404 error</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">The page you’re looking for does not exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
