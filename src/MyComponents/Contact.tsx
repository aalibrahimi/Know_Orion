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

    return(
        <div className="">
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
    </div>
    )
}