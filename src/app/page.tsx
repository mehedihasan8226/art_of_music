import { main } from 'motion/react-client'
import React from 'react'
import HeroSection from "@/components/HeroSection"

export default function page() {
  return (
    <main className='min-h-screen 
    bg-black/[0.96] antialiased
    bg-grid-white/[0.02]
    '>

      <HeroSection />
    </main>
  )
}
