'use client'
import { motion } from 'framer-motion'
import { Search, Cpu, Code2, Rocket, TrendingUp, Check, Github, Twitter, Linkedin, Mail, Phone, Calendar } from 'lucide-react'
import { useEffect } from 'react'

/* ─── PROCESS ─── */
const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'Map your idea, users, and technical scope. Clear requirements in one session.', color: '#3b82f6' },
  { num: '02', icon: Cpu, title: 'Architecture', desc: 'Database schema, API design, system architecture, and cloud infrastructure blueprint.', color: '#8b5cf6' },
  { num: '03', icon: Code2, title: 'Development', desc: 'Sprint-based build with daily updates. Full-stack with CI/CD from day one.', color: '#06b6d4' },
  { num: '04', icon: Rocket, title: 'Launch', desc: 'Production deployment on AWS with monitoring, security, and performance optimization.', color: '#10b981' },
  { num: '05', icon: TrendingUp, title: 'Scale', desc: 'Post-launch support, feature iteration, and infrastructure scaling as users grow.', color: '#f59e0b' },
]

export function Process() {
  return (
    <section id="process" className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Process</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc' }}>
            From idea to<br />live product
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0 }} className="process-grid">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ padding: '32px 24px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', position: 'relative' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}12`, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <s.icon size={18} color={s.color} strokeWidth={1.5} />
              </div>
              <span style={{ fontSize: 11, color: s.color, fontWeight: 700, letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>{s.num}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#f8fafc', marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.process-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:500px){.process-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── TECH STACK ─── */
const techGroups = [
  { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], color: '#3b82f6' },
  { label: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'], color: '#8b5cf6' },
  { label: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub CI/CD'], color: '#06b6d4' },
  { label: 'AI / ML', items: ['OpenAI GPT-4', 'LangChain', 'Pinecone', 'HuggingFace', 'LLM Agents'], color: '#10b981' },
]

export function TechStack() {
  return (
    <section id="tech" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Tech Stack</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc' }}>
            Tools we use<br />to build with
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="tech-grid">
          {techGroups.map((g, gi) => (
            <motion.div key={g.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.08 }}
              style={{ padding: '28px', background: '#0c0e17', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16 }}
              whileHover={{ borderColor: `${g.color}25`, background: '#111420' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: g.color }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: g.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{g.label}</span>
              </div>
              {g.items.map((item, ii) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.06 + ii * 0.04 }}
                  style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 10, cursor: 'default' }}
                  whileHover={{ x: 4 }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: `${g.color}60`, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#94a3b8', fontWeight: 400 }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.tech-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:500px){.tech-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { name: 'Ben Stair', role: 'Founder', company: 'Bespoke Labs AI', quote: 'Delivered our AI document processing MVP in under 3 weeks. Architecture is clean, code is production-grade. Exceptional.', color: '#3b82f6' },
  { name: 'Riyan Dicorz', role: 'CTO', company: 'TechVenture Studio', quote: 'The DevOps setup alone was worth it. CI/CD, monitoring, auto-scaling on AWS — infra costs dropped 40% immediately.', color: '#8b5cf6' },
  { name: 'John DiSouza', role: 'Product Lead', company: 'HealthAI Inc', quote: 'Built the full stack in 4 weeks — ML models, backend, and a beautiful React dashboard. Exceeded expectations.', color: '#06b6d4' },
  { name: 'William Rickard', role: 'Co-Founder', company: 'ClaimsAutomate', quote: 'Insurance claims automation reduced manual work by 80%. LLM pipeline and admin dashboard are flawless.', color: '#10b981' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Testimonials</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc' }}>
            What founders<br />say about us
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="test-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ padding: '32px', background: '#0c0e17', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, position: 'relative', overflow: 'hidden' }}
              whileHover={{ borderColor: `${t.color}25`, background: '#111420' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, ${t.color}60, transparent)` }} />
              <div style={{ fontSize: 40, color: t.color, opacity: 0.2, fontFamily: 'serif', lineHeight: 1, marginBottom: 16 }}>"</div>
              <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.75, marginBottom: 24, fontWeight: 400 }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${t.color}20`, border: `1px solid ${t.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, color: t.color, fontSize: 16 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 15, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: '#475569' }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.test-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── PRICING ─── */
const plans = [
  { name: 'Starter MVP', price: '$3k–$5k', desc: 'For founders validating an idea fast.', features: ['Full-stack web app', 'Auth + database', 'REST API', 'Vercel deploy', '2 weeks delivery'], color: '#3b82f6', popular: false },
  { name: 'AI MVP', price: '$5k–$10k', desc: 'For founders building AI-powered products.', features: ['Everything in Starter', 'LLM integration', 'Vector database', 'AI agents', 'AWS infrastructure', '3-4 weeks delivery'], color: '#8b5cf6', popular: true },
  { name: 'Custom Product', price: 'Custom', desc: 'Enterprise SaaS or complex platform builds.', features: ['Everything in AI MVP', 'Microservices', 'Kubernetes', 'Multi-tenant SaaS', 'Dedicated support'], color: '#06b6d4', popular: false },
]

