"use client"

import Script from "next/script"
import { useEffect } from "react"

interface RoofleScriptProps {
  type: 'slideout' | 'embedded'
  widgetId: string
  onLoad?: () => void
  onError?: (error: any) => void
  onReady?: () => void
}

export default function RoofleScript({ 
  type, 
  widgetId, 
  onLoad, 
  onError, 
  onReady 
}: RoofleScriptProps) {
  const scriptSrc = type === 'slideout' 
    ? `https://app.roofle.com/roof-quote-pro-widget.js?id=${widgetId}`
    : `https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=${widgetId}`

  const handleLoad = () => {
    console.log(`Roofle ${type} widget script loaded`)
    onLoad?.()

    if (type === 'embedded') {
      // Initialize embedded widget after script loads
      try {
        // Check if RoofQuotePro is available
        if (typeof window !== 'undefined' && (window as any).RoofQuotePro) {
          (window as any).RoofQuotePro.init({
            containerId: 'roof-quote-pro-embedded',
            widgetId: widgetId
          })
          onReady?.()
        } else {
          // Fallback: try again after a short delay
          setTimeout(() => {
            if ((window as any).RoofQuotePro) {
              (window as any).RoofQuotePro.init({
                containerId: 'roof-quote-pro-embedded',
                widgetId: widgetId
              })
              onReady?.()
            }
          }, 100)
        }
      } catch (error) {
        console.error('Failed to initialize embedded widget:', error)
        onError?.(error)
      }
    } else {
      // Slideout widget initializes automatically
      onReady?.()
    }
  }

  const handleError = (error: any) => {
    console.error(`Roofle ${type} widget failed:`, error)
    onError?.(error)
  }

  // Remove CSP restrictions that might block Roofle
  useEffect(() => {
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
    if (cspMeta) {
      cspMeta.remove()
    }
  }, [])

  return (
    <Script
      id={`roofle-${type}-script`}
      src={scriptSrc}
      strategy="afterInteractive"
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}
