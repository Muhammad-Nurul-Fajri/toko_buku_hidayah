import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, toggleDrawer } = useCart();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>H</div>
            <span>TokoBuku Hidayah</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="cart-icon-btn"
              onClick={toggleDrawer}
              aria-label="Toggle Cart"
              style={{ position: 'relative', display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <ShoppingBag size={22} color="var(--primary)" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: 'absolute', top: '2px', right: '2px',
                    background: 'var(--accent)', color: 'white',
                    fontSize: '0.65rem', width: '16px', height: '16px',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700'
                  }}
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button
              className="nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{
              position: 'absolute', top: '100%', left: 0, width: '100%',
              background: 'white', borderBottom: '1px solid var(--border-light)',
              overflow: 'hidden', zIndex: 999
            }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--primary)', textDecoration: 'none' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-toggle { display: block !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Navbar
