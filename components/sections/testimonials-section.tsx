import { Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"

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
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="testimonials-heading">
      <Container>
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers throughout Southern California have to
            say about our roofing services. We pride ourselves on customer satisfaction and quality workmanship.
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

        <div className="mt-12 text-center">
          <CTAButton href="/testimonials" className="text-primary hover:text-primary/80" variant="link">
            Read More Customer Reviews →
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
