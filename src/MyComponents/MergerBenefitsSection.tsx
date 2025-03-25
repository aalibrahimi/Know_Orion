// components/MergerBenefitsSection.jsx
"use client"

import { motion } from "framer-motion"
import { 
  Zap, Lightbulb, Globe, BarChart, 
  Users, Clock, Shield, PieChart
} from "lucide-react"
import { Card, CardContent} from "@/components/ui/card"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MergerBenefitsSection() {
  return (
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
                 {/* thinking about adding a button here */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <TestimonialsCarousel />
      </div>
    </section>
  )
}

function TestimonialsCarousel() {
  return (
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
  )
}