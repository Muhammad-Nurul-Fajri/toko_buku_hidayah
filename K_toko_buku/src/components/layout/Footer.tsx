'use client'

import Link from 'next/link'
import { BookOpenIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Books', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpenIcon className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-primary-400">TokoBuku Hidayah</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Enlightening minds through knowledge and faith. Your trusted Islamic and educational bookstore in Jakarta.
            </p>
            
            {/* Rating Display */}
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-accent-500" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">4.8/5</div>
                <div className="text-gray-400">390+ reviews</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  <div className="font-medium">Plaza Indonesia - Lower Basement</div>
                  <div>Jl. M.H. Thamrin No.28–30</div>
                  <div>Central Jakarta 10350</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+6287782866044"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +62 877-8286-6044
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Open Daily</div>
                  <div>Until 10:00 PM</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6287782866044"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-medium hover:shadow-large"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 TokoBuku Hidayah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}