"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white  fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-gray-900 font-impact">
              FOTO DUMP 
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium font-impact">
                home
              </Link>
              <Link href="/prices" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium font-impact">
                prices
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium font-impact">
                contact us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium font-impact">
                home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium font-impact">
                contact us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}