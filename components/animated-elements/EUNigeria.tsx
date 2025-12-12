import React from 'react'
import Image from 'next/image'
import EU_Nigeria from '@/images/EU-Nigeria.jpg'  
import MyBtn from '../ui/MyBtn'
import { useRef } from 'react'

import { forwardRef } from 'react';
import OurSupport from '../sections/OurSupportEU'
import Whoweare from '../sections/WhoweareEU'


export default function EUNigeria({cRef,iRef}: any) {
  return (
    <>
      
<div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full lg:gap-24 gap-5">
          <div className="flex flex-col gap-6 items-start lg:w-[900px]" ref={cRef}>
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

          <div className='overflow-hidden rounded-lg flex items-start justify-start '>
            <Image 
              ref={iRef}
              src={EU_Nigeria} 
              alt="EU to Nigeria Market" 
              className='object-cover rounded-lg duration-700 hover:scale-105 transition-all lg:w-[806px]' 
            />
          </div>
        </div>


<Whoweare/>
<OurSupport/>

    </>
  )
}
