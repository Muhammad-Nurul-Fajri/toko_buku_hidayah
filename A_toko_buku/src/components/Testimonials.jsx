import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Ahmad Fauzi",
        text: "The best collection of Islamic books in Jakarta. Truly a premium experience.",
        rating: 5
    },
    {
        name: "Siti Maryam",
        text: "Excellent service and high-quality educational materials for my children.",
        rating: 5
    },
    {
        name: "Budi Santoso",
        text: "A serene space with a soul. Highly recommended for every book lover.",
        rating: 4
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Reader Feedback</h2>
                    <p>Shared experiences from our community.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ padding: '32px', border: '1px solid var(--border-light)', borderRadius: '12px' }}
                        >
                            <div style={{ display: 'flex', color: '#FFB800', marginBottom: '16px' }}>
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill={j < t.rating ? "#FFB800" : "none"} strokeWidth={1.5} />)}
                            </div>
                            <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '24px', color: 'var(--primary)' }}>"{t.text}"</p>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: '700' }}>— {t.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
