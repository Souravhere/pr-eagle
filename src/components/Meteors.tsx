'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const [, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[250px] font-sans bg-gradient-to-br from-orange-500 to-red-600 p-[2px] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black rounded-2xl z-0" />
      <div className="absolute inset-[1px] bg-black rounded-2xl z-10">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-20 h-full flex flex-col justify-between p-6">
        <motion.div 
          className="flex items-center mb-4"
        //   animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-12 w-12 rounded-full bg-[#ea580c] flex items-center justify-center mr-3 text-white">
            {icon}
          </div>
          <h2 className="text-white font-bold text-2xl">{title}</h2>
        </motion.div>
        <p className="text-gray-400 text-base flex-grow">
          {description}
        </p>
        <Meteors number={10} />
      </div>
    </motion.div>
  );
};

export function MissionVisionSection() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center p-4 space-y-8">
        <h1 className="text-4xl sm:text-5xl text-white text-center sm:mt-10 my-4">Our Mission & Vision</h1>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center w-full max-w-7xl">
        <Card
          title="Our Mission"
          description="EAGLES aims to transcend the boundaries of a typical meme project, aspiring to become a flagship initiative on the Solana blockchain. We're committed to pushing the limits of what's possible in the crypto ecosystem."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        <Card
          title="Our Vision"
          description="We envision a future where $EAGLES is synonymous with innovation in the Solana ecosystem. Through events and community initiatives, we're not just building a token but a movement where every EAGLES DEGEN can soar."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          }
        />
      </div>
      <Link
              href="/contact"
              className="bg-[#ff6420] text-white tracking-widest font-thin py-2 px-4 text-xl my-3 rounded hover:bg-orange-600 transition-colors"
            >
              Contact us
            </Link>
    </div>
  );
}