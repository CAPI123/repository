'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FloatingParticles, HolographicGrid, GlowOrb } from './MotionGraphics'

const education = [
  {
    degree: 'Master of Science (M.S.) in Data Analytics',
    school: 'George Mason University',
    location: 'Fairfax, Virginia',
    period: 'Oct 2020 – Dec 2022',
    details: [
      'Concentration in Predictive Analytics and Machine Learning',
      'Capstone: AI-Driven Forecasting Models for Business Decision-Making',
      'Coursework: Big Data Analytics, Machine Learning, Data Mining, Advanced Statistics',
    ],
  },
  {
    degree: 'Bachelor of Science (B.S.) in Computer Science',
    school: 'Virginia Tech',
    location: 'Blacksburg, Virginia',
    period: 'Aug 2015 – Dec 2019',
    details: [
      'Focus on Software Development, Algorithms, and Data Structures',
      'Senior Project: Data-Driven Web Application Using Python and SQL',
      'Coursework: Artificial Intelligence, Databases, Operating Systems',
    ],
  },
]

const certifications = [
  {
    title: 'IBM Professional Certificate in Artificial Intelligence',
    issuer: 'IBM',
  },
  {
    title: 'Data Science Methodology',
    issuer: 'IBM',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    { value: '5+', label: 'Years Experience' },
    { value: 'Remote', label: 'USA' },
    { value: 'M.S.', label: 'Data Analytics' },
    { value: 'Virginia', label: 'Project Markets' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
          className="max-w-4xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Data Analytics & Artificial Intelligence Professional
            </motion.p>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Professional <span className="gradient-text">Summary</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Results-driven Data Analytics and Artificial Intelligence professional with 5+ years of
              experience leveraging data, machine learning, and advanced analytics to drive business
              insights and operational efficiency. Strong background in computer science, predictive
              modeling, and AI-enabled solutions, with hands-on experience supporting large-scale
              projects across finance, consulting, and technology sectors in Virginia. Adept at
              translating complex data into actionable strategies for stakeholders.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass p-5 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <motion.div className="text-2xl font-bold gradient-text mb-1">{item.value}</motion.div>
                <motion.div className="text-sm text-gray-400">{item.label}</motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.school} className="glass p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="text-purple-300 font-medium">{item.school}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    {item.location} · {item.period}
                  </p>
                  <ul className="space-y-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-gray-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">Certificates</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="glass p-5 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white text-sm">{cert.title}</motion.div>
                    <div className="text-sm text-gray-400">{cert.issuer}</motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
