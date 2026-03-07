'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ben Stair',
    company: 'Bespoke Labs AI',
    role: 'Founder & CEO',
    review: 'Shubham delivered our AI document processing MVP in under 3 weeks. The architecture is clean, scalable, and the code quality is production-grade. Exceptional work.',
    rating: 5,
    color: '#6C63FF',
  },
  {
    name: 'Riyan Dicorz',
    company: 'TechVenture Studio',
    role: 'CTO',
    review: 'The DevOps setup alone was worth it. CI/CD, monitoring, auto-scaling on AWS — everything configured perfectly. Our infra costs dropped 40% immediately.',
    rating: 5,
    color: '#00E5FF',
  },
  {
    name: 'John DiSouza',
    company: 'HealthAI Inc',
    role: 'Product Lead',
    review: 'We needed an AI wellness platform fast. Shubham built the full stack in 4 weeks — ML models, backend, and a beautiful React dashboard. Exceeded expectations.',
    rating: 5,
    color: '#00FF9C',
  },
  {
    name: 'William Rickard',
    company: 'ClaimsAutomate',
    role: 'Co-Founder',
    review: 'The insurance claims automation system reduced our manual work by 80%. LLM integration, OCR pipeline, and the admin dashboard are all flawless.',
    rating: 5,
    color: '#F59E0B',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>TESTIMONIALS</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            What Founders{' '}
            <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderRadius: 20, padding: 32,
                background: '#0D1425',
                border: `1px solid ${t.color}25`,
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                borderColor: `${t.color}60`,
                boxShadow: `0 0 40px ${t.color}15`,
                y: -4,
              }}
            >
              {/* Gradient corner */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 120, height: 120,
                background: `radial-gradient(circle at top right, ${t.color}15, transparent 70%)`,
              }} />

              {/* Quote icon */}
              <Quote size={32} color={t.color} style={{ opacity: 0.4, marginBottom: 20 }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={16} fill={t.color} color={t.color} />
                ))}
              </div>

              <p style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>
                "{t.review}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: `${t.color}20`, border: `2px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 700, color: t.color,
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{t.name}</p>
                  <p style={{ color: t.color, fontSize: 13, fontWeight: 600 }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
