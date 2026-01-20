'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import HeroBackground from './HeroBackground'
import { FloatingParticles, MouseParallax, GlowOrb } from './MotionGraphics'

const roles = [
  'Software Engineer',
  'Web Developer',
  'API Architect',
  'Problem Solver',
  'Full-Stack Developer',
  'Tech Consultant',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/img/pexels-pixabay-247676.jpg')`,
        }}
      />
      
      {/* SVG Pattern Overlay */}
      <HeroBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-indigo-900/65 to-gray-900/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-transparent to-transparent" />
      
      {/* AR/VR Motion Graphics - Floating Particles */}
      <FloatingParticles />
      
      {/* Enhanced Glow Orbs with 3D effect */}
      <GlowOrb className="top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      <GlowOrb className="bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-4xl mx-auto text-center">
          <MouseParallax>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Building Digital
                </motion.span>
                <br />
                <motion.span 
                  className="text-white inline-block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Solutions That Scale
                </motion.span>
              </motion.h1>

              <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I'm{' '}
              <motion.span
                className="text-white font-semibold inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Eugine Obiero
              </motion.span>
              , a{' '}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block gradient-text font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
              </motion.p>

              <motion.p
                className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Transforming complex problems into elegant, scalable solutions. 
                Specializing in APIs, backend systems, automation, and high-performance web applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/30 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="relative z-10">Let's Work Together</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="/EUGINE_OBIERO_CV.docx"
                download="Eugine_Obiero_CV.docx"
                className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 backdrop-blur-sm flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
                Download CV
              </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { icon: FiGithub, href: 'https://github.com/billionaireobi', label: 'GitHub' },
                  { icon: FiTwitter, href: 'https://x.com/pipxinstall', label: 'Twitter' },
                  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-300 hover:text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </MouseParallax>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-white">
            <FiArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

