'use client'
import React, { useRef, useEffect } from 'react'
import Trade from '@/images/trade.png'
import Value from '@/images/value.png'
import B2B from '@/images/B2B_icon.png'
import Market from '@/images/market.png'
import Image from 'next/image'
import CoreElements from '../ui/CoreElements'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OurCore() {
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
      
      console.log('Container:', containerRef.current)
      console.log('Heading:', headingRef.current)
      console.log('Cards found:', cards.length)

      if (!headingRef.current || cards.length === 0) {
        console.error('Elements not found!')
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
          markers: false, // Enable to see trigger area
          onEnter: () => console.log('Animation triggered!'),
        }
      })

      // Animate heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        onStart: () => console.log('Heading animation started')
      })
      // Then animate cards one by one
      .to(cards, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        onStart: () => console.log('Cards animation started')
      }, "-=0.2")

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      ref={containerRef}
      className='flex flex-col gap-6 w-full items-center justify-center pt-9 px-8 overflow-hidden'
    >
      
      <h1 ref={headingRef} className='MyH4'>Our Core Focus Areas</h1>

      <div className="grid lg:grid-cols-4 grid-cols-2 w-fit gap-12 items-center justify-center">
        <div ref={card1Ref}>
          <CoreElements Img={B2B} name='B2B & B2G Facilitation' description='Connecting businesses and governments' />
        </div>
        
        <div ref={card2Ref}>
          <CoreElements Img={Market} name='Market Access Services' description='Europe & West Africa market entry' />
        </div>

        <div ref={card3Ref}>
          <CoreElements Img={Trade} name='Trade Matchmaking' description='Strategic buyer-seller partnerships' />
        </div>

        <div ref={card4Ref}>
          <CoreElements Img={Value} name='Agri-Value Chain Expertise' description='End-to-end agricultural solutions' />
        </div>
      </div>
    </div>
  )
}