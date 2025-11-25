import React from 'react'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import GetStarted from '@/components/sections/GetStarted'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import CallUs from '@/components/ui/CallUs'

export default function page() {
  return (
   <div className="flex flex-col  items-center  font-sans dark:bg-black  ">
                        
                        
                        <Navbar/>
                           <CallUs/>
                        
                      
                    <GetStarted/>
                    
                      
                      <Footer/>
                      
                   
                   
                       </div>
  )
}
