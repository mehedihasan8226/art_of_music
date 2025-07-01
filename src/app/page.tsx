import { main } from 'motion/react-client'
import React from 'react'
import HeroSection from "@/components/HeroSection"
import FeaturedSection from '@/components/FeaturedSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import MusicSchoolTestimonials from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import Instructors from '@/components/Instructors'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <main className='min-h-screen 
    bg-black/[0.96] antialiased
    bg-grid-white/[0.02]
    '>

      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MusicSchoolTestimonials/>
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}
