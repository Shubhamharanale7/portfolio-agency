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
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BookingPopup from '@/components/BookingPopup'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <BookingPopup />
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
