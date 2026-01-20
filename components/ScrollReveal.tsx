'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], direction === 'up' ? [50, 0, 0] : direction === 'down' ? [-50, 0, 0] : [0, 0, 0])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], direction === 'left' ? [50, 0, 0] : direction === 'right' ? [-50, 0, 0] : [0, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x, scale }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxElement({ children, speed = 0.5, className = '' }: { children: React.ReactNode, speed?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export function Scroll3D({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15])
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        z,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

