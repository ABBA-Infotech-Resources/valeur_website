import React from 'react'
import list from '@/images/list.png'
import Image from 'next/image'
import MyBtn from './MyBtn'
import double_mark from '@/images/double_mark.png'



interface PropType{

Product:string,
Product_title:string,
desc_header:string,
desc_body:string,
Key_features:string[],
Note?:string,
How_We_Operate:string[]

}

export default function DealsCard({Product,Product_title,desc_header,desc_body,Key_features,How_We_Operate,Note}:PropType) {
  return (
   <div className="flex flex-col items-start    gap-6    ">

    <p className='text-mysec bg-mybg rounded-lg p-3.5'>{Product}</p>
    <div className="flex flex-col">
    <h1 className="MyH5">
       {Product_title}
    </h1>

    <p className='font-bold'>{desc_header}</p>
    <p className='md:w-2xl'>{desc_body}</p>

</div>

<div className="flex flex-col">


<h1 className='MyH6'>Key Features</h1>


<ul className='grid md:grid-cols-2 grid-cols-1 gap-3'>
    {Key_features.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={double_mark} alt='list' className='object-contain'/>{e} </li>)

    })}



    { Note && (<p>{Note}</p>)}
</ul>
</div>
<div className="flex flex-col gap-3">



<h1 className='MyH6'>How We Operate </h1>
<ul className='flex md:flex-row flex-col      gap-3 '>

       {How_We_Operate.map((e)=>{

return (
<li className='flex flex-row gap-4' key={e}><Image src={list} alt='list' className='object-contain'/>{e} </li>)

    })}


</ul>
</div>

<MyBtn name='Learn More' />




</div>
  )
}
