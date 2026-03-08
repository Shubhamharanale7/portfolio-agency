import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Shubham Haranale — MVP Development Agency',
  description: 'Build Your Startup MVP in 4 Weeks. AI, SaaS, and Automation products built fast by Shubham Haranale.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
