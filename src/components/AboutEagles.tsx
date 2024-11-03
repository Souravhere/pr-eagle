'use client'

import { useRef, useState, useEffect } from 'react'
// import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function AboutEagles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    setMousePosition({ x, y })
  }

  return (
    <section ref={ref} className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h2 className="text-4xl sm:text-5xl text-white text-center sm:mt-10 my-4">ABOUT EAGLES</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 relative"
            style={{
              perspective: '1000px',
            }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="relative w-64 h-64 mx-auto md:w-80 md:h-80"
              animate={{
                rotateX: mousePosition.y * 20,
                rotateY: mousePosition.x * 20,
              }}
              transition={{ type: 'spring', stiffness: 75, damping: 15 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <clipPath id="circleClip">
                    <circle cx="100" cy="100" r="100" fill="#000000" />
                  </clipPath>
                </defs>
                <g clipPath="url(#circleClip)">
                  {/* Mesh background */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <g key={i}>
                      {Array.from({ length: 10 }).map((_, j) => (
                        <rect
                          key={`${i}-${j}`}
                          x={i * 20}
                          y={j * 20}
                          width="20"
                          height="20"
                          fill="none"
                          stroke="#333"
                          strokeWidth="0.5"
                        />
                      ))}
                    </g>
                  ))}
                  {/* Floating image */}
                  <motion.image
                    href="/projectimg/aboutimg.png"
                    x="10"
                    y="10"
                    width="180"
                    height="180"
                    animate={{
                      x: mousePosition.x * 10 + 10,
                      y: mousePosition.y * 10 + 10,
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  />
                </g>
                {/* Circle border */}
                <circle cx="100" cy="100" r="99" fill="none" stroke="#FF6B00" strokeWidth="2" />
              </svg>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-gray-300 font-sans sm:px-0 px-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg mb-4">
              Make Eagles Great Again (MEGA)! 🦅 EAGLES is a meme project for everyone to laugh and have fun together. Instead of &#39;MAGA&#39; as a political slogan, here it means &#39;Bring back the majesty of the eagle!&#39; Imagine an eagle soaring with a Trump-style hat—just for laughs! 😂
            </p>
            <p className="text-lg mb-4">
              With EAGLES, we&#39;re reinterpreting everyday struggles through eagle eyes, reminding us to take life lightly. Need some calm laughter and perspective?
            </p>
            <motion.p
              className="text-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              Join the $EAGLES movement and see the world from a higher view!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}