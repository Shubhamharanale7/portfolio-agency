'use client'

const items = ['MVP in 4 Weeks', '25+ AI/SaaS Products', '1 Lakh+ Concurrent Users', '6+ Years Engineering', 'Production-Grade Architecture', 'Full-Stack Delivery', 'AWS · Docker · K8s', 'OpenAI · LangChain · RAG']

export default function Trust() {
  const doubled = [...items, ...items]
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative', padding: '18px 0' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, #04050a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, #04050a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 48, paddingRight: 48, whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#475569', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1e3a5f', display: 'inline-block', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
