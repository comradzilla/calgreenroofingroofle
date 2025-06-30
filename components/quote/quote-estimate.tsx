"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

export default function QuoteEstimate() {
  const [selectedMaterial, setSelectedMaterial] = useState("standard")
  const [showDetails, setShowDetails] = useState(false)

  // Mock pricing data
  const materials = {
    economy: {
      name: "Economy Shingles",
      pricePerSqFt: 4.5,
      warranty: "15 years",
      description: "Basic 3-tab asphalt shingles, suitable for budget-conscious homeowners.",
    },
    standard: {
      name: "Standard Architectural Shingles",
      pricePerSqFt: 5.75,
      warranty: "30 years",
      description: "Dimensional shingles with improved durability and aesthetic appeal.",
    },
    premium: {
      name: "Premium Designer Shingles",
      pricePerSqFt: 7.25,
      warranty: "Lifetime",
      description: "High-end architectural shingles with enhanced durability and distinctive appearance.",
    },
  }

  const roofArea = 2450 // sq ft, matching the value from RoofImageDisplay

  const calculateEstimate = (materialType: keyof typeof materials) => {
    const material = materials[materialType]
    const baseCost = roofArea * material.pricePerSqFt
    const laborCost = roofArea * 2.5 // Assuming $2.50 per sq ft for labor
    const disposalFee = 850
    const permitFee = 500

    return {
      materialCost: baseCost,
      laborCost,
      disposalFee,
      permitFee,
      total: baseCost + laborCost + disposalFee + permitFee,
    }
  }

  const estimate = calculateEstimate(selectedMaterial as keyof typeof materials)

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-6">Your Estimated Roof Replacement Cost</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {(Object.keys(materials) as Array<keyof typeof materials>).map((key) => {
            const material = materials[key]
            const isSelected = selectedMaterial === key

            return (
              <div
                key={key}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  isSelected ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedMaterial(key)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{material.name}</h4>
                  {isSelected && <Check className="text-primary h-5 w-5" />}
                </div>
                <p className="text-2xl font-bold mb-1">
                  ${material.pricePerSqFt.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500">/sq ft</span>
                </p>
                <p className="text-sm text-gray-600">Warranty: {material.warranty}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold">Estimated Total</h4>
            <p className="text-3xl font-bold text-primary">${estimate.total.toLocaleString()}</p>
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Cost Breakdown"}
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>

          {showDetails && (
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Materials ({materials[selectedMaterial as keyof typeof materials].name})
                </span>
                <span>${estimate.materialCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Labor</span>
                <span>${estimate.laborCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Disposal Fee</span>
                <span>${estimate.disposalFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Permits & Inspection</span>
                <span>${estimate.permitFee.toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-medium">
                <span>Total Estimate</span>
                <span>${estimate.total.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
            Schedule a Professional Inspection
          </Button>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
            Download Estimate as PDF
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">
            This is an estimate based on satellite imagery and average costs in your area. Final pricing may vary based
            on a professional inspection.
          </p>
        </div>
      </div>
    </div>
  )
}
