'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BtnToggle from '../ui/BtnToggle'
import EUNigeria from '../animated-elements/EUNigeria'
import NigeriaEU from '../animated-elements/NigeriaEU'

gsap.registerPlugin(ScrollTrigger)

export default function MarketToggle() {
  const [selectedMarket, setSelectedMarket] = useState<'EU to Nigeria' | 'Nigeria to EU'>('Nigeria to EU');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (market:'Nigeria to EU'  | 'EU to Nigeria') => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      onComplete: () =>
        {
        setSelectedMarket(market);
        // Scroll to the section after state update
         

       const offset = 80; // Adjust this value for your desired offset
          if (!containerRef.current) return

          const elementPosition = containerRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
      }



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
        <EUNigeria cRef={contentRef} iRef={imageRef}/>
      ) : (
       <NigeriaEU cRef={contentRef} iRef={imageRef} />
      )}
    </div>
  )
}