'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Fixed particle data to avoid hydration mismatch - positions calculated client-side
interface Particle {
  id: number
  initialX: number
  initialY: number
  targetX: number
  targetY: number
  duration: number
  size: number
  opacity: number
}

export function FloatingParticles({ count = 20, className = '' }: { count?: number, className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * 200 - 100,
      targetY: Math.random() * 200 - 100,
      duration: Math.random() * 10 + 10,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setParticles(newParticles)
  }, [count])

  if (!mounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            left: particle.initialX,
            top: particle.initialY,
          }}
          animate={{
            y: [0, particle.targetY, 0],
            x: [0, particle.targetX, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Floating 3D geometric shapes for AR/VR effect
export function Floating3DShapes({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const shapes = [
    { type: 'cube', size: 60, x: '10%', y: '20%', duration: 15, delay: 0 },
    { type: 'pyramid', size: 50, x: '85%', y: '30%', duration: 18, delay: 2 },
    { type: 'ring', size: 70, x: '75%', y: '70%', duration: 20, delay: 1 },
    { type: 'cube', size: 40, x: '20%', y: '80%', duration: 16, delay: 3 },
    { type: 'sphere', size: 55, x: '50%', y: '15%', duration: 14, delay: 0.5 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'cube' && (
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm"
                   style={{ transform: 'translateZ(20px)' }} />
              <div className="absolute inset-0 border border-indigo-500/30 bg-indigo-500/5"
                   style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
            </div>
          )}
          {shape.type === 'pyramid' && (
            <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-l-transparent border-r-transparent border-b-pink-500/20" />
          )}
          {shape.type === 'ring' && (
            <div className="w-full h-full rounded-full border-2 border-indigo-500/30" />
          )}
          {shape.type === 'sphere' && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Holographic grid effect
export function HolographicGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

// Data stream effect
export function DataStream({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const streams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 12}%`,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
          style={{ left: stream.left }}
          animate={{
            top: ['-10%', '110%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Neural network connection lines
export function NeuralNetwork({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    setMounted(true)
    const newNodes = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }))
    setNodes(newNodes)
  }, [])

  if (!mounted || nodes.length === 0) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${node.id}-${target.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))
        )}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="rgba(139, 92, 246, 0.3)"
            animate={{
              r: [4, 6, 4],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function MouseParallax({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      return () => element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function GlowOrb({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function AnimatedGradient({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
        backgroundImage: 'linear-gradient(45deg, #a855f7, #6366f1, #ec4899, #a855f7)',
      }}
    >
      {children}
    </motion.div>
  )
}

