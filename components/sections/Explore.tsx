import React from 'react'
import MyBtn from '../ui/MyBtn'

export default function Explore() {
  return (
    <div className=' w-[80%] my-4 p-20 bg-mybg flex flex-col gap-8  items-center justify-center text-center'>

<h1 className='MyH5'>Experience Our Premium Products & Platform</h1>
<p className='max-w-[600px] text-center text-mytext'>Whether you're interested in our premium food products or want to leverage our digital platform for agricultural trade, we're here to help you succeed.</p>


<MyBtn name='Get Product Information' />
      
    </div>
  )
}
