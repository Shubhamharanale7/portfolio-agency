'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG effects */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 300,
        background: 'radial-gradient(ellipse, rgba(108,99,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>LET'S BUILD</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Ready to Launch Your{' '}
            <span className="gradient-text">MVP?</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>
            Book a free 30-minute architecture call. We'll scope your project and give you a clear path to launch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Get In Touch</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                { icon: Mail, label: 'Email', value: 'shubhaminfosoft7@gmail.com', href: 'mailto:shubhaminfosoft7@gmail.com', color: '#6C63FF' },
                { icon: Phone, label: 'Phone', value: '+91 7038362217', href: 'tel:+917038362217', color: '#00E5FF' },
              ].map(c => (
                <a key={c.label} href={c.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '20px 24px', borderRadius: 14,
                    background: '#0D1425', border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '50'; e.currentTarget.style.background = c.color + '08' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#0D1425' }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: `${c.color}15`, border: `1px solid ${c.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <c.icon size={20} color={c.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: '#475569', marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#E6F1FF' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#94A3B8' }}>Connect</h4>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Github, href: 'https://github.com/Shubhamharanale7', color: '#6C63FF', label: 'GitHub' },
                { icon: Twitter, href: 'https://x.com/ShubhamHaranal1', color: '#00E5FF', label: 'Twitter' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shubhamharanale7', color: '#0EA5E9', label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${s.color}15`, border: `1px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}25`; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}15`; e.currentTarget.style.borderColor = `${s.color}30`; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <s.icon size={20} color={s.color} />
                </a>
              ))}
            </div>

            {/* CTA box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                marginTop: 40, padding: 28, borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,229,255,0.06))',
                border: '1px solid rgba(108,99,255,0.3)',
              }}
            >
              <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Build Your MVP in 30 Days</h4>
              <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Book a free architecture call and get a clear scope, timeline, and quote within 24 hours.
              </p>
              <a href="https://calendly.com/shubhaminfosoft7" target="_blank" rel="noopener noreferrer"
                className="btn-primary" style={{ display: 'inline-flex', fontSize: 14 }}>
                <span>📅 Book Free Call</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid rgba(108,99,255,0.2)',
              boxShadow: '0 0 40px rgba(108,99,255,0.1)',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/shubhaminfosoft7?background_color=0a0f1f&text_color=e6f1ff&primary_color=6c63ff"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
