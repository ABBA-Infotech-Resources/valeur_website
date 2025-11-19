'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Paris from '@/images/eiffel_tower.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Tower() {
  const imageRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded && imageRef.current) {
      // Animate from right to left
      gsap.fromTo(
        imageRef.current,
        {
          x: 200,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isLoaded])

  return (
    <div ref={imageRef} style={{ opacity: 0 }}>
      <Image 
        src={Paris}  
        className='object-cover hidden md:flex w-2xl h-screen' 
        alt='Eiffel Tower'
        onLoad={() => setIsLoaded(true)}
        priority
      />
    </div>
  )
} 