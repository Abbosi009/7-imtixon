import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: (() => {
    try {
      const stored = localStorage.getItem('products')
      return stored ? JSON.parse(stored) : [
        { id: 1, name: 'Laptop', price: 1500, description: 'Kuchli laptop', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Phone', price: 800, description: 'Eng yangi telefon', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Tablet', price: 600, description: 'Portativ planshet', image: 'https://via.placeholder.com/300' }
      ]
    } catch {
      return []
    }
  })(),

  addProduct: (product) => {
    set((state) => {
      const newProduct = {
        id: Date.now(),
        ...product
      }
      const updatedProducts = [...state.products, newProduct]
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      return { products: updatedProducts }
    })
  },

  deleteProduct: (id) => {
    set((state) => {
      const updatedProducts = state.products.filter(p => p.id !== id)
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      return { products: updatedProducts }
    })
  },

  updateProduct: (id, data) => {
    set((state) => {
      const updatedProducts = state.products.map(p =>
        p.id === id ? { ...p, ...data } : p
      )
      localStorage.setItem('products', JSON.stringify(updatedProducts))
      return { products: updatedProducts }
    })
  }
}))

export default useProductStore
