import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'
import { signUpSchema } from '@/schemas/validationSchemas'
import { useValidation } from '@/hooks'

const SignUp = () => {
  const navigate = useNavigate()
  const { signup } = useAuthStore()
  const { validate } = useValidation()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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

    const validation = validate(signUpSchema, formData)

    if (!validation.isValid) {
      setErrors(validation.errors)
      setLoading(false)
      return
    }

    try {
      const result = signup(validation.data)
      if (result.success) {
        setMessage('✅ Muvaffaqiyatli ro\'yxatdan o\'ttingiz!')
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
          <h1 className="card-title text-2xl mb-4">📝 Ro'yxatdan o'tish</h1>

          {message && (
            <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-error'}`}>
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username (min 3 harf)"
                className={`input input-bordered ${errors.username ? 'input-error' : ''}`}
              />
              {errors.username && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.username}</span>
                </label>
              )}
            </div>

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
                <span className="label-text">Telefon (+998 XX XXX XX XX)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 91 123 45 67"
                className={`input input-bordered ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.phone}</span>
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
                placeholder="Min 8 harf, 1 katta, 1 raqam, 1 belgi"
                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error text-xs">{errors.password}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Parolni qayta kiriting</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Parolni tasdiqlang"
                className={`input input-bordered ${errors.confirmPassword ? 'input-error' : ''}`}
              />
              {errors.confirmPassword && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.confirmPassword}</span>
                </label>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? 'Kutilmoqda...' : 'Ro\'yxatdan o\'tish'}
            </button>
          </form>

          <p className="text-center mt-4">
            Akkaunt bor?{' '}
            <a href="/login" className="link link-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
