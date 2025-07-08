import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src="/logo.png" alt="Cal Green Roofing" width={180} height={50} className="mb-4" />
            <p className="text-gray-400 mb-4">
              Professional roofing services for residential and commercial properties. Serving all of California with
              quality and reliability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-white">
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-gray-400 hover:text-white">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-400 hover:text-white">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-gray-400 hover:text-white">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/inspections" className="text-gray-400 hover:text-white">
                  Roof Inspections
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-400 hover:text-white">
                  Roof Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                <span>
                  <Link href="tel:888-665-3994422-5476" className="hover:text-[#ffc107]">
                    (888) 665-3994
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                <span>
                  <Link href="mailto:info@calgreenroofing.com" className="hover:text-[#ffc107]">
                    info@calgreenroofing.com
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                <span>
                  123 Main Street
                  <br />
                  Los Angeles, CA 90001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cal Green Roofing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
