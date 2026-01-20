'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ScrollReveal, ParallaxElement } from './ScrollReveal'
import { FloatingParticles, HolographicGrid, GlowOrb } from './MotionGraphics'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '30+', label: 'Projects Completed' },
    { value: '1000+', label: 'Hours of Coding' },
    { value: '10+', label: 'Collaborations' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* AR/VR Background Effects */}
      <FloatingParticles count={15} />
      <HolographicGrid />
      <GlowOrb className="top-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
      <GlowOrb className="bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Passionate about solving complex problems and building solutions that make a difference
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image with Avatar Elements - Parallax */}
            <ParallaxElement speed={0.3}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Avatar Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl z-0"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl z-0"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Profile Photo */}
                <motion.div
                  className="relative glass rounded-3xl p-2 z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/assets/img/profile.jpg"
                    alt="Eugine Obiero"
                    width={400}
                    height={400}
                    className="rounded-3xl w-full h-full object-cover relative z-10"
                  />
                </motion.div>
                
                {/* Floating Avatar Badge */}
                <motion.div
                  className="absolute top-0 right-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-3 shadow-lg z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
              </div>
              </motion.div>
            </ParallaxElement>

            {/* Content - Parallax */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Software Engineer & <span className="gradient-text">Problem Solver</span>
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate software engineer currently pursuing my degree at Multimedia University. 
                I specialize in designing and developing efficient, user-friendly applications and enjoy 
                solving complex problems using technology.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Skilled in building modern, responsive applications and backend systems while leveraging 
                technologies like Django, JavaScript, and PostgreSQL. I'm dedicated to learning and 
                growing as a developer, staying updated with the latest technologies to build impactful solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">24</div>
                  <div className="text-sm text-gray-400">Years Old</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">Nairobi</div>
                  <div className="text-sm text-gray-400">Location</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">Available</div>
                  <div className="text-sm text-gray-400">Freelance</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">BSc IT</div>
                  <div className="text-sm text-gray-400">Degree</div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Certifications</h4>
                <motion.a
                  href="https://www.coursera.org/account/accomplishments/verify/CVP6W4EM45XC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-colors block"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      Technical Support Fundamentals
                    </div>
                    <div className="text-sm text-gray-400">Google • Coursera • May 2022</div>
                    <div className="text-xs text-gray-500 mt-1">18 hours • Verified Certificate</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-6 rounded-2xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

