import React from 'react'
import Aboutus from '@/components/sections/Aboutus'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import Deals from '@/components/sections/Deals'
import Explore from '@/components/sections/Explore'
import Market from '@/components/sections/Market'
import Resources from '@/components/sections/Resources'

export default function page() {
  return (
     <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
                  
                  
                  <Navbar/>
                
                <Resources/>
              
                
                <Footer/>
                
             
             
                 </div>
  )
}
