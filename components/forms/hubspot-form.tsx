"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function HubspotForm() {
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This will run after the script has loaded via Next.js Script component
    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[480px] mx-auto w-full min-h-[400px]">
      <Script
        id="hubspot-form-script"
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt && formContainerRef.current) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "46287623",
              formId: "59626411-1555-48e1-9b0c-393446963b03",
              target: "#hubspot-form-container",
            })
          }
        }}
      />
      <div id="hubspot-form-container" ref={formContainerRef}></div>
    </div>
  )
}

// Add TypeScript declaration for the HubSpot global object
declare global {
  interface Window {
    hbspt: any
  }
}
