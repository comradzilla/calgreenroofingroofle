import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { Check, ArrowRight, ClipboardCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Roof Inspection Services in Southern California | Cal Green Roofing",
  description:
    "Thorough roof inspections in Southern California to identify issues before they become costly problems. Detailed reports and maintenance recommendations for all roof types.",
  keywords:
    "roof inspection, roof assessment, roof evaluation, roof certification, home inspection, commercial roof inspection, roof maintenance, Southern California roof inspection",
}

export default function RoofInspectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1751578159930-e701cf1c3eff?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional roof inspector examining a residential roof in Southern California"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roof Inspection Services</h1>
              <p className="text-xl text-white">
                Thorough roof inspections to identify issues before they become costly problems throughout Southern
                California.
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
              <h2 className="text-3xl font-bold mb-6">Professional Roof Inspection Services</h2>
              <p className="mb-4">
                Cal Green Roofing provides comprehensive roof inspection services for residential and commercial
                properties throughout Southern California. Our detailed inspections help identify potential issues
                before they develop into costly problems, allowing you to make informed decisions about maintenance,
                repairs, or replacement.
              </p>
              <p className="mb-4">
                Our certified roof inspectors have extensive experience evaluating all types of roofing systems. We use
                a systematic approach to thoroughly assess every component of your roof, from the surface materials to
                the underlying structure, flashing, drainage systems, and more.
              </p>
              <p>
                Whether you're a homeowner concerned about your roof's condition, a business owner maintaining your
                commercial property, or a real estate professional needing a roof certification for a property
                transaction, our inspection services provide the detailed information you need with clear
                recommendations for next steps.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Types of Roof Inspections We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Maintenance Inspections",
                    description:
                      "Regular preventative inspections to identify minor issues before they develop into major problems.",
                  },
                  {
                    title: "Damage Assessments",
                    description:
                      "Thorough evaluation of roof damage from storms, fallen debris, or other events, often for insurance claims.",
                  },
                  {
                    title: "Pre-Purchase Inspections",
                    description:
                      "Detailed roof evaluations for home or commercial property buyers to understand the roof's condition before purchase.",
                  },
                  {
                    title: "Roof Certification Inspections",
                    description:
                      "Formal certification of a roof's condition and expected remaining lifespan for real estate transactions.",
                  },
                  {
                    title: "Warranty Inspections",
                    description:
                      "Documentation of roof condition for warranty validation or to address concerns during the warranty period.",
                  },
                  {
                    title: "Leak Investigations",
                    description:
                      "Specialized inspections to identify the source of active or intermittent leaks and recommend solutions.",
                  },
                ].map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-700">{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Comprehensive Inspection Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Exterior Roof Evaluation",
                    description:
                      "Visual inspection of all roofing materials, looking for damage, wear, or deterioration.",
                    details: [
                      "Assessment of shingles, tiles, or membrane condition",
                      "Evaluation of ridges, valleys, and transitions",
                      "Inspection of flashing around chimneys, vents, and skylights",
                      "Examination of gutters and drainage systems",
                    ],
                  },
                  {
                    step: "2",
                    title: "Interior Inspection",
                    description:
                      "Examination of attic spaces and interior ceilings for signs of leaks or structural issues.",
                    details: [
                      "Checking for water stains or active leaks",
                      "Assessing ventilation adequacy",
                      "Evaluating insulation condition",
                      "Inspecting roof decking for damage or deterioration",
                    ],
                  },
                  {
                    step: "3",
                    title: "Structural Assessment",
                    description: "Evaluation of the roof's structural components and overall integrity.",
                    details: [
                      "Checking for sagging or uneven roof planes",
                      "Assessing rafters and trusses",
                      "Evaluating load-bearing capacity",
                      "Identifying any structural modifications or damage",
                    ],
                  },
                  {
                    step: "4",
                    title: "Documentation",
                    description: "Comprehensive documentation of all findings with photographs and detailed notes.",
                    details: [
                      "High-resolution photos of problem areas",
                      "Measurements and diagrams as needed",
                      "Documentation of material types and conditions",
                      "Age estimation and remaining lifespan assessment",
                    ],
                  },
                  {
                    step: "5",
                    title: "Detailed Report",
                    description:
                      "Preparation of a comprehensive inspection report with clear findings and recommendations.",
                    details: [
                      "Summary of overall roof condition",
                      "Itemized list of issues requiring attention",
                      "Prioritized recommendations for repairs or maintenance",
                      "Cost estimates for recommended work (if requested)",
                    ],
                  },
                  {
                    step: "6",
                    title: "Consultation",
                    description:
                      "Personal review of findings and recommendations to ensure you understand your roof's condition and options.",
                    details: [
                      "Clear explanation of all issues identified",
                      "Discussion of repair vs. replacement considerations",
                      "Maintenance recommendations to extend roof life",
                      "Answering all your questions about the inspection findings",
                    ],
                  },
                ].map((step, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex mb-3">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 ml-14">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">When to Schedule a Roof Inspection</h2>
              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <div className="flex">
                  <ClipboardCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Regular Maintenance Recommendation</h3>
                    <p className="text-gray-700">
                      We recommend having your roof professionally inspected at least once every 2 years for most
                      residential properties, and annually for commercial buildings or homes in areas with extreme
                      weather conditions.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                In addition to regular maintenance inspections, you should schedule a roof inspection:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    situation: "After severe weather events",
                    description:
                      "Storms, high winds, hail, or heavy rainfall can cause damage that's not immediately visible.",
                  },
                  {
                    situation: "When buying or selling a property",
                    description:
                      "A professional inspection provides documentation of the roof's condition for real estate transactions.",
                  },
                  {
                    situation: "If you notice interior water stains",
                    description:
                      "Water stains on ceilings or walls often indicate roof leaks that require investigation.",
                  },
                  {
                    situation: "Before and after major renovations",
                    description: "Construction work can impact your roof's integrity and should be assessed.",
                  },
                  {
                    situation: "When your roof is approaching end of warranty",
                    description:
                      "An inspection can identify issues that should be addressed while still under warranty coverage.",
                  },
                  {
                    situation: "If you see visible exterior damage",
                    description:
                      "Missing shingles, damaged flashing, or other visible issues warrant a complete inspection.",
                  },
                  {
                    situation: "After nearby construction",
                    description: "Vibrations from nearby construction can sometimes affect roofing components.",
                  },
                  {
                    situation: "When planning major improvements",
                    description:
                      "Before investing in solar panels or other roof-mounted systems, verify your roof's condition.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold">{item.situation}:</span> {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Being proactive about roof inspections can save you significant money by identifying small issues before
                they develop into major problems requiring extensive repairs or premature roof replacement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How much does a roof inspection cost?",
                    answer:
                      "The cost of a roof inspection varies depending on the size and complexity of your roof, the type of inspection needed, and your location in Southern California. Our basic residential roof inspections typically range from $250-$500, while commercial inspections may cost more due to the larger size and complexity. We provide a clear quote before scheduling your inspection, and the cost of the inspection can often be applied toward any recommended repairs or services if you choose to work with us.",
                  },
                  {
                    question: "How long does a roof inspection take?",
                    answer:
                      "Most residential roof inspections take 1-2 hours to complete, while larger or more complex roofs may require additional time. Commercial roof inspections typically take 2-4 hours depending on the size and complexity of the building. The inspection process includes a thorough examination of the exterior roof surface, interior spaces (such as attics), and structural components, followed by documentation and report preparation.",
                  },
                  {
                    question: "Do I need to be present for the roof inspection?",
                    answer:
                      "While it's not absolutely necessary for you to be present during the entire inspection, we recommend being available at the beginning to discuss any specific concerns you have, and at the end to review preliminary findings. If you can't be present, we can arrange to conduct the inspection and provide a detailed report afterward, followed by a phone consultation to discuss the findings and recommendations.",
                  },
                  {
                    question: "Will the inspection damage my roof?",
                    answer:
                      "No, our inspection methods are designed to be non-invasive and will not cause damage to your roof. Our experienced inspectors use careful techniques to examine all components of your roof without causing harm to the materials or structure. In some cases, very minor lifting of shingles or tiles may be necessary to inspect underlying components, but this is done with extreme care to avoid any damage.",
                  },
                  {
                    question: "What's included in the inspection report?",
                    answer:
                      "Our comprehensive inspection reports include detailed documentation of your roof's current condition, including high-resolution photographs of any issues identified, measurements and diagrams as needed, an assessment of the roof's estimated remaining lifespan, and prioritized recommendations for any necessary repairs or maintenance. The report is typically delivered within 24-48 hours of the inspection and includes clear explanations of all findings in easy-to-understand language.",
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
              <h3 className="text-xl font-bold mb-4">Schedule an Inspection</h3>
              <p className="mb-6">
                Ready to get a professional assessment of your roof's condition? Contact us today to schedule a
                comprehensive roof inspection.
              </p>
              <CTAButton href="/fastquote" className="w-full bg-primary hover:bg-primary/90 text-white mb-4" size="lg">
                GET INSTANT QUOTE
              </CTAButton>
              <CTAButton
                href="tel:888-665-3994422-5476"
                className="w-full bg-secondary text-primary hover:bg-secondary/90"
                size="lg"
              >
                CALL (888) 665-3994
              </CTAButton>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Our Inspection Services</h3>
                <ul className="space-y-3">
                  {[
                    "Certified, experienced roof inspectors",
                    "Comprehensive evaluation process",
                    "Detailed reports with photos and recommendations",
                    "Clear explanation of findings",
                    "Honest assessment without sales pressure",
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
                  We provide roof inspection services throughout Southern California, including Los Angeles, Orange
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Protect Your Investment with Regular Roof Inspections
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Contact Cal Green Roofing today to schedule a comprehensive roof inspection. Our detailed assessment will
              help you make informed decisions about your roof's maintenance and care.
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
