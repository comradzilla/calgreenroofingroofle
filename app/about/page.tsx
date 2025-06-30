import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]" aria-label="About us hero">
        <Image
          src="https://images.unsplash.com/photo-1622993295880-b8e8c4f33897?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="CALGREEN ROOFING team working on a residential roof in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About CALGREEN ROOFING</h1>
            <p className="text-xl text-white max-w-2xl">
              Your trusted partner for all roofing needs in Southern California since 2010.
            </p>
          </Container>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16" aria-labelledby="our-story-heading">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="our-story-heading" className="text-3xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                CALGREEN ROOFING was founded in 2010 with a simple mission: to provide high-quality roofing services at
                fair prices with exceptional customer service. What started as a small family business has grown into
                one of Southern California's most trusted roofing companies.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, John Green, began his career as a roofer and saw firsthand the need for a company that
                prioritized quality workmanship and customer satisfaction above all else. Today, that vision continues
                to guide everything we do.
              </p>
              <p className="text-gray-600">
                With over a decade of experience and thousands of successful projects completed, CALGREEN ROOFING has
                built a reputation for excellence throughout Southern California. We're proud of our history and excited
                about our future as we continue to grow and serve more communities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CALGREEN ROOFING team members discussing a roofing project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50" aria-labelledby="why-choose-us-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="why-choose-us-heading" className="text-3xl font-bold mb-4">
              Why Choose CALGREEN ROOFING
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to excellence in every aspect of our business. Here's what sets us apart from other
              roofing companies in Southern California.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description:
                  "Our team of certified roofers has decades of combined experience in all aspects of roofing.",
              },
              {
                title: "Quality Materials",
                description:
                  "We use only premium materials from trusted manufacturers, ensuring your roof lasts for years to come.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "From installation to repairs and maintenance, we handle all your roofing needs under one roof.",
              },
              {
                title: "Excellent Warranties",
                description: "We stand behind our work with industry-leading warranties on both materials and labor.",
              },
              {
                title: "Competitive Pricing",
                description: "We offer fair, transparent pricing with no hidden fees or surprise charges.",
              },
              {
                title: "Customer Satisfaction",
                description: "Our 5-star reviews speak for themselves. Customer satisfaction is our top priority.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 ml-9">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-16" aria-labelledby="our-process-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="our-process-heading" className="text-3xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our process to make getting a new roof or repairs as simple and stress-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Schedule a free consultation and estimate for your roofing project.",
              },
              {
                step: "2",
                title: "Detailed Proposal",
                description: "Receive a comprehensive proposal outlining all work and materials.",
              },
              {
                step: "3",
                title: "Expert Installation",
                description: "Our skilled team completes your project with precision and care.",
              },
              {
                step: "4",
                title: "Final Inspection",
                description: "We conduct a thorough inspection to ensure everything meets our high standards.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary" aria-labelledby="cta-about-heading">
        <Container>
          <div className="text-center">
            <h2 id="cta-about-heading" className="text-3xl font-bold text-white mb-6">
              Ready to Work with CALGREEN ROOFING?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your free consultation and see why we're Southern California's trusted
              roofing experts.
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              GET A FREE QUOTE
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
