import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'
import { loginSchema } from '@/schemas/validationSchemas'
import { useValidation } from '@/hooks'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const { validate } = useValidation()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setErrors({})

    const validation = validate(loginSchema, formData)

    if (!validation.isValid) {
      setErrors(validation.errors)
      setLoading(false)
      return
    }

    try {
      const result = login(formData.email, formData.password)
      if (result.success) {
        setMessage('✅ Muvaffaqiyatli login qildingiz!')
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else {
        setMessage(`❌ ${result.error}`)
      }
    } catch (error) {
      setMessage('❌ Xatolik yuz berdi')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="card w-full max-w-md bg-white/10 shadow-2xl border border-white/20 backdrop-blur-md relative z-10">
        <div className="card-body">
          <h1 className="card-title text-4xl mb-2 text-white font-black drop-shadow-lg">🔐 Login</h1>
          <p className="text-gray-300 text-sm mb-6">Akkauntingizga kiring</p>

          {message && (
            <div className={`alert font-semibold text-white shadow-xl ${message.includes('✅') ? 'alert-success' : 'alert-error'}`}>
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className={`input input-bordered bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/30 ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-red-400 font-semibold">{errors.email}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Parol</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Parolni kiriting"
                className={`input input-bordered bg-white/20 border-white/30 text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/30 ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-red-400 font-semibold">{errors.password}</span>
                </label>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none font-bold w-full shadow-xl disabled:opacity-50"
            >
              {loading ? '⏳ Kutilmoqda...' : '🔓 Login'}
            </button>
          </form>

          <div className="divider text-gray-400 before:bg-gray-500 after:bg-gray-500">YOKI</div>

          <p className="text-center text-gray-300 font-semibold">
            Akkaunt yo'qmi?{' '}
            <a href="/signup" className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-black hover:underline">
              Ro'yxatdan O'tish
            </a>
          </p>

          <div className="mt-6 bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-white text-sm font-bold mb-2">📝 Demo Akkaunt:</p>
            <p className="text-gray-300 text-xs"><strong>Email:</strong> admin@site.com</p>
            <p className="text-gray-300 text-xs"><strong>Parol:</strong> Admin123!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
