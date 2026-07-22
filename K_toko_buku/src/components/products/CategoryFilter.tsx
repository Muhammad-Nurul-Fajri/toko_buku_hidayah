'use client'

import { motion } from 'framer-motion'
import { categories } from '@/data/products'
import clsx from 'clsx'

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          onClick={() => onCategoryChange(category.id)}
          className={clsx(
            'flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50',
            selectedCategory === category.id
              ? 'bg-primary-700 text-white shadow-medium hover:shadow-large focus:ring-primary-200'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-100'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">{category.icon}</span>
          <span className="whitespace-nowrap">{category.label}</span>
        </motion.button>
      ))}
    </div>
  )
}