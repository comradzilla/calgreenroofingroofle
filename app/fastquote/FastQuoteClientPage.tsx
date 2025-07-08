"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import Script from "next/script"
import RoofleLoader from "@/components/roofle/RoofleLoader"
import RoofleError from "@/components/roofle/RoofleError"

const WIDGET_ID = "TyenXTFKs3GstadLv13T3"
const MAX_RETRIES = 3

interface WidgetState {
  isLoaded: boolean
  isReady: boolean
  error: any
  retryCount: number
}

export default function FastQuoteClientPage() {
  const [embeddedState, setEmbeddedState] = useState<WidgetState>({
    isLoaded: false,
    isReady: false,
    error: null,
    retryCount: 0
  })

  const [embeddedKey, setEmbeddedKey] = useState(0)

  // Embedded widget handlers
  const handleEmbeddedLoad = useCallback(() => {
    console.log('Embedded widget script loaded')
    setEmbeddedState(prev => ({ ...prev, isLoaded: true, error: null }))
  }, [])

  const handleEmbeddedReady = useCallback(() => {
    console.log('Embedded widget ready')
    setEmbeddedState(prev => ({ ...prev, isReady: true }))
  }, [])

  const handleEmbeddedError = useCallback((error: any) => {
    console.error('Embedded widget error:', error)
    setEmbeddedState(prev => ({ 
      ...prev, 
      error, 
      isLoaded: false, 
      isReady: false 
    }))
  }, [])

  const retryEmbedded = useCallback(() => {
    if (embeddedState.retryCount < MAX_RETRIES) {
      console.log(`Retrying embedded widget (attempt ${embeddedState.retryCount + 1}/${MAX_RETRIES})`)
      setEmbeddedState(prev => ({ 
        ...prev, 
        retryCount: prev.retryCount + 1,
        error: null,
        isLoaded: false,
        isReady: false
      }))
      setEmbeddedKey(prev => prev + 1) // Force re-render of script
    }
  }, [embeddedState.retryCount])

  // Set up timeout for embedded widget initialization
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!embeddedState.isReady && !embeddedState.error) {
        console.log('Embedded widget timeout - triggering error state')
        handleEmbeddedError({
          type: 'TIMEOUT',
          message: 'Widget failed to initialize within 15 seconds',
          timestamp: new Date().toISOString()
        })
      }
    }, 15000) // 15 second timeout

    return () => clearTimeout(timeout)
  }, [embeddedState.isReady, embeddedState.error, handleEmbeddedError])

  // Widget relocation effect - moves widget to correct container if it appears elsewhere
  useEffect(() => {
    const relocateWidget = () => {
      const targetContainer = document.getElementById('roof-quote-pro-embedded')
      if (!targetContainer) return

      // Look for Roofle widget elements that might have been inserted elsewhere
      const possibleSelectors = [
        'iframe[src*="roofle.com"]',
        'div[id*="roofle"]',
        'div[class*="roofle"]',
        'div[id*="roof-quote"]',
        'div[class*="roof-quote"]'
      ]

      for (const selector of possibleSelectors) {
        const widgets = document.querySelectorAll(selector)
        widgets.forEach(widget => {
          // Only move if it's not already in our target container
          if (!targetContainer.contains(widget)) {
            console.log('Found misplaced widget, relocating to target container:', selector)
            targetContainer.appendChild(widget)
            handleEmbeddedReady()
          }
        })
      }
    }

    // Check immediately and then periodically
    const interval = setInterval(relocateWidget, 1000)
    relocateWidget()

    return () => clearInterval(interval)
  }, [handleEmbeddedReady])

  return (
    <>
      {/* CSS to force proper widget positioning */}
      <style jsx global>{`
        /* Force any Roofle widget elements to appear in our container */
        #roof-quote-pro-embedded iframe {
          width: 100% !important;
          height: 800px !important;
          border: none !important;
          display: block !important;
        }
        
        /* Hide any widgets that appear outside our container */
        body > iframe[src*="roofle.com"]:not(#roof-quote-pro-embedded iframe),
        body > div[id*="roofle"]:not(#roof-quote-pro-embedded *),
        body > div[class*="roofle"]:not(#roof-quote-pro-embedded *) {
          display: none !important;
        }
        
        /* Ensure our container is properly positioned */
        #roof-quote-pro-embedded {
          position: relative !important;
          z-index: 1 !important;
        }
      `}</style>

      {/* Embedded RoofQuote PRO® Script - Goes in body */}
      <Script
        key={`embedded-${embeddedKey}`}
        src="https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        async
        onLoad={() => {
          console.log('Embedded widget script loaded')
          handleEmbeddedLoad()
          
          // Try to initialize the widget after script loads
          setTimeout(() => {
            const container = document.getElementById('roof-quote-pro-embedded')
            if (container) {
              // Check if widget auto-initialized
              if (container.children.length > 0) {
                console.log('Embedded widget auto-initialized')
                handleEmbeddedReady()
              } else {
                // Try manual initialization
                if (typeof window !== 'undefined' && (window as any).RoofQuotePro) {
                  const roofle = (window as any).RoofQuotePro
                  if (typeof roofle.init === 'function') {
                    console.log('Manually initializing embedded widget')
                    roofle.init({
                      containerId: 'roof-quote-pro-embedded',
                      widgetId: WIDGET_ID
                    }).then(() => {
                      handleEmbeddedReady()
                    }).catch((error: any) => {
                      console.error('Manual initialization failed:', error)
                      handleEmbeddedError(error)
                    })
                  } else {
                    console.log('RoofQuotePro.init not available, widget may auto-initialize')
                    // Give it more time to auto-initialize
                    setTimeout(() => {
                      if (container.children.length > 0) {
                        handleEmbeddedReady()
                      } else {
                        handleEmbeddedError({
                          type: 'INITIALIZATION_FAILED',
                          message: 'Widget failed to initialize automatically'
                        })
                      }
                    }, 3000)
                  }
                } else {
                  console.log('RoofQuotePro global not found, waiting for auto-initialization')
                  setTimeout(() => {
                    if (container.children.length > 0) {
                      handleEmbeddedReady()
                    } else {
                      handleEmbeddedError({
                        type: 'GLOBAL_NOT_FOUND',
                        message: 'RoofQuotePro global object not found'
                      })
                    }
                  }, 3000)
                }
              }
            }
          }, 1000)
        }}
        onError={(error) => {
          console.error('Embedded widget script error:', error)
          handleEmbeddedError(error)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="py-8">
          <Container>
            {/* Primary Widget Container */}
            <div className="w-full max-w-6xl mx-auto mb-12 relative">
              {/* Always present container for embedded widget - this must exist for the script to find it */}
              <div
                id="roof-quote-pro-embedded"
                className="w-full min-h-[800px] relative"
              />

              {/* Overlay loading state while embedded widget is loading */}
              {!embeddedState.isReady && !embeddedState.error && (
                <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
                  <RoofleLoader type="embedded" />
                </div>
              )}

              {/* Overlay error state if embedded widget failed */}
              {embeddedState.error && (
                <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
                  <RoofleError
                    type="embedded"
                    error={embeddedState.error}
                    onRetry={retryEmbedded}
                    retryCount={embeddedState.retryCount}
                    maxRetries={MAX_RETRIES}
                  />
                </div>
              )}
            </div>

            {/* Fallback content - show if embedded widget has error */}
            {embeddedState.error && (
              <div className="mt-8">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                  <p className="text-blue-800">
                    💡 You can also use our slideout quote tool - look for the widget that appears on the side of your screen, or try the direct options below.
                  </p>
                </div>

                {/* Alternative Access Methods */}
                <div className="mt-8 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Need Help Getting Your Quote?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href="tel:888-422-5476"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        📞 Call (888) 665-3994
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        📧 Contact Form
                      </Link>
                      <a
                        href="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                      >
                        🔗 Direct Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information - always show */}
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
