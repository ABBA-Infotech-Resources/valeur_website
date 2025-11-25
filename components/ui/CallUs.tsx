import React from 'react'

export default function CallUs() {
  return (
    <div>
      <a 
        href="tel:+2348012345678"
        className="bg-mysec rounded-2xl text-white px-4 py-2 fixed bottom-4 left-4 hover:scale-105 transition-all duration-700 z-50 flex items-center gap-2 shadow-lg"
      >
        <svg 
          className="w-5 h-5 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
        Call us
      </a>
    </div>
  )
}