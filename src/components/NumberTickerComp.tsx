'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NumberTicker } from "./ui/NumberTicker"
import Link from 'next/link'

export function NumberTickerCounter() {
//   const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const gradientElement = document.getElementById('number-gradient')
    if (gradientElement) {
      const updateGradient = (e: MouseEvent) => {
        const rect = gradientElement.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        gradientElement.style.setProperty('--mouse-x', `${x}px`)
        gradientElement.style.setProperty('--mouse-y', `${y}px`)
      }
      document.addEventListener('mousemove', updateGradient)
      return () => document.removeEventListener('mousemove', updateGradient)
    }
  }, [])

  return (
    <motion.div
      className="flex flex-col -mt-16 sm:mt-40 items-center justify-center space-y-6 p-8 mx-4 rounded-2xl text-center"
      style={{
        background: 'linear-gradient(145deg, #331200 0%, #1a0a00 100%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        id="number-gradient" 
        className="relative overflow-hidden rounded-xl p-1"
        style={{
          background: 'linear-gradient(90deg, #ff6b00, #ff9900)',
        }}
      >
        <div className="absolute inset-0 opacity-75 mix-blend-overlay"
             style={{
               backgroundImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.8) 0%, transparent 50%)',
             }}
        />
        <p className="text-5xl sm:text-7xl flex md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 tracking-tight py-2 px-4">
          <NumberTicker value={7777777777} />+
        </p>
      </div>
      <motion.p 
        className="text-xl sm:text-2xl font-sans md:text-3xl font-semibold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Total Issuance by $Eagles
      </motion.p>
      <Link
              href="/get-eagles"
              className="bg-[#ff6420] text-white tracking-widest font-thin py-2 px-4 rounded hover:bg-orange-600 transition-colors"
            >
              GET EAGLES
        </Link>
    </motion.div>
  )
}