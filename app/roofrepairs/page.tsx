import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { Check, ArrowRight, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Roof Repair Services in Southern California | Cal Green Roofing",
  description:
    "Fast, reliable roof repair services in Southern California. We fix leaks, storm damage, and worn roofing to extend your roof's lifespan and prevent costly water damage.",
  keywords:
    "roof repair, roof leak repair, emergency roof repair, storm damage repair, shingle repair, tile repair, flat roof repair, Southern California roof repair",
}

export default function RoofRepairsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/roof-repairs.jpg"
          alt="Professional roofer repairing damaged shingles on a residential roof in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roof Repair Services</h1>
              <p className="text-xl text-white">
                Fast, reliable roof repair services to fix leaks, damage, and extend your roof's lifespan throughout
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
              <h2 className="text-3xl font-bold mb-6">Expert Roof Repair Solutions</h2>
              <p className="mb-4">
                At Cal Green Roofing, we understand that roof damage requires prompt, professional attention to prevent
                more extensive and costly problems. Our comprehensive roof repair services address issues ranging from
                minor leaks to significant storm damage for both residential and commercial properties throughout
                Southern California.
              </p>
              <p className="mb-4">
                Our team of experienced repair specialists is trained to quickly identify the source of roofing problems
                and implement effective, lasting solutions using quality materials and proven techniques. We take pride
                in our ability to restore the integrity of your roof while extending its useful life.
              </p>
              <p>
                Whether you're dealing with a sudden leak, storm damage, or general wear and tear, our responsive team
                is ready to provide the expert repairs you need to protect your property and restore your peace of mind.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Common Roof Problems We Repair</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Roof Leaks",
                    description:
                      "Identification and repair of leaks, including fixing damaged flashing, replacing worn sealants, and addressing penetration points.",
                  },
                  {
                    title: "Storm Damage",
                    description:
                      "Repair of damage caused by high winds, heavy rain, hail, and falling debris, including emergency temporary solutions.",
                  },
                  {
                    title: "Shingle Damage",
                    description:
                      "Replacement of missing, cracked, curled, or broken shingles to maintain roof integrity and appearance.",
                  },
                  {
                    title: "Tile Repair",
                    description:
                      "Expert repair and replacement of cracked, broken, or displaced clay, concrete, or slate tiles.",
                  },
                  {
                    title: "Flat Roof Repairs",
                    description:
                      "Fixing blisters, cracks, ponding issues, and membrane damage on commercial and residential flat roofs.",
                  },
                  {
                    title: "Flashing Repairs",
                    description:
                      "Repair or replacement of damaged flashing around chimneys, vents, skylights, and roof transitions.",
                  },
                  {
                    title: "Gutter Issues",
                    description:
                      "Fixing sagging gutters, leaks, improper drainage, and ensuring proper attachment to the roofing system.",
                  },
                  {
                    title: "Ventilation Problems",
                    description:
                      "Addressing inadequate attic ventilation that can lead to moisture buildup, mold growth, and reduced roof lifespan.",
                  },
                ].map((problem, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-gray-700">{problem.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Roof Repair Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Assessment",
                    description:
                      "We begin with a thorough inspection to identify the source and extent of the roofing problem.",
                  },
                  {
                    step: "2",
                    title: "Detailed Diagnosis",
                    description:
                      "Our experts pinpoint the exact cause of the issue, which may include interior and exterior evaluations.",
                  },
                  {
                    step: "3",
                    title: "Repair Recommendation",
                    description:
                      "We provide a clear explanation of the problem, recommended repairs, and a transparent cost estimate.",
                  },
                  {
                    step: "4",
                    title: "Professional Repairs",
                    description:
                      "Our skilled technicians perform the necessary repairs using quality materials and proven techniques.",
                  },
                  {
                    step: "5",
                    title: "Quality Verification",
                    description:
                      "We conduct a thorough inspection of the completed repairs to ensure the problem is fully resolved.",
                  },
                  {
                    step: "6",
                    title: "Documentation & Recommendations",
                    description:
                      "We provide documentation of all repairs performed and recommendations for preventing future issues.",
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
              <h2 className="text-3xl font-bold mb-6">Emergency Roof Repair Services</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-2">24/7 Emergency Response</h3>
                    <p className="text-gray-700">
                      Roof damage from storms, fallen trees, or other sudden events can't wait. Our emergency repair
                      team is available 24/7 to provide immediate assistance and prevent further damage to your
                      property.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                When roof emergencies strike, quick action is essential to minimize damage to your property. CALGREEN
                ROOFING offers rapid response emergency roof repair services throughout Southern California, including:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Temporary tarping and water diversion",
                  "Emergency leak repairs",
                  "Storm damage assessment and documentation",
                  "Fallen tree removal (in coordination with tree services)",
                  "Structural stabilization",
                  "Insurance claim assistance",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p>
                Our emergency team arrives equipped with the tools and materials needed to secure your roof and prevent
                further damage until permanent repairs can be completed. We work efficiently to protect your property
                while providing clear communication throughout the emergency response process.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Signs Your Roof Needs Repair</h2>
              <p className="mb-6">
                Being proactive about roof repairs can save you from costly water damage and extend the life of your
                roof. Watch for these warning signs that indicate your roof may need professional attention:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    sign: "Water stains on ceilings or walls",
                    description: "Indicates active leaks that require immediate attention.",
                  },
                  {
                    sign: "Missing, cracked, or curling shingles",
                    description: "Compromises your roof's water-shedding ability and overall protection.",
                  },
                  {
                    sign: "Granules in gutters",
                    description: "Signals shingle deterioration and reduced protection against the elements.",
                  },
                  {
                    sign: "Sagging roof deck",
                    description: "May indicate structural issues or long-term water damage.",
                  },
                  {
                    sign: "Daylight visible through roof boards",
                    description: "Clear evidence of holes or gaps that need immediate repair.",
                  },
                  {
                    sign: "Higher energy bills",
                    description: "Could indicate roof damage allowing air leakage and reduced efficiency.",
                  },
                  {
                    sign: "Moss or algae growth",
                    description: "Can trap moisture and accelerate roof deterioration.",
                  },
                  {
                    sign: "Damaged flashing",
                    description: "Creates vulnerable points where water can penetrate the roof system.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold">{item.sign}:</span> {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                If you notice any of these signs, contact Cal Green Roofing for a professional inspection. Early
                intervention can prevent minor issues from becoming major problems that require more extensive and
                expensive repairs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can you respond to a roof leak?",
                    answer:
                      "For active leaks, we typically offer same-day or next-day service depending on your location in Southern California and our current schedule. Our emergency response team is available 24/7 for urgent situations that pose immediate risk to your property. When you contact us about a leak, we'll ask questions to assess the severity and provide the fastest possible response.",
                  },
                  {
                    question: "How do I know if I need a repair or a full roof replacement?",
                    answer:
                      "This depends on several factors, including the extent of the damage, the age of your roof, and the overall condition of the roofing system. As a general guideline, isolated damage to a roof that's otherwise in good condition and has many years of expected life remaining is typically a good candidate for repair. However, if your roof is approaching the end of its expected lifespan, has multiple or recurring issues, or has extensive damage covering more than 30% of the roof, replacement might be more cost-effective in the long run. Our inspection process will help determine the most appropriate and economical solution for your specific situation.",
                  },
                  {
                    question: "Can you repair my roof in rainy weather?",
                    answer:
                      "Safety and quality concerns generally prevent us from performing roof repairs during active rainfall. However, we can install emergency tarping in most weather conditions to prevent further water intrusion until permanent repairs can be completed. Once the weather clears, we prioritize completing permanent repairs for customers who have received emergency services.",
                  },
                  {
                    question: "Will my insurance cover the cost of roof repairs?",
                    answer:
                      "Many homeowners and commercial property insurance policies cover roof repairs when damage is caused by sudden, accidental events like storms, fallen trees, or vandalism. However, damage resulting from normal wear and tear or lack of maintenance is typically not covered. We have extensive experience working with insurance companies and can help you navigate the claims process, including providing detailed documentation of the damage and its cause, meeting with adjusters, and ensuring that all covered damage is properly identified and included in your claim.",
                  },
                  {
                    question: "Do you provide warranties on roof repairs?",
                    answer:
                      "Yes, Cal Green Roofing provides a 1-year workmanship warranty on all roof repairs. This covers any issues arising from the quality of our repair work. Additionally, any new materials installed during the repair process will be covered by the manufacturer's warranty. We stand behind our work and are committed to your complete satisfaction with our repair services.",
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
              <h3 className="text-xl font-bold mb-4">Need Roof Repairs?</h3>
              <p className="mb-6">
                Don't wait until minor damage becomes a major problem. Contact us today for prompt, professional roof
                repair services.
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
                    "Fast response to roof emergencies",
                    "Accurate diagnosis of roofing problems",
                    "Quality materials and workmanship",
                    "Transparent pricing with no hidden fees",
                    "1-year workmanship warranty on repairs",
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
                  We provide roof repair services throughout Southern California, including Los Angeles, Orange County,
                  San Diego, Riverside, San Bernardino, and Ventura counties.
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
            <h2 className="text-3xl font-bold text-white mb-4">Don't Let Roof Damage Get Worse</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contact Cal Green Roofing today for fast, reliable roof repairs. Our experienced team is ready to restore
              your roof's integrity and protect your property.
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
