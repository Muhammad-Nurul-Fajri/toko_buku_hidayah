import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ background: 'var(--bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--accent)', fontWeight: '600', fontSize: '0.875rem' }}>
                            <div style={{ display: 'flex', color: '#FFB800' }}>
                                <Star size={16} fill="#FFB800" />
                                <Star size={16} fill="#FFB800" />
                                <Star size={16} fill="#FFB800" />
                                <Star size={16} fill="#FFB800" />
                                <Star size={16} fill="#FFB800" />
                            </div>
                            4.8 out of 5 from 390+ reviews
                        </div>
                        <h1 style={{ marginBottom: '24px' }}>Thoughtfully curated for seekers.</h1>
                        <p style={{ fontSize: '1.125rem', marginBottom: '40px', maxWidth: '500px' }}>
                            Discover a high-quality collection of Islamic and educational books at TokoBuku Hidayah, located in Plaza Indonesia.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="#catalog" className="btn btn-primary">Browse Collection</a>
                            <a href="#about" className="btn btn-outline">Our Story</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}
                    >
                        <img
                            src="/assets/hero.png"
                            alt="Bookstore Interior"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
