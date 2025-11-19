'use client'
import React from 'react'
import MyBtn from './MyBtn'
import BtnInactive from './BtnInactive'

interface BtnToggleProps {
  market: 'EU to Nigeria' | 'Nigeria to EU';
  onToggle: (market: 'EU to Nigeria' | 'Nigeria to EU') => void;
}

export default function BtnToggle({ market, onToggle }: BtnToggleProps) {
  return (
    <div className='rounded-lg p-4 flex flex-row bg-white gap-2.5'>
      {market === 'EU to Nigeria' ? (
        <>
          <MyBtn name='EU → Nigerian Market' />
          <BtnInactive 
            name='Nigerian → EU Market' 
            onclick={() => onToggle('Nigeria to EU')}
          />
        </>
      ) : (
        <>
          <BtnInactive 
            name='EU → Nigerian Market' 
            onclick={() => onToggle('EU to Nigeria')}
          />
          <MyBtn name='Nigerian → EU Market' />
        </>
      )}
    </div>
  )
}