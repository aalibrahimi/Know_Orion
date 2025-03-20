"use client"
import LoadingAnimation from '@/components/loading-animation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Menu, ChevronDown } from 'lucide-react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const t = useTranslations('HomePage');
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
    <div className="min-h-screen flex flex-col">
       {/* Header */}
       <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-red-500/10" />
          <div className="relative container py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Engineering Excellence & Construction Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-10">
              Two industry leaders combining decades of experience to deliver exceptional projects across the Middle
              East and Iraq.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700">Orion Engineering</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Knoz Al Najjah</Button>
            </div>
          </div>
        </section>

        {/* Company Tabs */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">About Our Companies</h2>

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
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-600">Who We Are</h3>
                    <p className="text-gray-700 mb-4">
                      Orion Engineering Consultants is an independent firm that provides comprehensive and specialist
                      services of the highest quality in Architecture, Engineering, Planning, Construction Supervision
                      and Project Management.
                    </p>
                    <p className="text-gray-700 mb-4">
                      As the designers of the Middle East's first LEED Platinum rated building, we take pride in
                      striving to lead the most advanced and innovative projects in the region. We proudly integrate the
                      principles of sustainable design into all of our projects.
                    </p>
                    <p className="text-gray-700">
                      With over two decades of experience in the market and established relationships with prominent
                      authorities, we pride ourselves with the ability to manage and deliver projects to impressive
                      parameters of quality and time.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-black">
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
                </div>
              </TabsContent>

              <TabsContent value="knoz" className="mt-0">
                <div className="grid md:grid-cols-2 gap-10 items-center text-black">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h3>
                    <p className="text-gray-700 mb-4">
                      Founded in 2010, Knoz Al-Najah has grown from a small team of dedicated professionals to one of
                      Iraq's leading construction companies. We specialize in delivering complex construction projects
                      across multiple sectors including commercial, residential, energy, and infrastructure.
                    </p>
                    <p className="text-gray-700 mb-4">
                      With a commitment to quality, innovation, and client satisfaction, we have successfully completed
                      over 50 major projects throughout Iraq, earning a reputation for excellence and reliability.
                    </p>
                    <p className="text-gray-700">
                      Our leadership team brings together decades of international experience, combining global best
                      practices with deep local knowledge to overcome the unique challenges of construction in our
                      region.
                    </p>
                  </div>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Knoz Al Najjah Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
         {/* Contact Section */}
         <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 ">Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Orion Contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600 text-black">
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

              {/* Knoz Contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 text-black">
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
            </div>

            {/* Contact Form */}
           
          </div>
        </section>

        {/* feaatured projects */}

         {/* Projects Showcase */}
         <section id="projects" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
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

              {/* Project 2 */}
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

              {/* Project 3 */}
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

              {/* Project 4 */}
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

              {/* Project 5 */}
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

              {/* Project 6 */}
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
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="mx-2">
                View All Orion Projects
              </Button>
              <Button variant="outline" className="mx-2">
                View All Knoz Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

</div>
  );
}
