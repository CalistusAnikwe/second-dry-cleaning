'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-[#F9F9F7]'
    }`}>
      {/* BRANDING / LOGO */}
      <Link href="/" className="text-xl tracking-[0.4em] font-light text-gray-900 uppercase">
        Couture Care
      </Link>

      {/* CENTER NAV LINKS (Updated for your new pages) */}
      <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">
        <Link href="/" className="hover:text-black transition-colors">Homepage</Link>
        <Link href="/service" className="hover:text-black transition-colors">Service</Link>
        <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        <Link href="/book-now" className="hover:text-black transition-colors">Book Now</Link>
        <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
      </div>

      {/* ACTIONS: Keep the schedule pickup logic intact */}
      <div className="flex items-center">
        <Link 
          href="/book-now" 
          className="border border-black px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-black hover:text-white transition-all duration-300"
        >
          Schedule Pick-up
        </Link>
      </div>
    </nav>
  )
}