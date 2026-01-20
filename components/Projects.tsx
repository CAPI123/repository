'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import { ScrollReveal, Scroll3D } from './ScrollReveal'
import { NeuralNetwork, FloatingParticles, GlowOrb } from './MotionGraphics'

const projects = [
  {
    title: 'Mahadac.com',
    description: 'Comprehensive accounts software for Mahad Manpower Group. A full-featured accounting system with invoicing, expense tracking, financial reporting, and payroll management.',
    image: 'https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Blogs/The%205%20Best%20Data%20Visualization%20Dashboards/datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png?height=640&name=datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png&width=1200',
    link: 'https://mahadac.com',
    tech: ['Django', 'PostgreSQL', 'Financial APIs', 'Reporting'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'Ammsc.com',
    description: 'Advanced recruiter application for talent acquisition and management. Features include candidate tracking, job posting, interview scheduling, and comprehensive analytics dashboard.',
    image: 'https://qvalia.com/app/uploads/2022/11/Blog_post_Dashboard_1120x800_white.png',
    link: 'https://ammsc.com',
    tech: ['Django', 'React', 'PostgreSQL', 'Real-time'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'McDave Productions App',
    description: 'A real-time manufacturing tracking system that automates reporting and optimizes workflows through a responsive dashboard.',
    image: '/assets/img/production.jpg',
    link: 'https://production.mcdave.co.ke/',
    tech: ['Django', 'React', 'PostgreSQL'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'Order Management System',
    description: 'Comprehensive web-based platform for managing customer orders, tracking sales, monitoring product availability, and generating real-time reports.',
    image: 'https://qvalia.com/app/uploads/2022/11/Blog_post_Dashboard_1120x800_white.png',
    link: 'https://www.zeliaoms.mcdave.co.ke',
    tech: ['Django', 'JavaScript', 'MySQL'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'MorInsight Data Analytics',
    description: 'Full-featured data analytics and research platform designed for data-driven decision-making with interactive dashboards and advanced visualizations.',
    image: 'https://www.datylon.com/hs-fs/hubfs/Datylon%20Website2020/Blogs/The%205%20Best%20Data%20Visualization%20Dashboards/datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png?height=640&name=datylon-blog-The-5-Best-Data-Visualization-Dashboards-Exploring-Automated-Reporting-Solution-image3.png&width=1200',
    link: 'https://morinsight.co.ke/',
    tech: ['Python', 'Data Analytics', 'Visualization'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'AI News Aggregator',
    description: 'Smart platform that aggregates and analyzes global news using AI, NLP, and real-time data streams to deliver personalized headlines and topic insights.',
    image: 'https://training.wkustudentpubs.com/wp-content/uploads/2022/04/2-1-1024x576.png',
    link: 'https://v0-news-aggregator-webapp.vercel.app/',
    tech: ['AI', 'NLP', 'Next.js', 'APIs'],
    category: 'Web App',
    type: 'webapp',
  },
  {
    title: 'TechStrips Company',
    description: 'Modern corporate site developed with Django and Bootstrap, showcasing the company\'s services and technological expertise.',
    image: '/assets/img/tech.jpg',
    link: 'https://techstrips-production.up.railway.app',
    tech: ['Django', 'Bootstrap', 'PostgreSQL'],
    category: 'Website',
    type: 'website',
  },
  {
    title: 'Hotel Destinations',
    description: 'Travel website for RwandAir Holidays featuring dynamic hotel listings and booking features built with React and Bootstrap.',
    image: 'https://picsum.photos/seed/foodapp/400/300',
    link: 'https://rwandair-holidays.vercel.app/',
    tech: ['React', 'Bootstrap', 'APIs'],
    category: 'Website',
    type: 'website',
  },
  {
    title: 'Amaica Media Website',
    description: 'Built for Amaica Group, this platform enables digital broadcasting and real-time content management for modern journalism.',
    image: '/assets/img/journalism.jpg',
    link: 'https://amaica-production.up.railway.app',
    tech: ['Django', 'FullCalendar.js', 'Real-time'],
    category: 'Website',
    type: 'website',
  },
  {
    title: 'POS System',
    description: 'A real-time POS system dashboard with advanced visualizations, payment gateways and performance metrics for operational insights.',
    image: '/assets/img/pos.jpg',
    link: 'https://www.pesapos.mcdave.co.ke/',
    tech: ['Django', 'Payment Integration', 'Analytics'],
    category: 'Web App',
    type: 'webapp',
  },
]

const categories = ['All', 'Web App', 'Website']

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* AR/VR Background Effects */}
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
          {/* Section Header */}
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
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Real-world solutions built with modern technologies, focusing on scalability, performance, and user experience
            </motion.p>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + categories.indexOf(category) * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="glass rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    delay: index * 0.08,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 border border-white/30"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View Live
                      </motion.a>
                    </motion.div>
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 + 0.2, duration: 0.3, ease: "easeOut" }}
                    >
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-sm rounded-full text-xs text-white font-medium shadow-md">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm mb-4 line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.35, duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.4, duration: 0.3 }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.08 + 0.4 + techIndex * 0.03, duration: 0.2 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

