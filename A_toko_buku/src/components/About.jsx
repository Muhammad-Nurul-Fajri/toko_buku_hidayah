import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: '12px', overflow: 'hidden' }}
          >
            <img src="/assets/islamic-books.png" alt="Library" style={{ width: '100%', height: 'auto' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ marginBottom: '24px' }}>A sanctuary for knowledge.</h2>
            <p style={{ marginBottom: '24px' }}>
              Located in Plaza Indonesia, TokoBuku Hidayah is a space where faith and education meet. We believe in providing only the highest quality literature that nurtures both the mind and the soul.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '8px' }}>10k+ Titles</h4>
                <p style={{ fontSize: '0.875rem' }}>A diverse range of curated Islamic and educational books.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '8px' }}>Expertly Curated</h4>
                <p style={{ fontSize: '0.875rem' }}>Handpicked selection to ensure the best reading experience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
