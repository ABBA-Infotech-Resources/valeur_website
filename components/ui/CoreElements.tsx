import React from 'react'
import { StaticImageData } from 'next/image';


interface Proptype{

name:string;
description:string;
Img: StaticImageData | string;


}

import Image from 'next/image'
export default function CoreElements({name,description,Img}:Proptype) {
  return (
   <div className="flex flex-col gap-[15px] items-center justify-center max-w-[286px] hover:scale-105 transition-transform duration-500 ">

<Image src={Img} alt='B2B'/>
<div className="flex flex-col gap-2.5">
<h2 className='text-[18px] text-[#2A2A2E] font-bold text-center'>{name}</h2>
<p className='text-[14px] text-[#727272] text-center'>{description}</p>
</div>

</div>
  )
}
