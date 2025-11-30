import React from 'react'

const ProductCard = ({ product, onEdit, onDelete, canEdit = false }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="px-4 pt-4">
        <img
          src={product.image || 'https://via.placeholder.com/300'}
          alt={product.name}
          className="rounded-lg h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
        </div>

        {canEdit && (
          <div className="card-actions justify-end gap-2 mt-4">
            <button
              onClick={() => onEdit(product)}
              className="btn btn-sm btn-info"
            >
              ✏️ Tahrirlash
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="btn btn-sm btn-error"
            >
              🗑️ O'chirish
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
