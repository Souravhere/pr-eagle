'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContractAddress: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "2Tb42s8yjRiktnKcdf8tzRcFyC7LDxQ4Zk5mHPk3Xb6R"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 relative z-10">
      <motion.div
        className="bg-[#f56c14] rounded-3xl p-8 relative overflow-hidden z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative bouncing circles */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none z-0">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute top-0 right-0 rounded-full border border-[#FF8533]"
              style={{
                width: `${i * 25}%`,
                height: `${i * 25}%`,
                opacity: 0.8,
              }}
              animate={{ y: [0, -9, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5.5,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <h2 className="text-4xl sm:text-5xl font-thin tracking-wider text-white mb-4 relative z-10">
          Contract Address
        </h2>
        <p className="text-white text-lg font-sans mb-8 max-w-2xl relative z-10">
          Secure your place in the Eagles community on Solana by accessing our verified contract address. Join the movement and soar with us.
        </p>

          <p className="text-white tracking-wider mb-2">CONTRACT ADDRESS</p>
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 relative z-10">
          <p className="text-white tracking-wider mb-2"><span className="text-sm">Solana Blockchain</span>:</p>
        
          <div className="flex items-center justify-between">
            <span className="text-white font-mono text-sm sm:text-base break-all">
              {contractAddress}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyToClipboard}
              className="ml-4 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>
        </div> 
      </motion.div>
    </div>
  )
}

export default ContractAddress
