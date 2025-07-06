import type { Metadata } from "next"
import Script from "next/script"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Cal Green Roofing | Southern California Roof Experts",
  description:
    "Expert residential and commercial roofing services in Southern California. Free estimates, fast turnaround, and trusted craftsmanship.",
  openGraph: {
    title: "Cal Green Roofing",
    description: "Top-rated roofing in SoCal. Request a free quote today.",
    images: [
      {
        url: "https://calgreenroofing.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cal Green Roofing",
      },
    ],
    url: "https://calgreenroofing.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cal Green Roofing",
    description: "Southern California roofing pros. Residential & commercial. Free estimates.",
    images: ["https://calgreenroofing.com/images/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function Home() {
  return (
    <>
      <Script
        src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        async
      />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
