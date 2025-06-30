"use client"

import { usePathname } from "next/navigation"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import Script from "next/script"
import { useState, useEffect } from "react"

export default function FastQuoteClientPage() {
  const [showFallback, setShowFallback] = useState(false)

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

            {/* Fallback message */}
            {showFallback && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                <p className="text-yellow-800">
                  ⚠️ Having trouble loading the widget? Try the direct link below or contact us directly.
                </p>
              </div>
            )}

            {/* Alternative Access Methods */}
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

      {/* Widget monitoring */}
      <Script id="widget-monitor" strategy="afterInteractive">
        {`
          // Monitor widget messages
          window.addEventListener('message', (event) => {
            if (event.origin.includes('roofle.com')) {
              console.log('📨 Roofle widget message:', event.data);
            }
          });
          
          // Log when widget loads
          window.addEventListener('load', () => {
            console.log('🚀 Page loaded, Roofle widget should be initializing...');
          });
        `}
      </Script>
    </>
  )
}
