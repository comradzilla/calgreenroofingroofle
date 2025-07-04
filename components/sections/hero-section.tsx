"use client"

import { CTAButton } from "@/components/ui/cta-button"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

// Video configuration - easy to update
const heroVideo = {
  // YouTube configuration
  youtubeId: "4I505j4M9VE", // YouTube video ID
  startTime: 9, // Start time in seconds
  useYouTube: true, // Set to false to use direct video file instead

  // Direct video file (fallback or alternative)
  sourceUrl: "/videos/roofing-hero-compressed.mp4",

  // Common settings
  fallbackImage:
    "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  altText: "Professional roofers installing shingles on a residential home in Southern California",
}

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // YouTube API integration
  useEffect(() => {
    // Only run if using YouTube and in browser
    if (!heroVideo.useYouTube || typeof window === "undefined") return

    // Load YouTube API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Clean up
    return () => {
      // Remove script if needed
    }
  }, [])

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[600px] overflow-hidden" aria-label="Hero section">
      {/* Container for the Roofle widget */}
      <div id="roofle-quote-widget" className="absolute top-0 left-0 w-full z-10"></div>

      {/* Video Background */}
      {heroVideo.useYouTube ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-full min-h-full pointer-events-none"
              width="1920"
              height="1080"
              src={`https://www.youtube.com/embed/${heroVideo.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${heroVideo.youtubeId}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&enablejsapi=1&start=${heroVideo.startTime}`}
              title="Background video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
            poster={heroVideo.fallbackImage}
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src={heroVideo.sourceUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55">
        <Container className="py-12 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-center">
              <span className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">
                PROVEN RESULTS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Roofing Services <span className="text-secondary">You Can Trust</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                Cal Green Roofing provides top-quality roofing solutions for residential and commercial properties
                throughout Southern California. With over 10 years of experience, we deliver exceptional results on time
                and within budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <CTAButton
                  href="/fastquote"
                  size="lg"
                  className="bg-secondary text-primary hover:bg-secondary/90 flex items-center justify-center font-bold text-xl px-12 py-6"
                >
                  GET INSTANT QUOTE
                  <ArrowRight className="ml-3 h-6 w-6" />
                </CTAButton>
                <CTAButton
                  href="/services"
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white border-2 text-xl px-12 py-6"
                >
                  OUR SERVICES
                </CTAButton>
              </div>
              <div className="mt-8">
                <p className="text-lg text-gray-300">⭐ Trusted by 1000+ Southern California homeowners</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
