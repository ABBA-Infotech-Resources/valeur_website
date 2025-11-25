'use client'
import React from 'react'
import MyBtn from './MyBtn'
import BtnInactive from './BtnInactive'

interface BtnToggleProps {
  market: 'Nigeria to EU' | 'EU to Nigeria' ;
  onToggle: (market: 'Nigeria to EU' |  'EU to Nigeria') => void;
}

export default function BtnToggle({ market, onToggle }: BtnToggleProps) {
  return (
    <div className='rounded-lg p-4 flex flex-row bg-white gap-[79px] shadow-sm  '>
      {market === 'EU to Nigeria' ? (
        <>
          <BtnInactive 
            name='Nigerian → EU Market' 
            onclick={() => onToggle('Nigeria to EU')}
          />
          <MyBtn name='EU → Nigerian Market' />
        </>
      ) : (
        <>
            <MyBtn name='Nigerian → EU Market' />
          <BtnInactive 
            name='EU → Nigerian Market' 
            onclick={() => onToggle('EU to Nigeria')}
          />
        </>
      )}
    </div>
  )
}