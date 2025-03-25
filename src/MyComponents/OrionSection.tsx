
// components/KnozSection.jsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrollContent from "@/MyComponents/scrollContent"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Building2, Award, Shield, Zap, 
  Users, CheckCircle, Globe, ArrowUpRight, 
  Handshake, Leaf,
  Clock,
  Cpu,
  Mountain
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Progress } from "@radix-ui/react-progress"

export default function OrionSection() {
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
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32 md:py-40">
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
  )
}

      