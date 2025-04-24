"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"

import { Award, Briefcase, Building2, CheckCircle, Users } from 'lucide-react'
import Image from "next/image"

// About Section Component
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  // Parallax image effect
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])
  
  return (
    <>
      {/* Transition image between sections */}
      <motion.div 
        ref={imageRef}
        className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden"
      >
        <motion.div
          style={{ 
            scale: imageScale,
            opacity: imageOpacity
          }}
          className="absolute inset-0"
        >
          <Image
            src="/construction-panorama.jpg" // Replace with your actual image
            alt="Construction panorama"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
          
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Building Excellence
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <section id="about-us" ref={ref} className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center text-center mb-6">
            
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
              <Separator className="w-24 h-1 bg-white my-6" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The powerful combination of Knoz Al and Orion Engineering creates a new standard in construction excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Company profiles */}
            <motion.div 
              className="md:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Card className="bg-black border-l-2 border-white overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 overflow-hidden">
                      <Image
                        src="/knoz_logo.jpg"
                        alt="Knoz Logo"
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Knoz Al</h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    With over 25 years of excellence in construction across the Middle East, Knoz Al has established a reputation for delivering complex commercial and residential projects with exceptional quality and precision.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-t border-white/20 pt-4">
                      <motion.p 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        250+
                      </motion.p>
                      <p className="text-white/60 text-sm">Projects Completed</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <motion.p 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        15+
                      </motion.p>
                      <p className="text-white/60 text-sm">Countries Served</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-black border-l-2 border-white overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 overflow-hidden">
                      <Image
                        src="/orion_logo.png"
                        alt="Orion Logo"
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Orion Engineering</h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    Orion Engineering brings 20 years of innovative engineering solutions specializing in infrastructure projects, industrial facilities, and sustainable building techniques that push the boundaries of what&apos;s possible.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-t border-white/20 pt-4">
                      <motion.p 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        320+
                      </motion.p>
                      <p className="text-white/60 text-sm">Projects Completed</p>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <motion.p 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        12+
                      </motion.p>
                      <p className="text-white/60 text-sm">Countries Served</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden md:block md:col-span-1">
              <div className="h-full w-[1px] bg-white/20 mx-auto"></div>
            </div>

            {/* Vision */}
            <motion.div 
              className="md:col-span-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <div className="border-t-2 border-white p-10">
                <h3 className="text-3xl font-bold text-white mb-6">Our Unified Vision</h3>
                <p className="text-white/80 mb-8">
                  The strategic merger of Knoz Al and Orion Engineering represents a powerful combination of complementary strengths, creating an unmatched force in the construction industry.
                </p>
                
                <div className="space-y-6 mb-10">
                  {[
                    {
                      title: "Combined Expertise",
                      description: "Blending Knoz Al's architectural mastery with Orion's engineering innovation."
                    },
                    {
                      title: "Enhanced Capabilities",
                      description: "Expanded service offerings covering every aspect of construction."
                    },
                    {
                      title: "Global Reach",
                      description: "Extended geographical presence across the MENA region and beyond."
                    },
                    {
                      title: "Sustainability Focus",
                      description: "Pioneering eco-friendly construction practices and solutions."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="bg-white p-2 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                        <CheckCircle className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="flex items-center gap-6 border-t border-white/20 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-white p-4">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">1,500+ Professionals</p>
                    <p className="text-white/60">United team of experts across all disciplines</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Values and approach */}
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Innovative Approach",
                description: "Pushing boundaries with cutting-edge construction methods and technologies."
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Client-Centered",
                description: "Every project begins and ends with the client's vision and satisfaction as our priority."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence Driven",
                description: "Committing to the highest standards of quality in every aspect of our work."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="border-t-2 border-white pt-6 hover:bg-zinc-900 transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;