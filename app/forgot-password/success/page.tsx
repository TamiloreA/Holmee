"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PasswordResetSuccessPage() {
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
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md text-center">
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-800 transform rotate-45 relative">
                  <div className="absolute inset-1 bg-white transform -rotate-45"></div>
                </div>
                <span className="text-xl font-medium text-gray-800">Holmee</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="w-48 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">Success create new password</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your new password has been successfully created! Keep it strong and memorable to ensure your account's
                security.
              </p>
            </div>

            <Link href="/signin">
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                Begin to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
