"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  hover: { scale: 1.05, color: "#FF6B00" },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black font-sans text-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright Section */}
          <motion.div
            className="space-y-4"
            variants={footerVariants}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Eagles Logo"
                width={120}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              © {currentYear} Eagles. All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4"
            variants={footerVariants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Contact Us", href: "/contact" },
                { name: "Tokenomics", href: "/tokenomics" },
                { name: "PreSale", href: "/presale" },
              ].map((link) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            variants={footerVariants}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                href="https://x.com/EaglesSolana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaXTwitter size={20} />
                <span>Twitter</span>
              </motion.a>
              <motion.a
                href="https://t.me/eaglesportal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaTelegramPlane size={20} />
                <span>Telegram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Border with Gradient */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent rounded-full" />
        </motion.div>
      </div>
    </motion.footer>
  );
}
