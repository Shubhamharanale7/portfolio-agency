import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Shubham Haranale | MVP Development Agency',
  description: 'Build Your Startup MVP in 4 Weeks. AI, SaaS, and Automation products built fast.',
  keywords: 'MVP development, AI, SaaS, DevOps, startup, Shubham Haranale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" style={{ background: '#0A0F1F', color: '#E6F1FF' }}>
        {children}
      </body>
    </html>
  )
}
