import { Container } from "@/components/ui/container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Roofing Quote | CALGREEN ROOFING",
  description:
    "Request a free, no-obligation roofing quote from CALGREEN ROOFING. We provide detailed estimates for all roofing services in Southern California.",
}

export default function QuotePage() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Request a Free Roofing Quote</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to request a free, no-obligation quote for your roofing project. Our team will get
            back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6" name="quote" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="quote" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Property Address*
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State*
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  defaultValue="CA"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code*
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In*
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a Service</option>
                <option value="residential">Residential Roofing</option>
                <option value="commercial">Commercial Roofing</option>
                <option value="repairs">Roof Repairs</option>
                <option value="inspections">Roof Inspections</option>
                <option value="maintenance">Roof Maintenance</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={5}
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please provide any additional details about your roofing project..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                Project Timeframe
              </label>
              <select
                id="timeframe"
                name="timeframe"
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a Timeframe</option>
                <option value="immediate">Immediate (ASAP)</option>
                <option value="1-2weeks">1-2 Weeks</option>
                <option value="1month">Within 1 Month</option>
                <option value="3months">Within 3 Months</option>
                <option value="planning">Just Planning</option>
              </select>
            </div>

            <div>
              <label className="flex items-start">
                <input type="checkbox" name="consent" required className="mt-1 mr-2" />
                <span className="text-sm text-gray-700">
                  I consent to being contacted by CALGREEN ROOFING regarding my roofing quote request. I understand my
                  information will be used in accordance with the privacy policy.*
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-medium transition-colors"
            >
              SUBMIT QUOTE REQUEST
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}
