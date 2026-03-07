'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    category: 'MVP Development',
    title: 'How to Build a Production-Ready SaaS in 4 Weeks',
    desc: 'The exact playbook we use to ship MVPs fast — from architecture decisions to deployment pipelines that scale.',
    readTime: '8 min read',
    date: 'Feb 2025',
    color: '#6C63FF',
    emoji: '🚀',
  },
  {
    category: 'AI Engineering',
    title: 'Building RAG Pipelines That Actually Work in Production',
    desc: 'A practical guide to building retrieval-augmented generation systems with real reliability — chunking, embedding, retrieval strategies.',
    readTime: '12 min read',
    date: 'Jan 2025',
    color: '#00E5FF',
    emoji: '🤖',
  },
  {
    category: 'DevOps for Startups',
    title: 'The Minimal AWS Setup Every Startup Needs',
    desc: 'From zero to production-grade AWS architecture. ALB, ECS, ElastiCache, CloudWatch — what you need and nothing more.',
    readTime: '10 min read',
    date: 'Dec 2024',
    color: '#00FF9C',
    emoji: '☁️',
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>BLOG</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
              Engineering{' '}
              <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <a href="#" style={{ color: '#00E5FF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, fontSize: 15 }}>
            View All Posts <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderRadius: 20, overflow: 'hidden',
                background: '#0D1425',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              whileHover={{ y: -8, borderColor: `${p.color}40`, boxShadow: `0 20px 40px ${p.color}15` }}
            >
              {/* Thumbnail */}
              <div style={{
                height: 140,
                background: `linear-gradient(135deg, ${p.color}15, rgba(0,229,255,0.08))`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 56, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `linear-gradient(${p.color}10 1px, transparent 1px), linear-gradient(90deg, ${p.color}10 1px, transparent 1px)`,
                  backgroundSize: '25px 25px',
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{p.emoji}</span>
              </div>

              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: 1,
                    background: `${p.color}15`, border: `1px solid ${p.color}30`,
                    padding: '3px 10px', borderRadius: 20,
                  }}>{p.category}</span>
                  <span style={{ color: '#475569', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} /> {p.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569', fontSize: 13 }}>{p.date}</span>
                  <a href="#" style={{ color: p.color, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    Read <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
