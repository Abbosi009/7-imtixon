import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'

const Home = () => {
  const { isAuthenticated, user } = useAuthStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="hero min-h-[600px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 relative flex items-center justify-center">
        <div className="hero-content text-center text-white relative z-10 w-full">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="mb-8 text-6xl md:text-7xl font-black drop-shadow-lg">
              🛍️ E-Commerce
            </h1>
            <p className="mb-12 text-xl md:text-2xl font-semibold drop-shadow-md opacity-95 max-w-2xl mx-auto">
              {isAuthenticated
                ? `Assalomu Aleykum, ${user?.username}! 👋 Eng yaxshi mahsulotlarni o'zingizning do'koningizdan toping.`
                : 'Eng yaxshi mahsulotlarni o\'zingizning do\'koningizdan toping. 🚀'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/products" className="btn btn-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black shadow-xl hover:shadow-2xl btn-pulse border-none transform hover:scale-105 transition-all">
                🛒 Mahsulotlarni Ko'ring
              </Link>

              {!isAuthenticated && (
                <Link to="/login" className="btn btn-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black shadow-xl hover:shadow-2xl border-none transform hover:scale-105 transition-all">
                  🔐 Login
                </Link>
              )}

              {isAuthenticated && user?.role === 'admin' && (
                <Link to="/dashboard" className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black shadow-xl hover:shadow-2xl border-none transform hover:scale-105 transition-all">
                  📊 Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-shadow-gradient mb-4 drop-shadow-lg">✨ Nima Ajoyib?</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Biz sizga eng yaxshi xizmat va mahsulotlarni taklif qilishga qadamita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover-lift group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="card-body p-8 relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-300 block w-fit">🔐</div>
                <h3 className="card-title text-3xl font-black mb-3">Xavfsiz Auth</h3>
                <p className="text-blue-100 text-lg leading-relaxed">Email va parol bilan xavfsiz ro'yxatdan o'ting. Sizning ma'lumotlaringiz himoyalangan.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
            </div>

            <div className="card hover-lift group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-pink-500 to-red-500 text-white">
              <div className="card-body p-8 relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-300 block w-fit">📦</div>
                <h3 className="card-title text-3xl font-black mb-3">1000+ Mahsulot</h3>
                <p className="text-red-100 text-lg leading-relaxed">Minglab mahsulotlar orasidan tanlang. Har kuni yangi mahsulotlar qo'shiladi.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
            </div>

            <div className="card hover-lift group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <div className="card-body p-8 relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-300 block w-fit">👑</div>
                <h3 className="card-title text-3xl font-black mb-3">Admin Panel</h3>
                <p className="text-indigo-100 text-lg leading-relaxed">Admins uchun kuchli boshqaruv paneli. Mahsulotlarni boshqaring oson.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 relative overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob blob delay-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob blob delay-2"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center relative z-10">
            <div className="backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-2xl p-10 border border-white/30 transition-all duration-300 hover:scale-105 hover-lift shadow-2xl group">
              <div className="text-6xl font-black mb-3 animate-float group-hover:text-yellow-300 transition-colors">10K+</div>
              <p className="text-2xl font-black group-hover:text-white transition-colors">Foydalanuvchilar</p>
              <p className="text-white/80 mt-2 text-sm">Bizimga ishonovchi mijozlar</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-2xl p-10 border border-white/30 transition-all duration-300 hover:scale-105 hover-lift shadow-2xl group" style={{animationDelay: '0.5s'}}>
              <div className="text-6xl font-black mb-3 animate-float group-hover:text-yellow-300 transition-colors">50K+</div>
              <p className="text-2xl font-black group-hover:text-white transition-colors">Sotuvlar</p>
              <p className="text-white/80 mt-2 text-sm">Muvaffaqiyatli tranzaksiyalar</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-2xl p-10 border border-white/30 transition-all duration-300 hover:scale-105 hover-lift shadow-2xl group" style={{animationDelay: '1s'}}>
              <div className="text-6xl font-black mb-3 animate-float group-hover:text-yellow-300 transition-colors">24/7</div>
              <p className="text-2xl font-black group-hover:text-white transition-colors">Support</p>
              <p className="text-white/80 mt-2 text-sm">Har vaqt yordamga tayyormiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob blob delay-1"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob blob delay-2"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob blob delay-3"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 text-shadow-glow drop-shadow-2xl animate-fade-in-up">
              🚀 Bugun Boshlang!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ro'yxatdan o'ting va eng yaxshi mahsulotlarni topish boshlang. <span className="text-yellow-400 font-black">Birinchi zakaz uchun 20% chegirma!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/signup" className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black border-none shadow-2xl hover:shadow-3xl btn-pulse transition-all transform hover:scale-105">
                📝 Ro'yxatdan O'tish
              </Link>
              <Link to="/products" className="btn btn-lg btn-outline text-white border-white/50 hover:bg-white/10 hover:border-white font-black shadow-xl transition-all transform hover:scale-105">
                🛍️ Mahsulotlarni Ko'ring
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-black text-gradient mb-2">🛍️ E-Commerce</h3>
            <p className="text-gray-400">Sizning ishonchingiz - bizning qulayligimiz</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">© 2025 E-Commerce. Barcha huquqlar himoyalangan.</p>
            <p className="text-gray-500 text-sm mt-2">Imtihon loyihasi | Abbosi009</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
