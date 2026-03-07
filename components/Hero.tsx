'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 10,
  duration: Math.random() * 15 + 10,
  color: ['#6C63FF', '#00E5FF', '#00FF9C'][Math.floor(Math.random() * 3)],
}))

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let angle = 0
    const W = canvas.width = 500
    const H = canvas.height = 500
    const cx = W / 2, cy = H / 2
    const R = 180

    const dots: { lat: number; lng: number }[] = []
    for (let lat = -80; lat <= 80; lat += 14) {
      for (let lng = 0; lng < 360; lng += 14) {
        dots.push({ lat, lng })
      }
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left - W / 2) / W,
        y: (e.clientY - rect.top - H / 2) / H,
      }
    }
    window.addEventListener('mousemove', handleMouse)

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      angle += 0.004 + mouseRef.current.x * 0.002

      // Glow bg
      const g = ctx!.createRadialGradient(cx, cy, 0, cx, cy, R + 40)
      g.addColorStop(0, 'rgba(108,99,255,0.08)')
      g.addColorStop(1, 'rgba(0,229,255,0.02)')
      ctx!.beginPath()
      ctx!.arc(cx, cy, R + 40, 0, Math.PI * 2)
      ctx!.fillStyle = g
      ctx!.fill()

      // Draw dots
      const visible: { x: number; y: number; z: number }[] = []
      for (const { lat, lng } of dots) {
        const latR = (lat * Math.PI) / 180
        const lngR = ((lng + angle * 57) * Math.PI) / 180
        const x = R * Math.cos(latR) * Math.sin(lngR)
        const y = R * Math.sin(latR)
        const z = R * Math.cos(latR) * Math.cos(lngR)
        visible.push({ x, y, z })
      }

      // Sort by z
      const sorted = visible.map((v, i) => ({ ...v, i })).sort((a, b) => b.z - a.z)

      for (const { x, y, z } of sorted) {
        const brightness = (z + R) / (2 * R)
        const size = brightness * 2.5 + 0.5
        const alpha = brightness * 0.8 + 0.1

        const px = cx + x
        const py = cy - y

        ctx!.beginPath()
        ctx!.arc(px, py, size, 0, Math.PI * 2)

        if (z > 0) {
          ctx!.fillStyle = `rgba(0,229,255,${alpha})`
        } else {
          ctx!.fillStyle = `rgba(108,99,255,${alpha * 0.4})`
        }
        ctx!.fill()
      }

      // Lines connecting nearby visible dots
      const front = sorted.filter(d => d.z > 80).slice(0, 30)
      ctx!.strokeStyle = 'rgba(108,99,255,0.15)'
      ctx!.lineWidth = 0.5
      for (let i = 0; i < front.length; i++) {
        for (let j = i + 1; j < front.length; j++) {
          const dx = (cx + front[i].x) - (cx + front[j].x)
          const dy = (cy - front[i].y) - (cy - front[j].y)
          if (Math.sqrt(dx * dx + dy * dy) < 70) {
            ctx!.beginPath()
            ctx!.moveTo(cx + front[i].x, cy - front[i].y)
            ctx!.lineTo(cx + front[j].x, cy - front[j].y)
            ctx!.stroke()
          }
        }
      }

      // Outer ring
      ctx!.beginPath()
      ctx!.arc(cx, cy, R + 2, 0, Math.PI * 2)
      ctx!.strokeStyle = 'rgba(0,229,255,0.2)'
      ctx!.lineWidth = 1
      ctx!.stroke()

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current!)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas ref={canvasRef} width={500} height={500}
      style={{ maxWidth: '100%', opacity: 0.9 }}
    />
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 6px ${p.color}`,
            }}
            animate={{ y: [0, -800, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm"
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', color: '#00E5FF' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}
          >
            Build Your{' '}
            <span className="gradient-text">Startup MVP</span>
            <br />in 4 Weeks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 20, color: '#94A3B8', marginBottom: 16, lineHeight: 1.6 }}
          >
            We help founders launch AI, SaaS, and automation products fast.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ fontSize: 16, color: '#6C63FF', marginBottom: 36, letterSpacing: 3, fontWeight: 600 }}
          >
            AI • SaaS • AUTOMATION • CLOUD
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary">
              <Calendar size={18} />
              <span>Book a Call</span>
            </a>
            <a href="#portfolio" className="btn-outline">
              View Projects
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {['Next.js', 'AI/ML', 'DevOps', 'SaaS', 'AWS', 'FastAPI'].map(tech => (
              <span key={tech} style={{
                padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 500,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94A3B8',
              }}>{tech}</span>
            ))}
          </motion.div>
        </div>

        {/* Right - Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative">
            <div style={{
              position: 'absolute', inset: '-40px',
              background: 'radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />
            <GlobeCanvas />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#475569' }}
      >
        <span style={{ fontSize: 12, letterSpacing: 2 }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #6C63FF, transparent)' }} />
      </motion.div>
    </section>
  )
}
