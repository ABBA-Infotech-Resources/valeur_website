'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutLeft() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const paragraph1Ref = useRef<HTMLDivElement | null>(null)
  const paragraph2Ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setTimeout(() => {
      const elements = [
        aboutRef.current,
        headingRef.current,
        paragraph1Ref.current,
        paragraph2Ref.current
      ]

   

      // Set initial state immediately
      elements.forEach(el => {
        if (el) {
          el.style.opacity = '0'
          el.style.transform = 'translateY(60px)'
        }
      })

      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
          onEnter: () => console.log('Triggered!'),
        }
      })

      elements.forEach((el, index) => {
        if (el) {
          tl.to(el, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
          }, index * 0.2)
        }
      })

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [mounted])

  return (
    <div ref={containerRef} className="flex flex-col justify-start gap-6 items-start lg:w-[635px]">
      <h1 ref={aboutRef} className='text-mysec'>About us</h1>
      
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 ref={headingRef} className='MyH4'>Who we are</h1>
        
        <div className='text-mytext'>
          <div ref={paragraph1Ref}>
            Valeur Global Connect (VGC) is a Paris-based agri-trade company with a mission to bridge Europe and Africa’s agricultural value chain. Operating from France, we work closely with EU agribusinesses, government agencies, and value-chain stakeholders to support structured and sustainable agricultural trade.
          </div>

          <div className='my-6'></div>
          
          <div ref={paragraph2Ref}>
            Our subsidiary in Nigeria anchors us in Africa's most dynamic agricultural market. This dual-market presence gives us unmatched capability — we navigate complex EU trade requirements with ease while providing practical, locally informed solutions on the ground in Nigeria and West Africa.
          </div>
        </div>
      </div>
    </div>
  )
}