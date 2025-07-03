"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateNewPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Create new password form submitted:", formData)
    window.location.href = "/forgot-password/verify"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1024&width=720"
            alt="Modern living room with people"
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

      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        <div className="p-8 pb-0">
          <div className="inline-flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <Link href="/forgot-password" className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-800 transform rotate-45 relative">
                  <div className="absolute inset-1 bg-white transform -rotate-45"></div>
                </div>
                <span className="text-xl font-medium text-gray-800">Holmee</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Create new password</h1>
              <p className="text-gray-500 text-sm mb-6">
                Create a new password to secure your account. Make sure the password is strong and easy to remember.
              </p>
            </div>

            <div className="flex gap-2 mb-8">
              <div className="flex-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="flex-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                  New password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    required
                    placeholder="Enter your new password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-6"
              >
                Confirm
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
