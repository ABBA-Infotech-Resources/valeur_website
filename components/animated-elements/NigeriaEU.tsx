import React from 'react'
import Image from 'next/image'
import Nigeria_EU from '@/images/Nigeria-Eu.jpg' 
import MyBtn from '../ui/MyBtn'
import { useRef } from 'react'    
import { forwardRef } from 'react';
import OurSupportNG from '../sections/OurSupportNG'
import WhoweareNG from '../sections/WhoweareNG'


export default function NigeriaEU({cRef,iRef}: any) {
  return (
    <>

 <div className="flex lg:flex-row flex-col justify-between lg:items-center items-center w-full gap-24">
          <div className="flex flex-col gap-6 items-start lg:w-[900px]" ref={cRef}>
            <h1 className='MyH5'>Your Bridge to Europe’s High-Value Agricultural Markets  </h1>

            <div className='text-mytext'>
             Breaking into the European Union’s lucrative food and agriculture market requires meeting some of the world’s highest standards. For Nigerian exporters, this can be a barrier — or a game-changing opportunity with the right partner.

              <div className='my-6'></div>

            Valeur Global Connect gives Nigerian producers, processors, and exporters a trusted French-based gateway to EU buyers, wholesalers, and retail chain
            </div>

            <MyBtn name="Start Exporting to EU" />
          </div>

          <div className='overflow-hidden rounded-lg'>
            <Image 
              ref={iRef}
              src={Nigeria_EU} 
              alt="Nigeria to EU Market" 
              className='object-cover rounded-lg duration-700 hover:scale-105 transition-all lg:w-[806px]' 
            />
          </div>
        </div>


        <WhoweareNG/>
        <OurSupportNG/>


      
    </>
  )
}
