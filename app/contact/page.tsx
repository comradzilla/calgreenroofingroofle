import { Phone, Mail, MapPin } from "lucide-react"
import { Container } from "@/components/ui/container"
import HubspotContactForm from "@/components/forms/hubspot-contact-form"

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our roofing services? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* HubSpot Contact Form */}
          <HubspotContactForm />

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 mb-1">Call us for a free quote</p>
                  <a href="tel:888-422-5476" className="text-primary font-semibold hover:underline">
                    (888) 422-5476
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 mb-1">Send us an email anytime</p>
                  <a href="mailto:info@calgreenroofing.com" className="text-primary font-semibold hover:underline">
                    info@calgreenroofing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600 mb-1">Serving all of Southern California</p>
                  <address className="not-italic text-gray-800">Los Angeles, CA</address>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Service Area</h3>
              <p className="text-gray-600">
                CALGREEN ROOFING proudly serves all of Southern California, including Los Angeles, San Diego, Orange
                County, Riverside, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
