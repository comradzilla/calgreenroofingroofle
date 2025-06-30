import Image from "next/image"
import { Button } from "@/components/ui/button"
import LeadForm from "@/components/lead-form"

export default function Hero() {
  return (
    <div className="relative w-full min-h-[700px] md:min-h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Roofing services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto px-4 py-12 h-full">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Roofing Services You Can Trust</h1>
              <p className="text-xl mb-8">
                CALGREEN ROOFING provides top-quality roofing solutions for residential and commercial properties.
              </p>
              <div className="hidden md:flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white">
                  GET A FREE QUOTE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#ffc107] text-[#2e7d32] hover:bg-[#ffb300] border-[#ffc107]"
                >
                  OUR SERVICES
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
