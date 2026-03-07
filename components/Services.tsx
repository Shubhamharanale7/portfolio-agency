'use client'
import { motion } from 'framer-motion'
import { Code2, Bot, Cloud, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'MVP Development',
    subtitle: 'Ship fast. Validate faster.',
    desc: 'SaaS platforms, dashboards, and web apps built production-ready in weeks — not months. We handle architecture, backend, and frontend so you can focus on the business.',
    features: ['Next.js & React', 'RESTful APIs', 'Database Design', 'Auth & Payments'],
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.3)',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    subtitle: 'Intelligent systems at scale.',
    desc: 'AI agents, LLM integrations, and workflow automation that replaces manual work. From chatbots to autonomous pipelines — we build AI that works.',
    features: ['OpenAI / LangChain', 'RAG Pipelines', 'Vector Databases', 'Workflow Automation'],
    color: '#00E5FF',
    glow: 'rgba(0,229,255,0.3)',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    subtitle: 'Infrastructure that scales.',
    desc: 'CI/CD pipelines, containerized microservices, and scalable cloud architectures on AWS. Production-grade from day one.',
    features: ['AWS Architecture', 'Docker & K8s', 'CI/CD Pipelines', 'Monitoring & Alerts'],
    color: '#00FF9C',
    glow: 'rgba(0,255,156,0.3)',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>WHAT WE BUILD</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            Services That{' '}
            <span className="gradient-text">Ship Results</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 18, marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
            End-to-end product development for founders who need to move fast.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(to right, transparent, ${s.color}, transparent)`,
              }} />

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `rgba(${s.color === '#6C63FF' ? '108,99,255' : s.color === '#00E5FF' ? '0,229,255' : '0,255,156'},0.15)`,
                border: `1px solid ${s.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
                boxShadow: `0 0 20px ${s.glow}`,
              }}>
                <s.icon size={26} color={s.color} />
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ color: s.color, fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 1 }}>{s.subtitle}</p>
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#94A3B8', fontSize: 14 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, display: 'block', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: s.color, fontSize: 14, fontWeight: 600,
                  transition: 'gap 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
