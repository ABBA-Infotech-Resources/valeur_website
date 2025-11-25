import OurService from '@/components/sections/OurService'
import React from 'react'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'   
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import CallUs from '@/components/ui/CallUs'

export default function page() {
  return (
      <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
                     
                     
                     <Navbar/>
                        <CallUs/>
                     
                      <ScrollTopButton/>
                   
                 <OurService/>
                 
                   
                   <Footer/>
                   
                
                
                    </div>
  )
}
