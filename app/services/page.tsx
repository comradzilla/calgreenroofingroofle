import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"

const services = [
  {
    title: "Residential Roofing",
    description: "Quality roofing solutions for your home with expert installation and premium materials.",
    image: "/residential-roofing.jpg",
    imageAlt: "Modern residential home with newly installed shingle roof in Southern California",
    link: "/residentialroofing",
    features: ["Asphalt shingle roofing", "Metal roofing", "Tile roofing", "Flat roofing", "Roof replacement"],
  },
  {
    title: "Commercial Roofing",
    description: "Comprehensive commercial roofing services designed for durability and performance.",
    image: "/commercial-roofing.jpg",
    imageAlt: "Commercial building with flat roof system installed by professional roofers",
    link: "/commercialroofing",
    features: ["TPO roofing", "EPDM roofing", "Modified bitumen", "Built-up roofing", "Commercial roof replacement"],
  },
  {
    title: "Roof Repairs",
    description: "Fast, reliable roof repair services to fix leaks, damage, and extend your roof's lifespan.",
    image: "/roof-repairs.jpg",
    imageAlt: "Roofing professional repairing damaged shingles on a residential roof",
    link: "/roofrepairs",
    features: [
      "Leak repairs",
      "Storm damage repairs",
      "Shingle replacement",
      "Flashing repairs",
      "Emergency roof repairs",
    ],
  },
  {
    title: "Roof Inspections",
    description: "Thorough roof inspections to identify issues before they become costly problems.",
    image: "/roof-inspections.jpg",
    imageAlt: "Professional inspector examining roof condition on a residential property",
    link: "/roofinspections",
    features: [
      "Comprehensive roof evaluations",
      "Maintenance inspections",
      "Insurance inspections",
      "Pre-purchase inspections",
      "Detailed inspection reports",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]" aria-label="Services hero">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional roofing services in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Roofing Services</h1>
            <p className="text-xl text-white max-w-2xl">
              Comprehensive roofing solutions for residential and commercial properties throughout Southern California.
            </p>
          </Container>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16" aria-labelledby="services-list-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="services-list-heading" className="text-3xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cal Green Roofing provides a complete range of roofing services to meet all your needs, from new
              installations to repairs and maintenance throughout Southern California.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <Link
                  href={service.link}
                  className="relative h-[300px] rounded-lg overflow-hidden block"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </Link>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="services-cta-heading">
        <Container>
          <div className="text-center">
            <h2 id="services-cta-heading" className="text-3xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our experts will assess your needs and recommend the best
              solution for your property in Southern California.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                GET A FREE QUOTE
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
