"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const MusicTestimonials = [
  {
    quote: "The instructors here are incredibly supportive and talented. I’ve grown more in one year than I ever thought possible.",
    name: "Sarah Ahmed",
    title: "Vocal Student"
  },
  {
    quote: "Joining this school reignited my passion for the piano. The curriculum is structured, yet allows creative freedom.",
    name: "James Wu",
    title: "Piano Student"
  },
  {
    quote: "My child has not only learned to play the violin but also gained confidence and discipline. Truly a transformative experience.",
    name: "Anika Rahman",
    title: "Parent of a Violin Student"
  },
  {
    quote: "As a working adult, I appreciate their flexible schedule and modern teaching methods. I’m finally learning guitar the right way!",
    name: "Mohammad Karim",
    title: "Guitar Student (Evening Program)"
  },
  {
    quote: "The ensemble sessions are the highlight of my week! Playing with others helped me grow as a drummer and as a person.",
    name: "Liam O'Connor",
    title: "Drum Student"
  }
];


const MusicSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col
    items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8
        z-10">Hear our Harmony: Voices of success</h2>

        <div className="flex justify-center w-full
        overflow-hidden px-4 sm:px-6 lg:px-8">
             <div className="w-full max-w-6xl"> 
               <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#22222c_1px,transparent_1px),linear-gradient(to_bottom,#26262e_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
              <InfiniteMovingCards
                items={MusicTestimonials}
                direction="right"
                speed="slow"
                
            />
             </div>
        </div>
    </div>

  )
}

export default MusicSchoolTestimonials