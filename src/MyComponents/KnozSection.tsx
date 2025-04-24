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
  Handshake, Leaf
} from "lucide-react"

export default function KnozSection() {
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
                    industry, delivering iconic structures that define the region&apos;s skyline. Our commitment to
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
                  Knoz Al-Najah was awarded &quot;Construction Company of the Year&quot; three consecutive times (2022-2024)
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

              {/* Project Timeline */}
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
  )
}