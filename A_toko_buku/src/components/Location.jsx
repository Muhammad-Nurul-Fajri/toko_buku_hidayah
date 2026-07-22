import React from 'react'
import { MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const Location = () => {
    return (
        <section id="location" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ marginBottom: '24px' }}>Visit our store.</h2>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                            <MapPin size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <div>
                                <p style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '4px' }}>Plaza Indonesia, LB Floor</p>
                                <p style={{ fontSize: '0.875rem' }}>Jl. M.H. Thamrin No.28–30, RT.9/RW.5, Gondangdia, Menteng, Central Jakarta 10350</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
                            <Clock size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <div>
                                <p style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '4px' }}>Store Hours</p>
                                <p style={{ fontSize: '0.875rem' }}>Open daily from 10:00 AM to 10:00 PM</p>
                            </div>
                        </div>
                        <a href="https://maps.google.com/?q=Plaza+Indonesia" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open in Maps</a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #EEE' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d15866.425313!2d106.8197!3d-6.1925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42183cf6751%3A0x43eb03e489069695!2sPlaza%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Location
