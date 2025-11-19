
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
    <div className="flex flex-col min-h-screen items-center    font-sans  w-full  relative overflow-hidden ">


<Navbar/>
<div className='flex flex-row w-full justify-between items-center pt-20'> 
<LeftText/>


<Tower/>
</div>
<Image src={Map}  className='object-cover   flex w-full absolute  z-0' alt='Eiffel Tower' />   
<Image src={bg}  className='object-cover   flex w-full absolute h-full -z-1' alt='bg Tower' />   

      
    </div>
  )
}
