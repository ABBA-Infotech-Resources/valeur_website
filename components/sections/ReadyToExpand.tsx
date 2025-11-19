import React from 'react'
import MyBtn from '../ui/MyBtn'
import MyBtn_2 from '../ui/MyBtn_2'

export default function ReadyToExpand() {
  return (
    <div className='flex flex-col items-center justify-center text-center bg-mybg md:px-20 px-8 gap-6 w-[80%] py-11 my-10'>

        <h1 className='MyH5'>Ready to Expand Your Agricultural Business?</h1>
        <p className='max-w-[600px] text-center text-mytext'>Whether you're looking to enter new markets, find reliable partners, or optimize your
agricultural value chain, we're here to help you succeed.</p>
<div className="flex md:flex-row flex-col gap-6">
    <MyBtn name='Start your Journey' />
    <MyBtn_2 name='Schedule a Consultation' />

</div>

      
    </div>
  )
}
