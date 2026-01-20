'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ScrollReveal } from './ScrollReveal'
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLayers,
  FiZap,
  FiShield
} from 'react-icons/fi'
import { HolographicGrid, DataStream, GlowOrb } from './MotionGraphics'

const skills = [
  {
    category: 'Frontend Development',
    icon: FiCode,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    level: 90,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend Development',
    icon: FiServer,
    technologies: ['Django', 'Node.js', 'Python', 'PHP/Laravel', 'REST APIs'],
    level: 88,
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Database Management',
    icon: FiDatabase,
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Database Design'],
    level: 90,
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'DevOps & Cloud',
    icon: FiCloud,
    technologies: ['Docker', 'CI/CD', 'AWS', 'Google Cloud', 'Linux'],
    level: 85,
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'API Development',
    icon: FiZap,
    technologies: ['REST APIs', 'GraphQL', 'Microservices', 'API Design'],
    level: 92,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'System Architecture',
    icon: FiLayers,
    technologies: ['Scalable Systems', 'System Design', 'Automation'],
    level: 87,
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* AR/VR Background Effects */}
      <HolographicGrid />
      <DataStream />
      <GlowOrb className="top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
      <GlowOrb className="bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

      <motion.div
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Skills & <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Technologies and tools I use to build scalable, efficient solutions
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="glass p-6 rounded-2xl group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                  initial={false}
                />
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 relative z-10`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.4, ease: "easeOut" }}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.2 }}
                >
                  {skill.category}
                </motion.h3>
                <div className="mb-4 relative z-10">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proficiency</span>
                    <motion.span 
                      className="text-white font-semibold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.1 * index + 0.5, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 1.2, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 * index + 0.6 }}
                >
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 cursor-default"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: 0.1 * index + 0.6 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'rgba(99, 102, 241, 0.3)',
                        color: '#fff'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

