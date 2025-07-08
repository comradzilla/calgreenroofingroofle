import Link from "next/link"
import { Phone } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function TopBar() {
  return (
    <div className="w-full bg-primary text-white py-2.5">
      <Container>
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base">We've Got You Covered – Free Roofing Quote</p>
          <Link
            href="tel:888-665-3994422-5476"
            className="bg-secondary text-primary px-4 py-2 rounded-full flex items-center gap-2 font-medium text-sm transition-colors hover:bg-secondary/90"
            aria-label="Call us at (888) 665-3994"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden md:inline">CALL NOW</span> (888) 665-3994
          </Link>
        </div>
      </Container>
    </div>
  )
}
