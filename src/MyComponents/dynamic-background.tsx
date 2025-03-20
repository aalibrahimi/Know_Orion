"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface DynamicBackgroundProps {
  children: React.ReactNode
}

export default function DynamicBackground({ children }: DynamicBackgroundProps) {
  const [activeSection, setActiveSection] = useState<number>(0)
  const backgroundRef = useRef<HTMLDivElement>(null)

  // Create refs for each section with threshold to determine when it's in view
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 })
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 })
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 })

  // Background images
  const backgrounds = [
    "/placeholder.svg?height=1080&width=1920", // Knoz building (replace with actual image)
    "/placeholder.svg?height=1080&width=1920", // Orion building (replace with actual image)
    "/placeholder.svg?height=1080&width=1920", // Combined logos (replace with actual image)
  ]

  // Company text content
  const companyContent = [
    {
      title: "Knoz Al Najjah",
      subtitle: "Iraq's Leading Construction Company",
      description:
        "Founded in 2010, delivering complex construction projects across multiple sectors including commercial, residential, energy, and infrastructure.",
    },
    {
      title: "Orion Engineering Consultants",
      subtitle: "Excellence in Architecture & Engineering",
      description:
        "Providing comprehensive and specialist services of the highest quality in Architecture, Engineering, Planning, Construction Supervision and Project Management.",
    },
    {
      title: "Two Companies, One Vision",
      subtitle: "Engineering & Construction Excellence",
      description: "Combining decades of experience to deliver exceptional projects across the Middle East and Iraq.",
    },
  ]

  // Update active section based on which section is in view
  useEffect(() => {
    if (section1InView) setActiveSection(0)
    else if (section2InView) setActiveSection(1)
    else if (section3InView) setActiveSection(2)
  }, [section1InView, section2InView, section3InView])

  // Apply parallax effect to background
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Dynamic background */}
      <div className="fixed inset-0 w-full h-full -z-10 transition-opacity duration-1000 ease-in-out">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            ref={backgroundRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: activeSection === index ? 1 : 0,
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Dynamic text content that changes with scroll */}
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-4">
        {companyContent.map((content, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ease-in-out absolute top-0 left-0 w-full
              ${activeSection === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-4">{content.subtitle}</h2>
            <p className="text-lg md:text-xl">{content.description}</p>
          </div>
        ))}
      </div>

      {/* Sections that trigger background changes */}
      <div className="relative z-0">
        {/* First section - Knoz */}
        <section
          ref={section1Ref}
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="h-screen"></div>
        </section>

        {/* Second section - Orion */}
        <section
          ref={section2Ref}
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="h-screen"></div>
        </section>

        {/* Third section - Combined */}
        <section
          ref={section3Ref}
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="h-screen"></div>
        </section>

        {/* Main content */}
        <div className="bg-white relative z-10">{children}</div>
      </div>
    </div>
  )
}

