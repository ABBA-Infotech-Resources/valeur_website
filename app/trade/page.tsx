import OurService from '@/components/sections/OurService'
import React from 'react'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'   

export default function page() {
  return (
      <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
                     
                     
                     <Navbar/>
                   
                 <OurService/>
                 
                   
                   <Footer/>
                   
                
                
                    </div>
  )
}
