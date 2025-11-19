'use client'
import React from 'react'

export default function MyForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col items-start border-mysec border-2 bg-white rounded-lg gap-6 p-6'>
      <div className='w-full'>
        <h3 className='text-2xl MyH5 text-[#0f3740]'>Send Us Your Inquiry</h3>
        <p className='text-sm text-gray-500 mt-1'>Fill out the form below and our trade specialists will contact you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input
          className='w-full rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          type='text'
          name='fullName'
          placeholder='Full Name'
        />

        <input
          className='w-full rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          type='email'
          name='email'
          placeholder='Email Address'
        />

        <input
          className='w-full rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          type='text'
          name='company'
          placeholder='Company Name'
        />

        <select
          className='w-full rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          name='country'
        >
          <option>Country</option>
          <option>Nigeria</option>
          <option>France</option>
          <option>United States</option>
        </select>

        <select
          className='w-full md:col-span-2 rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          name='service'
        >
          <option>Service Interest</option>
          <option>Market Entry</option>
          <option>Logistics</option>
          <option>Consulting</option>
        </select>

        <textarea
          className='w-full md:col-span-2 rounded-lg bg-gray-100 px-4 py-3 placeholder-gray-400 focus:outline-none'
          name='message'
          placeholder='Message'
          rows={4}
        />

        <div className='md:col-span-2'>
          <button
            type='submit'
            className='w-full bg-mysec hover:bg-[#55c06a] text-white py-3 rounded-md font-medium'
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  )
}
