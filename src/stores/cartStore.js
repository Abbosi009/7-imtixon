import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: (() => {
    try {
      const stored = localStorage.getItem('cart')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })(),

  addItem: (product, qty = 1) => set((state) => {
    const exist = state.items.find(i => i.id === product.id)
    let updated
    if (exist) {
      updated = state.items.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
    } else {
      updated = [...state.items, { id: product.id, name: product.name, price: product.price, image: product.image, qty }]
    }
    localStorage.setItem('cart', JSON.stringify(updated))
    return { items: updated }
  }),

  removeItem: (id) => set((state) => {
    const updated = state.items.filter(i => i.id !== id)
    localStorage.setItem('cart', JSON.stringify(updated))
    return { items: updated }
  }),

  clear: () => set(() => {
    localStorage.removeItem('cart')
    return { items: [] }
  }),

  totalCount: () => {
    try {
      const stored = localStorage.getItem('cart')
      const items = stored ? JSON.parse(stored) : []
      return items.reduce((s, i) => s + (i.qty || 0), 0)
    } catch {
      return 0
    }
  },

  totalPrice: () => {
    try {
      const stored = localStorage.getItem('cart')
      const items = stored ? JSON.parse(stored) : []
      return items.reduce((s, i) => s + (i.qty || 0) * (i.price || 0), 0)
    } catch {
      return 0
    }
  }
}))

export default useCartStore
