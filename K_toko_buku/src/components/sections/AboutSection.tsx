'use client'

import { motion } from 'framer-motion'
import { BuildingStorefrontIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: BuildingStorefrontIcon,
    title: 'Islamic Literature',
    description: 'Comprehensive collection of Islamic books, Quran, Hadith, and religious studies',
  },
  {
    icon: AcademicCapIcon,
    title: 'Educational Materials',
    description: 'Quality educational resources for students of all ages and academic levels',
  },
  {
    icon: HeartIcon,
    title: 'Trusted Service',
    description: '4.8-star rating from 390+ satisfied customers speaks to our commitment',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
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
            About TokoBuku Hidayah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in Islamic education and literature
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              TokoBuku Hidayah has been serving the Jakarta community as a premier destination for Islamic books, 
              educational materials, and quality literature. Located in the heart of Jakarta at Plaza Indonesia, 
              we are committed to spreading knowledge and promoting literacy through our carefully curated collection.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="text-center group"
              >
                <div className="card p-8 lg:p-10 h-full hover:shadow-large transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300"
                  >
                    <feature.icon className="h-8 w-8 text-primary-700" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 lg:p-12 text-white text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-2">4.8</div>
                <div className="text-lg font-medium">Star Rating</div>
                <div className="text-sm text-gray-200">From 390+ Reviews</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-2">1000+</div>
                <div className="text-lg font-medium">Books Available</div>
                <div className="text-sm text-gray-200">Across All Categories</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-2">5+</div>
                <div className="text-lg font-medium">Years Serving</div>
                <div className="text-sm text-gray-200">Jakarta Community</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}