import React from 'react'

export default function Whoweare() {
  return (
    <div className='flex md:flex-row flex-col justify-between gap-6 my-6'>

<div className="flex flex-col gap-6">
<h1 className='MyH5'>Who We Work With</h1>    

<ul className="grid grid-cols-2 gap-6 text-mytext">

    <li>Agritech innovators introducing 
cutting-edge farming solutions</li>
    <li>Exporters seeking new sales 
channels</li>
    <li>Food processors expanding 
sourcing networks</li>
    <li>Agricultural input suppliers (seeds, 
fertilizers, irrigation systems)</li>
    <li>Agri-investors building scalable 
West African ventures</li>



</ul>
</div>


<div className="flex flex-col p-7 items-start justify-center rounded-lg shadow-lg  md:w-[560px]">

<h3 className='MyH5'>Why Partner With Us?</h3>
<p className='text-mytext'>Our position as a registered French trade company 
operating within Nigerian networks gives you the 
credibility, local knowledge, and speed to enter and grow 
in this vibrant market without unnecessary risk.</p>




</div>


    </div>
  )
}
