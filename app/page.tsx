'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import BlogPreview from '@/components/BlogPreview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <Process />
        <TechStack />
        <Testimonials />
        <Pricing />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
