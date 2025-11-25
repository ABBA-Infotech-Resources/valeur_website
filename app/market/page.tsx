import React from 'react'
import Aboutus from '@/components/sections/Aboutus'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import Deals from '@/components/sections/Deals'
import Explore from '@/components/sections/Explore'
import Market from '@/components/sections/Market'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import CallUs from '@/components/ui/CallUs'

export default function page() {
  return (
     <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
              
              
              <Navbar/>
                 <CallUs/>
              
               <ScrollTopButton/>
            
            <Market/>
          
            
            <Footer/>
            
         
         
             </div>
  )
}
