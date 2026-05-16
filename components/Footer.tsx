'use client'

import { motion } from 'framer-motion'
import { FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-800 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()}{' '}
              <span className="text-white font-semibold">Paul Santilan</span>. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">Data Analytics & AI Professional · Remote, USA</p>
          </div>

          <motion.a
            href="mailto:paulsantilan897@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FiMail className="w-5 h-5" />
            paulsantilan897@gmail.com
          </motion.a>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
