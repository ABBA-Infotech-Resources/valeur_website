'use client'
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import Trade from '@/images/trade.png'
import Market from '@/images/market.png'
import local from '@/images/local.png'
import SupportCard from '../ui/SupportCard'

export default function OurSupportEU() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div className='w-full flex items-center justify-center flex-col gap-6 mt-16' ref={containerRef}>
      <h1 
        className={`MyH5 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        Our Support for Nigerian Exporters
      </h1> 
      
      <div className="md:grid lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 flex flex-col items-center justify-center gap-6">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '100ms' }}
        >

<SupportCard 
            name='Market Matchmaking' 
            description='Introducing you to reputable buyers, processors, and wholesalers across Europe.' 
            Img={Trade} 
          />


         
        </div>

        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          <SupportCard 
            name='Packaging, Logistics & Documentation' 
            description='Ensuring your products meet EU presentation standards and documentation requirements for smooth customs clearance.' 
            Img={Market} 
          />
        </div>

        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
        

        <SupportCard 
            name='EU Standards Compliance' 
            description='Guidance and facilitation for traceability systems, phytosanitary certificates, organic certifications, and other regulatory requirements.' 
            Img={local} 
          />


        </div>
      </div>
    </div>
  )
}