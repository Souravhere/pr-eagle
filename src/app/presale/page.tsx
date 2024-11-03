'use client'

// 'use effect' are removed due to the counter removed 
import React, { useState } from 'react'
import Image from 'next/image'
// import { motion } from 'framer-motion'
// import CtaSection from '@/components/Ctasectionl'
// import HowToBuyEagles from '@/components/StepCard'
// import ContractAddress from '@/components/ContractAddress'
// import Tokenomics from '@/components/Tokenomics'

// this const is commented for the animate number
// const AnimatedNumber = ({ value }: { value: number }) => {
//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       key={value}
//       className="tabular-nums"
//     >
//       {value.toString().padStart(2, '0')}
//     </motion.span>
//   )
// }

// 
// const TimeBox = ({ label, value }: { label: string; value: number }) => {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20 h-20 flex items-center justify-center">
//         <span className="text-3xl font-bold text-white">
//           <AnimatedNumber value={value} />
//         </span>
//       </div>
//       <span className="text-sm font-medium text-white">{label}</span>
//     </div>
//   )
// }

// const Button = ({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-md font-semibold transition-colors ${className}`}
//     >
//       {children}
//     </button>
//   )
// }

// const Input = ({ type, value, onChange, placeholder, className = '' }: { type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; className?: string }) => {
//   return (
//     <input
//       type={type}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`bg-transparent border-none outline-none ${className}`}
//     />
//   )
// }

// const Progress = ({ value }: { value: number }) => {
//   return (
//     <div className="w-full bg-gray-700 rounded-full h-4">
//       <div
//         className="bg-orange-500 h-4 rounded-full"
//         style={{ width: `${value}%` }}
//       />
//     </div>
//   )
// }

export default function PresalePage() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 7,
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   })
  // const [progress,] = useState(2)
  // const [solanaAmount, setSolanaAmount] = useState('')
  // const [eaglesAmount, setEaglesAmount] = useState('')

//  counter funcnality will be commented wait for the launch 
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 }
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
//         } else if (prev.hours > 0) {
//           return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
//         } else if (prev.days > 0) {
//           return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
//         }
//         return prev
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

  // const handleSolanaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   setSolanaAmount(value)
  //   const eaglesValue = parseFloat(value) * (1 / 0.003)
  //   setEaglesAmount(eaglesValue.toFixed(2))
  // }

  // const handleEaglesInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   setEaglesAmount(value)
  //   const solanaValue = parseFloat(value) * 0.003
  //   setSolanaAmount(solanaValue.toFixed(2))
  // }
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-[80vh] max-w-4xl mx-auto overflow-hidden">
      <Image
        src="/projectimg/presale.png"
        alt="Large Responsive Image"
        layout="fill"
        className={`object-cover transition-all duration-700 ease-in-out transform ${
          isLoading ? 'scale-110 opacity-0 blur-xl' : 'scale-100 opacity-100 blur-0'
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}