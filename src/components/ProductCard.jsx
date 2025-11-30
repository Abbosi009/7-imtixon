import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, onEdit, onDelete, canEdit = false }) => {
  return (
    <div className="group relative h-full">
      <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 hover:border-purple-300 h-full overflow-hidden">
        
        {/* Image Container (clickable) */}
        <figure className="px-0 pt-0 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-56">
          <Link to={`/products/${product.id}`} className="block h-full w-full">
            <img
              src={product.image || 'https://via.placeholder.com/300?text=Product'}
              alt={product.name}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors">
            <Link to={`/products/${product.id}`} className="hover:underline">{product.name}</Link>
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3 group-hover:text-gray-700 transition-colors">
            {product.description}
          </p>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
            </div>
            <span className="badge badge-primary shadow-lg font-bold">In Stock</span>
          </div>

          {canEdit && (
            <div className="card-actions justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => onEdit(product)}
                className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none font-bold shadow-md hover:shadow-lg transition-all"
              >
                ✏️ Tahrirlash
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none font-bold shadow-md hover:shadow-lg transition-all"
              >
                🗑️ O'chirish
              </button>
            </div>
          )}
        </div>

        {/* Shine Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
      </div>
    </div>
  )
}

export default ProductCard
