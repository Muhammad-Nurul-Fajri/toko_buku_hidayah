import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle') // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormStatus('sending')
        setTimeout(() => {
            setFormStatus('sent')
            setTimeout(() => setFormStatus('idle'), 3000)
        }, 1500)
    }

    return (
        <section id="contact" style={{ borderTop: '1px solid var(--border-light)' }}>
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Connect</span>
                    <h2>How can we help?</h2>
                    <p>We are here to assist with your journey of seeking knowledge.</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                    <div>
                        <div style={{ marginBottom: '48px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Inquiries</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ color: 'var(--accent)' }}><Phone size={20} /></div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary)' }}>WhatsApp</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>+62 877-8286-6044</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ color: 'var(--accent)' }}><Mail size={20} /></div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary)' }}>Email</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>contact@tokobukuhidayah.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ color: 'var(--accent)' }}><MapPin size={20} /></div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary)' }}>Location</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Plaza Indonesia, LB Floor, Jakarta</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'var(--bg-light)', padding: '32px', borderRadius: '12px' }}>
                            <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--secondary)' }}>
                                "Seeking knowledge is an obligation upon every Muslim."
                            </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#999' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        style={{ padding: '12px', borderRadius: '6px', border: '1px solid #EEE', background: '#F9F9F9', outline: 'none', fontSize: '0.9375rem' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#999' }}>Email</label>
                                    <input
                                        type="email"
                                        required
                                        style={{ padding: '12px', borderRadius: '6px', border: '1px solid #EEE', background: '#F9F9F9', outline: 'none', fontSize: '0.9375rem' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#999' }}>Subject</label>
                                <select style={{ padding: '12px', borderRadius: '6px', border: '1px solid #EEE', background: '#F9F9F9', outline: 'none', fontSize: '0.9375rem' }}>
                                    <option>Book Inquiry</option>
                                    <option>Order Status</option>
                                    <option>General Feedback</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#999' }}>Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    style={{ padding: '12px', borderRadius: '6px', border: '1px solid #EEE', background: '#F9F9F9', outline: 'none', fontSize: '0.9375rem', resize: 'none' }}
                                ></textarea>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', gap: '12px', background: formStatus === 'sent' ? '#059669' : 'var(--primary)' }}
                                disabled={formStatus !== 'idle'}
                            >
                                {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                                {formStatus === 'sending' && <>Sending...</>}
                                {formStatus === 'sent' && <><Check size={18} /> Message Sent</>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
