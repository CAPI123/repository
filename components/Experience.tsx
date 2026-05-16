'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase } from 'react-icons/fi'
import { Floating3DShapes, DataStream, GlowOrb } from './MotionGraphics'

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Capital One Financial Corporation',
    location: 'McLean, Virginia',
    period: 'Apr 2022 – Nov 2025',
    highlights: [
      'Analyzed large financial datasets to identify trends, risks, and optimization opportunities across consumer banking products',
      'Built predictive models using Python and SQL to improve customer segmentation and fraud detection accuracy',
      'Developed interactive dashboards in Tableau and Power BI to support executive-level decision-making',
      'Collaborated with cross-functional teams to deploy data-driven solutions aligned with business goals',
    ],
  },
  {
    title: 'Data Analytics Consultant',
    company: 'Booz Allen Hamilton',
    location: 'McLean, Virginia',
    period: 'Feb 2023 – May 2025',
    highlights: [
      'Supported government and commercial clients with advanced analytics and AI-enabled solutions',
      'Designed data pipelines and performed statistical analysis to enhance operational efficiency',
      'Applied machine learning models to forecast performance metrics and identify process improvements',
      'Presented analytical findings to senior stakeholders and technical teams',
    ],
  },
  {
    title: 'Junior Software Engineer (Data Focus)',
    company: 'Amazon',
    location: 'Arlington, Virginia',
    period: 'Jan 2020 – Dec 2020',
    highlights: [
      'Assisted in developing data-centric applications supporting logistics and operations teams',
      'Wrote clean, scalable Python and SQL code for data processing and reporting',
      'Supported data quality assurance and system optimization initiatives',
      'Collaborated within Agile teams to meet project milestones and deliverables',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <Floating3DShapes />
      <DataStream />
      <GlowOrb className="top-40 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
      <GlowOrb className="bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Delivering data-driven insights across finance, consulting, and technology
          </motion.p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-purple-300 font-medium">{job.company}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {job.location} · {job.period}
                  </p>
                </motion.div>
              </div>
              <ul className="space-y-3">
                {job.highlights.map((item) => (
                  <li key={item} className="flex items-start text-gray-300 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
