import React, { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '../data/products'

export type CartItem = Product & {
  quantity: number
}

type CartContextValue = {
  cartItems: CartItem[]
  cartCount: number
  cartTotal: string
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...current, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((current) =>
      current.map((item) => (item.id === productId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => setCartItems([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const cartTotal = useMemo(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = Number(item.price.replace(/[^0-9.]/g, '')) || 0
      return sum + price * item.quantity
    }, 0)
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)
  }, [cartItems])

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
