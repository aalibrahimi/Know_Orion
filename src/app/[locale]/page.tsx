"use client"

import { useEffect, useState, useRef } from "react"
import LoadingAnimation from "@/components/loading-animation"
import DynamicBackground from "@/MyComponents/dynamic-background"
import ScrollContent from "@/MyComponents/scrollContent"
import { Link } from "@/i18n/navigation"
import {
  Award,
  Building2,
  Mail,
  MapPin,
  Phone,
  Users,
  ChevronDown,
  ArrowRight,
  Zap,
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Clock,
  CheckCircle,
  Globe,
  BarChart,
  Download,
  PieChart,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import GradientText from "@/MyComponents/GradientText"

// Import shadcn components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

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
<div className="">
     
      </div>
  )
}
