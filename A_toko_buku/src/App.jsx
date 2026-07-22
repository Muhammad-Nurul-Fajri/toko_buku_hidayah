import React, { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Catalog from './components/Catalog'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CartProvider>
      <div className="app">
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Catalog />
          <Services />
          <Testimonials />
          <Location />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <Toast />
      </div>
    </CartProvider>
  )
}

export default App
