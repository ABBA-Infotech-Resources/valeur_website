'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Cargo from '@/images/Cargo-Ship.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutRight() {
  const desktopRef = useRef(null)
  const mobileRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = [desktopRef.current, mobileRef.current].filter(Boolean)
      
      if (elements.length === 0) return

      // Set initial state - fade and slide from right
      gsap.set(elements, {
        opacity: 0,
        x: 100
      })

      // Animate on scroll
      elements.forEach(el => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          }
        })
      })

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Image 
        ref={desktopRef}
        src={Cargo} 
        alt='valeur-cargo'  
        className='absolute lg:flex hidden -right-12 w-[50%]'
      />

      <Image 
        ref={mobileRef}
        src={Cargo} 
        alt='valeur-cargo'  
        className='flex lg:hidden -right-12'
      />
    </>
  )
}