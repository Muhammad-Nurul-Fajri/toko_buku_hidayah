import React from 'react'

const Footer = () => {
    return (
        <footer style={{ padding: '64px 0 32px', borderTop: '1px solid var(--border-light)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '64px' }}>
                    <div>
                        <div className="logo" style={{ marginBottom: '16px' }}>
                            <div style={{ width: '28px', height: '28px', background: 'var(--accent)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>H</div>
                            TokoBuku Hidayah
                        </div>
                        <p style={{ maxWidth: '300px', fontSize: '0.875rem' }}>A premium bookstore at Plaza Indonesia focused on Islamic and educational literature.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '80px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li><a href="#about" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>About</a></li>
                                <li><a href="#catalog" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Catalog</a></li>
                                <li><a href="#services" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.875rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li><a href="#" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Instagram</a></li>
                                <li><a href="#" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Facebook</a></li>
                                <li><a href="https://wa.me/6287782866044" style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>WhatsApp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #EEE', paddingTop: '32px', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: '#AAA' }}>&copy; {new Date().getFullYear()} TokoBuku Hidayah. Modern Minimalist Bookstore.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
