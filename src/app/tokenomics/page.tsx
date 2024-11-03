'use client'

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Copy, CheckCircle, } from "lucide-react"
import Tokenomics from "@/components/Tokenomics"
import ContractAddress from "@/components/ContractAddress"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function TokenomicsPage() {
  const [copied, setCopied] = useState(false)
  const [activeSection] = useState(0)
  const contractAddress = "2Tb42s8yjRiktnKcdf8tzRcFyC7LDxQ4Zk5mHPk3Xb6R"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.5 }
    })
  }, [activeSection, controls])

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center my-2">
            <h1
              className="sm:text-7xl text-5xl font-thin text-white"
            >
              $EAGLES TOKENOMICS
            </h1>
          </div>
          <Tokenomics/>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-200 mb-12 p-8 bg-gray-800/50 backdrop-blur-sm font-sans rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-400">
              Token Distribution Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-300">Liquidity (40%)</h3>
                <p>Ensures a stable trading environment and provides liquidity for seamless transactions within the Eagles ecosystem.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-300">Presale Participants (30%)</h3>
                <p>Rewards early believers and supporters of the Eagles project, fostering a strong initial community.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-300">Team (10%)</h3>
                <p>Allocated for ongoing development, marketing initiatives, and team incentives to drive project growth.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-300">CEX & Marketing (20%)</h3>
                <p>Reserved for future exchange listings, partnerships, and strategic marketing campaigns to expand Eagles reach.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm hidden p-8 rounded-lg shadow-lg font-sans"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-orange-400">CONTRACT ADDRESS</h2>
              <p className="text-gray-400 text-lg">Solana Blockchain</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                className="px-6 py-4 bg-black/50 rounded-lg text-orange-400 font-mono text-sm sm:text-base w-full sm:w-auto overflow-x-auto"
                whileHover={{ scale: 1.02 }}
              >
                {contractAddress}
              </motion.div>
              <motion.button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-4 rounded-lg bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                {copied ? "Copied!" : "Copy Address"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        <ContractAddress/>
      </div>
    </div>
  )
}
