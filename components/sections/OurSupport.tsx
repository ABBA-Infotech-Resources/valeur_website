'use client'
import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Trade from '@/images/trade.png'
import Market from '@/images/market.png'
import Gov from '@/images/Gov.png'
import local from '@/images/local.png'

import Image from 'next/image'
import SupportCard from '../ui/SupportCard'

gsap.registerPlugin(ScrollTrigger)

export default function OurSupport() {

  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current].filter(Boolean)

      // Ensure the heading ref is also available before proceeding
      if (!headingRef.current || cards.length === 0) {
        console.error('Elements not found! Heading or Cards are missing.')
        return
      }

      // Set initial state
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 50
      })

      gsap.set(cards, {
        opacity: 0,
        y: 80
      })

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment this to see the trigger points during development
        }
      })

      // Animate heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: "power3.out",
      })
        // Then animate cards one by one
        .to(cards, {
          opacity: 1,
          y: 0,
          duration: .6,
          ease: "power3.out",
          stagger: 0.15,
        }, "-=0.2")

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full flex items-center justify-center flex-col gap-6 mt-16' ref={containerRef}>
      {/* 🛑 FIX: Assign headingRef to the <h1> element */}
      <h1 ref={headingRef} className='MyH5'>Our Support for EU Companies</h1> 
      

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6" >
        <div ref={card1Ref}>
          <SupportCard name='Local Partner Identification' description='We source and vet trustworthy distributors, suppliers, and joint-venture partners aligned with your standards.' Img={local} />
        </div>

        <div ref={card2Ref}>
          <SupportCard name='Government Liaison' description='We facilitate engagement with regulatory agencies to ensure compliance and reduce bureaucratic delays.' Img={Gov} />
        </div>

        <div ref={card3Ref}>
          <SupportCard name='Market Intelligence' description='Data-driven insights on consumer trends, competitor activities, and policy shifts for informed decisions.' Img={Trade} />
        </div>

        <div ref={card4Ref}>
          <SupportCard name='Import/Export Facilitation' description='From paperwork to port clearance, we ensure your products move efficiently and legally.' Img={Market} />
        </div>
      </div>
    </div>
  )
}