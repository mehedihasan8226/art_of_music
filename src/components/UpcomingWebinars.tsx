"use client"
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


const UpcomingWebinars = () => {

  const MusicFeatureWebinars = [
  {
    title: "Mastering Music Production with Ableton Live",
    description: "Join our live session with a Grammy-nominated producer as they break down their workflow in Ableton Live.",
    slug: "mastering-music-production-ableton",
    isFeatured: true
  },
  {
    title: "Vocal Recording Techniques for Beginners",
    description: "Learn the essential tips and tricks for recording clean and professional vocals at home.",
    slug: "vocal-recording-techniques",
    isFeatured: false
  },
  {
    title: "Composing Cinematic Scores",
    description: "Explore how to write powerful orchestral music for film and TV using virtual instruments.",
    slug: "composing-cinematic-scores",
    isFeatured: true
  },
  {
    title: "Jazz Improvisation Essentials",
    description: "A live demonstration of jazz improvisation techniques and exercises with an expert saxophonist.",
    slug: "jazz-improvisation-essentials",
    isFeatured: false
  },
  {
    title: "Mixing and Mastering Like a Pro",
    description: "Discover the full process of mixing and mastering with professional-grade plugins and tools.",
    slug: "mixing-and-mastering-pro",
    isFeatured: true
  },
  {
    title: "Electronic Music Sound Design",
    description: "Dive into sound design for electronic genres using synthesizers and sampling techniques.",
    slug: "electronic-music-sound-design",
    isFeatured: false
  }
];


  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
              <h2 className='text-base text-teal-600
              font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
              <p className='mt-2 text-3xl leading-8
              font-extrabold tracking-tight text-white
              sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
              <HoverEffect items={MusicFeatureWebinars.map(webinar=>(
                {
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug
              }
              ))} />


            </div>
            <div className='mt-10 text-center'>
              <Link href={"/"}
              className='px-4 py-2 rounded border
              border-neutral-600 text-neutral-700 bg-white
              hover:bg-gray-100 transition duration-200'
              >
              View All Webinars
              </Link>
            </div>

        </div>

    </div>
  )
}

export default UpcomingWebinars