"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

const projectTypes = ["Roof Repair", "Roof Replacement", "Roof Installation", "Roof Maintenance", "Other"]

export default function LeadForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    message: "",
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // This is where you would integrate with a form service
      // Example with fetch:
      // const response = await fetch('/api/submit-lead', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formState)
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", formState)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectProjectType = (type: string) => {
    setFormState((prev) => ({ ...prev, projectType: type }))
    setIsDropdownOpen(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
          <Check className="text-white w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request and will contact you shortly to discuss your roofing project.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Request A Callback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              aria-required="true"
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
              aria-required="true"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full mt-1"
            aria-required="true"
            placeholder="your@email.com"
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
            aria-required="true"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="relative">
          <Label htmlFor="projectType" className="text-gray-700">
            Select Roofing Project Type
          </Label>
          <div
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            role="combobox"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-labelledby="projectType"
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
            <ul
              className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60"
              role="listbox"
            >
              {projectTypes.map((type) => (
                <li
                  key={type}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center"
                  onClick={() => selectProjectType(type)}
                  role="option"
                  aria-selected={type === formState.projectType}
                >
                  {type === formState.projectType && <Check className="h-4 w-4 text-primary mr-2" aria-hidden="true" />}
                  <span className={type === formState.projectType ? "font-medium" : ""}>{type}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>
    </div>
  )
}
