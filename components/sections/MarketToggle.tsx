'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BtnToggle from '../ui/BtnToggle'
import MyBtn from '../ui/MyBtn'
import Image from 'next/image'
import EU_Nigeria from '@/images/EU-Nigeria.jpg'  
import Nigeria_EU from '@/images/Nigeria-Eu.jpg' 

gsap.registerPlugin(ScrollTrigger)

export default function MarketToggle() {
  const [selectedMarket, setSelectedMarket] = useState<'EU to Nigeria' | 'Nigeria to EU'>('EU to Nigeria');
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleToggle = (market: 'EU to Nigeria' | 'Nigeria to EU') => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.7,
      onComplete: () => setSelectedMarket(market)
    })
    setSelectedMarket(market);
  }

  useGSAP(() => {
    // Animate content when market changes
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
    )
  }, [selectedMarket])

  // Image scale animation on scroll
  useEffect(() => {
    if (!imageRef.current) return;

    const scaleAnimation = gsap.fromTo(imageRef.current,
      {
        scale: 0.85,
        opacity: 0.7
      },
      {
        scale: 1.1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onEnter: () => console.log('Image entering'),
          onLeave: () => console.log('Image leaving'),
        }
      }
    )

    return () => {
      scaleAnimation.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [selectedMarket]) // Re-run when market changes

  return (
    <div className='flex flex-col items-center justify-center gap-6' ref={containerRef}>
      <BtnToggle market={selectedMarket} onToggle={handleToggle} />

      {selectedMarket === 'EU to Nigeria' ? (
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full gap-24">
          <div className="flex flex-col gap-6 items-start lg:w-[900px]" ref={contentRef}>
            <h1 className='MyH5'>Your Gateway to West Africa's Agricultural Powerhouse</h1>

            <div className='text-mytext'>
              Nigeria is not only Africa's most populous country but also one of its 
              fastest-growing agri-economies. For EU-based companies, this means 
              unparalleled opportunities in agricultural trade, agritech adoption, and 
              value-added processing.

              <div className='my-6'></div>

              But navigating this market requires more than ambition - it requires a 
              trusted partner who understands the terrain. At Valeur Global Connect, we 
              bridge the gap.
            </div>

            <MyBtn name="Partner with Us" />
          </div>

          <div className='overflow-hidden rounded-lg'>
            <Image 
              ref={imageRef}
              src={EU_Nigeria} 
              alt="EU to Nigeria Market" 
              className='object-cover rounded-lg duration-700 hover:scale-105 transition-all lg:w-[806px]' 
            />
          </div>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full gap-24">
          <div className="flex flex-col gap-6 items-start lg:w-[900px]" ref={contentRef}>
            <h1 className='MyH5'>Connect Nigerian Excellence to European Markets</h1>

            <div className='text-mytext'>
              Nigerian agriculture offers incredible diversity - from premium cocoa and cashews 
              to exotic fruits and organic produce. European consumers increasingly seek authentic, 
              sustainably-sourced products, creating lucrative opportunities for Nigerian exporters.

              <div className='my-6'></div>

              Success in EU markets requires understanding complex regulations, quality standards, 
              and logistics. At Valeur Global Connect, we simplify this journey for Nigerian 
              agribusinesses ready to go global.
            </div>

            <MyBtn name="Start Exporting to EU" />
          </div>

          <div className='overflow-hidden rounded-lg'>
            <Image 
              ref={imageRef}
              src={Nigeria_EU} 
              alt="Nigeria to EU Market" 
              className='object-cover rounded-lg duration-700 hover:scale-105 transition-all lg:w-[806px]' 
            />
          </div>
        </div>
      )}
    </div>
  )
}