import React from 'react'




interface Proptype{
name:string,
onclick?:()=>void;




}
export default function BtnInactive({name, onclick }:Proptype) {
  return (
    <div onClick={onclick} className='rounded-lg  px-4 py-2.5  text-black hover:shadow-sm hover:scale-101 hover:bg-mysec hover:text-white duration-700 transition-all cursor-default'>

        {name}
      
    </div>
  )
}
