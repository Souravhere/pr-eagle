'use client'

import CtaSection from '@/components/Ctasectionl'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function PresalePage() {
  const triangleAnimation = useAnimation()

  useEffect(() => {
    triangleAnimation.start({
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    })
  }, [triangleAnimation])

  return (
    <>
    <div className="min-h-screen w-full py-20 bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* SVG Mesh Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      {/* Animated Background Triangles Container */}
      <motion.div 
        animate={triangleAnimation}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top Left Triangle */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 origin-top-left"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ 
            rotate: [0, -10, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-transparent transform -rotate-45" />
        </motion.div>

        {/* Bottom Right Triangle */}
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 origin-bottom-right"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ 
            rotate: [0, 10, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full rounded-md h-full bg-gradient-to-tl from-orange-500/30 to-transparent transform rotate-45" />
        </motion.div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl mx-4"
      >
        <div className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-800">
          {/* Eagle Logo */}
          <div className="w-48 h-48 mx-auto mb-8">
            <Image
              src="/projectimg/aboutimg.png"
              alt="Eagles Logo"
              width={192}
              height={192}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-center space-y-8">
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
              className="text-6xl sm:text-8xl font-thin tracking-wider text-white"
              style={{
                textShadow: '0 0 40px rgba(255,255,255,0.2)'
              }}
            >
              EAGLES
            </motion.h1>
            
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl sm:text-5xl font-sans font-bold text-gray-500"
            >
              Live Soon!
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 font-sans mt-4 font-semibold"
            >
              Stay Updated Here
            </motion.p>
          </div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl -z-10"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(249, 115, 22, 0)",
              "0 0 20px 0 rgba(249, 115, 22, 0.3)",
              "0 0 0 0 rgba(249, 115, 22, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
    <CtaSection/>
    </>
  )
}
