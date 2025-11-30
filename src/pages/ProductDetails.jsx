import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import useProductStore from '@/stores/productStore'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = useProductStore((state) => state.products)
  const product = products.find(p => String(p.id) === String(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Mahsulot topilmadi</h2>
          <p className="mb-6">Bu mahsulot mavjud emas yoki o'chirilgan.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate(-1)} className="btn btn-outline">Orqaga</button>
            <Link to="/products" className="btn btn-primary">Mahsulotlar</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="card shadow-lg">
              <figure className="px-4 pt-4">
                <img src={product.image} alt={product.name} className="rounded-lg w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{product.name}</h2>
                <p className="text-xl font-bold text-primary">${product.price}</p>
                <div className="mt-4">
                  <button className="btn btn-primary btn-block">Sotib olish</button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="card bg-white shadow-lg p-6">
              <h1 className="text-4xl font-black mb-4">{product.name}</h1>
              <p className="text-gray-700 text-lg mb-6">{product.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold">Xususiyatlar</h3>
                  <ul className="mt-2 text-gray-600 list-disc list-inside">
                    <li>Yuqori sifat</li>
                    <li>Ismga mos</li>
                    <li>Kafolat bilan</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-bold">Yetkazib berish</h3>
                  <p className="text-gray-600 mt-2">Mahsulot 1-3 ish kunida yetkazib beriladi. Qaytarish 14 kun ichida.</p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="btn btn-accent">Sotib olish</button>
                <button onClick={() => navigate(-1)} className="btn btn-outline">Orqaga</button>
                <Link to="/products" className="btn btn-ghost">Barchasiga qaytish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
