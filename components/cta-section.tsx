import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 bg-[#2e7d32]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started with Your Roofing Project?</h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Contact Cal Green Roofing today for a free, no-obligation quote. Our team of experts is ready to help with all
          your roofing needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-[#ffc107] text-[#2e7d32] hover:bg-[#ffb300]">
            GET A FREE QUOTE
          </Button>
          <Link href="tel:888-665-3994422-5476">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              CALL (888) 422-5476
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
