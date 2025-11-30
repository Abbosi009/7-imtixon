import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, ProtectedRoute, ErrorBoundary, Loading } from '@/components'
import { Home, Login, SignUp, Products, Dashboard, Profile } from '@/pages'

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute requiredRole="admin">
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4">404</h1>
                      <p className="text-xl mb-4">Sahifa topilmadi</p>
                      <a href="/" className="btn btn-primary">Bosh sahifaga qaytish</a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>

          <footer className="footer p-10 bg-base-200 text-base-content">
            <div className="w-full text-center">
              <p>© 2025 E-Commerce. Barcha huquqlar himoyalangan.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
