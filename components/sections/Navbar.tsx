'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/images/Valeur_Logo.png'
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
    { href: '/about', label: 'About Us' },
    { href: '/market', label: 'Market' },
    { href: '/trade', label: 'Trade' },
    { href: '/resources', label: 'Resources' },
    { href: '/deals', label: 'Deals' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full pt-9 pb-4 px-6 md:px-12 lg:px-20 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className='flex flex-row justify-between items-center w-full'>
        {/* Logo */}
        <Link href="/" className='z-50'>
          <Image src={logo} alt="Logo" className='h-8 w-auto md:h-10' />
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
          <MyBtn name='Get Started' link='/get_started'/>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 group bg-mysec'
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
          className='lg:hidden fixed inset-0 bg-mywhite/50 backdrop-blur-sm z-40'
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 ${
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
            <MyBtn name='Get Started' link='/get_started'/>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className='lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
        />
      )}
    </nav>
  )
}