"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import Script from "next/script"

export default function FastQuoteClientPage() {
  const [showFallback, setShowFallback] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  return (
    <>
      {/* Remove any CSP restrictions for this page */}
      <Script id="remove-csp" strategy="beforeInteractive">
        {`
          const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
          if (cspMeta) {
            cspMeta.remove();
          }
        `}
      </Script>

      {/* Load Roofle slide-out widget */}
      <Script
        src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        onLoad={() => console.log("✅ Roofle slide-out widget loaded")}
        onError={(e) => {
          console.error("❌ Roofle slide-out widget failed", e)
          setShowFallback(true)
        }}
      />

      {/* Load embedded Roofle widget */}
      <Script
        src="https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Roofle embedded widget script loaded")
          setIsScriptLoaded(true)

          const container = document.getElementById("roof-quote-pro-embedded")
          const alreadyLoaded = container?.querySelector("iframe")

          if (container && !alreadyLoaded && window.RoofQuotePro) {
            console.log("🚀 Initializing Roofle embedded widget")
            window.RoofQuotePro.init({
              containerId: "roof-quote-pro-embedded",
              widgetId: "TyenXTFKs3GstadLv13T3"
            })
          }
        }}
        onError={(e) => {
          console.error("❌ Embedded Roofle widget failed", e)
          setShowFallback(true)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="py-8">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-6">
              <h1 className="text-4xl font-bold mb-4">Get Your Instant Roof Quote</h1>
              <p className="text-xl text-gray-600">
                Enter your address below to see an aerial view of your roof and get an instant estimate.
              </p>
            </div>

            {/* Embedded Widget Container */}
            <div className="w-full max-w-6xl mx-auto mb-12">
              <div
                id="roof-quote-pro-embedded"
                className="w-full min-h-[800px] bg-white rounded-lg shadow-sm p-4"
              >
                {!isScriptLoaded && (
                  <div className="text-center text-gray-600">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p>Loading Roof Quote widget...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Fallback message */}
            {showFallback && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                <p className="text-yellow-800">
                  ⚠️ Having trouble loading the widget? Try the direct link below or contact us directly.
                </p>
              </div>
            )}

            {/* Alternative Access */}
            <div className="mt-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
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
          </Container>
        </main>

        {/* Footer */}
        <footer className="bg-white py-6 border-t mt-12">
          <Container>
            <div className="text-center text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} CALGREEN ROOFING. All rights reserved.</p>
            </div>
          </Container>
        </footer>
      </div>

      {/* Optional monitoring */}
      <Script id="widget-monitor" strategy="afterInteractive">
        {`
          window.addEventListener('message', (event) => {
            if (event.origin.includes('roofle.com')) {
              console.log('📨 Roofle widget message:', event.data);
            }
          });
        `}
      </Script>
    </>
  )
}
