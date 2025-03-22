"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
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

  return (
    <DynamicBackground>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white text-black">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
              <Image
                src="/knoz_logo.jpg"
                alt="Knoz Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="hidden md:inline-block font-bold text-sm">Knoz Al Najjah</span>
            </div>
            <div className="h-6 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <Image
                 src="/orion_logo.png"
                alt="Orion Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="hidden md:inline-block font-bold text-sm">Orion Engineering</span>
            </div>
           
           
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <Button variant="outline" className="hidden md:flex text-white">
            Get a Quote
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t text-black">
            <nav className="flex flex-col p-4 space-y-4 bg-white">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full">Get a Quote</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 text-black ">
        {/* Scroll indicator */}
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-black text-center">
          <p className="text-sm mb-2 animate-pulse">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </div>

        {/* Main content starts after the dynamic background sections */}
        <div className="pt-[300vh  ] text-black "></div>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 text-black flex justify-center ">
          <div className="container">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12 text-black">
                <AnimatedText
                  texts={[
                    "About Our Companies",
                    "Meet Orion Engineering",
                    "Discover Knoz Al Najjah",
                    "Two Companies, One Vision",
                  ]}
                  className="inline-block"
                />
              </h2>
            </FadeInSection>

            <Tabs defaultValue="orion" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="orion" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
                    Orion Engineering
                  </TabsTrigger>
                  <TabsTrigger
                    value="knoz"
                    className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                  >
                    Knoz Al Najjah
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="orion" className="mt-0">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <FadeInSection direction="left" delay={200}>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-red-600">Who We Are</h3>
                      <p className="text-gray-700 mb-4">
                        Orion Engineering Consultants is an independent firm that provides comprehensive and specialist
                        services of the highest quality in Architecture, Engineering, Planning, Construction Supervision
                        and Project Management.
                      </p>
                      <p className="text-gray-700 mb-4">
                        As the designers of the Middle East's first LEED Platinum rated building, we take pride in
                        striving to lead the most advanced and innovative projects in the region. We proudly integrate
                        the principles of sustainable design into all of our projects.
                      </p>
                      <p className="text-gray-700">
                        With over two decades of experience in the market and established relationships with prominent
                        authorities, we pride ourselves with the ability to manage and deliver projects to impressive
                        parameters of quality and time.
                      </p>
                    </div>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={400}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="font-bold mb-4 text-red-600">Prequalified by:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Dubai Municipality
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Jebal Ali Free Zone
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Sharjah Airport Free Zone
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Hamriya Free Zone
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Dubai Investment Park
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Dubai Industrial City
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Dubai Airport Free Zone
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          The Ruler's Office
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Dubai World Central
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <ChevronDown className="h-4 w-4 text-red-500 rotate-[-90deg]" />
                          Nakheel
                        </li>
                      </ul>
                    </div>
                  </FadeInSection>
                </div>
              </TabsContent>

              <TabsContent value="knoz" className="mt-0">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <FadeInSection direction="left" delay={200}>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h3>
                      <p className="text-gray-700 mb-4">
                        Founded in 2010, Knoz Al-Najah has grown from a small team of dedicated professionals to one of
                        Iraq's leading construction companies. We specialize in delivering complex construction projects
                        across multiple sectors including commercial, residential, energy, and infrastructure.
                      </p>
                      <p className="text-gray-700 mb-4">
                        With a commitment to quality, innovation, and client satisfaction, we have successfully
                        completed over 50 major projects throughout Iraq, earning a reputation for excellence and
                        reliability.
                      </p>
                      <p className="text-gray-700">
                        Our leadership team brings together decades of international experience, combining global best
                        practices with deep local knowledge to overcome the unique challenges of construction in our
                        region.
                      </p>
                    </div>
                  </FadeInSection>
                  <FadeInSection direction="right" delay={400}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Knoz Al Najjah Project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeInSection>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 flex justify-center ">
          <div className="container">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                <AnimatedText
                  texts={[
                    "Our Services",
                    "What We Offer",
                    "Engineering & Construction Solutions",
                    "Building Excellence Together",
                  ]}
                  className="inline-block"
                />
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8  ">
              {/* Orion Services */}
              <FadeInSection direction="left" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                  <h3 className="text-xl font-bold mb-6 text-red-600">Orion Engineering Services</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Architecture & Engineering</h4>
                        <p className="text-sm text-gray-600">
                          Comprehensive design services for commercial, residential and industrial buildings.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sustainable Design</h4>
                        <p className="text-sm text-gray-600">
                          LEED-certified designs that minimize environmental impact and resource consumption.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Construction Supervision</h4>
                        <p className="text-sm text-gray-600">
                          Expert oversight to ensure projects are completed to the highest standards.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Project Management</h4>
                        <p className="text-sm text-gray-600">
                          End-to-end management of construction projects, ensuring timely delivery.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInSection>

              {/* Knoz Services */}
              <FadeInSection direction="right" delay={400}>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Knoz Al Najjah Services</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Commercial Construction</h4>
                        <p className="text-sm text-gray-600">
                          Building offices, retail spaces, and commercial complexes across Iraq.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Residential Development</h4>
                        <p className="text-sm text-gray-600">
                          Creating high-quality housing and residential communities.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Energy Infrastructure</h4>
                        <p className="text-sm text-gray-600">
                          Specialized construction for energy sector facilities and infrastructure.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Civil Engineering</h4>
                        <p className="text-sm text-gray-600">
                          Roads, bridges, and public infrastructure projects throughout Iraq.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-16 bg-gray-50 flex justify-center ">
          <div className="container">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                <AnimatedText
                  texts={["Featured Projects", "Our Portfolio", "Building Excellence", "Engineering Success"]}
                  className="inline-block"
                />
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <FadeInSection delay={100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-red-600/20 z-10 group-hover:bg-red-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 1"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded z-20">
                      Orion Engineering
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">LEED Platinum Office Building</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      The Middle East's first LEED Platinum rated building, showcasing sustainable design principles.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Dubai, UAE</span>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Project 2 */}
              <FadeInSection delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-blue-600/20 z-10 group-hover:bg-blue-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 2"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded z-20">
                      Knoz Al Najjah
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Commercial Complex</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A modern commercial complex featuring retail spaces, offices, and recreational areas.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Baghdad, Iraq</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Project 3 */}
              <FadeInSection delay={300}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-red-600/20 z-10 group-hover:bg-red-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 3"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded z-20">
                      Orion Engineering
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Industrial Warehouse</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A state-of-the-art industrial warehouse designed for optimal logistics operations.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Sharjah, UAE</span>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Project 4 */}
              <FadeInSection delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-blue-600/20 z-10 group-hover:bg-blue-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 4"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded z-20">
                      Knoz Al Najjah
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Residential Community</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A modern residential community with amenities and green spaces for families.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Basra, Iraq</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Project 5 */}
              <FadeInSection delay={500}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-red-600/20 z-10 group-hover:bg-red-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 5"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded z-20">
                      Orion Engineering
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Commercial Tower</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A modern commercial tower with innovative design and energy-efficient systems.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Dubai, UAE</span>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Project 6 */}
              <FadeInSection delay={600}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-60">
                    <div className="absolute inset-0 bg-blue-600/20 z-10 group-hover:bg-blue-600/0 transition-all duration-300" />
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Project 6"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded z-20">
                      Knoz Al Najjah
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Infrastructure Project</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A major infrastructure development improving connectivity and urban mobility.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Erbil, Iraq</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection delay={700}>
              <div className="flex justify-center mt-10 ">
                <Button variant="outline" className="mx-2 text-white bg-red-500 hover:bg-red-700 ">
                  View All Orion Projects
                </Button>
                <Button variant="outline" className="mx-2 text-white hover:bg-color-white bg-blue-500 hover:bg-blue-600 ">
                  View All Knoz Projects
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 flex justify-center ">
          <div className="container">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                <AnimatedText
                  texts={["Contact Us", "Get In Touch", "Start Your Project", "Let's Build Together"]}
                  className="inline-block"
                />
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Orion Contact */}
              <FadeInSection direction="left" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                  <h3 className="text-xl font-bold mb-6 text-red-600">Orion Engineering Consultants</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-sm text-gray-600">Dubai, United Arab Emirates</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-gray-600">info@orionengineering.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-red-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-sm text-gray-600">+971 4 123 4567</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">Contact Orion</Button>
                </div>
              </FadeInSection>

              {/* Knoz Contact */}
              <FadeInSection direction="right" delay={400}>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-6 text-blue-600">Knoz Al Najjah</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-sm text-gray-600">Baghdad, Iraq</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-gray-600">info@knozalnajjah.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronDown className="h-4 w-4 text-blue-600 rotate-[-90deg]" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-sm text-gray-600">+964 7 123 4567</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Knoz</Button>
                </div>
              </FadeInSection>
            </div>

          </div>
        </section>
      </main>


    </DynamicBackground>
  )
}

