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

// Import shadcn components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Footer } from "@/MyComponents/Footer"
import Navbar from "@/MyComponents/navbar"
import KnozSection from "@/MyComponents/KnozSection"
import OrionSection from "@/MyComponents/OrionSection"
import AnimatedText from "@/MyComponents/animated-text"
import MergerBenefitsSection from "@/MyComponents/MergerBenefitsSection"

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
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32 md:py-40 bg-gradient-to-b from-black/20 to-black/40">
        <ScrollContent
          contentID="contact_title"
          range={{ in: 2500, out: 3500 }}
          class="text-5xl font-bold mb-16 text-center w-full"
          direction="left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Contact Our Team</h2>
            <p className="text-lg text-gray-400">Let's build something extraordinary together</p>
          </motion.div>
        </ScrollContent>

        <div className="container mx-auto px-6 relative">
          {/* Center white card that appears when both sides meet */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white h-full w-full rounded-3xl shadow-2xl"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <ScrollContent
              contentID="contact_form"
              range={{ in: 2500, out: 3500 }}
              class="w-full h-auto"
              direction="left"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideFromLeft}
              >
                <Card className="bg-white text-black shadow-xl border-0 rounded-xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl md:text-3xl">Get in Touch</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Fill out the form below and our team will contact you shortly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        className="w-full rounded-md border-gray-300 text-gray-900 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      >
                        <option>Commercial Construction</option>
                        <option>Residential Development</option>
                        <option>Infrastructure Project</option>
                        <option>Engineering Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="border-gray-300 min-h-32 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="subscribe" className="rounded border-gray-300 text-blue-600" />
                      <label htmlFor="subscribe" className="text-sm text-gray-600">
                        Subscribe to our newsletter for updates
                      </label>
                    </div>
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-8 rounded-lg font-medium w-full md:w-auto shadow-lg hover:shadow-blue-900/20 transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit Inquiry
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ScrollContent>

            <ScrollContent
              contentID="contact_info"
              range={{ in: 2500, out: 3500 }}
              class="w-full h-auto"
              direction="right"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideFromRight}
                className="space-y-8"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/orion_serviceInterior.jpg"
                    alt="Our Office"
                    width={1000}
                    height={800}
                    quality={100}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Offices</h3>

                    <div className="space-y-5">
                      {[
                        {
                          city: "Dubai, UAE",
                          address: "Knoz-Orion Tower, Sheikh Zayed Road",
                          phone: "+971 4 123 4567",
                          email: "dubai@knozorion.com",
                        },
                        {
                          city: "Riyadh, KSA",
                          address: "King Fahd Road, Al Olaya District",
                          phone: "+966 11 987 6543",
                          email: "riyadh@knozorion.com",
                        },
                        {
                          city: "Doha, Qatar",
                          address: "West Bay Business District",
                          phone: "+974 4412 3456",
                          email: "doha@knozorion.com",
                        },
                      ].map((office, index) => (
                        <motion.div
                          key={index}
                          className="p-5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200 space-y-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h4 className="font-semibold flex items-center gap-2 text-lg text-gray-900">
                            <MapPin className="h-5 w-5 text-red-600" /> {office.city}
                          </h4>
                          <p className="text-gray-600 text-sm pl-7">{office.address}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                            <p className="text-sm flex items-center gap-2 group">
                              <Phone className="h-4 w-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                              <span className="group-hover:text-blue-600 transition-colors text-gray-700">
                                {office.phone}
                              </span>
                            </p>
                            <p className="text-sm flex items-center gap-2 group">
                              <Mail className="h-4 w-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                              <span className="group-hover:text-blue-600 transition-colors text-gray-700">
                                {office.email}
                              </span>
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-gray-200">
                      <h4 className="font-semibold mb-3 text-lg text-gray-900">Business Hours</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                        <p>Monday - Friday:</p>
                        <p>8:30 AM - 5:30 PM</p>
                        <p>Saturday:</p>
                        <p>9:00 AM - 1:00 PM</p>
                        <p>Sunday:</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Accordion */}
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
                    <CardDescription className="text-gray-600">Common inquiries about our services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        {
                          question: "What types of projects do you specialize in?",
                          answer:
                            "We specialize in commercial construction, luxury residential developments, infrastructure projects, and specialized engineering consultancy across various sectors including hospitality, healthcare, education, and transportation.",
                        },
                        {
                          question: "How do you ensure project quality?",
                          answer:
                            "We implement a comprehensive quality management system with regular inspections, third-party verification, and adherence to international standards. Our integrated approach ensures quality control at every stage of the project lifecycle.",
                        },
                        {
                          question: "What is your typical project timeline?",
                          answer:
                            "Project timelines vary based on scope and complexity. However, our integrated approach typically reduces traditional timelines by 20-30%. During initial consultation, we provide detailed project schedules with key milestones.",
                        },
                        {
                          question: "Do you handle permits and regulatory approvals?",
                          answer:
                            "Yes, we provide full-service permit management and regulatory compliance. Our dedicated team handles all necessary approvals, ensuring your project meets local and international building codes and regulations.",
                        },
                      ].map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                          <AccordionTrigger className="hover:no-underline py-4 text-gray-900 font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollContent>
          </div>
        </div>
      </section>

      {/* Footerhere */}
      <Footer />
      
    </DynamicBackground>
  )
}

function Handshake(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
    </svg>
  )
}

function Leaf(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
  )
}

function Cpu(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M15 2v2"></path>
      <path d="M15 20v2"></path>
      <path d="M2 15h2"></path>
      <path d="M2 9h2"></path>
      <path d="M20 15h2"></path>
      <path d="M20 9h2"></path>
      <path d="M9 2v2"></path>
      <path d="M9 20v2"></path>
    </svg>
  )
}

function Mountain(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
    </svg>
  )
}

