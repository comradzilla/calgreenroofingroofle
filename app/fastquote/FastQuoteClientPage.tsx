"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function FastQuoteClientPage() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Remove any CSP restrictions
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMeta) {
      cspMeta.remove();
    }
  }, []);

  return (
    <>
      {/* Load Roofle slideout widget */}
      <Script
        src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        onLoad={() => console.log("Roofle slideout widget loaded")}
        onError={(e) => {
          console.error("Roofle slideout widget failed:", e)
          setShowFallback(true)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="py-8">
          <Container>
            {/* Primary Widget Container - Roofle widget will load here */}
            <div className="w-full max-w-6xl mx-auto mb-12">
              <div
                id="roof-quote-pro-embedded"
                className="w-full min-h-[800px]"
                dangerouslySetInnerHTML={{
                  __html: `
                    <script src="https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=TyenXTFKs3GstadLv13T3" async></script>
                  `
                }}
              />
            </div>

            {/* Fallback content */}
            {showFallback && (
              <div className="mt-8">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                  <p className="text-yellow-800">
                    ⚠️ Having trouble loading the widget? Try the direct link below or contact us directly.
                  </p>
                </div>

                {/* Alternative Access Methods */}
                <div className="mt-8 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Need Help Getting Your Quote?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href="tel:888-422-5476"
                        className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        📞 Call (888) 422-5476
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        📧 Contact Form
                      </Link>
                      <a
                        href="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        🔗 Direct Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Estimates</h3>
                <p className="text-gray-600">Get a quick estimate for your roofing project in minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Satellite Measurements</h3>
                <p className="text-gray-600">Accurate measurements using satellite technology</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clear, upfront pricing with no hidden fees</p>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  )
}
