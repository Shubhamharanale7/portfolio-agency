'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Tech', href: '#tech' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,15,31,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(108,99,255,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg,#6C63FF,#00E5FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 18, color: 'white',
          }}>S</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#E6F1FF' }}>
            Shubham<span style={{ color: '#00E5FF' }}>.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              className="transition-colors duration-200"
              style={{ color: '#94A3B8', fontSize: 15, fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00E5FF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>
            <span>Book a Call</span>
          </a>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ color: '#E6F1FF', background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(10,15,31,0.98)', borderTop: '1px solid rgba(108,99,255,0.2)' }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(link => (
                <a key={link.label} href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ color: '#94A3B8', fontSize: 16, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary" style={{ textAlign: 'center', marginTop: 8 }}>
                <span>Book a Call</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
