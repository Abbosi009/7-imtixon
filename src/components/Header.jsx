import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'

const Header = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🛍️ E-Commerce
        </Link>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <Link to="/products" className="btn btn-outline btn-sm">
            Mahsulotlar
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost gap-2">
              <div className="avatar">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
              </div>
              <span>{user?.username}</span>
              {user?.role === 'admin' && (
                <span className="badge badge-primary">Admin</span>
              )}
            </button>

            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              {user?.role === 'admin' && (
                <>
                  <li>
                    <Link to="/dashboard">📊 Dashboard</Link>
                  </li>
                  <li>
                    <hr />
                  </li>
                </>
              )}
              <li>
                <Link to="/profile">👤 Profil</Link>
              </li>
              <li>
                <button onClick={handleLogout}>🚪 Chiqish</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="gap-2 flex">
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Ro'yxatdan o'tish
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
