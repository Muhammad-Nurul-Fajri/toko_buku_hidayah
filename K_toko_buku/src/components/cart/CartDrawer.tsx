'use client'

import { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ShoppingCartIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'
import CartItem from './CartItem'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, isOpen, closeCart, getTotalPrice, getTotalItems } = useCartStore()
  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleCheckout = () => {
    if (items.length === 0) return
    
    const orderSummary = items.map(item => 
      `${item.title} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n')
    
    const whatsappMessage = `Hello TokoBuku Hidayah!

I would like to place an order:

${orderSummary}

Subtotal: ${formatPrice(totalPrice)}

Please confirm availability and delivery details.`
    
    window.open(`https://wa.me/6287782866044?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    closeCart()
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingCartIcon className="h-6 w-6 text-primary-700" />
                <h2 className="text-xl font-bold text-gray-900">
                  Shopping Cart
                </h2>
                {totalItems > 0 && (
                  <span className="bg-primary-700 text-white text-sm font-semibold px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {items.length === 0 ? (
                /* Empty State */
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <ShoppingCartIcon className="h-12 w-12 text-gray-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Add some books to get started!
                  </p>
                  <button
                    onClick={closeCart}
                    className="btn btn-accent"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="flex-1 overflow-y-auto cart-scrollbar p-6 space-y-4">
                    <AnimatePresence>
                      {items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CartItem item={item} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-4">
                    {/* Total */}
                    <div className="flex items-center justify-between text-xl font-bold text-gray-900">
                      <span>Total:</span>
                      <span className="text-accent-600">{formatPrice(totalPrice)}</span>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <button
                        onClick={handleCheckout}
                        className="w-full btn btn-accent text-lg py-4"
                      >
                        <CreditCardIcon className="h-5 w-5" />
                        Checkout via WhatsApp
                      </button>
                      <button
                        onClick={closeCart}
                        className="w-full btn btn-secondary bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-700 hover:text-white"
                      >
                        Continue Shopping
                      </button>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-gray-500 text-center">
                      Orders will be processed via WhatsApp for confirmation
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}