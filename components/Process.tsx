'use client'
import { motion } from 'framer-motion'
import { Search, Cpu, Code2, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'Deep dive into your idea, target users, and technical requirements. We map out the MVP scope together.', color: '#6C63FF' },
  { num: '02', icon: Cpu, title: 'Architecture', desc: 'Design the technical blueprint — database schema, API design, system architecture, and cloud infrastructure.', color: '#00E5FF' },
  { num: '03', icon: Code2, title: 'Development', desc: 'Rapid sprint-based development with daily updates. Full-stack build with CI/CD from day one.', color: '#00FF9C' },
  { num: '04', icon: Rocket, title: 'Launch', desc: 'Production deployment on AWS/Vercel with monitoring, security hardening, and performance optimization.', color: '#F59E0B' },
  { num: '05', icon: TrendingUp, title: 'Scaling', desc: 'Post-launch support, feature iteration, and infrastructure scaling as your user base grows.', color: '#EC4899' },
]

export default function Process() {
  return (
    <section id="process" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>HOW WE WORK</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            From Idea to{' '}
            <span className="gradient-text">Launched Product</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div style={{
            position: 'absolute', top: 40, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(to right, #6C63FF, #00E5FF, #00FF9C, #F59E0B, #EC4899)',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                {/* Circle */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, position: 'relative', zIndex: 1,
                  boxShadow: `0 0 30px ${step.color}40`,
                }}>
                  <step.icon size={30} color={step.color} />
                </div>
                <span style={{ color: step.color, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{step.num}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative pl-8">
          <div style={{ position: 'absolute', left: 16, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #6C63FF, #00E5FF, #00FF9C, #F59E0B, #EC4899)' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ marginBottom: 48, position: 'relative' }}
            >
              <div style={{
                position: 'absolute', left: -32, top: 0,
                width: 32, height: 32, borderRadius: '50%',
                background: `${step.color}20`, border: `2px solid ${step.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <step.icon size={16} color={step.color} />
              </div>
              <span style={{ color: step.color, fontSize: 12, fontWeight: 700, letterSpacing: 2, display: 'block', marginBottom: 4 }}>{step.num}</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.7 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
