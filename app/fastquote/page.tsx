import type { Metadata } from "next"
import Script from "next/script"
import FastQuoteClientPage from "./FastQuoteClientPage"

export const metadata: Metadata = {
  title: "Fast Roof Quote | Cal Green Roofing",
  description:
    "Get an instant roofing quote in seconds. Simply enter your address and see your estimated roof replacement cost.",
}

export default function FastQuotePage() {
  return (
    <>
      {/* Slideout RoofQuote PRO® Script - Goes in head */}
      <Script
        src="https://app.roofle.com/roof-quote-pro-widget.js?id=TyenXTFKs3GstadLv13T3"
        strategy="afterInteractive"
        async
      />
      
      <FastQuoteClientPage />
    </>
  )
}
