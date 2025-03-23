"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase, Building2, ChevronDown, Mail, MapPin, Menu, Phone, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoadingAnimation from "@/components/loading-animation"
import AnimatedText from "@/MyComponents/animated-text"
import DynamicBackground from "@/MyComponents/dynamic-background"
import FadeInSection from "@/MyComponents/fade-in-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  // <DynamicBackground>
    //   <h3>Home</h3>
    // </DynamicBackground>

  return (
  
  <div className="relative  min-h-screen flex flex-col">
    {/* im going to make the clear blending navbaar heree */}
   

        {/* full screen baackground image */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
          src="/cost_tracking.jpg"
          alt="cost tracking hehee"
          fill
          priority
          className="object-cover"
          >

          </Image>
          <header className="absolute top-0 left-0 right-0 z-50 w-full sticky ">
    <div className="container flex h-24 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-4xl font-bold text-white">
          <span >Knoz </span>
          <span className="text-white/70"> | </span>
          <span>Orion </span>
        </div>

        <div className="hidden md:Lblock text-lg font-light tracking-widere text-white/80">
          Builders Construct + Associates
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 ">
            <Link href="#about" className="text-lg font-medium text-white hover:text-white/80 transition-colors">About Us </Link>
            <Link href="#vision" className="text-lg font-medium text-white hover:text-white/80 transition-colors"> Vision</Link>
            <Link href="#services" className="text-lg font-medium text-white hover:text-white/80 transition-colors">Services</Link>
            <Link href="#projects" className="text-lg font-medium text-white hover:text-white/80 transition-colors">Projects </Link>
            <Link href="#contact" className="text-lg font-medium text-white hover:text-white/80 transition-colors"> Contact</Link>
      </nav>
    </div>
      {/* <button className="md:hidden text-white">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
         
      </button> */}
    </header>
    
        {/* Overlay with content */}
        <div className="absolute inset-0 bg-black/50">
          <div className="container relative h-full flex flex-col">
            {/* maain hero */}
              <div className="flex-1 flex flex-col justify center pt-24">
                <div className="max-w-3xl space-y-6 text white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Building a stronger future together
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-medium">Two industry leaders, one powerful vision</h2>
                  <h2 className="text-2xl md:text-3xl font-medium">The merger that transofrms construction</h2>
                </div>
              </div>


      
        {/* Service cards at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
                <div className="flex justify-center mb-4">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Commercial Construction</h3>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Residential Development</h3>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Project Management</h3>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/40 transition-colors text-white">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Sustainable Building</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Icon contacts at the bottom left */}
       <div className="absolute bottom-12 right-0  space-y-4 text-white">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <span>info@bc-a.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5" />
                <span>123 Construction Ave, Building City</span>
              </div>
            </div>
    </div>
  )
}

