'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const FULL_NAME = 'Shubham Haranale'

function TypingName() {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (phase === 'typing') {
      if (displayed.length < FULL_NAME.length) {
        timeout = setTimeout(() => setDisplayed(FULL_NAME.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 3000)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 500)
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        timeout = setTimeout(() => setPhase('typing'), 400)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase])

  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#f8fafc', letterSpacing: '-0.02em' }}>
      {displayed}
      <span className="typing-cursor" style={{ color: '#3b82f6', marginLeft: 1 }}>|</span>
    </span>
  )
}

const links = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#tech' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const openBooking = () => window.dispatchEvent(new CustomEvent('openBooking'))

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(4,5,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo — typing name */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <TypingName />
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: '#64748b', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >{l.label}</a>
          ))}
          <button onClick={openBooking} className="btn-main" style={{ padding: '10px 22px', fontSize: 14 }}>
            Book a Call
          </button>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f8fafc', display: 'none' }} className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(4,5,10,0.97)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 24px' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '12px 0', color: '#94a3b8', fontSize: 16, borderBottom: '1px solid rgba(255,255,255,0.04)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
            <button onClick={() => { setOpen(false); openBooking() }} className="btn-main" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
