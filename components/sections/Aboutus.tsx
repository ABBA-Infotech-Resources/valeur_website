import Image from 'next/image'
import React from 'react'
import Cargo from "@/images/Cargo-Ship.png"
import list from "@/images/list.png"
import AboutLeft from '../animated-elements/AboutLeft'
import AboutRight from '../animated-elements/AboutRight'
import MissionVision from '../animated-elements/MissionVision'

export default function Aboutus() {
  return (
    <div className='w-full my-7 '>
    <div className='w-full flex flex-col lg:flex-row justify-between lg:gap-0 gap-6 lg:px-20 p-8 mt-20 relative overflow-hidden  min-h-[490px] '>

        <AboutLeft/>

<div className="lg:flex hidden w-[810px] h-[300px]">

</div>
<AboutRight/>
      
    </div>
{/* mission and vission */}

    <MissionVision/>
</div>
  )
}
