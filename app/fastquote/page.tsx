import type { Metadata } from "next"
import FastQuoteClientPage from "./FastQuoteClientPage"

export const metadata: Metadata = {
  title: "Fast Roof Quote | CALGREEN ROOFING",
  description:
    "Get an instant roofing quote in seconds. Simply enter your address and see your estimated roof replacement cost.",
}

export default function FastQuotePage() {
  return <FastQuoteClientPage />
}
