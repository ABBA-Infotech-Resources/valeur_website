'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import list from "@/images/list.png"

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <div 
      ref={containerRef}
      className="flex md:flex-row flex-col p-8 mt-4 gap-14 w-full items-center justify-center"
    >
      {/* Vision Card */}
      <div 
        className={`myBg shadow-md max-w-[542px] min-h-[223px] flex flex-col items-start justify-start  p-6 hover:scale-105 transition-all duration-700 ease-out hover:shadow-lg hover:bg-mybg_2 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
        }`}
      >
        <div>
          <h1 className='MyH5'>Our Vision</h1>
          <p className='B1 text-mytext mt-2'>
            To be the premier bridge for sustainable and inclusive agricultural trade between Europe and Africa.
          </p>
        </div>
      </div>

      {/* Mission Card */}
      <div 
        className={`myBg shadow-md max-w-[542px] min-h-[223px] flex flex-col items-start justify-center  p-6 hover:scale-105 transition-all duration-700 ease-out hover:shadow-lg hover:bg-mybg_2 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <div>
          <h1 className='MyH5'>Our Mission</h1>
        </div>
        <ul className='B1 mt-2 flex flex-col gap-4 text-mytext'>
          <li 
            className={`flex gap-3 items-center justify-start w-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Image src={list} alt="list" className='object-contain'/>
            Facilitate seamless trade between EU and Nigerian agri-businesses
          </li>
          <li 
            className={`flex gap-3 items-center justify-start w-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <Image src={list} alt="list" className='object-contain'/>
            Promote food security through global partnerships
          </li>
          <li 
            className={`flex gap-3 items-center justify-start w-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Image src={list} alt="list" className='object-contain'/>
            Support governments in policy-driven agri-projects
          </li>
        </ul>
      </div>
    </div>
  )
}