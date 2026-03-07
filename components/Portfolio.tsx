'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'Docless AI',
    desc: 'AI-powered document intelligence platform. Upload PDFs, chat with your documents, extract insights instantly using LLMs.',
    stack: ['Next.js', 'OpenAI', 'LangChain', 'Pinecone'],
    link: 'https://doclessai.vercel.app/',
    category: 'AI Tool',
    color: '#6C63FF',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,229,255,0.1))',
  },
  {
    name: 'QuerySphere',
    desc: 'Natural language database querying platform. Ask questions in plain English, get SQL results instantly.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    link: 'https://query-sphere.onrender.com/',
    category: 'SaaS Platform',
    color: '#00E5FF',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(108,99,255,0.1))',
  },
  {
    name: 'ProjectFlow',
    desc: 'End-to-end project management SaaS with AI-powered task automation and team collaboration features.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    link: 'https://projectflow-eosin.vercel.app/',
    category: 'SaaS Platform',
    color: '#00FF9C',
    gradient: 'linear-gradient(135deg, rgba(0,255,156,0.15), rgba(0,229,255,0.1))',
  },
  {
    name: 'SuperClaims AI',
    desc: 'AI-powered insurance claims automation platform. Reduces processing time by 80% using computer vision and NLP.',
    stack: ['Python', 'FastAPI', 'OpenAI', 'AWS'],
    link: '#',
    category: 'AI Automation',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(108,99,255,0.1))',
  },
  {
    name: 'AI Analytics Dashboard',
    desc: 'Real-time SaaS analytics platform with AI-powered anomaly detection, predictive insights, and custom reporting.',
    stack: ['React', 'Python', 'TensorFlow', 'AWS'],
    link: '#',
    category: 'SaaS Analytics',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(108,99,255,0.1))',
  },
  {
    name: 'AI Wellness SaaS',
    desc: 'Health analytics platform leveraging ML to track wellness metrics, predict health trends and personalize recommendations.',
    stack: ['Next.js', 'FastAPI', 'ML Models', 'AWS'],
    link: '#',
    category: 'Health Tech',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(0,229,255,0.1))',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>PORTFOLIO</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            Products We've{' '}
            <span className="gradient-text">Shipped</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 18, marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
            Real products solving real problems for real users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.07)',
                background: '#0D1425',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${p.color}25` }}
            >
              {/* Preview area */}
              <div style={{
                height: 160, background: p.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Animated grid */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `linear-gradient(${p.color}15 1px, transparent 1px), linear-gradient(90deg, ${p.color}15 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: `${p.color}20`,
                  border: `1px solid ${p.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, fontWeight: 800, color: p.color,
                  backdropFilter: 'blur(10px)',
                }}>
                  {p.name.charAt(0)}
                </div>

                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: `${p.color}20`, border: `1px solid ${p.color}40`,
                  borderRadius: 20, padding: '4px 12px',
                  fontSize: 11, color: p.color, fontWeight: 600,
                }}>
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{p.name}</h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontSize: 11, padding: '4px 10px', borderRadius: 4, fontWeight: 600,
                      background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color,
                    }}>{t}</span>
                  ))}
                </div>

                {/* Link */}
                {p.link !== '#' ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: p.color, fontSize: 14, fontWeight: 600 }}
                  >
                    View Live <ExternalLink size={14} />
                  </a>
                ) : (
                  <span style={{ color: '#475569', fontSize: 14 }}>In Development</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
