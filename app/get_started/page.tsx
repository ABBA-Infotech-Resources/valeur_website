import React from 'react'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import GetStarted from '@/components/sections/GetStarted'

export default function page() {
  return (
   <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
                        
                        
                        <Navbar/>
                      
                    <GetStarted/>
                    
                      
                      <Footer/>
                      
                   
                   
                       </div>
  )
}
