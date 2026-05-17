import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AppointmentPage from './pages/AppointmentPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-slate-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
