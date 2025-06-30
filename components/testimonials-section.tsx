import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    quote:
      "CALGREEN ROOFING did an amazing job on our new roof. The team was professional, efficient, and the quality of work exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    quote:
      "We had a leak that needed urgent repair. CALGREEN ROOFING responded quickly and fixed the issue at a reasonable price. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    location: "San Diego, CA",
    quote:
      "The team at CALGREEN ROOFING was knowledgeable and helped us choose the right roofing material for our home. The installation was completed on time and on budget.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our roofing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
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
      </div>
    </section>
  )
}
