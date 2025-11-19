import React from 'react'




interface Proptype{
name:string



}
export default function MyBtn_2({name}:Proptype) {
  return (
    <div className='rounded-lg  px-4 py-2.5 border-mysec border-2 hover:text-white  text-mysec hover:shadow-sm hover:scale-101 hover:bg-mysec duration-300 transition-all cursor-default'>

        {name}
      
    </div>
  )
}
