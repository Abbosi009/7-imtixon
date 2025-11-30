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
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-2xl mb-4">🔐 Login</h1>

          {message && (
            <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-error'}`}>
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.email}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Parol</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Parolni kiriting"
                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.password}</span>
                </label>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? 'Kutilmoqda...' : 'Login'}
            </button>
          </form>

          <p className="text-center mt-4">
            Akkaunt yo'qmi?{' '}
            <a href="/signup" className="link link-primary">
              Ro'yxatdan o'tish
            </a>
          </p>

          <div className="divider">Demo Account</div>
          <p className="text-sm text-gray-600 text-center">
            <strong>Admin:</strong> admin@site.com / Admin123!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
