import React, { Suspense, lazy } from 'react'
import { ProductCard } from '@/components'
import useProductStore from '@/stores/productStore'

const Products = () => {
  const { products } = useProductStore()

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">🛍️ Mahsulotlar</h1>

        {products.length === 0 ? (
          <div className="alert alert-info">
            <span>Hozircha mahsulot yo'q</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                canEdit={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
