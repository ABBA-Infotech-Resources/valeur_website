'use client'
import React, { useRef, useEffect } from 'react'
import MyBtn from './MyBtn'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LeftText() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Wait for next tick to ensure refs are set
    const timer = setTimeout(() => {
      const elements = [headingRef.current, paragraphRef.current, buttonRef.current].filter(Boolean)
      
      if (elements.length === 0) {
        console.log('No elements found')
        return
      }

      console.log('Animating elements:', elements)

      // Set initial state
      gsap.set(elements, {
        opacity: 0,
        y: 100
      })

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false, // Keep this on to see if trigger is working
          onEnter: () => console.log('ScrollTrigger entered'),
          onLeave: () => console.log('ScrollTrigger left'),
        }
      })

      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        onComplete: () => console.log('Animation complete')
      })

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div 
      className='md:w-[652px] flex flex-col gap-6 items-start md:pl-20 p-8 z-1' 
      ref={containerRef}
    >
      <h1 
        ref={headingRef}
        className='MyH2 text-[#2A2A2E] leading-none'
      >
        French Agricultural <br/>Trade Facilitator
      </h1>
      
      <p ref={paragraphRef}>
        From our headquarters in Paris, Valeur Global Connect(VGC) empowers European 
        and African businesses to grow through trusted agricultural trade, sustainable 
        partnerships, and regulatory compliance expertise.
      </p>
      
      <div ref={buttonRef}>
        <MyBtn name='Explore Services' />
      </div>
    </div>
  )
}