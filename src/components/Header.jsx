import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'
import useCartStore from '@/stores/cartStore'
import Cart from './Cart'

const Header = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const cartCount = useCartStore(state => state.items.reduce((s,i) => s + (i.qty||0), 0))
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className="navbar bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 shadow-2xl sticky top-0 z-50 px-4 md:px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Link to="/" className="btn btn-ghost text-2xl md:text-3xl text-white font-black hover:bg-transparent hover:text-white/80 transition-all">
            🛍️ E-Commerce
          </Link>
          <Link to="/products" className="btn btn-sm md:btn-md btn-ghost text-white font-bold hover:bg-white/20 transition-all whitespace-nowrap">
            🛒 Mahsulotlar
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setCartOpen(true)} className="btn btn-sm md:btn-md btn-ghost text-white">
            🧾 Savatcha {cartCount > 0 && (<span className="badge ml-2">{cartCount}</span>)}
          </button>
          <Cart open={cartOpen} onClose={() => setCartOpen(false)} />

          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/profile">👤 Profil</Link>
                </li>
                {user?.role === 'admin' && (
                  <li>
                    <Link to="/dashboard">🛠️ Dashboard</Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout}>🚪 Chiqish</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm md:btn-md bg-blue-500 hover:bg-blue-600 text-white border-none font-bold shadow-lg transition-all whitespace-nowrap">
                🔐 Login
              </Link>
              <Link to="/signup" className="btn btn-sm md:btn-md bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none font-bold shadow-lg transition-all whitespace-nowrap">
                📝 Ro'yxatdan
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