export function Pricing() {
  const openBooking = () => window.dispatchEvent(new CustomEvent('openBooking'))
  return (
    <section id="pricing" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 12 }}>
            Transparent pricing
          </h2>
          <p style={{ color: '#475569', fontSize: 16 }}>Fixed-scope. No surprises, no hourly billing.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'center' }} className="pricing-grid">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{
                padding: p.popular ? '40px 32px' : '32px',
                background: p.popular ? '#111420' : '#0c0e17',
                border: `1px solid ${p.popular ? p.color + '40' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: 20, position: 'relative', overflow: 'hidden',
                transform: p.popular ? 'scale(1.03)' : 'none',
                boxShadow: p.popular ? `0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px ${p.color}20` : 'none',
              }}
            >
              {p.popular && (
                <>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${p.color}, transparent)` }} />
                  <div style={{ position: 'absolute', top: 16, right: 16, background: p.color, borderRadius: 100, padding: '3px 12px', fontSize: 10, fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>POPULAR</div>
                </>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: p.color, marginBottom: 4 }}>{p.price}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#f8fafc', marginBottom: 8 }}>{p.name}</h3>
              <p style={{ color: '#475569', fontSize: 14, marginBottom: 24 }}>{p.desc}</p>
              <ul style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#94a3b8' }}>
                    <Check size={14} color={p.color} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={openBooking} style={{
                width: '100%', padding: '13px', borderRadius: 10, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.3s',
                background: p.popular ? p.color : 'transparent',
                color: p.popular ? 'white' : p.color,
                border: `1px solid ${p.popular ? 'transparent' : p.color + '50'}`,
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 30px ${p.color}40` }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:700px){.pricing-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── ABOUT ─── */
export function About() {
  return (
    <section id="about" className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', background: '#0c0e17', border: '1px solid rgba(255,255,255,0.06)' }}>
              <img src="/images/profile.jpg" alt="Shubham Haranale"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%) contrast(1.05)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #04050a 0%, transparent 50%)' }} />
              {/* Bottom info */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#f8fafc' }}>Shubham Haranale</p>
                <p style={{ fontSize: 13, color: '#3b82f6', fontWeight: 500 }}>Founder & CEO · Full Stack · DevOps · MLOps</p>
              </div>
              {/* Strip at top */}
              <div className="strip-light" style={{ top: 0, left: 0, right: 0 }} />
            </div>
            {/* Floating stats */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              style={{ position: 'absolute', top: 24, right: -20, background: '#0c0e17', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#3b82f6' }}>25+</div>
              <div style={{ fontSize: 11, color: '#475569' }}>MVPs Shipped</div>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              style={{ position: 'absolute', bottom: 80, left: -20, background: '#0c0e17', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#10b981' }}>1L+</div>
              <div style={{ fontSize: 11, color: '#475569' }}>Users Handled</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 16 }}>About</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,44px)', letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 24, lineHeight: 1.15 }}>
              The engineer<br />behind the products
            </h2>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              I'm Shubham Haranale — Founder, CEO & CTO with 6+ years building AI-powered SaaS products and scalable cloud architectures for startups worldwide.
            </p>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              I've shipped 25+ production MVPs handling 1 lakh+ concurrent users. From LLM integrations and vector databases to Kubernetes orchestration on AWS — I bring end-to-end technical depth to every engagement.
            </p>
            <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              My mission is simple: help founders validate ideas quickly and launch MVPs without months of development.
            </p>
            {/* Role badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {['Full Stack Developer', 'DevOps Engineer', 'MLOps Engineer', 'AI Architect'].map(r => (
                <span key={r} style={{ padding: '8px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{r}</span>
              ))}
            </div>
            {/* Social links */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: Github, href: 'https://github.com/Shubhamharanale7', color: '#3b82f6' },
                { icon: Twitter, href: 'https://x.com/ShubhamHaranal1', color: '#06b6d4' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shubhamharanale7', color: '#0ea5e9' },
                { icon: Mail, href: 'mailto:shubhaminfosoft7@gmail.com', color: '#10b981' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 42, height: 42, borderRadius: 10, background: `${s.color}10`, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}20`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}10`; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <s.icon size={17} color={s.color} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── CONTACT ─── */
export function Contact() {
  const openBooking = () => window.dispatchEvent(new CustomEvent('openBooking'))

  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://assets.calendly.com/assets/external/widget.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <section id="contact" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, alignItems: 'start' }} className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p style={{ fontSize: 12, letterSpacing: '0.1em', color: '#3b82f6', fontWeight: 600, textTransform: 'uppercase', marginBottom: 16 }}>Contact</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,44px)', letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16, lineHeight: 1.15 }}>
              Let's build<br />your MVP
            </h2>
            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
              Book a free 30-min architecture call. We'll scope your project and give you a clear path to launch.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {[
                { icon: Mail, val: 'shubhaminfosoft7@gmail.com', href: 'mailto:shubhaminfosoft7@gmail.com' },
                { icon: Phone, val: '+91 7038362217', href: 'tel:+917038362217' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 12, background: '#0c0e17', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; e.currentTarget.style.background = '#111420' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = '#0c0e17' }}
                >
                  <c.icon size={16} color="#3b82f6" />
                  <span style={{ fontSize: 14, color: '#94a3b8' }}>{c.val}</span>
                </a>
              ))}
            </div>
            <button onClick={openBooking} className="btn-main" style={{ width: '100%', justifyContent: 'center' }}>
              <Calendar size={16} /> Book Free Architecture Call
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: '#0c0e17' }}>
            <div className="calendly-inline-widget"
              data-url="https://calendly.com/shubhaminfosoft7?background_color=0c0e17&text_color=f8fafc&primary_color=3b82f6"
              style={{ minWidth: 300, height: 680 }} />
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

/* ─── FOOTER ─── */
export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '48px 0 32px', background: '#04050a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#f8fafc', marginBottom: 4 }}>Shubham Haranale</p>
          <p style={{ fontSize: 13, color: '#334155' }}>MVP Development Agency · Building the future</p>
        </div>
        <p style={{ fontSize: 13, color: '#1e293b' }}>© 2025 · Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  )
}
