'use client'

import { motion } from 'framer-motion'
import { Wallet, Coins, ArrowRightLeft } from 'lucide-react'

interface StepCardProps {
  step: number
  title: string
  description: string
  details: string[]
  icon: React.ReactNode
  delay: number
}

const StepCard = ({ step, title, description, details, icon, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full md:w-[350px] p-6 bg-black border border-orange-500 rounded-xl overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-orange-500 text-sm font-semibold">Step {step}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <ul className="space-y-2">
        {details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
            </div>
            <span className="text-gray-400">{detail}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function HowToBuyEagles() {
  const steps = [
    {
      title: "Create a Wallet",
      description: "Set up your digital wallet to start your $EAGLES journey",
      details: [
        "Download Phantom wallet app",
        "Available on iOS and Android",
        "Desktop users can use Chrome extension",
        "Simple and secure setup process"
      ],
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Get some $SOL",
      description: "Acquire SOL tokens to exchange for $EAGLES",
      details: [
        "Purchase SOL from exchanges",
        "Support for cross-chain swaps",
        "Transfer to your Phantom wallet",
        "Verify your balance"
      ],
      icon: <Coins className="w-6 h-6" />
    },
    {
      title: "Swap for $EAGLES",
      description: "Exchange your SOL for $EAGLES tokens",
      details: [
        "Open Phantom wallet",
        "Click the SWAP icon",
        "Paste $EAGLES token address",
        "Confirm the transaction"
      ],
      icon: <ArrowRightLeft className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-thin text-white mb-4">
          HOW TO BUY <span className="text-orange-500">$EAGLES</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-sans">
          Follow these simple steps to join the $EAGLES community and become part of our growing ecosystem on the Solana blockchain.
        </p>
      </motion.div>

      <div className="  mx-auto">
        <div className="flex flex-col md:flex-row font-sans gap-8 justify-center items-center md:items-stretch">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              details={step.details}
              icon={step.icon}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}