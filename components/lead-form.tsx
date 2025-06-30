"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function LeadForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    projectType: "",
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = ["Roof Repair", "Roof Replacement", "Roof Installation", "Roof Maintenance", "Other"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    // Here you would typically send the data to your backend or CRM
  }

  const selectProjectType = (type: string) => {
    setFormState((prev) => ({ ...prev, projectType: type }))
    setIsDropdownOpen(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mb-4">
          <Check className="text-white w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#2e7d32] mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request and will contact you shortly to discuss your roofing project.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#2e7d32] mb-4">Request A Callback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="firstName" className="text-gray-700">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>

        <div>
          <Label htmlFor="lastName" className="text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber" className="text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formState.phoneNumber}
            onChange={handleChange}
            required
            className="w-full mt-1"
          />
        </div>

        <div className="relative">
          <Label htmlFor="projectType" className="text-gray-700">
            Select Roofing Project Type
          </Label>
          <div
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className={formState.projectType ? "text-gray-900" : "text-gray-400"}>
              {formState.projectType || "Select Roofing Project Type"}
            </span>
            <svg
              className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
              {projectTypes.map((type) => (
                <div
                  key={type}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center"
                  onClick={() => selectProjectType(type)}
                >
                  {type === formState.projectType && <Check className="h-4 w-4 text-[#2e7d32] mr-2" />}
                  <span className={type === formState.projectType ? "font-medium" : ""}>{type}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full bg-[#c84a20] hover:bg-[#b33d19] text-white">
          SUBMIT
        </Button>
      </form>
    </div>
  )
}
