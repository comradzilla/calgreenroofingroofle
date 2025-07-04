import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Residential Roofing",
    description: "Quality roofing solutions for your home with expert installation and premium materials.",
    image: "/residential-roofing.jpg",
    link: "/services/residential",
  },
  {
    title: "Commercial Roofing",
    description: "Comprehensive commercial roofing services designed for durability and performance.",
    image: "/commercial-roofing.jpg",
    link: "/services/commercial",
  },
  {
    title: "Roof Repairs",
    description: "Fast, reliable roof repair services to fix leaks, damage, and extend your roof's lifespan.",
    image: "/roof-repairs.jpg",
    link: "/services/repairs",
  },
  {
    title: "Roof Inspections",
    description: "Thorough roof inspections to identify issues before they become costly problems.",
    image: "/roof-inspections.jpg",
    link: "/services/inspections",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Roofing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cal Green Roofing offers a complete range of roofing services to meet all your needs, from new installations
            to repairs and maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="link" className="text-[#2e7d32] p-0 hover:text-[#1b5e20]">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
