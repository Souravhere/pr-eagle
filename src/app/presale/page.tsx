'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function PresalePage() {
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