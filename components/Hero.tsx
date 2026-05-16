'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import HeroBackground from './HeroBackground'
import { FloatingParticles, MouseParallax, GlowOrb } from './MotionGraphics'

const roles = [
  'Data Analyst',
  'AI Professional',
  'Machine Learning Specialist',
  'Predictive Modeling Expert',
  'Analytics Consultant',
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
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/img/pexels-pixabay-247676.jpg')`,
        }}
      />

      <HeroBackground />

      <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-900/75 via-indigo-900/65 to-gray-900/80" />
      <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-transparent to-transparent" />

      <FloatingParticles />

      <GlowOrb className="top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      <GlowOrb className="bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/10 to-purple-500/10" />

      <motion.div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center">
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
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              >
                <motion.span
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Turning Data Into
                </motion.span>
                <br />
                <motion.span
                  className="text-white inline-block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Actionable Insights
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I&apos;m{' '}
                <motion.span
                  className="text-white font-semibold inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Paul Santilan
                </motion.span>
                , a{' '}
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block gradient-text font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
              </motion.p>

              <motion.p
                className="text-lg text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Leveraging machine learning, predictive modeling, and advanced analytics to drive
                business insights and operational efficiency across finance, consulting, and technology.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                <a
                  href="mailto:paulsantilan897@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  paulsantilan897@gmail.com
                </a>
                <span className="hidden sm:inline text-gray-500">·</span>
                <span>Remote, USA</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/30 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#experience"
                  className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Experience
                </motion.a>
              </motion.div>

              <motion.a
                href="mailto:paulsantilan897@gmail.com"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <FiMail className="w-5 h-5" />
                paulsantilan897@gmail.com
              </motion.a>
            </motion.div>
          </MouseParallax>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-white">
            <FiArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
