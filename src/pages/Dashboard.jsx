import React, { useState } from 'react'
import { ProductCard } from '@/components'
import useProductStore from '@/stores/productStore'
import { productSchema } from '@/schemas/validationSchemas'
import { useValidation } from '@/hooks'

const Dashboard = () => {
  const { products, addProduct, deleteProduct, updateProduct } = useProductStore()
  const { validate } = useValidation()

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleAddClick = () => {
    setEditingId(null)
    setFormData({
      name: '',
      price: '',
      description: '',
      image: ''
    })
    setErrors({})
    setShowModal(true)
  }

  const handleEditClick = (product) => {
    setEditingId(product.id)
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image
    })
    setErrors({})
    setShowModal(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({})
    setMessage('')

    const validation = validate(productSchema, formData)

    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    try {
      if (editingId) {
        updateProduct(editingId, validation.data)
        setMessage('✅ Mahsulot o\'zgartirildi')
      } else {
        addProduct(validation.data)
        setMessage('✅ Mahsulot qo\'shildi')
      }
      
      setTimeout(() => {
        setShowModal(false)
        setMessage('')
      }, 1000)
    } catch (error) {
      setMessage('❌ Xatolik yuz berdi')
    }
  }

  const handleDelete = (id) => {
    if (window.confirm('Bu mahsulotni o\'chirishga ishonchingiz kommi?')) {
      deleteProduct(id)
      setMessage('✅ Mahsulot o\'chirildi')
      setTimeout(() => setMessage(''), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">📊 Admin Dashboard</h1>
          <button
            onClick={handleAddClick}
            className="btn btn-primary"
          >
            ➕ Mahsulot Qo'shish
          </button>
        </div>

        {message && (
          <div className={`alert mb-4 ${message.includes('✅') ? 'alert-success' : 'alert-error'}`}>
            <span>{message}</span>
          </div>
        )}

        {products.length === 0 ? (
          <div className="alert alert-info">
            <span>Hozircha mahsulot yo'q. Birinchi mahsulotni qo'shing!</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                canEdit={true}
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-md">
              <h3 className="font-bold text-lg mb-4">
                {editingId ? '✏️ Mahsulotni O\'zartirish' : '➕ Yangi Mahsulot'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mahsulot Nomi</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mahsulot nomi"
                    className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.name}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Narx</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Narx"
                    step="0.01"
                    className={`input input-bordered ${errors.price ? 'input-error' : ''}`}
                  />
                  {errors.price && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.price}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tavsif</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Mahsulot tavsifi"
                    className={`textarea textarea-bordered ${errors.description ? 'textarea-error' : ''}`}
                    rows="3"
                  ></textarea>
                  {errors.description && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.description}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rasm URL</span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className={`input input-bordered ${errors.image ? 'input-error' : ''}`}
                  />
                  {errors.image && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.image}</span>
                    </label>
                  )}
                </div>

                <div className="modal-action">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-outline"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    {editingId ? 'O\'zartirish' : 'Qo\'shish'}
                  </button>
                </div>
              </form>
            </div>

            <div
              className="modal-backdrop"
              onClick={() => setShowModal(false)}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
