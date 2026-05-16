'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiBarChart2,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLayers,
} from 'react-icons/fi'
import { HolographicGrid, DataStream, GlowOrb } from './MotionGraphics'

const skills = [
  {
    category: 'Programming & ML',
    icon: FiCode,
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'SQL'],
    level: 95,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Visualization & BI',
    icon: FiBarChart2,
    technologies: ['Tableau', 'Power BI', 'Dashboards', 'Reporting'],
    level: 92,
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Machine Learning',
    icon: FiCpu,
    technologies: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Forecasting'],
    level: 90,
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Data Engineering',
    icon: FiDatabase,
    technologies: ['ETL Pipeline Development', 'Data Quality Review', 'Statistical Analysis'],
    level: 88,
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Cloud & Platforms',
    icon: FiCloud,
    technologies: ['Microsoft Azure', 'Data Pipelines', 'Scalable Systems'],
    level: 85,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Analytics Practice',
    icon: FiLayers,
    technologies: ['Predictive Modeling', 'Segmentation', 'Fraud Detection', 'Stakeholder Reporting'],
    level: 90,
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
      <HolographicGrid />
      <DataStream />
      <GlowOrb className="top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
      <GlowOrb className="bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

      <motion.div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Technical & <span className="gradient-text">Analytical Tools</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Core technologies and methodologies for data-driven decision-making
            </motion.p>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="glass p-6 rounded-2xl group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 relative z-10`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.4, ease: 'easeOut' }}
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
                  <motion.div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Proficiency</span>
                    <motion.span
                      className="text-white font-semibold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.1 * index + 0.5, type: 'spring' }}
                    >
                      {skill.level}%
                    </motion.span>
                  </motion.div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 1.2, ease: 'easeOut' }}
                    />
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
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(99, 102, 241, 0.3)',
                        color: '#fff',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
