'use client'
import { motion } from 'framer-motion'

const TRUST_ITEMS = [
  'Trusted by Founders Building the Next Generation of AI Startups',
  '⚡ MVP in 4 Weeks',
  '🚀 Shipped 10+ Products',
  '🤖 AI-First Development',
  '☁️ Production-Grade Cloud Architecture',
  '🔧 Full-Stack Delivery',
  '📈 Scalable from Day One',
]

export default function Trust() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS]
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: '24px 0',
        borderTop: '1px solid rgba(108,99,255,0.2)',
        borderBottom: '1px solid rgba(108,99,255,0.2)',
        overflow: 'hidden',
        background: 'rgba(108,99,255,0.04)',
        position: 'relative',
      }}
    >
      {/* Fade masks */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to right, #0A0F1F, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to left, #0A0F1F, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div className="marquee-track" style={{ gap: 60, alignItems: 'center' }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 60, whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#94A3B8', fontSize: 15, fontWeight: 500 }}>{item}</span>
            <span style={{ color: '#6C63FF', fontSize: 20 }}>◆</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
