'use client'
import { motion } from 'framer-motion'
import { Code2, Bot, Cloud, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    num: '01',
    title: 'MVP Development',
    desc: 'Full-stack SaaS platforms, dashboards, and web apps built production-ready. Auth, payments, databases — all included.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    accent: '#3b82f6',
  },
  {
    icon: Bot,
    num: '02',
    title: 'AI & Automation',
    desc: 'LLM integrations, RAG pipelines, AI agents, and workflow automation. From prototypes to systems handling 1L+ users.',
    tags: ['OpenAI', 'LangChain', 'Pinecone', 'FastAPI'],
    accent: '#8b5cf6',
  },
  {
    icon: Cloud,
    num: '03',
    title: 'Cloud & DevOps',
    desc: 'Production-grade AWS architecture, containerized microservices, CI/CD pipelines, and auto-scaling infrastructure.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    accent: '#06b6d4',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Services</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc', maxWidth: 480 }}>
            What we<br />build for you
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '40px 36px',
                background: '#0c0e17',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: i === 0 ? '16px 0 0 16px' : i === 2 ? '0 16px 16px 0' : '0',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                cursor: 'default',
              }}
              whileHover={{
                background: '#111420',
                borderColor: `${s.accent}30`,
                zIndex: 2,
                scale: 1.02,
                boxShadow: `0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px ${s.accent}20`,
              }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${s.accent}, transparent)`, opacity: 0.6 }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${s.accent}12`,
                  border: `1px solid ${s.accent}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <s.icon size={20} color={s.accent} strokeWidth={1.5} />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: '#1e293b', fontWeight: 700 }}>{s.num}</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#f8fafc', marginBottom: 14, letterSpacing: '-0.02em' }}>{s.title}</h3>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 12, padding: '4px 10px', borderRadius: 6, fontWeight: 500,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                    color: '#64748b',
                  }}>{t}</span>
                ))}
              </div>

              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.accent, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Get Started <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.services-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
