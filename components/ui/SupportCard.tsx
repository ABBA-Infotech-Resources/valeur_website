import React from 'react'
import { StaticImageData } from 'next/image'
import  Image from 'next/image'



interface Proptype{

name:string,
Img:StaticImageData,
description:string

}

export default function SupportCard({name,Img,description}:Proptype) {
  return (
       <div className="flex flex-col items-start  bg-m bg-mybg_2 rounded-lg p-8 max-w-96 gap-4 hover:scale-102 duration-500 transition-all">

<Image src={Img} alt='Local Partner' />
<h1 className='MyH6'>{name}</h1>
<p className='text-[#2A2A2E]'>{description}</p>

      </div>
  )
}
