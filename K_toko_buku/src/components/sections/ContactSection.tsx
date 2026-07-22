'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, ClockIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    const whatsappMessage = `Hello TokoBuku Hidayah!

Name: ${formData.name}
Phone: ${formData.phone}

Message: ${formData.message}`

    window.open(`https://wa.me/6287782866044?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' })
    toast.success('Message will be sent via WhatsApp!')
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch for book inquiries and orders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8 text-center hover:shadow-large transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone & WhatsApp</h3>
              <a
                href="tel:+6287782866044"
                className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors block mb-4"
              >
                +62 877-8286-6044
              </a>
              <a
                href="https://wa.me/6287782866044"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center hover:shadow-large transition-all duration-500"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="h-8 w-8 text-secondary-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="text-gray-700">
                <p className="text-lg font-semibold">Open Daily</p>
                <p className="text-secondary-700 font-medium">Closes at 10:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-8 text-center">
              Quick Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="input"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="input"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message or book inquiry..."
                  rows={4}
                  className="input resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn btn-primary text-lg py-4"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              Your message will be sent via WhatsApp for quick response
            </p>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 lg:p-12 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Help Finding a Book?
            </h3>
            <p className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our knowledgeable staff is here to help you find the perfect Islamic or educational books. 
              Contact us for personalized recommendations and availability checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6287782866044?text=Hello! I need help finding a specific book."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent text-lg px-8 py-4"
              >
                Get Book Recommendations
              </a>
              <a
                href="tel:+6287782866044"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}