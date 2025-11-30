import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'

const Home = () => {
  const { isAuthenticated, user } = useAuthStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">🛍️ E-Commerce</h1>
            <p className="mb-5">
              {isAuthenticated
                ? `Salom, ${user?.username}! Eng yaxshi mahsulotlarni o'zingizning do'koningizdan toping.`
                : 'Eng yaxshi mahsulotlarni o\'zingizning do\'koningizdan toping. Ro\'yxatdan o\'ting va boshlang!'}
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/products" className="btn btn-primary">
                🛍️ Mahsulotlarni Ko'ring
              </Link>

              {!isAuthenticated && (
                <Link to="/login" className="btn btn-outline btn-primary">
                  🔐 Login
                </Link>
              )}

              {isAuthenticated && user?.role === 'admin' && (
                <Link to="/dashboard" className="btn btn-secondary">
                  📊 Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">✨ Xususiyatlar</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-primary text-primary-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">🔐 Xavfsiz Auth</h3>
                <p>Email va parol bilan xavfsiz ro'yxatdan o'ting</p>
              </div>
            </div>

            <div className="card bg-secondary text-secondary-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">📦 Mahsulotlar</h3>
                <p>Minglab mahsulotlar orasidan tanlang</p>
              </div>
            </div>

            <div className="card bg-accent text-accent-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl">👑 Admin Panel</h3>
                <p>Admins uchun mahsulot boshqaruvi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Bugun boshlang!
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ro'yxatdan o'ting va eng yaxshi mahsulotlarni topish boshlang.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg">
              📝 Ro'yxatdan O'tish
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
