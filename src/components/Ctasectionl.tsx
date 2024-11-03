"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="w-full bg-black p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="relative mx-auto rounded-3xl overflow-hidden">
        {/* Background with animated circles */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600">
          <svg
            className="absolute right-0 h-full w-1/2"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx="100"
                cy="50"
                r={20 + i * 15}
                fill="none"
                stroke="rgba(255,255,255,0.2)" // Increase opacity for more white
                strokeWidth="0.6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 0.6, 0.4], // More opacity for a whiter look
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
              Join the Eagles Revolution
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 font-sans">
              Be part of the most exciting meme project on Solana. Join our community and experience the power of $EAGLES.
            </p>

            <div className="flex flex-col font-sans sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://t.me/eaglesportal" target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-orange-500 transition-all duration-200 group"
                >
                  <FaTelegramPlane className="w-5 h-5 mr-2 group-hover:text-orange-500" />
                  Join Telegram
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://x.com/EaglesSolana" target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-orange-500 transition-all duration-200 group"
                >
                  <FaXTwitter className="w-5 h-5 mr-2 group-hover:text-orange-500" />
                  Follow on X
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated corner accents */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((position) => (
          <motion.div
            key={position}
            className={`absolute w-4 h-4 bg-white rounded-full ${
              position.includes("top") ? "top-4" : "bottom-4"
            } ${position.includes("left") ? "left-4" : "right-4"}`}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{
              duration: 0.5,
              delay: ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(position) * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
