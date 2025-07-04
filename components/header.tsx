"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Cal Green Roofing" width={200} height={60} className="h-14 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-800 hover:text-[#2e7d32] font-medium">
            Home
          </Link>
          <div className="relative group">
            <Link href="/services" className="text-gray-800 hover:text-[#2e7d32] font-medium flex items-center gap-1">
              Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/services/residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Residential Roofing
                </Link>
                <Link href="/services/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Commercial Roofing
                </Link>
                <Link href="/services/repairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Roof Repairs
                </Link>
                <Link href="/services/inspections" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Roof Inspections
                </Link>
              </div>
            </div>
          </div>
          <Link href="/about" className="text-gray-800 hover:text-[#2e7d32] font-medium">
            Our Company
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#2e7d32] font-medium">
            Contact Us
          </Link>
          <Button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-md">FREE ROOFING QUOTE</Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[105px] left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4">
              <Link href="/" className="py-2 text-gray-800 hover:text-[#2e7d32]" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/services"
                className="py-2 text-gray-800 hover:text-[#2e7d32]"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="py-2 text-gray-800 hover:text-[#2e7d32]"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Company
              </Link>
              <Link
                href="/contact"
                className="py-2 text-gray-800 hover:text-[#2e7d32]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button className="mt-4 bg-[#2e7d32] hover:bg-[#1b5e20] text-white" onClick={() => setIsMenuOpen(false)}>
                FREE ROOFING QUOTE
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
