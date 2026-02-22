'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Homepage', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/book-now' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm text-gray-900' 
          : 'bg-[#F9F9F7] text-gray-900'
      }`}>
        {/* BRANDING / LOGO */}
        <Link href="/" className="text-lg md:text-xl tracking-[0.4em] font-light uppercase z-[110]">
          Couture Care
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#C5A267] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 z-[110]">
          <Link 
            href="/book-now" 
            className={`hidden md:block border px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 ${
              isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-black hover:bg-black hover:text-white'
            }`}
          >
            Schedule Pick-up
          </Link>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY MENU - Background changed to Crisp White */}
        <div className={`fixed inset-0 bg-white transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-gray-900 text-lg tracking-[0.5em] uppercase font-light hover:text-[#C5A267]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/book-now" 
            onClick={() => setIsOpen(false)}
            className="mt-4 border border-black text-gray-900 px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
          >
            Schedule Pick-up
          </Link>
        </div>
      </nav>
    </>
  )
}