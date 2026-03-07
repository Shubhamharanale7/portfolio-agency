'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Video, Star } from 'lucide-react'

export default function BookingPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000)
    const handler = (e: CustomEvent) => setOpen(true)
    window.addEventListener('openBooking' as any, handler)
    return () => { clearTimeout(timer); window.removeEventListener('openBooking' as any, handler) }
  }, [])

  useEffect(() => {
    if (open) {
      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      document.head.appendChild(s)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(12px)', zIndex: 10000,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10001,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div style={{
              width: '100%', maxWidth: 900, maxHeight: '90vh',
              background: '#0c0e17',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, overflow: 'hidden',
              display: 'grid', gridTemplateColumns: '1fr 1.4fr',
              boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(59,130,246,0.1)',
            }} className="max-md:grid-cols-1">

              {/* Left panel */}
              <div style={{
                padding: '40px 36px',
                background: 'linear-gradient(160deg, #0f1628 0%, #0c0e17 100%)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', flexDirection: 'column', gap: 0,
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Strip light */}
                <div className="strip-light" style={{ top: 0, left: 0, right: 0 }} />

                {/* Glow */}
                <div style={{
                  position: 'absolute', top: -60, left: -60, width: 200, height: 200,
                  background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, overflow: 'hidden',
                    border: '2px solid rgba(59,130,246,0.4)',
                    flexShrink: 0,
                    boxShadow: '0 0 20px rgba(59,130,246,0.2)',
                  }}>
                    <img src="/images/profile.jpg" alt="Shubham" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#f8fafc' }}>Shubham Haranale</p>
                    <p style={{ fontSize: 13, color: '#3b82f6', fontWeight: 500 }}>Founder & CEO</p>
                  </div>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 28, lineHeight: 1.2, marginBottom: 12, color: '#f8fafc',
                }}>
                  Book a Free<br />
                  <span className="grad-blue">Architecture Call</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
                  30 minutes. We'll scope your MVP, map the architecture, and give you a clear launch plan.
                </p>

                {/* Features */}
                {[
                  { icon: Clock, text: '30-minute focused call' },
                  { icon: Video, text: 'Google Meet / Zoom' },
                  { icon: Calendar, text: 'Pick any available slot' },
                  { icon: Star, text: 'Free — no commitment' },
                ].map(f => (
                  <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <f.icon size={15} color="#3b82f6" />
                    </div>
                    <span style={{ fontSize: 14, color: '#94a3b8' }}>{f.text}</span>
                  </div>
                ))}

                {/* Stats */}
                <div style={{
                  marginTop: 'auto', paddingTop: 28,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
                }}>
                  {[{ n: '25+', l: 'MVPs Shipped' }, { n: '1L+', l: 'Users Served' }].map(s => (
                    <div key={s.l}>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#3b82f6' }}>{s.n}</p>
                      <p style={{ fontSize: 12, color: '#475569' }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Calendly */}
              <div style={{ position: 'relative', overflow: 'hidden auto', maxHeight: '85vh' }}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/shubhaminfosoft7?background_color=0c0e17&text_color=f8fafc&primary_color=3b82f6"
                  style={{ minWidth: 300, height: 700 }}
                />
              </div>
            </div>

            {/* Close button */}
            <button onClick={() => setOpen(false)} style={{
              position: 'fixed', top: 20, right: 20, zIndex: 10002,
              width: 40, height: 40, borderRadius: 12,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#94a3b8', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8' }}
            >
              <X size={18} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
