"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SignUpStep2Page() {
  const [formData, setFormData] = useState({
    gender: "",
    dateOfBirth: "",
    countryCode: "+234",
    phoneNumber: "",
    aboutYourself: "",
  })

  const [selectedCountry, setSelectedCountry] = useState({
    flag: "🇳🇬",
    code: "+234",
    name: "Nigeria",
  })

  const countries = [
    { flag: "🇳🇬", code: "+234", name: "Nigeria" },
    { flag: "🇺🇸", code: "+1", name: "USA" },
    { flag: "🇬🇧", code: "+44", name: "UK" },
    { flag: "🇬🇭", code: "+233", name: "Ghana" },
    { flag: "🇦🇺", code: "+61", name: "Australia" },
    { flag: "🇨🇳", code: "+86", name: "China" },
    { flag: "🇧🇪", code: "+32", name: "Belgium" },
    { flag: "🇿🇦", code: "+27", name: "South Africa" },
    { flag: "🇮🇪", code: "+353", name: "Ireland" },
    { flag: "🇷🇺", code: "+7", name: "Russia" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCountryChange = (value: string) => {
    const country = countries.find((c) => c.code === value)
    if (country) {
      setSelectedCountry(country)
      setFormData((prev) => ({
        ...prev,
        countryCode: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Step 2 form submitted:", formData)
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1024&width=720"
            alt="Happy renters playing cards"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-16 left-12 text-white max-w-sm">
          <h1 className="text-3xl font-bold mb-4 leading-tight">Trusted By Thousands of Happy Renters</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-white text-sm leading-relaxed whitespace-nowrap">
            Rated 5 stars on Trustpilot for safety, ease, and great results.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col">
        <div className="p-8 pb-0">
          <div className="inline-flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <Link href="/signup" className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-800 transform rotate-45 relative">
                  <div className="absolute inset-1 bg-white transform -rotate-45"></div>
                </div>
                <span className="text-xl font-medium text-gray-800">Holmee</span>
              </div>
            </div>

            <div className="text-center space-y-2 mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Please Tell Us More About You</h1>
              <p className="text-gray-500 text-sm">
                Help us get to know you, so we can find a space (and housemates) that actually get you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-2 block">
                  Gender
                </Label>
                <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                    <SelectValue placeholder="Select gender" className="text-gray-400" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-2 block">
                  Date of Birth
                </Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                  Number phone
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Select onValueChange={handleCountryChange} defaultValue="+234">
                      <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0 pl-3 pr-1 py-3 h-full">
                        <div className="flex items-center gap-1">
                          <span className="text-lg">{selectedCountry.flag}</span>
                          <span className="text-sm text-gray-600">{selectedCountry.code}</span>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm">{country.code}</span>
                              <span className="text-sm text-gray-600">{country.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="h-5 w-px bg-gray-300 ml-1"></div>
                  </div>

                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    placeholder="Enter your number phone"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full pl-24 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="aboutYourself" className="text-sm font-medium text-gray-700 mb-2 block">
                  Tell Us a Bit About Yourself
                </Label>
                <Textarea
                  id="aboutYourself"
                  name="aboutYourself"
                  placeholder="Share your hobbies, lifestyle, or what you enjoy at home"
                  value={formData.aboutYourself}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent min-h-[100px] resize-none placeholder:text-gray-400"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6"
              >
                Start Exploring Holmee
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/signin" className="font-medium text-orange-600 hover:text-orange-700">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <Link href="/privacy-policy" className="text-gray-700 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-gray-700 hover:underline">
                  T&Cs
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
