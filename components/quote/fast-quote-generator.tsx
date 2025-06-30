"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import RoofImageDisplay from "@/components/quote/roof-image-display"
import QuoteEstimate from "@/components/quote/quote-estimate"

export default function FastQuoteGenerator() {
  const [address, setAddress] = useState("")
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!address.trim()) {
      setError("Please enter a valid address")
      return
    }

    setError("")
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setIsAddressSubmitted(true)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Enter your property address"
                className="pl-10 py-6 text-lg w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={isLoading || isAddressSubmitted}
              />
            </div>
            {!isAddressSubmitted && (
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white py-6 px-8 text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Get Quote"}
              </Button>
            )}
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        {isAddressSubmitted ? (
          <div className="space-y-8">
            <RoofImageDisplay address={address} />
            <QuoteEstimate />
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-semibold">Enter your address to get started</h3>
              <p className="text-gray-600 mt-2">
                We'll use satellite imagery to measure your roof and provide an estimate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
              {[
                {
                  title: "Accurate Measurements",
                  description: "We use satellite imagery to precisely measure your roof's dimensions",
                },
                {
                  title: "Instant Estimate",
                  description: "Get a ballpark figure for your roof replacement in seconds",
                },
                {
                  title: "No Obligation",
                  description: "Free estimate with no commitment required",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
