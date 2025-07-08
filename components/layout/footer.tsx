import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Container } from "@/components/ui/container"

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Free Quote", href: "/quote" },
  ],
  services: [
    { label: "Residential Roofing", href: "/residentialroofing" },
    { label: "Commercial Roofing", href: "/commercialroofing" },
    { label: "Roof Repairs", href: "/roofrepairs" },
    { label: "Roof Inspections", href: "/roofinspections" },
    { label: "Roof Maintenance", href: "/services/maintenance" },
  ],
  contact: [
    {
      icon: <Phone className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />,
      label: "(888) 665-3994",
      href: "tel:888-665-3994422-5476",
    },
    {
      icon: <Mail className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />,
      label: "info@calgreenroofing.com",
      href: "mailto:info@calgreenroofing.com",
    },
    {
      icon: <MapPin className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />,
      label: "Los Angeles, CA",
      href: "https://maps.google.com/?q=Los+Angeles,+CA",
    },
  ],
  social: [
    { icon: <Facebook size={20} aria-hidden="true" />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} aria-hidden="true" />, label: "Twitter", href: "#" },
    { icon: <Instagram size={20} aria-hidden="true" />, label: "Instagram", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" aria-label="Cal Green Roofing Home">
              <Image src="/logo.png" alt="Cal Green Roofing Logo" width={180} height={50} className="mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              Professional roofing services for residential and commercial properties. Serving all of Southern
              California with quality and reliability.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span>
                    <Link href={item.href} className="hover:text-secondary transition-colors">
                      {item.label}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cal Green Roofing. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
