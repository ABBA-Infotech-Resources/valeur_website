
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Paris from '@/images/eiffel_tower.png'
import Map from '@/images/world_map.png'
import bg from '@/images/backdrop_film.png'
import gsap from 'gsap'

import MyBtn from '../ui/MyBtn'

import LeftText from '../ui/LeftText'
import Tower from '../animated-elements/Tower'


export default function Hero() {



  
  return (
    <div id="hero" className="flex flex-col lg:min-h-screen  items-center     font-sans  w-full  relative overflow-hidden ">


<Navbar/>
<div className='flex flex-col md:flex-row w-full justify-between items-center lg:pt-20 pt-36'> 
<LeftText/>


<Tower/>
</div>
<Image src={Map}  className='object-cover   flex lg:w-full lg:h-auto h-screen absolute  z-0' alt='Eiffel Tower' />   
<Image src={bg}  className='object-cover   flex w-full absolute h-full -z-1' alt='bg Tower' />   

      
    </div>
  )
}
