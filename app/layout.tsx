import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Shubham Haranale — MVP Development Agency',
  description: 'Build your AI/SaaS MVP in 4 Weeks. Production-ready AI, SaaS & Automation products built fast for startups.',
  keywords: 'MVP development, AI, SaaS, DevOps, startup, Shubham Haranale',
  metadataBase: new URL('https://portfolio-agency-eight.vercel.app'),
  openGraph: {
    title: 'Shubham Haranale — MVP Development Agency',
    description: 'Build your AI/SaaS MVP in 4 Weeks. AI, SaaS & Automation products built production-ready for startups.',
    url: 'https://portfolio-agency-eight.vercel.app',
    siteName: 'Shubham Haranale',
    images: [
      {
        url: 'https://portfolio-agency-eight.vercel.app/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Shubham Haranale — MVP Development Agency',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Haranale — MVP Development Agency',
    description: 'Build your AI/SaaS MVP in 4 Weeks.',
    images: ['https://portfolio-agency-eight.vercel.app/images/og-preview.png'],
  },
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
