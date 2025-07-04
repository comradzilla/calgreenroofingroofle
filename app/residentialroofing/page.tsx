import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Roofing Services in Southern California | Cal Green Roofing",
  description:
    "Expert residential roofing services in Southern California. We offer shingle, tile, metal, and flat roofing installation, replacement, and repair with premium materials and craftsmanship.",
  keywords:
    "residential roofing, home roofing, roof replacement, roof installation, shingle roof, tile roof, metal roof, Southern California roofing, roof contractor",
}

export default function ResidentialRoofingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/residential-roofing.jpg"
          alt="Beautiful residential home with new roof installed by Cal Green Roofing in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Roofing Services</h1>
              <p className="text-xl text-white">
                Quality roofing solutions for your home with expert installation and premium materials throughout
                Southern California.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Main Content */}
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Expert Residential Roofing Solutions</h2>
              <p className="mb-4">
                At Cal Green Roofing, we understand that your roof is one of the most important components of your home,
                providing protection, energy efficiency, and curb appeal. Our comprehensive residential roofing services
                are designed to meet the unique needs of Southern California homeowners.
              </p>
              <p className="mb-4">
                Whether you need a complete roof replacement, new construction installation, or repairs to your existing
                roof, our team of experienced professionals delivers exceptional results using the highest quality
                materials and craftsmanship.
              </p>
              <p>
                We work with all types of residential roofing materials, including asphalt shingles, clay and concrete
                tiles, metal roofing, and flat roofing systems, ensuring your home gets the perfect roofing solution for
                its architectural style, your personal preferences, and your budget.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Residential Roofing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Roof Replacement",
                    description:
                      "Complete removal and replacement of your existing roof with premium materials and expert installation.",
                  },
                  {
                    title: "New Roof Installation",
                    description:
                      "Professional installation of roofing systems for new construction homes with precision and care.",
                  },
                  {
                    title: "Roof Repairs",
                    description:
                      "Fixing leaks, damaged shingles, and other issues to extend the life of your existing roof.",
                  },
                  {
                    title: "Roof Maintenance",
                    description:
                      "Regular maintenance services to keep your roof in optimal condition and prevent costly problems.",
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Residential Roofing Materials</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Asphalt Shingles",
                    description:
                      "The most popular choice for residential roofing, offering durability, affordability, and a wide range of colors and styles.",
                    features: [
                      "30-50 year warranties available",
                      "Excellent value for the price",
                      "Wide variety of colors and styles",
                      "Good fire and wind resistance",
                    ],
                  },
                  {
                    title: "Clay and Concrete Tiles",
                    description:
                      "A premium option that provides a distinctive look, exceptional durability, and excellent energy efficiency for Southern California homes.",
                    features: [
                      "50+ year lifespan",
                      "Classic Mediterranean or Spanish aesthetic",
                      "Excellent energy efficiency",
                      "Superior fire resistance",
                    ],
                  },
                  {
                    title: "Metal Roofing",
                    description:
                      "Modern, durable, and energy-efficient roofing option that can last 50+ years with minimal maintenance.",
                    features: [
                      "Exceptional longevity",
                      "Highly energy efficient",
                      "Lightweight and environmentally friendly",
                      "Available in various styles and colors",
                    ],
                  },
                  {
                    title: "Flat Roofing Systems",
                    description:
                      "Specialized solutions for modern home designs or additions, offering durability and energy efficiency.",
                    features: [
                      "TPO and PVC membrane options",
                      "Ideal for modern architectural styles",
                      "Can create usable outdoor space",
                      "Energy-efficient cool roof options",
                    ],
                  },
                ].map((material, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                    <p className="text-gray-700 mb-4">{material.description}</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {material.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Residential Roofing Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Consultation",
                    description:
                      "We begin with a thorough consultation to understand your needs, preferences, and budget for your roofing project.",
                  },
                  {
                    step: "2",
                    title: "Detailed Inspection",
                    description:
                      "Our experts conduct a comprehensive inspection of your current roof or building plans to assess requirements and identify any potential issues.",
                  },
                  {
                    step: "3",
                    title: "Customized Proposal",
                    description:
                      "We provide a detailed proposal outlining recommended materials, project timeline, and transparent pricing with no hidden costs.",
                  },
                  {
                    step: "4",
                    title: "Professional Installation",
                    description:
                      "Our skilled team installs your new roof with precision and care, adhering to the highest industry standards and local building codes.",
                  },
                  {
                    step: "5",
                    title: "Final Inspection & Cleanup",
                    description:
                      "We conduct a thorough final inspection to ensure quality, remove all debris, and leave your property clean and beautiful.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How long does a residential roof replacement typically take?",
                    answer:
                      "Most residential roof replacements take 2-5 days, depending on the size of your home, the complexity of the roof design, and the materials being used. Our team works efficiently to minimize disruption to your daily life while ensuring quality installation.",
                  },
                  {
                    question: "How do I know if I need a roof replacement or just repairs?",
                    answer:
                      "Signs that you might need a full replacement include: multiple leaks, shingles that are curling, buckling, or missing, excessive granule loss from asphalt shingles, visible sagging, or if your roof is 20+ years old. We provide honest assessments and will never recommend replacement if repairs will suffice.",
                  },
                  {
                    question: "What type of roofing material is best for Southern California homes?",
                    answer:
                      "Clay and concrete tiles are popular in Southern California due to their heat resistance and Mediterranean aesthetic, but modern asphalt shingles with high solar reflectivity and metal roofing are also excellent choices. The best material depends on your home's architecture, your budget, and your specific needs. We'll help you choose the optimal solution during our consultation.",
                  },
                  {
                    question: "Do you offer warranties on residential roofing?",
                    answer:
                      "Yes, we offer manufacturer warranties on all roofing materials, which typically range from 25 years to lifetime coverage depending on the product. Additionally, Cal Green Roofing provides a 10-year workmanship warranty on all installations, giving you peace of mind that your investment is protected.",
                  },
                  {
                    question: "Is financing available for residential roof replacement?",
                    answer:
                      "Yes, we offer flexible financing options to make your roofing project affordable. Our team can help you explore payment plans that fit your budget, and we also work with insurance companies if your roof replacement is due to covered damage.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
              <p className="mb-6">
                Ready to start your residential roofing project? Contact us today for a free, no-obligation quote.
              </p>
              <CTAButton href="/fastquote" className="w-full bg-primary hover:bg-primary/90 text-white mb-4" size="lg">
                GET INSTANT QUOTE
              </CTAButton>
              <CTAButton
                href="tel:888-665-3994422-5476"
                className="w-full bg-secondary text-primary hover:bg-secondary/90"
                size="lg"
              >
                CALL (888) 422-5476
              </CTAButton>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Licensed & insured professionals",
                    "Premium materials & craftsmanship",
                    "Transparent pricing, no hidden fees",
                    "Industry-leading warranties",
                    "Excellent customer service",
                    "Serving all of Southern California",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-bold mb-2">Service Areas</h3>
                <p className="text-sm">
                  We provide residential roofing services throughout Southern California, including Los Angeles, Orange
                  County, San Diego, Riverside, San Bernardino, and Ventura counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Home with a New Roof?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contact Cal Green Roofing today for a free consultation and quote. Our residential roofing experts are
              ready to help you enhance your home's protection, efficiency, and curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton href="/fastquote" size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                GET INSTANT QUOTE
              </CTAButton>
              <CTAButton
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                CONTACT US
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
