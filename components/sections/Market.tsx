
import React from 'react'
import BtnToggle from '../ui/BtnToggle'
import MyBtn from '../ui/MyBtn'
import Image from 'next/image'
import EU_Nigeria from '@/images/EU-Nigeria.jpg'
import OurSupport from './OurSupport'
import Whoweare from './Whoweare'
import MarketToggle from './MarketToggle'

export default function   Market() {
  return (
    <div className='w-full flex flex-col items-center myBg lg:px-20 px-8 gap-6 py-14 mt-14'>
        <div className="flex flex-col items-center justify-center gap-4">
<h1 className='MyH4 animate-fade-in-up'>Markets We Serve</h1>
<p className='text-[18px] text-mytext text-center animate-fade-in-up'>Linking two thriving agri-economies — the EU and Nigeria. We create reliable pathways for sustainable, profitable cross-border trade.</p>
</div>

<MarketToggle/>



<OurSupport/>

<Whoweare/>


      
    </div>
  )
}
