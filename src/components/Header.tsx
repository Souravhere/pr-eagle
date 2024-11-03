"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "PreSale", href: "/presale" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 max-w-[2000px] mx-auto">
          <Link href="/" className="flex items-center -mt-2 relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image src="/assets/logo.png" alt="Eagles Logo" width={120} height={50} priority />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex font-sans items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <span className="text-white hover:text-orange-500 transition-colors duration-200">
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://x.com/EaglesSolana" 
                target="_blank"
                className="text-white hover:text-orange-500 transition-colors duration-200"
              >
                <Image 
                  src="/assets/x.png" 
                  alt="X (Twitter) Logo" 
                  width={30} 
                  height={30}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://t.me/eaglesportal" 
                target="_blank"
                className="text-white hover:text-orange-500 transition-colors duration-200"
              >
                <Image 
                  src="/assets/telegram.png" 
                  alt="Telegram Logo" 
                  width={30} 
                  height={30}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/get-eagles"
                className="bg-[#ff6420] text-white tracking-widest font-thin py-2 px-6 rounded-md hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20"
              >
                GET EAGLES
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border border-[#ff6420] rounded-2xl mx-5 mb-4"
          >
            <nav className="container mx-auto px-4 py-4 flex text-xl tracking-wider font-thin flex-col space-y-4 text-center">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-orange-500 transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-center space-x-6 py-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://x.com/EaglesSolana" target="_blank" className="text-white">
                    <Image src="/assets/x.png" alt="X (Twitter) Logo" width={40} height={40} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://t.me/eaglesportal" target="_blank" className="text-white">
                    <Image src="/assets/telegram.png" alt="Telegram Logo" width={40} height={40} />
                  </Link>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-eagles"
                  className="bg-[#ff6420] text-white tracking-widest font-thin py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-200 block"
                  onClick={() => setIsOpen(false)}
                >
                  GET EAGLES
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}