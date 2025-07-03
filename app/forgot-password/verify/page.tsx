"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VerificationCodePage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(40)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("OTP submitted:", otp.join(""))
    window.location.href = "/forgot-password/success"
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification code</h1>
              <p className="text-gray-500 text-sm mb-6">
                We have sent the OTP code to jaronsatunde@gmail.com for verification process.
              </p>
            </div>

            <div className="flex gap-2 mb-8">
              <div className="flex-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="flex-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center gap-3 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-full focus:border-gray-900 focus:outline-none"
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <span className="text-sm text-gray-600">{formatTime(timer)}</span>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
