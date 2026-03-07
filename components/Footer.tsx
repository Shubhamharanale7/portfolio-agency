'use client'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(108,99,255,0.15)',
      background: '#060B18',
      padding: '60px 0 32px',
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg,#6C63FF,#00E5FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 18, color: 'white',
              }}>S</div>
              <span style={{ fontWeight: 700, fontSize: 18 }}>
                Shubham<span style={{ color: '#00E5FF' }}>.</span>dev
              </span>
            </div>
            <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              MVP development agency helping founders build AI, SaaS, and automation products fast.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: '#E6F1FF' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Services', 'Portfolio', 'Process', 'Tech Stack', 'Pricing', 'About', 'Blog', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`}
                  style={{ color: '#475569', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00E5FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: '#E6F1FF' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              <a href="mailto:shubhaminfosoft7@gmail.com" style={{ color: '#475569', fontSize: 14 }}>shubhaminfosoft7@gmail.com</a>
              <a href="tel:+917038362217" style={{ color: '#475569', fontSize: 14 }}>+91 7038362217</a>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Github, href: 'https://github.com/Shubhamharanale7', color: '#6C63FF' },
                { icon: Twitter, href: 'https://x.com/ShubhamHaranal1', color: '#00E5FF' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shubhamharanale7', color: '#0EA5E9' },
                { icon: Mail, href: 'mailto:shubhaminfosoft7@gmail.com', color: '#00FF9C' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: `${s.color}10`, border: `1px solid ${s.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}25`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}10`; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <s.icon size={16} color={s.color} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#334155', fontSize: 13 }}>© 2025 Shubham Haranale. All rights reserved.</p>
          <p style={{ color: '#334155', fontSize: 13 }}>
            Built with <span style={{ color: '#6C63FF' }}>Next.js</span> · Deployed on <span style={{ color: '#00E5FF' }}>Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
