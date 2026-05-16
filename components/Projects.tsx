'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { NeuralNetwork, FloatingParticles, GlowOrb } from './MotionGraphics'

const projects = [
  {
    title: 'AI-Powered Business Forecasting Tool',
    description:
      'Designed machine learning models to predict sales and demand trends, enabling data-driven business planning and resource allocation.',
    image:
      'https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Blogs/The%205%20Best%20Data%20Visualization%20Dashboards/datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png?height=640&name=datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png&width=1200',
    tech: ['Python', 'Machine Learning', 'Forecasting', 'Scikit-learn'],
    category: 'ML / Analytics',
  },
  {
    title: 'Customer Behavior Analytics Dashboard',
    description:
      'Built real-time dashboards for stakeholder reporting, surfacing customer insights and behavioral trends to support strategic decisions.',
    image:
      'https://qvalia.com/app/uploads/2022/11/Blog_post_Dashboard_1120x800_white.png',
    tech: ['Tableau', 'Power BI', 'SQL', 'Data Visualization'],
    category: 'Dashboard',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <NeuralNetwork />
      <FloatingParticles count={12} />
      <GlowOrb className="top-32 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
      <GlowOrb className="bottom-32 left-20 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />

      <div className="container mx-auto px-4 relative z-10">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Applied analytics and AI solutions for forecasting and stakeholder reporting
            </motion.p>
          </div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
