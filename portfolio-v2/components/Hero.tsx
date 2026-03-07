'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

/* Animated strip light bar */
function StripBar() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 2, margin: '40px 0', overflow: 'hidden', borderRadius: 2 }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, #3b82f6 15%, #06b6d4 35%, #8b5cf6 55%, #10b981 75%, #3b82f6 90%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s linear infinite',
        filter: 'blur(0.5px)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 20%, rgba(139,92,246,0.3) 50%, rgba(16,185,129,0.3) 80%, transparent 100%)',
        filter: 'blur(4px)',
        transform: 'scaleY(8)',
      }} />
    </div>
  )
}

/* 3D Laptop mockup with VS Code editor */
function LaptopMockup() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setMousePos({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      })
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  const rotX = -mousePos.y * 8
  const rotY = mousePos.x * 10

  return (
    <div ref={ref} style={{ perspective: 1200, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        animate={{ rotateX: rotX, rotateY: rotY }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', width: '100%', maxWidth: 560 }}
        className="float-anim"
      >
        {/* Laptop screen top */}
        <div style={{
          background: '#1a1a2e',
          borderRadius: '12px 12px 0 0',
          border: '2px solid rgba(255,255,255,0.1)',
          borderBottom: 'none',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 -4px 40px rgba(59,130,246,0.15), 0 0 80px rgba(139,92,246,0.1)',
        }}>
          {/* Camera dot */}
          <div style={{ height: 24, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2a2a3a' }} />
          </div>

          {/* VS Code editor */}
          <div style={{ background: '#0d1117', height: 300, position: 'relative', overflow: 'hidden' }}>
            {/* Tab bar */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#161b22', borderBottom: '1px solid #21262d', height: 35, padding: '0 0' }}>
              {['Hero.tsx', 'Services.tsx', 'api/ai.ts'].map((f, i) => (
                <div key={f} style={{
                  padding: '0 16px', height: '100%', display: 'flex', alignItems: 'center',
                  fontSize: 12, color: i === 0 ? '#e6edf3' : '#7d8590',
                  borderRight: '1px solid #21262d',
                  background: i === 0 ? '#0d1117' : 'transparent',
                  borderTop: i === 0 ? '1px solid #3b82f6' : 'none',
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#3b82f6' : '#30363d', marginRight: 6, display: 'inline-block' }} />
                  {f}
                </div>
              ))}
            </div>

            {/* Editor content */}
            <div style={{ display: 'flex', height: 'calc(100% - 35px)' }}>
              {/* Line numbers */}
              <div style={{ width: 40, background: '#0d1117', padding: '12px 0', textAlign: 'right', flexShrink: 0 }}>
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#484f58', lineHeight: '20px', paddingRight: 10 }}>{i + 1}</div>
                ))}
              </div>

              {/* Code */}
              <div style={{ padding: '12px 16px', flex: 1, fontFamily: 'monospace', fontSize: 12, lineHeight: '20px', overflow: 'hidden' }}>
                <div><span style={{ color: '#7ee787' }}>export default</span> <span style={{ color: '#79c0ff' }}>function</span> <span style={{ color: '#d2a8ff' }}>Hero</span><span style={{ color: '#e6edf3' }}>()</span> <span style={{ color: '#e6edf3' }}>{'{'}</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: '#79c0ff' }}>const</span> <span style={{ color: '#e6edf3' }}>ai</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#79c0ff' }}>await</span> <span style={{ color: '#d2a8ff' }}>buildMVP</span><span style={{ color: '#e6edf3' }}>()</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: '#79c0ff' }}>return</span> <span style={{ color: '#e6edf3' }}>(</span></div>
                <div style={{ paddingLeft: 32 }}><span style={{ color: '#7ee787' }}>&lt;section</span> <span style={{ color: '#79c0ff' }}>className</span><span style={{ color: '#e6edf3' }}>=</span><span style={{ color: '#a5d6ff' }}>"hero"</span><span style={{ color: '#7ee787' }}>&gt;</span></div>
                <div style={{ paddingLeft: 48 }}><span style={{ color: '#7ee787' }}>&lt;h1</span> <span style={{ color: '#79c0ff' }}>className</span><span style={{ color: '#e6edf3' }}>=</span><span style={{ color: '#a5d6ff' }}>"title"</span><span style={{ color: '#7ee787' }}>&gt;</span></div>
                <div style={{ paddingLeft: 64 }}><span style={{ color: '#a5d6ff' }}>Build MVP in 4 Weeks</span></div>
                <div style={{ paddingLeft: 48 }}><span style={{ color: '#7ee787' }}>&lt;/h1&gt;</span></div>
                <div style={{ paddingLeft: 48 }}><span style={{ color: '#7ee787' }}>&lt;AIEngine</span> <span style={{ color: '#79c0ff' }}>model</span><span style={{ color: '#e6edf3' }}>=</span><span style={{ color: '#a5d6ff' }}>"gpt-4"</span> <span style={{ color: '#7ee787' }}>/&gt;</span></div>
                <div style={{ paddingLeft: 48 }}><span style={{ color: '#7ee787' }}>&lt;CloudDeploy</span> <span style={{ color: '#79c0ff' }}>env</span><span style={{ color: '#e6edf3' }}>=</span><span style={{ color: '#a5d6ff' }}>"aws"</span> <span style={{ color: '#7ee787' }}>/&gt;</span></div>
                <div style={{ paddingLeft: 32 }}><span style={{ color: '#7ee787' }}>&lt;/section&gt;</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: '#e6edf3' }}>)</span></div>
                <div><span style={{ color: '#e6edf3' }}>{'}'}</span></div>
                {/* Cursor blink */}
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ color: '#484f58' }}>// </span>
                  <span className="typing-cursor" style={{ display: 'inline-block', width: 2, height: 14, background: '#3b82f6', marginLeft: 4, verticalAlign: 'middle' }} />
                </div>
              </div>
            </div>

            {/* Glow overlay on hover */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `radial-gradient(ellipse at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, rgba(59,130,246,0.08) 0%, transparent 60%)`,
            }} />
          </div>
        </div>

        {/* Laptop base */}
        <div style={{
          height: 14, background: 'linear-gradient(to bottom, #1a1a2e, #111)',
          borderRadius: '0 0 4px 4px',
          border: '2px solid rgba(255,255,255,0.08)',
          borderTop: 'none',
          position: 'relative',
        }}>
          {/* Trackpad hint */}
          <div style={{
            position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
            width: 60, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)',
          }} />
        </div>

        {/* Shadow */}
        <div style={{
          height: 20, background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.2) 0%, transparent 70%)',
          marginTop: 4, filter: 'blur(8px)',
        }} />

        {/* Strip light below laptop */}
        <StripBar />
      </motion.div>
    </div>
  )
}

