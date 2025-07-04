"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { useState, useCallback } from "react"
import RoofleScript from "@/components/roofle/RoofleScript"
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
  const [slideoutState, setSlideoutState] = useState<WidgetState>({
    isLoaded: false,
    isReady: false,
    error: null,
    retryCount: 0
  })

  const [embeddedState, setEmbeddedState] = useState<WidgetState>({
    isLoaded: false,
    isReady: false,
    error: null,
    retryCount: 0
  })

  const [slideoutKey, setSlideoutKey] = useState(0)
  const [embeddedKey, setEmbeddedKey] = useState(0)

  // Slideout widget handlers
  const handleSlideoutLoad = useCallback(() => {
    setSlideoutState(prev => ({ ...prev, isLoaded: true, error: null }))
  }, [])

  const handleSlideoutReady = useCallback(() => {
    setSlideoutState(prev => ({ ...prev, isReady: true }))
  }, [])

  const handleSlideoutError = useCallback((error: any) => {
    setSlideoutState(prev => ({ 
      ...prev, 
      error, 
      isLoaded: false, 
      isReady: false 
    }))
  }, [])

  const retrySlideout = useCallback(() => {
    if (slideoutState.retryCount < MAX_RETRIES) {
      setSlideoutState(prev => ({ 
        ...prev, 
        retryCount: prev.retryCount + 1,
        error: null,
        isLoaded: false,
        isReady: false
      }))
      setSlideoutKey(prev => prev + 1) // Force re-render of script
    }
  }, [slideoutState.retryCount])

  // Embedded widget handlers
  const handleEmbeddedLoad = useCallback(() => {
    setEmbeddedState(prev => ({ ...prev, isLoaded: true, error: null }))
  }, [])

  const handleEmbeddedReady = useCallback(() => {
    setEmbeddedState(prev => ({ ...prev, isReady: true }))
  }, [])

  const handleEmbeddedError = useCallback((error: any) => {
    setEmbeddedState(prev => ({ 
      ...prev, 
      error, 
      isLoaded: false, 
      isReady: false 
    }))
  }, [])

  const retryEmbedded = useCallback(() => {
    if (embeddedState.retryCount < MAX_RETRIES) {
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

  return (
    <>
      {/* Load Roofle slideout widget */}
      <RoofleScript
        key={`slideout-${slideoutKey}`}
        type="slideout"
        widgetId={WIDGET_ID}
        onLoad={handleSlideoutLoad}
        onReady={handleSlideoutReady}
        onError={handleSlideoutError}
      />

      {/* Load Roofle embedded widget */}
      <RoofleScript
        key={`embedded-${embeddedKey}`}
        type="embedded"
        widgetId={WIDGET_ID}
        onLoad={handleEmbeddedLoad}
        onReady={handleEmbeddedReady}
        onError={handleEmbeddedError}
      />

      <div className="min-h-screen bg-gray-50">
        <main className="py-8">
          <Container>
            {/* Primary Widget Container */}
            <div className="w-full max-w-6xl mx-auto mb-12">
              {/* Show loading state while embedded widget is loading */}
              {!embeddedState.isReady && !embeddedState.error && (
                <RoofleLoader type="embedded" />
              )}

              {/* Show error state if embedded widget failed */}
              {embeddedState.error && (
                <RoofleError
                  type="embedded"
                  error={embeddedState.error}
                  onRetry={retryEmbedded}
                  retryCount={embeddedState.retryCount}
                  maxRetries={MAX_RETRIES}
                />
              )}

              {/* Embedded widget container - only show when ready */}
              {embeddedState.isReady && (
                <div
                  id="roof-quote-pro-embedded"
                  className="w-full min-h-[800px]"
                />
              )}
            </div>

            {/* Show slideout loading indicator */}
            {slideoutState.isLoaded && !slideoutState.isReady && (
              <RoofleLoader type="slideout" />
            )}

            {/* Show slideout error if it failed */}
            {slideoutState.error && (
              <RoofleError
                type="slideout"
                error={slideoutState.error}
                onRetry={retrySlideout}
                retryCount={slideoutState.retryCount}
                maxRetries={MAX_RETRIES}
              />
            )}

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
                        📞 Call (888) 422-5476
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
