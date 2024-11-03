'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import Image from 'next/image'

ChartJS.register(ArcElement, Tooltip, Legend)

interface TokenomicsItem {
  title: string
  percentage: number
  color: string
  description: string
}

const tokenomicsData: TokenomicsItem[] = [
  {
    title: "LIQUIDITY",
    percentage: 40,
    color: "#FF6B00",
    description: "Ensuring stable trading and price stability for long-term growth"
  },
  {
    title: "Presale Participants",
    percentage: 30,
    color: "#FF4365",
    description: "Rewarding early supporters and community members"
  },
  {
    title: "CEX & MARKETING & PARTNERSHIP",
    percentage: 20,
    color: "#FF1744",
    description: "Driving growth, partnerships, and expanding our reach"
  },
  {
    title: "TEAM",
    percentage: 10,
    color: "#B71C1C",
    description: "Fueling development and long-term project sustainability"
  }
]

export default function Tokenomics() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null)
  const totalSupply = "7,777,777,777"

  // Configure chart data and options
  const chartData = {
    labels: tokenomicsData.map(item => item.title),
    datasets: [
      {
        data: tokenomicsData.map(item => item.percentage),
        backgroundColor: tokenomicsData.map(item => item.color),
        hoverOffset: 10,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem: any) => {
            const item = tokenomicsData[tooltipItem.dataIndex]
            return `${item.title}: ${item.percentage}% - ${item.description}`
          }
        },
        bodyFont: { size: 14 },
        titleFont: { size: 16 },
        padding: 10,
        backgroundColor: '#333',
        displayColors: false,
      },
      legend: { display: false },
    },
    onHover: (event: any, chartElement: any) => {
      if (chartElement.length > 0) {
        setHoveredSegment(chartElement[0].index)
      } else {
        setHoveredSegment(null)
      }
    },
    onClick: (event: any, chartElement: any) => {
      if (chartElement.length > 0) {
        const index = chartElement[0].index
        setSelectedSegment(selectedSegment === index ? null : index)
      }
    },
  }

  return (
    <div className="w-full mx-auto px-4 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/30"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Donut Chart */}
          <div className="relative w-full max-w-xs mx-auto md:max-w-[400px]">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/assets/logo.png"
                  alt="Eagles Logo"
                  width={60}
                  height={60}
                  className="mx-auto mb-2"
                />
                <p className="text-white text-xs sm:text-sm">Total Supply</p>
                <p className="text-lg sm:text-2xl font-bold text-orange-500">{totalSupply}</p>
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-6">
            <AnimatePresence>
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: hoveredSegment === index || selectedSegment === index ? 1.05 : 1
                  }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gray-800/50 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    hoveredSegment === index || selectedSegment === index ? 'ring-2 ring-orange-500' : ''
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onClick={() => setSelectedSegment(selectedSegment === index ? null : index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold flex items-center">
                      <span 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      />
                      {item.title}
                    </h4>
                    <span className="text-orange-500 font-bold text-lg">{item.percentage}%</span>
                  </div>
                  <AnimatePresence>
                    {(hoveredSegment === index || selectedSegment === index) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-300 text-sm mt-2"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
