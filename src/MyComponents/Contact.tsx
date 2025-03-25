"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "motion/react"
import ScrollContent from "./scrollContent"
import Image from "next/image"

export default function Contact() {
  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
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
        duration: 0.6,
      },
    },
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Contact Section */}
      <section className="relative w-full overflow-hidden py-16 bg-white to-black/40">
        <ScrollContent
          contentID="contact_title"
          range={{ in: 2500, out: 3500 }}
          class="text-4xl font-bold mb-8 text-center w-full"
          direction="left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-black">Contact Our Team</h2>
            <p className="text-base text-gray-400">Let's build something extraordinary together</p>
          </motion.div>
        </ScrollContent>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
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
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-xl">Get in Touch</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and our team will contact you shortly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label htmlFor="firstName" className="text-xs font-medium text-gray-700">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="h-9 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="lastName" className="text-xs font-medium text-gray-700">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="h-9 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-9 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          className="h-9 border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="projectType" className="text-xs font-medium text-gray-700">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          className="h-9 w-full rounded-md   border border-blue-300 text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        >
                          <option>Commercial Construction</option>
                          <option>Residential Development</option>
                          <option>Infrastructure Project</option>
                          <option>Engineering Consultation</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-medium text-gray-700">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="border-blue-300 min-h-20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-row items-center justify-between pt-0 pb-4 px-6">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="subscribe" className="rounded border-gray-300 text-blue-600 bg-blue-50 " />
                      <label htmlFor="subscribe" className="text-xs text-gray-600">
                        Subscribe to newsletter
                      </label>
                    </div>
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg font-medium shadow-md hover:shadow-blue-900/20 transition-all text-sm"
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
                className="space-y-4"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-blue-300 shadow-xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col space-y-4">
                    <h3 className="font-bold text-lg text-black/80">Contact Information</h3>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <MapPin className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-black/80">Our Headquarters</p>
                        <p className="text-sm text-black/80">123 Construction Avenue, Dubai, UAE</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-black/80">Email Address</p>
                        <p className="text-gray-600 text-sm ">info@knozorion.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <Phone className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-black/80">Phone Number</p>
                        <p className="text-gray-600 text-sm">+971 4 123 4567</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-blue-300 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 w-full">
                    <Image 
                      src="/orion_hero1.jpg" 
                      alt="Map" 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-bold">Visit Us</p>
                        <p className="text-sm">Dubai, United Arab Emirates</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollContent>
          </div>
        </div>
      </section>
    </div>
  )
}