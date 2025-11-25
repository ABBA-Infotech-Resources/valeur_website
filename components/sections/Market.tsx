
import React from 'react'
import BtnToggle from '../ui/BtnToggle'
import MyBtn from '../ui/MyBtn'
import Image from 'next/image'
import EU_Nigeria from '@/images/EU-Nigeria.jpg'
import OurSupport from './OurSupportEU'
import Whoweare from './WhoweareEU'
import MarketToggle from './MarketToggle'
import Service_1 from '@/images/Slider/Service_1.jpg'

export default function   Market() {
  return (
    <div className='w-full flex flex-col items-center myBg lg:px-20 px-8 gap-6 py-14 p  pt-32'>
        <div className="flex flex-col items-center justify-center gap-4">
<h1 className='MyH4 animate-fade-in-up'>Markets We Serve</h1>
<p className='md:w-[600px] fontCaption text-center text-mytext text-[18px] animate-fade-in-up'>Linking two thriving agri-economies — the EU and Nigeria. We create reliable pathways for sustainable, profitable cross-border trade.</p>
</div>
  <div className='w-[100%] h-64 md:h-[408px] relative overflow-hidden rounded-lg'>
        <Image src={Service_1} alt='Valeur_service' fill className='object-cover' />
      </div>

<MarketToggle/>



{/* <OurSupport/>

<Whoweare/> */}


      
    </div>
  )
}
