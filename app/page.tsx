'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ScrollProgressBar } from '@/components/Scrollytelling'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
