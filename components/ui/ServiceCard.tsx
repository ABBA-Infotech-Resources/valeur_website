import React from 'react'
import list from '@/images/list.png'
import Image from 'next/image'
import double_mark from '@/images/double_mark.png'



interface PropType{

Service_no:string,
Service:string,
Service_desc:string,
How_it_works:string[],
Onboarding:string[]

}

export default function ServiceCard({Service_no,Service,Service_desc,How_it_works,Onboarding}:PropType) {
  return (
   <div className="flex flex-col items-start border-mysec border-2 bg-white rounded-lg gap-6  p-4 duration-500 hover:shadow-lg hover:scale-101 transition-all"> 

    <p className='text-mysec bg-mybg rounded-lg p-3.5'>{Service_no}</p>
    <div className="flex flex-col">
    <h1 className="MyH5">
       {Service}
    </h1>

    <p className='text-mytext'>{Service_desc}</p>
</div>

<div className="flex flex-col">


<h1 className='MyH6'>How It Works</h1>


<ul className='flex flex-col gap-3 text-mytext'>
    {How_it_works.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={list} alt='list' className='object-contain'/>{e} </li>)

    })}



</ul>
</div>
<div className="flex flex-col gap-3">



<h1 className='MyH6'>Onboarding Process</h1>
<ul className='flex-col gap-3 flex text-mytext  '>

       {Onboarding.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={double_mark} alt='list' className='object-contain'/>{e} </li>)

    })}


</ul>
</div>




</div>
  )
}
