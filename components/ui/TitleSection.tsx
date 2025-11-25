import React from 'react'




interface PropType{

  Title:string,
  Description:string,
  titleClass?: string,
  descClass?: string

}

export default function TitleSection({Title,Description,titleClass='',descClass=''}:PropType) {
  return (
    <div className='flex flex-col gap-6 items-center justify-center'>

       <h1 className={`MyH4 ${titleClass}`}>{Title}</h1>
        <p className={`md:w-[600px] fontCaption text-center text-mytext text-[18px] ${descClass}`}>{Description}</p>

    </div>
  )
}
