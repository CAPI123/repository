'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiGlobe,
  FiShield,
  FiCloud,
  FiZap,
  FiLayers,
  FiServer
} from 'react-icons/fi'
import { Floating3DShapes, DataStream, GlowOrb } from './MotionGraphics'

const services = [
  {
    icon: FiCode,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your specific business challenges. From concept to deployment, I build scalable applications that grow with your business.',
    benefits: ['Scalable Architecture', 'Clean Code', 'Maintainable Solutions'],
  },
  {
    icon: FiGlobe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications that deliver exceptional user experiences. Built with performance and scalability in mind.',
    benefits: ['Responsive Design', 'Fast Performance', 'SEO Optimized'],
  },
  {
    icon: FiZap,
    title: 'API Development & Integration',
    description: 'Robust RESTful and GraphQL APIs that power your applications. Seamless third-party integrations to extend functionality.',
    benefits: ['REST & GraphQL', 'Documentation', 'Secure & Fast'],
  },
  {
    icon: FiServer,
    title: 'Backend Systems Architecture',
    description: 'Design and build scalable backend systems that handle high traffic and complex business logic. Focus on reliability and performance.',
    benefits: ['Microservices', 'Database Design', 'System Optimization'],
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions & DevOps',
    description: 'Deploy and manage applications on cloud platforms. Set up CI/CD pipelines and infrastructure for seamless deployments.',
    benefits: ['AWS/GCP', 'Docker', 'CI/CD Pipelines'],
  },
  {
    icon: FiLayers,
    title: 'System Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency. Build tools that save time and reduce human error.',
    benefits: ['Workflow Automation', 'Task Scheduling', 'Process Optimization'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* AR/VR Background Effects */}
      <Floating3DShapes />
      <DataStream />
      <GlowOrb className="top-40 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
      <GlowOrb className="bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />

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
              What I <span className="gradient-text">Offer</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Comprehensive solutions to transform your ideas into powerful digital products
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass p-8 rounded-2xl group relative overflow-hidden"
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
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 relative z-10"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.2, duration: 0.4, ease: "easeOut" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-3 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mb-4 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.ul
                    className="space-y-2 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    {service.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 0.1 * index + 0.5 + benefitIndex * 0.1,
                          type: "spring"
                        }}
                        whileHover={{ x: 5, color: '#fff' }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2"
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: benefitIndex * 0.2,
                          }}
                        />
                        {benefit}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

