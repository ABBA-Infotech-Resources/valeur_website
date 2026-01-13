'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/images/Valeur_Logo.png'
import logo_white from '@/images/white_logo.png'

import MyBtn from '../ui/MyBtn'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling 100px (adjust based on your hero height)
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/market', label: 'Market' },
    { href: '/trade', label: 'Services' },
       { href: '/deals', label: 'Products' },
    { href: '/resources', label: 'Resources' }
  ]

  return (
    <nav className={`  fixed top-0 left-0 right-0 w-full pt-9 pb-4 px-6  md:px-12 lg:px-20 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className='flex flex-row justify-between items-center w-full   '>
        {/* Mobile Logo */}
        <Link href="/" className='z-50 flex lg:hidden'>
         {isOpen ? <Image src={logo_white} alt="Logo" className='h-8 w-auto md:h-16 ' /> : <Image src={logo} alt="Logo" className='h-8 w-auto md:h-16 ' />  }
        </Link>

        {/* Desktop Logo */}
 <Link href="/" className='z-50 hidden lg:flex'>
           <Image src={logo} alt="Logo" className='h-8 w-auto md:h-16 ' />  
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex flex-row gap-[79px] items-center'>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className='group relative cursor-pointer hover:text-mysec text-[18px] transition-colors duration-300'
            >
              {link.label}
              <span className='absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-1.5 h-1.5 bg-mysec rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden lg:block'>
         <a href="https://wa.me/+33142961234"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 duration-700 hover:scale-105 text-white px-6 py-3 rounded-full transition"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  Chat with Valeur
</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden z-60 w-8 h-8 flex flex-col justify-center items-center gap-1.5 group bg-mysec'
          aria-label='Toggle menu'
        >
          <span className={`w-6 h-0.5 bg-white group-hover:bg-mysec transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white group-hover:bg-mysec transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white group-hover:bg-mysec transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className='lg:hidden fixed inset-0 bg-mywhite/50  z-40'
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-black/25 backdrop-blur-xs  transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-start gap-8 pt-24 px-8'>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className='group relative text-white hover:text-mysec text-lg transition-colors duration-300 '
            >
              {link.label}
              <span className='absolute left-1 -bottom-1 w-1.5 h-1.5 bg-mysec rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </Link>
          ))}
          
          <div className='mt-4'>
               <a href="https://wa.me/+33142961234"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex text-sm items-center gap-2 bg-green-500 hover:bg-green-600 duration-700 hover:scale-105 text-white px-6 py-3 rounded-full transition"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  Chat with Valeur
</a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className='lg:hidden fixed inset-0 bg-black/20  z-40'
        />
      )}
    </nav>
  )
}