"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import RoofleScript from "@/components/roofle/RoofleScript"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "Residential Roofing", href: "/residentialroofing" },
      { label: "Commercial Roofing", href: "/commercialroofing" },
      { label: "Roof Repairs", href: "/roofrepairs" },
      { label: "Roof Inspections", href: "/roofinspections" },
    ],
  },
  { label: "Our Company", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white py-4 shadow-sm sticky top-0 z-40">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center" aria-label="Cal Green Roofing Home">
            <Image
              src="/logo.png"
              alt="Cal Green Roofing Logo"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-primary font-medium flex items-center gap-1 transition-colors"
                  >
                    {item.label}
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
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          role="menuitem"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-800 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/fastquote">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md">FREE INSTANT QUOTE</Button>
            </Link>
          </nav>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md z-50 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 invisible",
        )}
      >
        <Container className={cn("py-4", !isMenuOpen && "hidden")}>
          <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="py-2 text-gray-800 hover:text-primary block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="py-1 text-gray-600 hover:text-primary block text-sm transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/fastquote" className="w-full">
              <Button
                className="mt-4 bg-primary hover:bg-primary/90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                FREE INSTANT QUOTE
              </Button>
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  )
}
