import type { Metadata } from "next"
import FastQuoteTestPageClient from "./FastQuoteTestPageClient"

export const metadata: Metadata = {
  title: "Fast Quote Test | CALGREEN ROOFING",
  description: "Testing Roofle widget implementation with comprehensive CSP analysis",
}

export default function FastQuoteTestPage() {
  return <FastQuoteTestPageClient />
}
