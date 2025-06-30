"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function HubspotContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This will run after the script has loaded via Next.js Script component
    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <Script
        id="hubspot-contact-form-script"
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt && formContainerRef.current) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "46287623",
              formId: "8f6da17f-857a-476c-b792-b2c92f31660c",
              target: "#hubspot-contact-form-container",
            })
          }
        }}
      />
      <div id="hubspot-contact-form-container" ref={formContainerRef}></div>
    </div>
  )
}

// Add TypeScript declaration for the HubSpot global object
declare global {
  interface Window {
    hbspt: any
  }
}
