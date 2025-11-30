import React, { Suspense, lazy } from 'react'
import { ProductCard } from '@/components'
import useProductStore from '@/stores/productStore'

const Products = () => {
  const { products } = useProductStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gradient mb-4 drop-shadow-lg">
            🛍️ Mahsulotlar
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            {products.length > 0 
              ? `${products.length} ta ajoyib mahsulotdan tanlang` 
              : 'Hozircha mahsulot yo\'q'}
          </p>
        </div>

        {products.length === 0 ? (
          <div className="alert alert-info shadow-lg text-white text-lg font-semibold">
            <span>📦 Hozircha mahsulot yo'q. Tez orada qo'shiladi!</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={product.id} style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s` }} className="animate-fade-in-up">
                <ProductCard
                  product={product}
                  canEdit={false}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
