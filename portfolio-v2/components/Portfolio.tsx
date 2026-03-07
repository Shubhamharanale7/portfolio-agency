'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

/* Mini SaaS UI mockup for each project */
function SaasPreview({ color, type }: { color: string; type: string }) {
  if (type === 'doc') return (
    <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
        <div style={{ flex: 1, height: 20, borderRadius: 4, background: `${color}20`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
          <div style={{ fontSize: 9, color, fontWeight: 600 }}>📄 document.pdf</div>
        </div>
        <div style={{ width: 20, height: 20, borderRadius: 4, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 10 }}>↑</span>
        </div>
      </div>
      {['What is the key finding?', 'Summarize section 3', 'Extract all dates'].map((q, i) => (
        <div key={i} style={{ padding: '6px 10px', borderRadius: 6, background: i % 2 === 0 ? `${color}15` : 'rgba(255,255,255,0.03)', border: `1px solid ${i % 2 === 0 ? color + '30' : 'rgba(255,255,255,0.05)'}`, fontSize: 9, color: i % 2 === 0 ? color : '#94a3b8' }}>{q}</div>
      ))}
      <div style={{ marginTop: 'auto', height: 24, borderRadius: 6, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 9, color: 'white', fontWeight: 700 }}>Ask AI →</span>
      </div>
    </div>
  )

  if (type === 'query') return (
    <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 9, color, fontWeight: 700, marginBottom: 4 }}>QuerySphere</div>
      <div style={{ padding: '8px', borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', fontSize: 9, color: '#64748b', fontStyle: 'italic' }}>Show users who signed up last month...</div>
      <div style={{ height: 1, background: `${color}30` }} />
      <div style={{ fontFamily: 'monospace', fontSize: 8, color: '#94a3b8', lineHeight: 1.6 }}>
        <span style={{ color: '#7ee787' }}>SELECT</span> * <span style={{ color: '#7ee787' }}>FROM</span> users<br />
        <span style={{ color: '#7ee787' }}>WHERE</span> created_at &gt; NOW()-'30d'
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
        <span style={{ fontSize: 8, color: '#475569' }}>127 rows</span>
        <span style={{ fontSize: 8, color: '#10b981' }}>0.043s</span>
      </div>
    </div>
  )

  if (type === 'analytics') return (
    <div style={{ padding: 16, height: '100%' }}>
      <div style={{ fontSize: 9, color, fontWeight: 700, marginBottom: 12 }}>Analytics</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
        {[{ l: 'Users', v: '1.2L', up: true }, { l: 'Revenue', v: '$48K', up: true }, { l: 'Churn', v: '2.1%', up: false }, { l: 'NPS', v: '78', up: true }].map(m => (
          <div key={m.l} style={{ padding: '6px', borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: 7, color: '#475569' }}>{m.l}</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>{m.v}</div>
            <div style={{ fontSize: 7, color: m.up ? '#10b981' : '#ef4444' }}>{m.up ? '↑' : '↓'}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {[0.5, 0.7, 0.6, 0.9, 0.8, 1, 0.95].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h * 100}%`, borderRadius: '2px 2px 0 0', background: i === 5 ? color : `${color}30` }} />
        ))}
      </div>
    </div>
  )

  if (type === 'flow') return (
    <div style={{ padding: 16, height: '100%' }}>
      <div style={{ fontSize: 9, color, fontWeight: 700, marginBottom: 10 }}>ProjectFlow</div>
      {['Design', 'Development', 'Testing', 'Deploy'].map((phase, i) => (
        <div key={phase} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: i < 3 ? color : '#1e293b', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 8, color: '#94a3b8' }}>{phase}</span>
              <span style={{ fontSize: 8, color: i < 3 ? color : '#475569' }}>{[100, 100, 75, 0][i]}%</span>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }}>
              <div style={{ height: '100%', width: `${[100, 100, 75, 0][i]}%`, borderRadius: 2, background: color }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (type === 'claims') return (
    <div style={{ padding: 16, height: '100%' }}>
      <div style={{ fontSize: 9, color, fontWeight: 700, marginBottom: 10 }}>SuperClaims AI</div>
      <div style={{ padding: '8px', borderRadius: 8, background: `${color}10`, border: `1px solid ${color}25`, marginBottom: 8 }}>
        <div style={{ fontSize: 8, color: '#64748b', marginBottom: 4 }}>Processing claim...</div>
        <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
          <div style={{ width: '80%', height: '100%', background: `linear-gradient(to right, ${color}, #10b981)`, borderRadius: 2 }} />
        </div>
      </div>
      {['Document OCR ✓', 'Fraud Check ✓', 'Auto-approve'].map((s, i) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, background: i < 2 ? `${color}20` : 'rgba(255,255,255,0.04)', border: `1px solid ${i < 2 ? color + '40' : 'rgba(255,255,255,0.06)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color }}>
            {i < 2 ? '✓' : '○'}
          </span>
          <span style={{ fontSize: 8, color: i < 2 ? '#94a3b8' : '#475569' }}>{s}</span>
        </div>
      ))}
    </div>
  )

  // wellness
  return (
    <div style={{ padding: 16, height: '100%' }}>
      <div style={{ fontSize: 9, color, fontWeight: 700, marginBottom: 8 }}>AI Wellness</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: `3px solid ${color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>87</span>
          <span style={{ fontSize: 7, color: '#64748b' }}>Health Score</span>
          <div style={{ position: 'absolute', inset: -2, borderRadius: '50%', border: `1px solid ${color}20` }} />
        </div>
      </div>
      {['Sleep', 'Activity', 'Stress'].map((m, i) => (
        <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
          <span style={{ fontSize: 8, color: '#475569', width: 36 }}>{m}</span>
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }}>
            <div style={{ height: '100%', width: `${[85, 72, 60][i]}%`, borderRadius: 2, background: color }} />
          </div>
          <span style={{ fontSize: 8, color: '#64748b' }}>{[85, 72, 60][i]}%</span>
        </div>
      ))}
    </div>
  )
}

/* Phone frame wrapper */
function PhoneCard({ color, type, name, desc, stack, link, category }: {
  color: string; type: string; name: string; desc: string; stack: string[]; link: string; category: string
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200 }}
      style={{
        background: '#0c0e17',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20, overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}30`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
    >
      {/* Phone mockup */}
      <div style={{ background: '#060810', padding: 16, position: 'relative' }}>
        <div style={{
          background: '#0c0e17',
          borderRadius: 20,
          border: '2px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          height: 200,
          boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${color}15`,
        }}>
          {/* Notch */}
          <div style={{ height: 16, background: '#060810', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 32, height: 3, borderRadius: 2, background: '#1a1a2e' }} />
          </div>
          <SaasPreview color={color} type={type} />
        </div>

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: 24, right: 24,
          background: `${color}20`, border: `1px solid ${color}40`,
          borderRadius: 100, padding: '3px 10px',
          fontSize: 10, color, fontWeight: 700,
        }}>{category}</div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#f8fafc', letterSpacing: '-0.02em' }}>{name}</h3>
          {link !== '#' && (
            <a href={link} target="_blank" rel="noopener noreferrer"
              style={{ width: 32, height: 32, borderRadius: 8, background: `${color}15`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {stack.map(t => (
            <span key={t} style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const projects = [
  { name: 'Docless AI', desc: 'Upload PDFs, chat with documents, extract insights instantly using LLMs and RAG.', stack: ['Next.js', 'OpenAI', 'LangChain', 'Pinecone'], link: 'https://doclessai.vercel.app/', category: 'AI Tool', color: '#3b82f6', type: 'doc' },
  { name: 'QuerySphere', desc: 'Natural language to SQL. Ask questions in plain English, get instant database results.', stack: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI'], link: 'https://query-sphere.onrender.com/', category: 'SaaS', color: '#8b5cf6', type: 'query' },
  { name: 'ProjectFlow', desc: 'End-to-end project management SaaS with AI task automation and team collaboration.', stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'], link: 'https://projectflow-eosin.vercel.app/', category: 'SaaS', color: '#06b6d4', type: 'flow' },
  { name: 'SuperClaims AI', desc: 'Insurance claims automation. Reduces processing time 80% using computer vision and NLP.', stack: ['Python', 'FastAPI', 'OpenAI', 'AWS'], link: '#', category: 'AI Automation', color: '#f59e0b', type: 'claims' },
  { name: 'AI Analytics Dashboard', desc: 'Real-time SaaS analytics with AI-powered anomaly detection and predictive insights.', stack: ['React', 'Python', 'TensorFlow', 'AWS'], link: '#', category: 'Analytics', color: '#10b981', type: 'analytics' },
  { name: 'AI Wellness SaaS', desc: 'Health analytics platform using ML to track wellness metrics and personalize recommendations.', stack: ['Next.js', 'FastAPI', 'ML Models', 'AWS'], link: '#', category: 'Health Tech', color: '#ec4899', type: 'wellness' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Portfolio</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc' }}>
              Products we've<br />shipped
            </h2>
            <p style={{ color: '#475569', fontSize: 15, maxWidth: 320 }}>25+ MVPs launched. Real products handling real users at scale.</p>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="portfolio-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <PhoneCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.portfolio-grid{grid-template-columns:repeat(2,1fr) !important;}} @media(max-width:600px){.portfolio-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
