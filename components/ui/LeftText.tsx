'use client'
import React, { useRef, useEffect, useState } from 'react'
import MyBtn from './MyBtn'

export default function LeftText() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const baseClass = "transition-all duration-700 ease-out"
  const visibleClass = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"

  return (
    <div 
      className='md:w-[652px] flex flex-col gap-6 items-start md:pl-20 p-8 z-1' 
      ref={containerRef}
    >
      <h1 
        className={`MyH2 text-[#2A2A2E] leading-none ${baseClass} ${visibleClass}`}
        style={{ transitionDelay: '0ms' }}
      >
        French Agricultural <br/>Trade Facilitator
      </h1>
      
      <p 
        className={`${baseClass} ${visibleClass}`}
        style={{ transitionDelay: '200ms' }}
      >
        From our headquarters in Paris, Valeur Global Connect(VGC) empowers European 
        and African businesses to grow through trusted agricultural trade, sustainable 
        partnerships, and regulatory compliance expertise.
      </p>
      
      <div 
        className={`${baseClass} ${visibleClass}`}
        style={{ transitionDelay: '400ms' }}
      >
        <MyBtn name='Explore Services' link='/market' />
      </div>
    </div>
  )
}