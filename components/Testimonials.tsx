'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar } from 'react-icons/fi'
import Image from 'next/image'
import { Floating3DShapes, FloatingParticles, GlowOrb } from './MotionGraphics'

const testimonials = [
  {
    name: 'David Maradona',
    role: 'Client',
    image: '/assets/img/mara.jpg',
    content: 'The smoothness and efficiency of his service truly exceeded our expectations. He is highly reliable and always delivers on time.',
    rating: 5,
  },
  {
    name: 'Duran Aroni',
    role: 'Client',
    image: '/assets/img/testimonials/testimonials-2.jpg',
    content: 'A reliable service provider who ensures that every project is completed to the highest standards. I have never been disappointed.',
    rating: 5,
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: '/assets/img/testimonials/testimonials-5.jpg',
    content: 'Their service was truly top-notch. They were always there to help, and their professionalism was outstanding.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* AR/VR Background Effects */}
      <Floating3DShapes />
      <FloatingParticles count={10} />
      <GlowOrb className="top-40 right-10 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10" />
      <GlowOrb className="bottom-40 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

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
              Client <span className="gradient-text">Testimonials</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Trusted by businesses and entrepreneurs who value quality and reliability
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass p-8 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {/* Subtle background gradient */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.1 * index + 0.2 + i * 0.05, type: "spring" }}
                      >
                        <FiStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                  >
                    <motion.div
                      className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                      {/* Subtle avatar glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0"
                        animate={{
                          background: [
                            'linear-gradient(135deg, rgba(139, 92, 246, 0) 0%, rgba(99, 102, 241, 0) 100%)',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0) 0%, rgba(99, 102, 241, 0) 100%)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

