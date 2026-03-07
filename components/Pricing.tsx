'use client'
import { motion } from 'framer-motion'
import { Check, Zap, Brain, Building2 } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Starter MVP',
    price: '$3k – $5k',
    desc: 'Perfect for early-stage founders validating an idea.',
    features: [
      'Full-stack web application',
      'User authentication',
      'Database design',
      'REST API',
      'Vercel deployment',
      'Basic dashboard',
      '2 weeks delivery',
    ],
    cta: 'Start Building',
    color: '#6C63FF',
    popular: false,
  },
  {
    icon: Brain,
    name: 'AI MVP',
    price: '$5k – $10k',
    desc: 'For founders building AI-powered products.',
    features: [
      'Everything in Starter',
      'LLM integration',
      'Vector database',
      'AI agents / pipelines',
      'Custom ML models',
      'AWS infrastructure',
      '3-4 weeks delivery',
    ],
    cta: 'Build with AI',
    color: '#00E5FF',
    popular: true,
  },
  {
    icon: Building2,
    name: 'Custom Product',
    price: 'Custom',
    desc: 'Enterprise SaaS or complex platform builds.',
    features: [
      'Everything in AI MVP',
      'Microservices architecture',
      'Kubernetes deployment',
      'Multi-tenant SaaS',
      'Advanced DevOps',
      'Dedicated support',
      'Timeline on scope',
    ],
    cta: 'Get a Quote',
    color: '#00FF9C',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#6C63FF', fontSize: 13, letterSpacing: 4, fontWeight: 600, marginBottom: 12 }}>PRICING</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.15 }}>
            Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: 18, marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>
            Fixed-scope engagements. No surprises, no hourly billing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderRadius: 24, padding: plan.popular ? '40px 32px' : '32px',
                background: plan.popular ? `linear-gradient(135deg, ${plan.color}12, rgba(0,229,255,0.08))` : '#0D1425',
                border: `${plan.popular ? 2 : 1}px solid ${plan.popular ? plan.color : 'rgba(255,255,255,0.07)'}`,
                position: 'relative', overflow: 'hidden',
                boxShadow: plan.popular ? `0 0 60px ${plan.color}20` : 'none',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
              }}
              whileHover={{ boxShadow: `0 0 40px ${plan.color}25`, y: -4 }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: `linear-gradient(135deg, #6C63FF, #00E5FF)`,
                  borderRadius: 20, padding: '4px 14px',
                  fontSize: 11, fontWeight: 700, color: 'white', letterSpacing: 1,
                }}>MOST POPULAR</div>
              )}

              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${plan.color}20`, border: `1px solid ${plan.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <plan.icon size={24} color={plan.color} />
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>{plan.desc}</p>
              <div style={{ fontSize: 36, fontWeight: 800, color: plan.color, marginBottom: 28 }}>{plan.price}</div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#94A3B8' }}>
                    <Check size={16} color={plan.color} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center',
                padding: '14px 24px', borderRadius: 10, fontWeight: 700, fontSize: 15,
                background: plan.popular ? `linear-gradient(135deg, #6C63FF, #00E5FF)` : `${plan.color}15`,
                border: plan.popular ? 'none' : `1px solid ${plan.color}40`,
                color: plan.popular ? 'white' : plan.color,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${plan.color}40`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