/* Floating phone mockup with SaaS UI */
function PhoneMockup({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{
      width: 120, flexShrink: 0,
      background: '#0c0e17',
      borderRadius: 20,
      border: '2px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
      ...style,
    }}>
      {/* Notch */}
      <div style={{ height: 20, background: '#060810', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 30, height: 4, borderRadius: 2, background: '#1a1a2e' }} />
      </div>
      {/* Screen content */}
      <div style={{ padding: '8px', background: '#060810', minHeight: 200 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: '#3b82f6', fontFamily: 'var(--font-display)' }}>Dashboard</div>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.4)' }} />
        </div>
        {/* Metric card */}
        <div style={{ background: '#111420', borderRadius: 8, padding: '8px', marginBottom: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 7, color: '#475569', marginBottom: 2 }}>Monthly Revenue</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-display)' }}>$48.2K</div>
          <div style={{ fontSize: 7, color: '#10b981' }}>↑ 23.5%</div>
        </div>
        {/* Mini chart bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 30, marginBottom: 6 }}>
          {[0.4, 0.6, 0.5, 0.8, 0.7, 1, 0.9].map((h, i) => (
            <div key={i} style={{
              flex: 1, borderRadius: '2px 2px 0 0',
              height: `${h * 100}%`,
              background: i === 5 ? '#3b82f6' : 'rgba(59,130,246,0.25)',
            }} />
          ))}
        </div>
        {/* Users row */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
          {['AI', 'SaaS', 'MVP'].map(tag => (
            <div key={tag} style={{ flex: 1, background: 'rgba(59,130,246,0.1)', borderRadius: 4, padding: '3px 0', textAlign: 'center', fontSize: 7, color: '#3b82f6', fontWeight: 700 }}>{tag}</div>
          ))}
        </div>
        {/* List items */}
        {[1, 2, 3].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: `rgba(${i === 1 ? '59,130,246' : i === 2 ? '16,185,129' : '139,92,246'},0.3)` }} />
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ width: 14, height: 5, borderRadius: 2, background: 'rgba(59,130,246,0.2)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const openBooking = () => window.dispatchEvent(new CustomEvent('openBooking'))

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Background */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Top strip */}
      <div className="strip-light" style={{ top: 68, left: 0, right: 0 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        {/* Profile strip at very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: 14, overflow: 'hidden',
            border: '2px solid rgba(59,130,246,0.5)',
            boxShadow: '0 0 20px rgba(59,130,246,0.3)',
            flexShrink: 0,
          }}>
            <img src="/images/profile.jpg" alt="Shubham Haranale" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#f8fafc' }}>Shubham Haranale</p>
            <p style={{ fontSize: 13, color: '#3b82f6', fontWeight: 500 }}>Founder & CEO · 6+ Years · 25+ AI/SaaS MVPs · 1L+ Users</p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', display: 'inline-block' }} className="glow-dot" />
            <span style={{ fontSize: 13, color: '#10b981', fontWeight: 500 }}>Available</span>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                fontSize: 13, color: '#60a5fa', fontWeight: 500, marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                Accepting new projects — March 2026
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(42px, 5vw, 68px)', lineHeight: 1.05,
                letterSpacing: '-0.03em', marginBottom: 20, color: '#f8fafc',
              }}>
                Build Your<br />
                <span className="grad-blue">Startup MVP</span><br />
                in 4 Weeks
              </h1>

              <p style={{ fontSize: 18, color: '#64748b', lineHeight: 1.7, marginBottom: 36, maxWidth: 440, fontWeight: 400 }}>
                AI, SaaS & Automation products built production-ready. From architecture to deployment — done fast.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <button onClick={openBooking} className="btn-main">
                  <Calendar size={16} />
                  Book a Call
                </button>
                <a href="#portfolio" className="btn-ghost" style={{ textDecoration: 'none' }}>
                  View Work
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 32 }}>
                {[
                  { n: '25+', l: 'MVPs Shipped' },
                  { n: '6+', l: 'Years Exp.' },
                  { n: '1L+', l: 'Users Handled' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#f8fafc', letterSpacing: '-0.02em' }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: '#475569', fontWeight: 500, marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Laptop + floating phones */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Floating phone left */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', left: -30, top: '15%', zIndex: 10 }}
            >
              <PhoneMockup />
            </motion.div>

            {/* Laptop */}
            <div style={{ paddingLeft: 60, paddingRight: 20 }}>
              <LaptopMockup />
            </div>

            {/* Floating phone right */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', right: -10, top: '20%', zIndex: 10 }}
            >
              <PhoneMockup />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: 100, padding: '8px 20px',
                display: 'flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(12px)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: '#10b981', fontWeight: 600 }}>Deployed to Production ✓</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="strip-light" style={{ bottom: 0, left: 0, right: 0 }} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
