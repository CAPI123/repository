'use client'

import { motion } from 'framer-motion'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-30 overflow-hidden">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        
        {/* Grid Pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated Circles */}
        <motion.circle
          cx="200"
          cy="150"
          r="120"
          fill="url(#gradient1)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1200"
          cy="300"
          r="150"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="600"
          cy="600"
          r="100"
          fill="url(#gradient1)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Flowing Lines */}
        <motion.path
          d="M0,400 Q360,200 720,400 T1440,400"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,500 Q360,300 720,500 T1440,500"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        {/* Geometric Shapes */}
        <motion.polygon
          points="100,100 200,50 300,100 250,200 150,200"
          fill="url(#gradient1)"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0.2, 0.3, 0.2], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.polygon
          points="1100,500 1200,450 1300,500 1250,600 1150,600"
          fill="url(#gradient2)"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0.2, 0.3, 0.2], rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Additional Decorative Elements */}
        <motion.rect
          x="400"
          y="200"
          width="80"
          height="80"
          rx="15"
          fill="url(#gradient2)"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0.15, 0.25, 0.15], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.ellipse
          cx="900"
          cy="150"
          rx="60"
          ry="100"
          fill="url(#gradient1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

