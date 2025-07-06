"use client"

import Script from "next/script"
import { useEffect, useRef } from "react"

interface RoofleScriptProps {
  type: 'slideout' | 'embedded'
  widgetId: string
  onLoad?: () => void
  onError?: (error: any) => void
  onReady?: () => void
  timeout?: number
}

export default function RoofleScript({ 
  type, 
  widgetId, 
  onLoad, 
  onError, 
  onReady,
  timeout = 15000 // 15 second timeout
}: RoofleScriptProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isInitializedRef = useRef(false)
  const scriptLoadedRef = useRef(false)

  const scriptSrc = type === 'slideout' 
    ? `https://app.roofle.com/roof-quote-pro-widget.js?id=${widgetId}`
    : `https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=${widgetId}`

  // Enhanced logging function
  const log = (message: string, data?: any) => {
    console.log(`[Roofle ${type.toUpperCase()}] ${message}`, data !== undefined ? data : '')
  }

  const logError = (message: string, error?: any) => {
    console.error(`[Roofle ${type.toUpperCase()} ERROR] ${message}`, error !== undefined ? error : '')
  }

  // Clear timeout helper
  const clearInitTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Enhanced embedded widget initialization with multiple strategies
  const initializeEmbeddedWidget = async () => {
    if (isInitializedRef.current) {
      log('Widget already initialized, skipping')
      return
    }

    log('Starting embedded widget initialization...')

    try {
      // Strategy 1: Check for RoofQuotePro global
      if (typeof window !== 'undefined' && (window as any).RoofQuotePro) {
        log('Found RoofQuotePro global object')
        
        // Try different initialization methods
        const roofle = (window as any).RoofQuotePro
        
        // Method 1: init with container ID
        if (typeof roofle.init === 'function') {
          log('Trying RoofQuotePro.init() method')
          await roofle.init({
            containerId: 'roof-quote-pro-embedded',
            widgetId: widgetId
          })
          isInitializedRef.current = true
          log('Successfully initialized with init() method')
          onReady?.()
          return
        }
        
        // Method 2: render method
        if (typeof roofle.render === 'function') {
          log('Trying RoofQuotePro.render() method')
          await roofle.render('roof-quote-pro-embedded', { widgetId })
          isInitializedRef.current = true
          log('Successfully initialized with render() method')
          onReady?.()
          return
        }
        
        // Method 3: create method
        if (typeof roofle.create === 'function') {
          log('Trying RoofQuotePro.create() method')
          await roofle.create({
            container: '#roof-quote-pro-embedded',
            id: widgetId
          })
          isInitializedRef.current = true
          log('Successfully initialized with create() method')
          onReady?.()
          return
        }

        logError('RoofQuotePro object found but no valid initialization method', roofle)
      }

      // Strategy 2: Check for widget-specific globals
      const widgetGlobal = (window as any)[`roofle_${widgetId}`]
      if (widgetGlobal && typeof widgetGlobal.init === 'function') {
        log('Found widget-specific global, initializing...')
        await widgetGlobal.init('roof-quote-pro-embedded')
        isInitializedRef.current = true
        log('Successfully initialized with widget-specific global')
        onReady?.()
        return
      }

      // Strategy 3: Check if widget auto-initialized
      const container = document.getElementById('roof-quote-pro-embedded')
      if (container && container.children.length > 0) {
        log('Widget appears to have auto-initialized')
        isInitializedRef.current = true
        onReady?.()
        return
      }

      // Strategy 4: Manual DOM injection (last resort)
      log('Attempting manual DOM injection as fallback')
      if (container) {
        const iframe = document.createElement('iframe')
        iframe.src = `https://app.roofle.com/widget/${widgetId}`
        iframe.style.width = '100%'
        iframe.style.height = '800px'
        iframe.style.border = 'none'
        container.appendChild(iframe)
        isInitializedRef.current = true
        log('Successfully created manual iframe fallback')
        onReady?.()
        return
      }

      throw new Error('All initialization strategies failed')

    } catch (error) {
      logError('Failed to initialize embedded widget', error)
      onError?.(error)
    }
  }

  const handleLoad = () => {
    log('Script loaded successfully')
    scriptLoadedRef.current = true
    onLoad?.()

    if (type === 'embedded') {
      // Start initialization process
      initializeEmbeddedWidget()
    } else {
      // Slideout widget should initialize automatically
      log('Slideout widget loaded, checking for auto-initialization...')
      
      // Give slideout widget time to initialize
      setTimeout(() => {
        // Check if slideout widget is visible/active
        const slideoutElements = document.querySelectorAll('[class*="roofle"], [id*="roofle"]')
        if (slideoutElements.length > 0) {
          log('Slideout widget appears to be active')
          isInitializedRef.current = true
          onReady?.()
        } else {
          log('Slideout widget may not have initialized properly')
          // Still call onReady as slideout widgets are less predictable
          isInitializedRef.current = true
          onReady?.()
        }
      }, 1000)
    }
  }

  const handleError = (error: any) => {
    logError('Script failed to load', error)
    clearInitTimeout()
    
    // Enhanced error information
    const enhancedError = {
      originalError: error,
      scriptSrc,
      widgetId,
      type,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }
    
    onError?.(enhancedError)
  }

  // Set up timeout for initialization
  useEffect(() => {
    log(`Setting up ${timeout}ms timeout for widget initialization`)
    
    timeoutRef.current = setTimeout(() => {
      if (!isInitializedRef.current) {
        const timeoutError = {
          type: 'TIMEOUT',
          message: `Widget failed to initialize within ${timeout}ms`,
          scriptLoaded: scriptLoadedRef.current,
          widgetId,
          scriptSrc,
          timestamp: new Date().toISOString()
        }
        
        logError('Widget initialization timeout', timeoutError)
        onError?.(timeoutError)
      }
    }, timeout)

    return () => clearInitTimeout()
  }, [timeout, widgetId, type])

  // Remove CSP restrictions and add debugging
  useEffect(() => {
    log('Checking for CSP restrictions...')
    
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
    if (cspMeta) {
      log('Found CSP meta tag, removing...', cspMeta.getAttribute('content'))
      cspMeta.remove()
    } else {
      log('No CSP meta tag found')
    }

    // Log current domain and check for CORS issues
    log('Current domain:', window.location.origin)
    log('Script source:', scriptSrc)
    
    // Test network connectivity to Roofle
    fetch('https://app.roofle.com/', { mode: 'no-cors' })
      .then(() => log('Network connectivity to app.roofle.com appears OK'))
      .catch(error => logError('Network connectivity test failed', error))

  }, [scriptSrc])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInitTimeout()
      log('Component unmounting, cleaning up...')
    }
  }, [])

  return (
    <Script
      id={`roofle-${type}-script-${widgetId}`}
      src={scriptSrc}
      strategy="afterInteractive"
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}
