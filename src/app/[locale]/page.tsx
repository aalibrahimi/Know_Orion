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
import { Footer } from "@/MyComponents/Footer"

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
        <header
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
            isNavbarSolid ? "bg-black shadow-lg py-2" : "py-4"
          }`}
        >
          <div className="container flex h-20 items-center justify-between px-6 mx-auto">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white flex items-center">
                <Image
                  src="/knoz.png"
                  alt="Knoz Logo"
                  width={100}
                  height={100}
                  className="h-auto w-15 transition-transform duration-300 hover:scale-105"
                />
                <span className="hidden md:inline-block font-bold text-xl pl-[10px] relative group">
                  Knoz Al
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                    style={{ width: isNavbarSolid ? "100%" : "0%" }}
                  ></span>
                </span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block" />

              <Image
                src="/orion_logo.png"
                alt="Orion Logo"
                width={100}
                height={100}
                className="h-auto w-10 transition-transform duration-300 hover:scale-105"
              />
              <span className="hidden md:inline-block font-bold text-xl relative group">
                Orion Engineering
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{ width: isNavbarSolid ? "100%" : "0%" }}
                ></span>
              </span>
            </motion.div>

            <motion.nav
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {["About Us", "Vision", "Services", "Projects", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-medium text-white hover:text-white/80 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </motion.nav>

            <div className="md:hidden">
              <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
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
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </header>

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
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32 md:py-40">
        <ScrollContent
          contentID="knoz_title"
          range={{ in: 500, out: 1500 }}
          class="text-5xl font-bold mb-16 text-center w-full"
          direction="left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Knoz Al-Najah</h2>
            <p className="text-lg text-gray-400">Building Excellence Since 1995</p>
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
              contentID="knoz_content"
              range={{ in: 500, out: 1500 }}
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
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 transition-colors">
                        Established Leader
                      </Badge>
                      <Badge className="bg-purple-500 text-white px-3 py-1 hover:bg-purple-600 transition-colors">
                        30+ Years Experience
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">Heritage of Excellence</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      A regional leader in construction and development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      For over three decades, Knoz Al-Najah has been at the forefront of the Middle Eastern construction
                      industry, delivering iconic structures that define the region's skyline. Our commitment to
                      quality, innovation, and client satisfaction has established us as the partner of choice for
                      complex, high-profile projects.
                    </p>

                    <Tabs defaultValue="services" className="mt-6">
                      <TabsList className="grid grid-cols-3 bg-gray-100 p-1 rounded-lg">
                        <TabsTrigger
                          value="services"
                          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all"
                        >
                          Services
                        </TabsTrigger>
                        <TabsTrigger
                          value="projects"
                          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all"
                        >
                          Key Projects
                        </TabsTrigger>
                        <TabsTrigger
                          value="values"
                          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all"
                        >
                          Our Values
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="services" className="space-y-4 mt-6 pt-2">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: <Building2 className="h-5 w-5" />, title: "Commercial Construction" },
                            { icon: <Award className="h-5 w-5" />, title: "Luxury Residential" },
                            { icon: <Shield className="h-5 w-5" />, title: "Infrastructure Development" },
                            { icon: <Zap className="h-5 w-5" />, title: "Project Management" },
                          ].map((service, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="p-2.5 rounded-full bg-blue-100 text-blue-600">{service.icon}</div>
                              <div>
                                <h4 className="font-medium text-gray-900">{service.title}</h4>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="projects" className="space-y-4 mt-6 pt-2">
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { name: "Al Najah Tower", location: "Dubai, UAE", year: "2019" },
                            { name: "Royal Garden Residences", location: "Riyadh, KSA", year: "2021" },
                            { name: "Coastal Highway Extension", location: "Doha, Qatar", year: "2018" },
                            { name: "Marina Shopping Complex", location: "Abu Dhabi, UAE", year: "2022" },
                          ].map((project, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div>
                                <h4 className="font-medium text-gray-900">{project.name}</h4>
                                <p className="text-sm text-gray-600">{project.location}</p>
                              </div>
                              <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600">
                                {project.year}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="values" className="space-y-4 mt-6 pt-2">
                        <div className="space-y-4">
                          {[
                            { value: "Excellence", desc: "Uncompromising quality in every project" },
                            { value: "Innovation", desc: "Pioneering new construction methodologies" },
                            { value: "Integrity", desc: "Transparent business practices and relationships" },
                            { value: "Sustainability", desc: "Environmental responsibility in all operations" },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">{item.value}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-200 pt-6 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>750+ Employees Worldwide</span>
                    </div>
                    <Button
                      variant="outline"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group border-blue-200"
                    >
                      Company Profile{" "}
                      <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ScrollContent>

            <ScrollContent contentID="knoz_bg" range={{ in: 500, out: 1500 }} class="w-full h-auto" direction="right">
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
                    src="/orion_hero3.jpg"
                    alt="Knoz Al-Najah Project"
                    width={1000}
                    height={800}
                    quality={100}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold py-2 text-gray-900">Palm Island Residential Complex</h3>
                    <p className="text-gray-600">Award-winning luxury development in Dubai</p>
                  </div>
                </motion.div>

                <Alert className="bg-blue-50 border border-blue-200 text-blue-800 shadow-lg">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="font-semibold">Leadership Recognition</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Knoz Al-Najah was awarded "Construction Company of the Year" three consecutive times (2022-2024)
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col items-center text-center shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="rounded-full bg-green-100 p-4 mb-3">
                      <CheckCircle className="h-7 w-7 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-2xl mb-1 text-gray-900">120+</h4>
                    <p className="text-sm text-gray-600">Completed Projects</p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col items-center text-center shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="rounded-full bg-orange-100 p-4 mb-3">
                      <Globe className="h-7 w-7 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-2xl mb-1 text-gray-900">12</h4>
                    <p className="text-sm text-gray-600">Countries of Operation</p>
                  </motion.div>
                </div>

                {/* New component: Project Timeline */}
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Project Timeline</CardTitle>
                    <CardDescription className="text-gray-600">Recent major developments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          year: "2023",
                          event: "Completion of Al Najah Tower Phase II",
                          icon: <Building2 className="h-4 w-4" />,
                        },
                        {
                          year: "2022",
                          event: "Expansion into North African markets",
                          icon: <Globe className="h-4 w-4" />,
                        },
                        {
                          year: "2021",
                          event: "Strategic partnership with Orion Engineering",
                          icon: <Handshake className="h-4 w-4" />,
                        },
                        {
                          year: "2020",
                          event: "Launch of sustainable construction initiative",
                          icon: <Leaf className="h-4 w-4" />,
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="rounded-full bg-blue-100 p-2 text-blue-600 mt-0.5">{item.icon}</div>
                          <div>
                            <Badge variant="outline" className="mb-1 bg-gray-50">
                              {item.year}
                            </Badge>
                            <p className="text-gray-800">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollContent>
          </div>
        </div>
      </section>

      {/* Orion Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32 md:py-40 bg-gradient-to-b from-transparent to-black/20">
        <ScrollContent
          contentID="orion_title"
          range={{ in: 1500, out: 2500 }}
          class="text-5xl font-bold mb-16 text-center w-full"
          direction="right"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
       
        
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Orion Engineering Consultants</h2>
            <p className="text-lg text-gray-400">Engineering Excellence & Innovation</p>
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
            <ScrollContent contentID="orion_bg" range={{ in: 1500, out: 2500 }} class="w-full h-auto" direction="left">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideFromLeft}
                className="space-y-8"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/orion_hero1.jpg"
                    alt="Orion Engineering Project"
                    width={1000}
                    height={800}
                    quality={100}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Smart City Infrastructure Project</h3>
                    <p className="text-gray-600">Pioneering sustainable urban development</p>
                  </div>
                </motion.div>

                <Alert className="bg-purple-50 border border-purple-200 text-purple-800 shadow-lg">
                  <Award className="h-4 w-4 text-purple-600" />
                  <AlertTitle className="font-semibold">Excellence in Engineering</AlertTitle>
                  <AlertDescription className="text-purple-700">
                    Orion's innovative structural design system has been adopted as an industry standard in 7 countries
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col items-center text-center shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="rounded-full bg-purple-100 p-4 mb-3">
                      <Shield className="h-7 w-7 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-2xl mb-1 text-gray-900">25+</h4>
                    <p className="text-sm text-gray-600">Years of Expertise</p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col items-center text-center shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="rounded-full bg-blue-100 p-4 mb-3">
                      <Users className="h-7 w-7 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-2xl mb-1 text-gray-900">450+</h4>
                    <p className="text-sm text-gray-600">Engineering Professionals</p>
                  </motion.div>
                </div>

                {/* New component: Expertise Carousel */}
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Areas of Expertise</CardTitle>
                    <CardDescription className="text-gray-600">Specialized engineering capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          {
                            title: "Structural Engineering",
                            desc: "Advanced building frameworks and systems",
                            icon: <Building2 className="h-6 w-6" />,
                          },
                          {
                            title: "Environmental Design",
                            desc: "Sustainable and eco-friendly solutions",
                            icon: <Leaf className="h-6 w-6" />,
                          },
                          {
                            title: "Smart Infrastructure",
                            desc: "IoT and technology integration",
                            icon: <Cpu className="h-6 w-6" />,
                          },
                          {
                            title: "Geotechnical Solutions",
                            desc: "Ground engineering and foundations",
                            icon: <Mountain className="h-6 w-6" />,
                          },
                        ].map((item, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-4">
                              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 h-full flex flex-col items-center text-center">
                                <div className="rounded-full bg-purple-100 p-3 mb-4 text-purple-600">{item.icon}</div>
                                <h3 className="font-medium text-lg mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollContent>

            <ScrollContent
              contentID="orion_content"
              range={{ in: 1500, out: 2500 }}
              class="w-full h-auto"
              direction="right"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideFromRight}
              >
                <Card className="bg-white text-black shadow-xl border-0 rounded-xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge className="bg-purple-500 text-white px-3 py-1 hover:bg-purple-600 transition-colors">
                        Engineering Expertise
                      </Badge>
                      <Badge className="bg-green-500 text-white px-3 py-1 hover:bg-green-600 transition-colors">
                        Sustainability Focused
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">Engineering Innovation</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Transforming concepts into extraordinary structures
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      Orion Engineering Consultants has built a reputation for delivering world-class engineering
                      solutions across diverse sectors. Our team of specialists combines technical expertise with
                      innovative thinking to overcome complex challenges and create structures that stand the test of
                      time while embracing sustainable practices.
                    </p>

                    <Tabs defaultValue="expertise" className="mt-6">
                      <TabsList className="grid grid-cols-3 bg-gray-100 p-1 rounded-lg">
                        <TabsTrigger
                          value="expertise"
                          className="data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all"
                        >
                          Expertise
                        </TabsTrigger>
                        <TabsTrigger
                          value="innovations"
                          className="data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all"
                        >
                          Innovations
                        </TabsTrigger>
                        <TabsTrigger
                          value="approach"
                          className="data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all"
                        >
                          Our Approach
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="expertise" className="space-y-4 mt-6 pt-2">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: <Building2 className="h-5 w-5" />, title: "Structural Engineering" },
                            { icon: <Zap className="h-5 w-5" />, title: "MEP Systems" },
                            { icon: <Globe className="h-5 w-5" />, title: "Environmental Engineering" },
                            { icon: <Shield className="h-5 w-5" />, title: "Geotechnical Solutions" },
                          ].map((service, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="p-2.5 rounded-full bg-purple-100 text-purple-600">{service.icon}</div>
                              <div>
                                <h4 className="font-medium text-gray-900">{service.title}</h4>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="innovations" className="space-y-4 mt-6 pt-2">
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { name: "ModuFlex Building System", desc: "Modular construction for rapid deployment" },
                            {
                              name: "Eco-Conscious Materials Research",
                              desc: "Reducing carbon footprint in construction",
                            },
                            { name: "Digital Twin Technology", desc: "Real-time monitoring of structural integrity" },
                            { name: "Seismic Isolation Techniques", desc: "Advanced protection against earthquakes" },
                          ].map((innovation, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="p-2.5 rounded-full bg-blue-100 text-blue-600">
                                <Zap className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{innovation.name}</h4>
                                <p className="text-sm text-gray-600">{innovation.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="approach" className="space-y-4 mt-6 pt-2">
                        <div className="space-y-4">
                          {[
                            { value: "Client-Centered", desc: "Solutions tailored to client needs and vision" },
                            { value: "Collaborative", desc: "Cross-disciplinary teamwork for integrated design" },
                            { value: "Data-Driven", desc: "Decisions based on analytical models and simulations" },
                            { value: "Future-Ready", desc: "Anticipating trends and incorporating adaptability" },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">{item.value}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* New component: Project Success Metrics */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-medium text-lg mb-4 text-gray-900">Project Success Metrics</h3>
                      <div className="space-y-4">
                        {[
                          { metric: "On-time Completion", value: 94, color: "bg-green-500" },
                          { metric: "Budget Adherence", value: 97, color: "bg-blue-500" },
                          { metric: "Client Satisfaction", value: 98, color: "bg-purple-500" },
                          { metric: "Safety Performance", value: 99, color: "bg-orange-500" },
                        ].map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-700">{item.metric}</span>
                              <span className="font-medium text-gray-900">{item.value}%</span>
                            </div>
                            <Progress value={item.value} className="h-2" indicatorClassName={item.color} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-200 pt-6 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>80+ Active Projects Worldwide</span>
                    </div>
                    <Button
                      variant="outline"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group border-purple-200"
                    >
                      Engineering Portfolio{" "}
                      <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ScrollContent>
          </div>
        </div>
      </section>

      {/* Merger Benefits Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">The Power of Our Merger</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Combining strengths to deliver unparalleled construction and engineering excellence
          </p>
        </motion.div>

        <div className="container mx-auto px-6">
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Strategic Advantages</h3>

                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        title: "Integrated Service Offering",
                        content:
                          "From initial concept and engineering to construction and project management, we provide end-to-end solutions under one roof.",
                        icon: <Zap className="h-5 w-5" />,
                      },
                      {
                        title: "Enhanced Innovation Capabilities",
                        content:
                          "Our combined R&D teams develop cutting-edge construction methodologies and sustainable building technologies.",
                        icon: <Lightbulb className="h-5 w-5" />,
                      },
                      {
                        title: "Expanded Geographic Reach",
                        content:
                          "With operations across 15 countries, we leverage local expertise with global capabilities.",
                        icon: <Globe className="h-5 w-5" />,
                      },
                      {
                        title: "Optimized Resource Allocation",
                        content:
                          "Shared resources and streamlined processes result in cost efficiencies and faster project delivery.",
                        icon: <BarChart className="h-5 w-5" />,
                      },
                    ].map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                        <AccordionTrigger className="hover:no-underline py-4">
                          <div className="flex items-center gap-3 text-left">
                            <div className="rounded-full bg-blue-100 p-2 text-blue-600">{item.icon}</div>
                            <span className="font-medium text-gray-900">{item.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-12 text-gray-700">{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="bg-gray-100 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Client Benefits</h3>

                  <div className="grid gap-6">
                    {[
                      {
                        title: "Single Point of Contact",
                        desc: "Simplified communication and project management through a dedicated project lead.",
                        icon: <Users className="h-5 w-5" />,
                      },
                      {
                        title: "Reduced Project Timeline",
                        desc: "20-30% faster project completion through streamlined workflows and parallel processing.",
                        icon: <Clock className="h-5 w-5" />,
                      },
                      {
                        title: "Enhanced Quality Assurance",
                        desc: "Rigorous quality controls at every stage from design to construction.",
                        icon: <Shield className="h-5 w-5" />,
                      },
                      {
                        title: "Cost Optimization",
                        desc: "Value engineering and efficient resource allocation leading to better ROI.",
                        icon: <PieChart className="h-5 w-5" />,
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                        <div className="rounded-full bg-purple-100 p-3 h-fit text-purple-600">{benefit.icon}</div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg">
                      Download Merger Whitepaper <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h3>

            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    quote:
                      "The merger of Knoz and Orion has created a powerhouse that delivered our complex infrastructure project ahead of schedule and under budget.",
                    author: "Ahmed Al-Farsi",
                    position: "Director of Infrastructure, Dubai Municipality",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    quote:
                      "Working with the combined expertise of both companies gave us access to innovative solutions we hadn't considered. The result exceeded our expectations.",
                    author: "Sarah Johnson",
                    position: "CEO, Global Development Corp",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                  {
                    quote:
                      "The seamless integration between design and construction phases saved us months of coordination and potential issues.",
                    author: "Mohammed Al-Thani",
                    position: "Project Director, Qatar Investment Authority",
                    image: "/placeholder.svg?height=100&width=100",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="bg-white border border-gray-200 h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-4 text-gray-600">
                            <svg
                              width="45"
                              height="36"
                              className="text-blue-500 mb-4 opacity-30"
                              viewBox="0 0 45 36"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.5 18H9C9 12.9375 12.9375 9 18 9V4.5C10.125 4.5 4.5 10.125 4.5 18V31.5H18V18ZM31.5 18H27C27 12.9375 30.9375 9 36 9V4.5C28.125 4.5 22.5 10.125 22.5 18V31.5H36V18Z" />
                            </svg>
                            <p className="italic text-gray-700">{testimonial.quote}</p>
                          </div>
                          <div className="mt-auto pt-4 border-t border-gray-200 flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={testimonial.image} alt={testimonial.author} />
                              <AvatarFallback>
                                {testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-gray-900">{testimonial.author}</p>
                              <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

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

