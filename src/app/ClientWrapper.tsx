'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EaglesLoader from "@/components/EaglesLoader"

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      
      {loading && <EaglesLoader />}
      <Header />
      {children}
      <Footer />
    </>
  )
}