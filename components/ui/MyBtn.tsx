import Link from 'next/link'
import React from 'react'




interface Proptype{
name:string,
link?: string



}
export default function MyBtn({name,link='#'}:Proptype) {
  return (
    <Link href={link} className='flex justify-start items-start'>
    <div className='rounded-lg mysec px-4 py-2.5 md:text-center  text-white hover:shadow-sm hover:scale-101 hover:bg-green-500 duration-300 transition-all cursor-default'>

        {name}
      
    </div>
    </Link>
  )
}
