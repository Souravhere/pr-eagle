"use client"
import { useState, useEffect } from 'react'
import localFont from "next/font/local"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EaglesLoader from "@/components/EaglesLoader"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <head>
      <title>EAGLES - Let&#39;s Make Eagles Great Again</title>
  <meta name="description" content="Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana. Let&#39;s Make Eagles Great Again." />
  <meta name="application-name" content="EAGLES" />
  <link rel="icon" href="https://eagles-fawn.vercel.app/assets/seologo.png" />
  <link rel="apple-touch-icon" href="https://eagles-fawn.vercel.app/assets/seologo.png" />
  <meta name="keywords" content="EAGLES, meme coin, Solana, cryptocurrency, financial freedom, crypto community" />

  {/* <!-- Open Graph Metadata --> */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.eagles.wtf" />
  <meta property="og:title" content="EAGLES - Let&#39;s Make Eagles Great Again" />
  <meta property="og:description" content="Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana." />
  <meta property="og:site_name" content="EAGLES" />
  <meta property="og:image" content="https://eagles-fawn.vercel.app/assets/seoimg.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="EAGLES Meme Coin Banner" />

  {/* <!-- Twitter Metadata --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@EaglesSolana" />
  <meta name="twitter:title" content="EAGLES - Let&#39;s Make Eagles Great Again" />
  <meta name="twitter:description" content="Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana." />
  <meta name="twitter:image" content="https://eagles-fawn.vercel.app/assets/seoimg.png" />

  {/* <!-- Robots Meta Tags --> */}
  <meta name="robots" content="index, follow" />

  {/* <!-- Alternates --> */}
  <link rel="canonical" href="https://www.eagles.wtf" />

  {/* <!-- Other Information --> */}
  <meta name="contact-email" content="team@eagles.wtf" />
        {/* JSON-LD Structured Data for Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EAGLES",
          "url": "https://www.eagles.wtf",
          "logo": "https://eagles-fawn.vercel.app/assets/seologo.png",
          "sameAs": [
            "https://t.me/eaglesportal",
            "https://x.com/EaglesSolana"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "team@eagles.wtf",
            "contactType": "Customer Support"
          },
          "description": "Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana.",
          "image": "https://eagles-fawn.vercel.app/assets/seoimg.png"
        }` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden relative w-full mx-auto`}>
        {loading ? (
          <EaglesLoader />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
