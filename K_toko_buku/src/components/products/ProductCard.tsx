'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCartIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useCartStore, Product } from '@/store/cartStore'
import clsx from 'clsx'

interface ProductCardProps {
  product: Product
}

const categoryColors = {
  islamic: 'bg-green-100 text-green-800',
  educational: 'bg-blue-100 text-blue-800',
  children: 'bg-pink-100 text-pink-800',
  literature: 'bg-purple-100 text-purple-800',
}

const categoryLabels = {
  islamic: 'Islamic',
  educational: 'Educational',
  children: 'Children',
  literature: 'Literature',
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { addItem } = useCartStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      addItem(product)
    }
  }

  return (
    <motion.div
      className="card card-hover group cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {!imageError && product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-6xl text-gray-400">📚</div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={clsx(
            'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
            categoryColors[product.category]
          )}>
            {categoryLabels[product.category]}
          </span>
        </div>

        {/* Stock Status Badge */}
        <div className="absolute top-3 right-3">
          <div className={clsx(
            'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
            product.inStock
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          )}>
            {product.inStock ? (
              <>
                <CheckCircleIcon className="h-3 w-3" />
                In Stock
              </>
            ) : (
              <>
                <XCircleIcon className="h-3 w-3" />
                Out of Stock
              </>
            )}
          </div>
        </div>

        {/* Add to Cart Button Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 20 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-4 bottom-4"
        >
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={clsx(
              'w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300',
              product.inStock
                ? 'bg-primary-700 text-white hover:bg-primary-800 shadow-medium hover:shadow-large transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            )}
          >
            <ShoppingCartIcon className="h-4 w-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-tight mb-2">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-600">
            {formatPrice(product.price)}
          </div>
          
          {/* Mobile Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={clsx(
              'lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300',
              product.inStock
                ? 'bg-primary-700 text-white hover:bg-primary-800 shadow-medium hover:shadow-large'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            )}
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}