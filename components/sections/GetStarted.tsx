import React from 'react'
import TitleSection from '../ui/TitleSection'
import MyForm from '../ui/MyForm'

import OurOffice from '../ui/OurOffice'

export default function GetStarted() {
  return (
    <div className='flex flex-col gap-8 px-8 mt-20'>
      <TitleSection Title='Get Started' Description="Ready to expand your agricultural business across Europe and Africa? Let's discuss how Valeur Global Connect can help you succeed."/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start justify-center mb-20">
        <div className="w-full">
          <MyForm/>
        </div>

        <div className="w-full">
          <OurOffice/>
        </div>
      </div>
    </div>
  )
}
