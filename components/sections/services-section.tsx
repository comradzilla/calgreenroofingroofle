import { Container } from "@/components/ui/container"
import { ServiceCard } from "@/components/ui/service-card"
import { CTAButton } from "@/components/ui/cta-button"

const services = [
  {
    title: "Residential Roofing",
    description:
      "Quality roofing solutions for your home with expert installation and premium materials. We specialize in shingle, tile, and metal roofing for homes throughout Southern California.",
    image: "/residential-roofing.jpg",
    imageAlt: "Modern residential home with newly installed shingle roof in Southern California",
    link: "/residentialroofing",
  },
  {
    title: "Commercial Roofing",
    description:
      "Comprehensive commercial roofing services designed for durability and performance. Our commercial solutions include TPO, EPDM, and built-up roofing systems for businesses of all sizes.",
    image: "/commercial-roofing.jpg",
    imageAlt: "Commercial building with flat roof system installed by professional roofers",
    link: "/commercialroofing",
  },
  {
    title: "Roof Repairs",
    description:
      "Fast, reliable roof repair services to fix leaks, damage, and extend your roof's lifespan. Our emergency repair team is available to quickly address issues before they cause extensive damage.",
    image: "/roof-repairs.jpg",
    imageAlt: "Roofing professional repairing damaged shingles on a residential roof",
    link: "/roofrepairs",
  },
  {
    title: "Roof Inspections",
    description:
      "Thorough roof inspections to identify issues before they become costly problems. Our detailed inspection reports help you make informed decisions about maintenance and repairs.",
    image: "/roof-inspections.jpg",
    imageAlt: "Professional inspector examining roof condition on a residential property",
    link: "/roofinspections",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
      <Container>
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CALGREEN ROOFING offers a complete range of roofing services to meet all your needs, from new installations
            to repairs and maintenance throughout Southern California. Our certified professionals ensure quality
            workmanship on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/services" className="bg-primary hover:bg-primary/90 text-white">
            View All Services
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
