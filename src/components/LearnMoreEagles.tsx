'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function LearnMoreEagles() {
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
    <section ref={ref} className="bg-black text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h1 className='text-4xl sm:text-5xl text-white text-center sm:mt-10 my-4'>LEARN MORE $EAGLES</h1>
        <div className="max-w-6xl mx-auto flex sm:flex-col flex-col-reverse md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 font-sans sm:px-4 px-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-lg mb-4">
              Beyond typical meme projects, EAGLES offers exciting opportunities within its expanding Solana ecosystem.
            </p>
            <p className="text-lg mb-4">
              To ensure safety, all liquidity is burned once added to the contract. Our wings are just beginning to spread!
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 relative"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="relative w-64 h-64 mx-auto md:w-80 md:h-80"
              animate={{
                rotateX: mousePosition.y * 15,
                rotateY: mousePosition.x * 15,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <clipPath id="squareClip">
                    <rect x="0" y="0" width="200" height="200" rx="20" />
                  </clipPath>
                  <pattern id="spiralPattern" patternUnits="userSpaceOnUse" width="200" height="200">
                    <path
                      d="M100,100 m0,-90 a90,90 0 0,1 0,180 a90,90 0 0,1 0,-180"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <path
                      d="M100,100 m0,-70 a70,70 0 0,1 0,140 a70,70 0 0,1 0,-140"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <path
                      d="M100,100 m0,-50 a50,50 0 0,1 0,100 a50,50 0 0,1 0,-100"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <path
                      d="M100,100 m0,-30 a30,30 0 0,1 0,60 a30,30 0 0,1 0,-60"
                      fill="none"
                      stroke="#333"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <g clipPath="url(#squareClip)">
                  <rect x="0" y="0" width="200" height="200" fill="url(#spiralPattern)" />
                  <motion.image
                    href="/projectimg/learnmore.jpg"
                    x="10"
                    y="10"
                    width="180"
                    height="180"
                    className='rounded-lg border border-white'
                    animate={{
                      x: mousePosition.x * 8 + 10,
                      y: mousePosition.y * 8 + 10,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                </g>
                <rect x="0" y="0" width="200" height="200" rx="10" fill="none" stroke="#FF6B00" strokeWidth="4" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
