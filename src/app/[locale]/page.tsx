"use client"

import { useEffect, useState, useRef } from "react"
import LoadingAnimation from "@/components/loading-animation"
import DynamicBackground from "@/MyComponents/dynamic-background"
import ScrollContent from "@/MyComponents/scrollContent"
import { Link } from "@/i18n/navigation"
import {

  Mail,
  MapPin,
  Phone,
  ChevronDown,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"

// Import shadcn components
import { Button } from "@/components/ui/button"


import { motion } from "framer-motion"
import { Footer } from "@/MyComponents/Footer"
import Navbar from "@/MyComponents/navbar"
import KnozSection from "@/MyComponents/KnozSection"
import OrionSection from "@/MyComponents/OrionSection"
import MergerBenefitsSection from "@/MyComponents/MergerBenefitsSection"
import Contact from "@/MyComponents/Contact"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [activeHeadline, setActiveHeadline] = useState(0)
  const headlines = [
    "Building the future together",
    "Two visions, one powerful mission",
    "Excellence in construction, redefined",
  ]
  const heroRef = useRef(null)
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)
  const [sectionInView, setSectionInView] = useState("")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Change headline based on scroll position
      const scrollPosition = window.scrollY
      if (scrollPosition < 300) {
        setActiveHeadline(0)
      } else if (scrollPosition < 600) {
        setActiveHeadline(1)
      } else {
        setActiveHeadline(2)
      }

      // Make navbar solid after scrolling
      setIsNavbarSolid(scrollPosition > 50)

      // Determine which section is in view
      if (scrollPosition < window.innerHeight) {
        setSectionInView("hero")
      } else if (scrollPosition < window.innerHeight * 2) {
        setSectionInView("knoz")
      } else if (scrollPosition < window.innerHeight * 3) {
        setSectionInView("orion")
      } else {
        setSectionInView("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Headline rotation timer
    const headlineTimer = setInterval(() => {
      if (window.scrollY < 100) {
        // Only auto-rotate when near top
        setActiveHeadline((prev) => (prev + 1) % headlines.length)
      }
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearInterval(headlineTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  if (isLoading) {
    return <LoadingAnimation />
  }

  const parallaxOffset = scrollY * 0.5
  const opacityValue = Math.max(0, 1 - scrollY / 700)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <DynamicBackground>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center"
        style={{
          opacity: opacityValue,
        }}
      >
        {/* Floating particles/elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: Math.random() * 0.5 + 0.1,
                y: [0, Math.random() * 20 - 10],
              }}
              transition={{
                y: {
                  duration: 2 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
              }}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(8px)",
              }}
            />
          ))}
        </div>
        {/* Navbar */}
          <Navbar />

        {/* Hero Content */}
        <motion.div
          className="container mx-auto px-6 z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="overflow-hidden h-32 mb-6">
            {headlines.map((headline, index) => (
              <motion.h1
                key={index}
                className="text-5xl md:text-7xl font-bold text-white transition-all duration-1000 absolute left-0 right-0"
                style={{
                  opacity: activeHeadline === index ? 1 : 0,
                  transform: `translateY(${activeHeadline === index ? 0 : 100}px)`,
                }}
                variants={fadeIn}
              >
                {headline}
              </motion.h1>
            ))}
          </div>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 transform transition-all duration-1000"
            style={{
              opacity: opacityValue,
              transform: `translateY(${parallaxOffset * 0.2}px)`,
            }}
            variants={fadeIn}
          >
            A strategic merger of two construction industry leaders, creating unparalleled expertise and innovation in
            building solutions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" variants={fadeIn}>
            <Button className="px-8 py-6 rounded-full font-bold flex items-center gap-2 bg-white text-black hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Discover Our Vision <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 border-2 border-white text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all shadow-lg"
            >
              Our Projects
            </Button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div className="flex justify-center gap-6 mt-8" variants={fadeIn}>
            {[
              { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
              { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
              { icon: <Instagram className="h-5 w-5" />, name: "Instagram" },
              { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                aria-label={social.name}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
            transition: {
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              },
              opacity: { duration: 1, delay: 1 },
            },
          }}
        >
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </section>

      {/* Knoz Section */}
      <KnozSection />

      {/* Orion Section */}
     <OrionSection />

      <MergerBenefitsSection />

        {/* Contact Section */}
          <Contact />

      {/* Footerhere */}
      <Footer />
      
    </DynamicBackground>
  )
}

