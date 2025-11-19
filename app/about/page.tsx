import React from 'react'
import Aboutus from '@/components/sections/Aboutus'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'

export default function page() {
  return (
   <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
        
        
        <Navbar/>
      
      <Aboutus/>
      <Footer/>
      
   
   
       </div>
  )
}
