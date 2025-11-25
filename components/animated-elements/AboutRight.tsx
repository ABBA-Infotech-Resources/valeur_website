'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Cargo from '@/images/Cargo-Ship.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutRight() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Wait for images to load and DOM to be ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      const images = containerRef.current.querySelectorAll('img') as NodeListOf<HTMLImageElement>
      
      if (images.length === 0) return

      // Set initial state
      gsap.set(images, {
        opacity: 0,
        x: 100
      })

      // Animate on scroll
      images.forEach(img => {
        gsap.to(img, {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            // Add these for better reliability
            once: false,
            invalidateOnRefresh: true
          }
        })
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Image 
        src={Cargo} 
        alt='valeur-cargo'  
        className='absolute hidden lg:block -right-12 w-[50%]'
        priority
      />

      <Image 
        src={Cargo} 
        alt='valeur-cargo'  
        className='block lg:hidden -right-12'
        priority
      />
    </div>
  )
}