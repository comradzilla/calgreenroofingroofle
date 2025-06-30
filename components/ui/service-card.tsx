import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  link: string
}

export function ServiceCard({ title, description, image, imageAlt, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-5px]">
      <Link href={link} className="relative h-48 block overflow-hidden" aria-label={`Learn more about ${title}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <CTAButton href={link} variant="link" className="text-primary p-0 hover:text-primary/80">
          Learn More →
        </CTAButton>
      </div>
    </div>
  )
}
