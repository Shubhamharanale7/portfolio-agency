'use client'
import { motion } from 'framer-motion'

const stack = [
  {
    category: 'Frontend',
    color: '#6C63FF',
    items: [
      { name: 'Next.js', emoji: '▲' },
      { name: 'React', emoji: '⚛️' },
      { name: 'TypeScript', emoji: '📘' },
      { name: 'Tailwind', emoji: '🌊' },
      { name: 'Framer', emoji: '✨' },
    ],
  },
  {
    category: 'Backend',
    color: '#00E5FF',
    items: [
      { name: 'Node.js', emoji: '💚' },
      { name: 'Python', emoji: '🐍' },
      { name: 'FastAPI', emoji: '⚡' },
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'Redis', emoji: '🔴' },
    ],
  },
  {
    category: 'Infrastructure',
    color: '#00FF9C',
    items: [
      { name: 'AWS', emoji: '☁️' },
      { name: 'Docker', emoji: '🐳' },
      { name: 'Kubernetes', emoji: '☸️' },
      { name: 'Terraform', emoji: '🏗️' },
      { name: 'GitHub CI', emoji: '🔄' },
    ],
  },
  {
    category: 'AI / ML',
    color: '#F59E0B',
    items: [
      { name: 'OpenAI', emoji: '🤖' },
      { name: 'LangChain', emoji: '🔗' },
      { name: 'Pinecone', emoji: '🌲' },
      { name: 'HuggingFace', emoji: '🤗' },
      { name: 'Whisper', emoji: '🎙️' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', position: 'relative', overflow: 'hidden' }}>
      {/* Background effect */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>TOOLS & STACK</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            Built With the{' '}
            <span className="gradient-text">Best Tools</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.12 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 style={{ fontSize: 13, fontWeight: 700, color: cat.color, letterSpacing: 3, marginBottom: 20 }}>
                {cat.category.toUpperCase()}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + ii * 0.06 }}
                    className="tech-icon"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 14px', borderRadius: 10,
                      background: `${cat.color}08`,
                      border: `1px solid ${cat.color}20`,
                      cursor: 'default',
                    }}
                    whileHover={{
                      background: `${cat.color}18`,
                      borderColor: `${cat.color}50`,
                      x: 4,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{item.emoji}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#CBD5E1' }}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
