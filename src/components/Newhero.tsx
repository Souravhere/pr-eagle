"use client"

import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion"
import Image from "next/image"
import { MouseEvent, useEffect, useState, useRef } from "react"

export default function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 150, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 })
  
  const rotateX = useTransform(smoothY, [-50, 50], [10, -10])
  const rotateY = useTransform(smoothX, [-50, 50], [-10, 10])

  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 300], [0, -150])
  const textY = useTransform(scrollY, [0, 300], [0, 50])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseX = event.clientX - rect.left - rect.width / 2
    const mouseY = event.clientY - rect.top - rect.height / 2
    x.set(mouseX / 4)
    y.set(mouseY / 4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-black to-orange-900" />

      {/* Mesh Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mesh-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="url(#orange-gradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full gap-4">
        {/* Main Heading at Top */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            rotateX,
            rotateY,
            y: textY,
            transformStyle: "preserve-3d",
          }}
          className="text-8xl sm:text-9xl font-thin tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-orange-50 text-center"
        >
          THE EAGLES
        </motion.h1>

        {/* Eagle Image at Bottom */}
        <motion.div
          className="mt-8 perspective-1000"
          style={{
            rotateX,
            rotateY,
            y: imageY,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/projectimg/heroimg.png"
            alt="Eagle"
            width={350}
            height={350}
            className="object-contain transform translate-z-50 hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500/10"
            initial={{
              scale: 0,
              x: `${i * 20}%`,
              y: `${i * 10}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              x: [`${i * 20}%`, `${i * 20 + 10}%`, `${i * 20}%`],
              y: [`${i * 10}%`, `${i * 10 + 5}%`, `${i * 10}%`],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-orange-400 rounded-full p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-orange-400 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  )
}