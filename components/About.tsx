'use client'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { num: '10+', label: 'Products Shipped' },
  { num: '4 Wks', label: 'Average MVP Time' },
  { num: '5+', label: 'Happy Founders' },
  { num: '3+', label: 'Years Experience' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative', borderRadius: 24, overflow: 'hidden',
              border: '1px solid rgba(108,99,255,0.3)',
              boxShadow: '0 0 60px rgba(108,99,255,0.2), 0 0 100px rgba(0,229,255,0.1)',
            }}>
              {/* Profile photo */}
              <div style={{
                height: 480, background: 'linear-gradient(135deg, #0D1425, #1A1040)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Grid pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(108,99,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />

                {/* Use actual profile image */}
                <img
                  src="/images/profile.jpg"
                  alt="Shubham Haranale"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    position: 'absolute', inset: 0,
                  }}
                  onError={(e) => {
                    // Fallback to initials avatar if image not found
                    e.currentTarget.style.display = 'none'
                  }}
                />

                {/* Fallback avatar (always visible beneath) */}
                <div style={{
                  width: 160, height: 160, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6C63FF, #00E5FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 64, fontWeight: 800, color: 'white',
                  boxShadow: '0 0 60px rgba(108,99,255,0.4)',
                  position: 'relative', zIndex: 1,
                }}>
                  S
                </div>

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                  background: 'linear-gradient(to top, #0D1425, transparent)',
                }} />

                {/* Name badge */}
                <div style={{
                  position: 'absolute', bottom: 24, left: 24, right: 24,
                  background: 'rgba(10,15,31,0.8)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  borderRadius: 12, padding: '16px 20px',
                }}>
                  <p style={{ fontWeight: 800, fontSize: 22, marginBottom: 4 }}>Shubham Haranale</p>
                  <p style={{ color: '#00E5FF', fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
                    Founder & CEO · Full Stack · DevOps · MLOps
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute', top: -16, right: -16,
                background: 'linear-gradient(135deg, #6C63FF, #00E5FF)',
                borderRadius: 12, padding: '12px 20px', color: 'white', fontWeight: 700, fontSize: 14,
              }}
            >
              🚀 MVP Expert
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute', bottom: 80, left: -16,
                background: 'rgba(0,255,156,0.15)', border: '1px solid rgba(0,255,156,0.4)',
                borderRadius: 12, padding: '10px 16px', color: '#00FF9C', fontWeight: 700, fontSize: 13,
                backdropFilter: 'blur(10px)',
              }}
            >
              ☁️ AWS Architect
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>ABOUT</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
              The Engineer Behind{' '}
              <span className="gradient-text">The Products</span>
            </h2>

            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              I'm Shubham Haranale — Founder, CEO & CTO of a boutique MVP development agency. I specialize in building AI-powered SaaS products and scalable cloud architectures for startups.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              My mission is to help founders validate ideas quickly and launch MVPs without months of development. From LLM integrations and vector databases to production-grade AWS architectures — I build systems that scale.
            </p>
            <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              As a Full Stack Developer, DevOps Cloud Engineer, and MLOps Engineer, I bring end-to-end technical depth to every engagement — from database design to Kubernetes orchestration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: '16px', borderRadius: 12,
                  background: 'rgba(108,99,255,0.08)',
                  border: '1px solid rgba(108,99,255,0.2)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#00E5FF', marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { icon: Github, href: 'https://github.com/Shubhamharanale7', label: 'GitHub', color: '#6C63FF' },
                { icon: Twitter, href: 'https://x.com/ShubhamHaranal1', label: 'Twitter', color: '#00E5FF' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shubhamharanale7', label: 'LinkedIn', color: '#0EA5E9' },
                { icon: Mail, href: 'mailto:shubhaminfosoft7@gmail.com', label: 'Email', color: '#00FF9C' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 18px', borderRadius: 10, fontSize: 14, fontWeight: 600,
                    background: `${s.color}10`, border: `1px solid ${s.color}30`,
                    color: s.color, transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}20`; e.currentTarget.style.borderColor = s.color }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}10`; e.currentTarget.style.borderColor = `${s.color}30` }}
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
