import { Container } from "@/components/ui/container"
import { Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Testimonials | Cal Green Roofing",
  description:
    "Read what our satisfied customers throughout Southern California have to say about Cal Green Roofing's professional roofing services.",
}

const testimonials = [
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    quote:
      "Cal Green Roofing did an amazing job on our new roof. The team was professional, efficient, and the quality of work exceeded our expectations. They completed the job on time and left our property spotless.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    location: "San Diego, CA",
    quote:
      "We had a leak that needed urgent repair. Cal Green Roofing responded quickly and fixed the issue at a reasonable price. Their technician explained everything clearly and provided helpful maintenance tips.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    location: "Orange County, CA",
    quote:
      "The team at Cal Green Roofing was knowledgeable and helped us choose the right roofing material for our home. The installation was completed on time and on budget. We've already recommended them to our neighbors.",
    rating: 4,
  },
  {
    name: "Jennifer Davis",
    location: "Riverside, CA",
    quote:
      "After getting quotes from several companies, we chose Cal Green Roofing for their competitive pricing and excellent reviews. They didn't disappoint! Our new roof looks fantastic and the crew was professional throughout the entire process.",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    location: "Long Beach, CA",
    quote:
      "I needed my commercial building's roof replaced with minimal disruption to our business. Cal Green Roofing worked around our schedule and completed the project over a weekend. Excellent service and quality work.",
    rating: 5,
  },
  {
    name: "Emily Martinez",
    location: "Anaheim, CA",
    quote:
      "Cal Green Roofing installed solar panels on our roof and did an excellent job. They coordinated with the solar company seamlessly and ensured our roof warranty remained intact. Very professional service.",
    rating: 4,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied customers throughout Southern California have to say about our roofing services.
            We're proud of our reputation for quality workmanship and excellent customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-center">Share Your Experience</h2>
          <p className="text-center mb-8">
            We value your feedback! If you've worked with Cal Green Roofing, we'd love to hear about your experience.
          </p>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reviewName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name*
                </label>
                <input
                  id="reviewName"
                  name="reviewName"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="reviewLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Location*
                </label>
                <input
                  id="reviewLocation"
                  name="reviewLocation"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="reviewRating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating*
              </label>
              <select
                id="reviewRating"
                name="reviewRating"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a Rating</option>
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>
            <div>
              <label htmlFor="reviewComment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review*
              </label>
              <textarea
                id="reviewComment"
                name="reviewComment"
                rows={5}
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Share your experience with Cal Green Roofing..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-md font-medium transition-colors"
            >
              SUBMIT REVIEW
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}
