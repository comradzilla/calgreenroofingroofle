import Link from "next/link"
import { Phone } from "lucide-react"

export default function TopBar() {
  return (
    <div className="w-full bg-[#2e7d32] text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm md:text-base">We've Got You Covered – Free Roofing Quote</div>
        <Link href="tel:888-665-3994422-5476" className="hidden md:flex items-center gap-2">
          Call Now (888) 422-5476
        </Link>
        <Link
          href="tel:888-665-3994422-5476"
          className="bg-[#ffc107] text-[#2e7d32] px-4 py-2 rounded-full flex items-center gap-2 font-medium text-sm"
        >
          <Phone size={16} />
          <span className="hidden md:inline">CALL NOW</span> (888) 422-5476
        </Link>
      </div>
    </div>
  )
}
