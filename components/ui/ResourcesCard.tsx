import React from 'react'
import list from '@/images/list.png'
import Image from 'next/image'
import double_mark from '@/images/double_mark.png'



interface PropType{

Resource:string,
Resource_title:string,
desc_header:string,
desc_body:string,
Offerings:string[],
Note?:string,
How_it_works:string[]

}

export default function ResourcesCard({Resource,Resource_title,desc_header,desc_body,Offerings,How_it_works,Note}:PropType) {
  return (
   <div className="flex flex-col items-start border-mysec border-2 bg-white rounded-lg gap-6  p-4 ">

    <p className='text-mysec bg-mybg rounded-lg p-3.5'>{Resource}</p>
    <div className="flex flex-col">
    <h1 className="MyH5">
       {Resource_title}
    </h1>

    <p className='font-bold'>{desc_header}</p>
    <p className='text-mytext'>{desc_body}</p>

</div>

<div className="flex flex-col">


<h1 className='MyH6'>What we Offer</h1>


<ul className='flex flex-col gap-3 text-mytext'>
    {Offerings.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={list} alt='list' className='object-contain'/>{e} </li>)

    })}



    { Note && (<p>{Note}</p>)}
</ul>
</div>
<div className="flex flex-col gap-3">



<h1 className='MyH6'>How it Works </h1>
<ul className='grid grid-cols-2 gap-3 text-mytext'>

       {How_it_works.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={double_mark} alt='list' className='object-contain'/>{e} </li>)

    })}


</ul>
</div>




</div>
  )
}
