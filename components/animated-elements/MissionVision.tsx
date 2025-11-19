'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import list from "@/images/list.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Flip)

export default function MissionVision() {
  const containerRef = useRef(null)
  const visionRef = useRef(null)
  const missionRef = useRef(null)
  const visionContentRef = useRef(null)
  const missionContentRef = useRef(null)
  const listItemsRef = useRef([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!visionRef.current || !missionRef.current) return

      // Set initial states
      gsap.set(visionRef.current, {
        opacity: 0,
        
        x: -100
      })

      gsap.set(missionRef.current, {
        opacity: 0,
       
        x: 100
      })

      gsap.set([visionContentRef.current, missionContentRef.current], {
        opacity: 0,
        y: 20
      })

      gsap.set(listItemsRef.current, {
        opacity: 0,
        x: -30
      })

      // Create main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        }
      })

      // Animate cards with 3D flip effect
      tl.to(visionRef.current, {
        opacity: 1,
       
        x: 0,
        duration: .6,
        ease: "power3.out"
      })
      .to(missionRef.current, {
        opacity: 1,
        
        x: 0,
        duration: .6,
        ease: "power3.out"
      }, "-=0.7")

      // Animate content inside cards
      .to(visionContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.5")
      .to(missionContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")

      // Animate list items one by one
      .to(listItemsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.3")

      // Parallax effect on scroll
      gsap.to(visionRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })

      gsap.to(missionRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const addListRef = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="flex md:flex-row flex-col p-8 mt-4 gap-14 w-full items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={visionRef}
        className='myBg shadow-md max-w-[542px] min-h-[223px] flex flex-col items-start justify-center gap-4 p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-mybg_2'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div ref={visionContentRef}>
          <h1 className='MyH5'>Our Vision</h1>
          <p className='B1 text-mytext'>To be the premier bridge for sustainable and inclusive agricultural trade between Europe and Africa.</p>
        </div>
      </div>

      <div 
        ref={missionRef}
        className='myBg shadow-md max-w-[542px] min-h-[223px] flex flex-col items-start justify-center gap-4 p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-mybg_2'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div ref={missionContentRef}>
          <h1 className='MyH5'>Our Mission</h1>
        </div>
        <ul className='B1 flex flex-col gap-4 text-mytext'>
          <li ref={addListRef} className='flex gap-3 items-center justify-start w-full'>
            <Image src={list} alt="list" className='object-contain'/>
            Facilitate seamless trade between EU and Nigerian agri-businesses
          </li>
          <li ref={addListRef} className='flex gap-3 items-center justify-start w-full'>
            <Image src={list} alt="list" className='object-contain'/>
            Promote food security through global partnerships
          </li>
          <li ref={addListRef} className='flex gap-3 items-center justify-start w-full'>
            <Image src={list} alt="list" className='object-contain'/>
            Support governments in policy-driven agri-projects
          </li>
        </ul>
      </div>
    </div>
  )
}