import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Bed,
  Bath,
  Wifi,
  Shield,
  Dumbbell,
  Ruler,
  Home,
  Users,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"
import { Inter } from "next/font/google"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 transform rotate-45 relative">
            <div className="absolute inset-1 bg-white transform -rotate-45"></div>
          </div>
          <span className="text-xl font-medium text-gray-800">Holmee</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Search Room
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            List a Room
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin">
              <button className="text-gray-600 hover:text-gray-800 px-4 py-2">Login</button>
          </Link>
          <Link href="/signup">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background with HOLMEE text */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center w-full px-4"
            style={{
              background: "linear-gradient(to right, rgba(249, 250, 251, 0.8) 0%, rgba(243, 244, 246, 0.4) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "clamp(16rem, 30vw, 40rem)",
              fontWeight: "bold",
              letterSpacing: "-0.02em",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            Holmee
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find a Space That Fits
            <br />
            Your Lifestyle
          </h1>

          <p className="text-lg text-gray-600 mb-12 max-w-md mx-auto">
            Tell us what you need and we'll match you with the right space.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 flex items-center gap-3">
            <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <Input
                placeholder="Budget friendly flat in Leeds with steady light..."
                className="border-0 text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 px-6 py-4 text-base"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
              Find Space
            </Button>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full">
              Room-sharing
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full">
              Roomies
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full">
              Stories
            </Button>
          </div>
        </div>
      </main>

      {/* Popular Locations Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Locations</h2>
            <button className="text-gray-500 hover:text-gray-700">Explore more</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Spacious Double Room with Balcony"
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white/70 text-gray-700 hover:bg-white/80">Verified ✓</Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1">Spacious Double Room with Balcony</h3>
                <p className="text-gray-600 text-sm mb-3">Ikeja GRA, Lagos</p>

                <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>1 bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>1 bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Dumbbell className="w-4 h-4" />
                    <span>Indoor gym</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    <span>700 sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">₦750,000</span>
                    <span className="text-gray-600"> /mo</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Short Term</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Spacious Double Room with Balcony"
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white/70 text-gray-700 hover:bg-white/80">Verified ✓</Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1">Spacious Double Room with Balcony</h3>
                <p className="text-gray-600 text-sm mb-3">Gwagwalada, Abuja</p>

                <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>2 bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>2 bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4" />
                    <span>Free wifi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    <span>1200 sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">₦500,000</span>
                    <span className="text-gray-600"> /mo</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Room-sharing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Luxury Room in Modern Apartment"
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white/70 text-gray-700 hover:bg-white/80">Verified ✓</Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1">Luxury Room in Modern Apartment</h3>
                <p className="text-gray-600 text-sm mb-3">Nar Haramony, Port Harcourt</p>

                <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>3 bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>2 bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>24/7 security</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    <span>1750 sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">₦30,550,000</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">For Sale</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Holmee Works Section */}
      <section className="pt-20 px-6 bg-gradient-to-b from-[#292929] via-black to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-[#292929] text-white border border-gray-700 px-5 py-1.5 text-sm rounded-md">
              Live Better Together 🏠
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How Holmee Works</h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Because finding the right place, and the right people shouldn't feel like guesswork. Here's how we make
            shared living smarter, safer, and a little more human.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center pb-20">
            <div className="lg:col-span-3">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Roommates enjoying shared living"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* Feature 1 */}
              <Card className="bg-[#0F0F0F] border border-gray-800 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 w-full h-[140px]">
                <CardContent className="py-10 px-8 h-full flex items-center">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Find Your Ideal Space</h3>
                      <p className="text-gray-300 text-sm">
                        Tell us what home means to you: a spacious bedroom, luxury furniture, or just a cozy balcony.
                        Our smart search understands your needs beyond location and price.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-[#0F0F0F] border border-gray-800 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 w-full h-[140px]">
                <CardContent className="py-10 px-8 h-full flex items-center">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Connect with Roommates</h3>
                      <p className="text-gray-300 text-sm">
                        Shared living only works when the people do. Holmee makes it easy to connect with potential
                        flatmates, see who they are, and what they value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-[#0F0F0F] border border-gray-800 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 w-full h-[140px]">
                <CardContent className="py-10 px-8 h-full flex items-center">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">Stay Protected</h3>
                      <p className="text-gray-300 text-sm">
                        We built Holmee with trust at the core. Listings are verified, profiles are real, and your
                        bookings are backed by safeguards that put your safety first.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white text-gray-700 border border-gray-200 px-4 py-2 text-sm rounded-lg shadow-md">
              What People Are Saying 📢
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real Spaces. Real Stories.</h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            Hear from people who found homes that truly fit their lives, with no stress, no endless searching.
          </p>

          {/* Large Image Placeholder */}
          <div className="w-full max-w-6xl mx-auto">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Customer testimonials and reviews"
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-50 text-orange-600 border border-orange-200 px-4 py-2 text-sm rounded-lg">
              FAQs About Finding Your Space 🏠
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Got questions? We've got answers.</h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            Everything you need to know about how it works, what to expect, and how we help you find the right fit.
          </p>

          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg border border-gray-200 px-8 py-2"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-8">
                How does the room matching work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left pb-8">
                Our smart matching algorithm considers your preferences, lifestyle, budget, and location requirements to
                connect you with the most suitable spaces and roommates. We analyze compatibility factors to ensure the
                best possible matches.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg border border-gray-200 px-8 py-2"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-8">
                Can I search for spaces with a phrase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left pb-8">
                Yes! Our advanced search allows you to use natural language phrases like "budget-friendly flat with good
                lighting" or "pet-friendly apartment near university." Our AI understands context and finds relevant
                matches.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg border border-gray-200 px-8 py-2"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-8">
                Do I have to pay to use the platform?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left pb-8">
                Basic searching and browsing is completely free. We only charge a small service fee when you
                successfully book a space through our platform. This helps us maintain quality listings and provide
                ongoing support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg border border-gray-200 px-8 py-2"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-8">
                What kind of places can I find?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left pb-8">
                We offer a wide variety of accommodations including shared apartments, private rooms, studio apartments,
                co-living spaces, and short-term rentals. From budget-friendly options to luxury accommodations across
                different neighborhoods.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg border border-gray-200 px-8 py-2"
            >
              <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-8">
                Is Holmee available in all Nigerian cities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-left pb-8">
                We're currently available in major Nigerian cities including Lagos, Abuja, Port Harcourt, Kano, and
                Ibadan. We're rapidly expanding to more cities based on demand. Check our coverage map for the most
                up-to-date information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-3xl px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-white transform rotate-45 relative">
                    <div className="absolute inset-1 bg-gray-800 transform -rotate-45"></div>
                  </div>
                  <span className="text-xl font-medium text-white">Holmee</span>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Follow us and never miss an update on the latest housing trends, tourism, and insights.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Menu */}
              <div>
                <h3 className="text-white font-medium mb-6">Menu</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      How-it-Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-medium mb-6">Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Ebook & Guide
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-medium mb-6">Contact</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:support@holmee.com"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      support@holmee.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+234-000-0000" className="text-gray-300 hover:text-white transition-colors text-sm">
                      +234-000-0000
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Book a Call
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-300 text-sm">Lagos, Nigeria, NG</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">© 2025 Holmee. All rights reserved.</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
