import React from 'react'
import { Truck, ShoppingBag, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
    const services = [
        {
            icon: <ShoppingBag size={24} />,
            title: "Store Pickup",
            desc: "Order online and pick up at Plaza Indonesia."
        },
        {
            icon: <Truck size={24} />,
            title: "Fast Delivery",
            desc: "Carefully packaged books delivered to your door."
        },
        {
            icon: <Clock size={24} />,
            title: "Open Daily",
            desc: "Visit us daily from 10:00 AM to 10:00 PM."
        }
    ]

    return (
        <section id="services" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Seamless Services</h2>
                    <p>Designed for your convenience.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', border: '1px solid #F0F0F0' }}
                        >
                            <div style={{ width: '48px', height: '48px', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{s.title}</h3>
                            <p style={{ fontSize: '0.9375rem' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
