import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Roofing Services in Southern California | Cal Green Roofing",
  description:
    "Professional commercial roofing services for businesses throughout Southern California. We specialize in TPO, EPDM, modified bitumen, and built-up roofing systems with minimal business disruption.",
  keywords:
    "commercial roofing, business roofing, flat roof, TPO roofing, EPDM roofing, modified bitumen, built-up roofing, Southern California commercial roofing, roof contractor",
}

export default function CommercialRoofingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1751578230731-1b92b23660da?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Commercial building with modern flat roof installed by Cal Green Roofing in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Roofing Services</h1>
              <p className="text-xl text-white">
                Comprehensive commercial roofing solutions designed for durability, energy efficiency, and minimal
                business disruption.
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
              <h2 className="text-3xl font-bold mb-6">Professional Commercial Roofing Solutions</h2>
              <p className="mb-4">
                Cal Green Roofing delivers superior commercial roofing services designed to protect your business
                investment while minimizing disruption to your operations. We understand that commercial roofing
                projects require specialized expertise, precise planning, and efficient execution.
              </p>
              <p className="mb-4">
                Our team of commercial roofing specialists has extensive experience working with all types of commercial
                buildings throughout Southern California, from retail stores and office buildings to warehouses,
                manufacturing facilities, and multi-unit residential complexes.
              </p>
              <p>
                We offer comprehensive commercial roofing services, including installation, replacement, repair, and
                maintenance, using the highest quality materials and advanced techniques to ensure your roof delivers
                long-lasting performance, energy efficiency, and value.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Commercial Roofing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "New Roof Installation",
                    description:
                      "Expert installation of commercial roofing systems for new construction projects with precision and attention to detail.",
                  },
                  {
                    title: "Roof Replacement",
                    description:
                      "Complete removal and replacement of aging or damaged commercial roofs with minimal disruption to your business.",
                  },
                  {
                    title: "Roof Repairs",
                    description:
                      "Prompt, effective repairs for leaks, damage, and other issues to maintain the integrity of your commercial roof.",
                  },
                  {
                    title: "Preventative Maintenance",
                    description:
                      "Scheduled maintenance programs to extend roof life, prevent costly problems, and protect your investment.",
                  },
                  {
                    title: "Roof Inspections",
                    description:
                      "Thorough assessments to identify potential issues, evaluate roof condition, and plan for future needs.",
                  },
                  {
                    title: "Energy-Efficient Solutions",
                    description:
                      "Cool roof systems and reflective coatings to improve energy efficiency and reduce utility costs.",
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
              <h2 className="text-3xl font-bold mb-6">Commercial Roofing Systems</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "TPO (Thermoplastic Polyolefin)",
                    description:
                      "A popular single-ply roofing membrane that offers excellent durability, energy efficiency, and resistance to UV radiation, chemicals, and punctures.",
                    features: [
                      "Energy-efficient white reflective surface",
                      "Excellent durability and weather resistance",
                      "Low maintenance requirements",
                      "Environmentally friendly and recyclable",
                    ],
                  },
                  {
                    title: "EPDM (Ethylene Propylene Diene Monomer)",
                    description:
                      "A highly durable synthetic rubber roofing membrane known for its exceptional weather resistance and longevity.",
                    features: [
                      "Superior flexibility and elongation properties",
                      "Excellent resistance to extreme temperatures",
                      "Long lifespan of 20-30+ years",
                      "Cost-effective solution for large roof areas",
                    ],
                  },
                  {
                    title: "Modified Bitumen",
                    description:
                      "A reinforced asphalt-based system that combines the reliability of traditional built-up roofing with advanced polymer technology.",
                    features: [
                      "Multi-ply protection against leaks",
                      "Excellent tensile strength and flexibility",
                      "Good resistance to foot traffic and punctures",
                      "Can be installed with cold-applied methods for safety",
                    ],
                  },
                  {
                    title: "Built-Up Roofing (BUR)",
                    description:
                      "A time-tested multi-layer system composed of alternating layers of bitumen and reinforcing fabrics, creating a finished membrane.",
                    features: [
                      "Exceptional durability and waterproofing",
                      "Multiple layers provide redundant protection",
                      "Excellent for roofs with frequent foot traffic",
                      "Low maintenance and repair costs",
                    ],
                  },
                  {
                    title: "PVC (Polyvinyl Chloride)",
                    description:
                      "A thermoplastic membrane offering excellent chemical resistance, making it ideal for restaurants and industrial facilities.",
                    features: [
                      "Highly resistant to chemicals, grease, and oils",
                      "Hot-air welded seams create a monolithic barrier",
                      "Energy-efficient white reflective option available",
                      "Fire-resistant properties",
                    ],
                  },
                ].map((system, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                    <p className="text-gray-700 mb-4">{system.description}</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {system.features.map((feature, i) => (
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
              <h2 className="text-3xl font-bold mb-6">Our Commercial Roofing Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Consultation",
                    description:
                      "We begin with a thorough consultation to understand your business needs, building requirements, and project timeline.",
                  },
                  {
                    step: "2",
                    title: "Comprehensive Roof Inspection",
                    description:
                      "Our experts conduct a detailed inspection of your current roof or building plans to assess requirements and identify any challenges.",
                  },
                  {
                    step: "3",
                    title: "Customized Proposal",
                    description:
                      "We provide a detailed proposal outlining recommended materials, project timeline, and transparent pricing with no hidden costs.",
                  },
                  {
                    step: "4",
                    title: "Project Planning",
                    description:
                      "We develop a comprehensive project plan designed to minimize disruption to your business operations.",
                  },
                  {
                    step: "5",
                    title: "Professional Installation",
                    description:
                      "Our skilled team installs your commercial roof with precision and care, adhering to the highest industry standards and building codes.",
                  },
                  {
                    step: "6",
                    title: "Quality Assurance",
                    description:
                      "We conduct thorough inspections throughout the installation process and upon completion to ensure superior quality.",
                  },
                  {
                    step: "7",
                    title: "Final Walkthrough & Documentation",
                    description:
                      "We provide a final walkthrough, complete documentation, warranty information, and maintenance recommendations.",
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
                    question: "How long does a commercial roof replacement typically take?",
                    answer:
                      "The timeline for a commercial roof replacement depends on several factors, including the size of the roof, the type of system being installed, weather conditions, and building access. Most projects are completed within 1-3 weeks. We provide a detailed timeline during the proposal phase and work efficiently to minimize disruption to your business operations.",
                  },
                  {
                    question: "Can you install a new commercial roof without disrupting our business operations?",
                    answer:
                      "Yes, we specialize in minimizing disruption to your business during roofing projects. We develop a customized installation plan that works around your schedule, including weekend or after-hours work when necessary. Our team takes extra precautions to control noise, dust, and debris, and we maintain clear communication throughout the project to address any concerns immediately.",
                  },
                  {
                    question: "What type of commercial roofing system is most energy-efficient?",
                    answer:
                      "TPO and PVC roofing systems with white reflective surfaces typically offer the best energy efficiency for Southern California's climate. These 'cool roof' systems reflect sunlight and heat away from the building, reducing cooling costs and extending the roof's lifespan by minimizing thermal stress. We can provide energy efficiency ratings for different systems to help you make an informed decision.",
                  },
                  {
                    question: "Do you offer warranties on commercial roofing systems?",
                    answer:
                      "Yes, we offer comprehensive warranty coverage on all commercial roofing systems. Manufacturer warranties typically range from 15 to 30 years depending on the system. Additionally, Cal Green Roofing provides a 5-year workmanship warranty on all commercial installations. We also offer extended warranty options and maintenance programs to protect your investment long-term.",
                  },
                  {
                    question: "Can you help with insurance claims for commercial roof damage?",
                    answer:
                      "Yes, we have extensive experience working with insurance companies on commercial roof damage claims. Our team can conduct a thorough inspection, document all damage, provide detailed reports and estimates, and work directly with your insurance adjuster to ensure you receive fair coverage for necessary repairs or replacement.",
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
                Ready to discuss your commercial roofing project? Contact us today for a free, no-obligation
                consultation and estimate.
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
                    "Specialized commercial roofing expertise",
                    "Minimal business disruption",
                    "Energy-efficient roofing solutions",
                    "Comprehensive warranty coverage",
                    "Licensed, bonded & insured",
                    "Serving businesses throughout Southern California",
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
                  We provide commercial roofing services throughout Southern California, including Los Angeles, Orange
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business Investment</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contact Cal Green Roofing today for a free consultation and quote. Our commercial roofing experts are ready
              to deliver durable, energy-efficient solutions for your business.
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
