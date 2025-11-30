import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: (() => {
    try {
      const stored = localStorage.getItem('products')
      return stored ? JSON.parse(stored) : [
        { id: 1, name: 'Laptop', price: 1500, category: 'Computers', description: 'Kuchli laptop — yuqori ishlash va oqlangan dizayn', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=1' },
        { id: 2, name: 'Phone', price: 800, category: 'Mobile', description: 'Eng yangi telefon — yuqori kamera va tezkor', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=2' },
        { id: 3, name: 'Tablet', price: 600, category: 'Mobile', description: 'Portativ planshet — multimedia va ishlash uchun ideal', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=3' },
        { id: 4, name: 'Wireless Headphones', price: 199, category: 'Audio', description: 'Shovqinni bostiruvchi simsiz quloqchinlar', image: 'https://images.unsplash.com/photo-1518444028753-0f3a1f6e6b6b?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=4' },
        { id: 5, name: 'Smartwatch', price: 249, category: 'Wearables', description: 'Sog\'liq va bildirishnomalarni kuzatish uchun aqlli soat', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=5' },
        { id: 6, name: 'Gaming Mouse', price: 59, category: 'Peripherals', description: 'Ergonomik va tezkor o\'yin sichqonchasi', image: 'https://images.unsplash.com/photo-1589389943260-2f3f6e0f7d2b?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=6' },
        { id: 7, name: 'Mechanical Keyboard', price: 129, category: 'Peripherals', description: 'Maksimal his va chidamlilik uchun mexanik klaviatura', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=7' },
        { id: 8, name: '4K Monitor', price: 399, category: 'Computers', description: 'Yuqori aniqlikdagi 4K monitor — professional ishlash uchun', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=8' },
        { id: 9, name: 'Bluetooth Speaker', price: 89, category: 'Audio', description: 'Portativ va kuchli ovoz uchun bluetooth dinamik', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=9' },
        { id: 10, name: 'Camera', price: 1200, category: 'Photography', description: 'Professional darajadagi kamera — surat va video uchun', image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=10' },
        { id: 11, name: 'Portable Charger', price: 39, category: 'Accessories', description: 'Tez zaryadlovchi portativ batareya', image: 'https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=11' },
        { id: 12, name: 'Smart Home Hub', price: 149, category: 'Smart Home', description: 'Uyingizni aqlli boshqarish uchun markaziy qurilma', image: 'https://images.unsplash.com/photo-1523475496153-3d6cc7bc93a1?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=12' }
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
