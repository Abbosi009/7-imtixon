import React from 'react'
import useCartStore from '@/stores/cartStore'
import { Link } from 'react-router-dom'

const Cart = ({ open, onClose }) => {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const clear = useCartStore(state => state.clear)
  const totalPrice = useCartStore(state => state.totalPrice)()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1" onClick={onClose}></div>
      <div className="w-96 bg-white h-full shadow-2xl p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Savatcha</h2>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Savatcha bo'sh</p>
            <Link to="/products" className="btn btn-primary mt-4">Mahsulotlarni ko'rish</Link>
          </div>
        ) : (
          <div>
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">${item.price} x {item.qty}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${(item.price * item.qty).toFixed(2)}</div>
                    <button className="btn btn-sm btn-error mt-2" onClick={() => removeItem(item.id)}>O'chirish</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">Jami:</div>
                <div className="text-xl font-bold">${totalPrice.toFixed(2)}</div>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-primary flex-1" onClick={() => { alert('Checkout demo: savatcha tozalandi'); clear(); onClose(); }}>Checkout</button>
                <button className="btn btn-outline" onClick={() => { clear(); }}>Tozalash</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
