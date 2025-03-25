"use client";

import { useEffect, useState, useRef } from "react";
import LoadingAnimation from "@/components/loading-animation";
import DynamicBackground from "@/MyComponents/dynamic-background";
import ScrollContent from "@/MyComponents/scrollContent";
import { Link } from "@/i18n/navigation";
import {
  Award,
  Briefcase,
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
} from "lucide-react";
import Image from "next/image";
import GradientText from "@/MyComponents/GradientText";

// Import shadcn components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeHeadline, setActiveHeadline] = useState(0);
  const headlines = [
    "Building the future together",
    "Two visions, one powerful mission",
    "Excellence in construction, redefined",
  ];
  const heroRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Change headline based on scroll position
      const scrollPosition = window.scrollY;
      if (scrollPosition < 300) {
        setActiveHeadline(0);
      } else if (scrollPosition < 600) {
        setActiveHeadline(1);
      } else {
        setActiveHeadline(2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Headline rotation timer
    const headlineTimer = setInterval(() => {
      if (window.scrollY < 100) {
        // Only auto-rotate when near top
        setActiveHeadline((prev) => (prev + 1) % headlines.length);
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(headlineTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const parallaxOffset = scrollY * 0.5;
  const opacityValue = Math.max(0, 1 - scrollY / 700);

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
            <div
              key={i}
              className="absolute rounded-full bg-white/10 "
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `translateY(${
                  parallaxOffset * (Math.random() * 0.5 + 0.5)
                }px)`,
                transition: "transform 0.5s ease-out",
              }}
            />
          ))}
        </div>

        {/* Navbar */}
        <header
          className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
         
        >
          <div className="container flex h-24 items-center justify-between px-6 mx-auto">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-white flex items-center">
                <Image
                  src="/knoz.png"
                  alt="Knoz Logo"
                  width={100}
                  height={100}
                  draggable={false}
                  className="h-auto w-15"
                />
                <span className="hidden md:inline-block font-bold text-xl pl-[10px]">
                  <Link href="https://knoz.fly.dev/" target="_blank">Knoz Al</Link>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full gap-4"
                    style={{ width: scrollY > 100 ? "100%" : "0%" }}
                  ></span>
                </span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block" />

              <Image
                src="/orion_logo.png"
                alt="Orion Logo"
                width={100}
                height={100}
                draggable={false}
                className="h-auto w-10"
              />
              <span className="hidden md:inline-block font-bold text-xl">
                <Link href="https://www.orionuae.com/" target="_blank">Orion Engineering</Link>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{ width: scrollY > 100 ? "100%" : "0%" }}
                ></span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {[
                { title: "About Us", url: "#knoz_section" },
                { title: "Contact", url: "#contact_section" },
              ].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-lg font-bold text-white hover:text-white/80 transition-colors relative group"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}
            </nav>

            <div className="md:hidden">
              <button className="text-white p-2">
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
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="overflow-hidden h-32 mb-6">
            {headlines.map((headline, index) => (
              <h1
                key={index}
                className="text-5xl md:text-7xl font-bold text-white transition-all duration-1000 absolute left-0 right-0"
                style={{
                  opacity: activeHeadline === index ? 1 : 0,
                  transform: `translateY(${
                    activeHeadline === index ? 0 : 100
                  }px)`,
                }}
              >
                {headline}
              </h1>
            ))}
          </div>

          <p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 transform transition-all duration-1000"
            style={{
              opacity: opacityValue,
              transform: `translateY(${parallaxOffset * 0.2}px)`,
            }}
          >
            A strategic merger of two construction industry leaders, creating
            unparalleled expertise and innovation in building solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="px-8 py-6 rounded-full font-bold flex items-center gap-2 bg-white text-black hover:bg-white/90 transition-all transform hover:scale-105">
              Discover Our Vision <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 border-2 border-white text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              Our Projects
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            {[
              { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
              { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
              { icon: <Instagram className="h-5 w-5" />, name: "Instagram" },
              { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                aria-label={social.name}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
          onClick={scrollToContent}
        >
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Knoz Section */}
      <section id="knoz_section" className="relative p-15 min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-24 ">
        <ScrollContent
          contentID="knoz_title"
          range={{ in: 500, out: 1500 }}
          class="text-5xl font-bold mb-16 text-center w-full "
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Knoz Al-Najah</h2>
          <p className="text-lg text-gray-400">Building Excellence Since 1995</p>
        </ScrollContent>

        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 ">
          <ScrollContent
            contentID="knoz_content"
            range={{ in: 500, out: 1500 }}
            class="w-full h-auto"
            direction="left"
          >
            <Card className="bg-black border-white text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-3 py-1">
                    Established Leader
                  </Badge>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-3 py-1">
                    30+ Years Experience
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl">Heritage of Excellence</CardTitle>
                <CardDescription className="text-gray-400 text-lg">A regional leader in construction and development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  For over three decades, Knoz Al-Najah has been at the forefront of the Middle Eastern construction industry, 
                  delivering iconic structures that define the region's skyline. Our commitment to quality, innovation, and 
                  client satisfaction has established us as the partner of choice for complex, high-profile projects.
                </p>
                
                <Tabs defaultValue="services" className="mt-6">
                  <TabsList className="grid grid-cols-3 bg-gray-800/50">
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="projects">Key Projects</TabsTrigger>
                    <TabsTrigger value="values">Our Values</TabsTrigger>
                  </TabsList>
                  <TabsContent value="services" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: <Building2 className="h-5 w-5" />, title: "Commercial Construction" },
                        { icon: <Award className="h-5 w-5" />, title: "Luxury Residential" },
                        { icon: <Shield className="h-5 w-5" />, title: "Infrastructure Development" },
                        { icon: <Zap className="h-5 w-5" />, title: "Project Management" },
                      ].map((service, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-white/5">
                          <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">{service.icon}</div>
                          <div>
                            <h4 className="font-medium">{service.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="projects" className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { name: "Al Najah Tower", location: "Dubai, UAE", year: "2019" },
                        { name: "Royal Garden Residences", location: "Riyadh, KSA", year: "2021" },
                        { name: "Coastal Highway Extension", location: "Doha, Qatar", year: "2018" },
                        { name: "Marina Shopping Complex", location: "Abu Dhabi, UAE", year: "2022" },
                      ].map((project, index) => (
                        <div key={index} className="flex justify-between p-3 rounded-lg bg-white/5">
                          <div>
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm text-gray-400">{project.location}</p>
                          </div>
                          <Badge variant="outline">{project.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="values" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      {[
                        { value: "Excellence", desc: "Uncompromising quality in every project" },
                        { value: "Innovation", desc: "Pioneering new construction methodologies" },
                        { value: "Integrity", desc: "Transparent business practices and relationships" },
                        { value: "Sustainability", desc: "Environmental responsibility in all operations" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-medium">{item.value}</h4>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>750+ Employees Worldwide</span>
                </div>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
                  Company Profile <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </ScrollContent>

          <ScrollContent
            contentID="knoz_bg"
            range={{ in: 500, out: 1500 }}
            class="w-full h-auto"
            direction="right"
          >
            <div className="space-y-6">
              <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                <Image
                  src="/orion_hero3.jpg"
                  alt="Knoz Al-Najah Project"
                  width={1000}
                  height={800}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold py-2">Palm Island Residential Complex</h3>
                  <p className="text-gray-400">Award-winning luxury development in Dubai</p>
                </div>
              </div>
              
              <Alert className="bg-blue-500/10 border border-blue-500/30">
                <Zap className="h-4 w-4 text-blue-400" />
                <AlertTitle>Leadership Recognition</AlertTitle>
                <AlertDescription>
                  Knoz Al-Najah was awarded "Construction Company of the Year" three consecutive times (2022-2024)
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black rounded-xl p-4 border border-gray-800 flex flex-col items-center text-center">
                  <div className="rounded-full bg-green-500/20 p-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-semibold">120+</h4>
                  <p className="text-sm text-gray-400">Completed Projects</p>
                </div>
                
                <div className="bg-black rounded-xl p-4 border border-gray-800 flex flex-col items-center text-center">
                  <div className="rounded-full bg-orange-500/20 p-3 mb-2">
                    <Globe className="h-6 w-6 text-orange-400" />
                  </div>
                  <h4 className="font-semibold">12</h4>
                  <p className="text-sm text-gray-400">Countries of Operation</p>
                </div>
              </div>
            </div>
          </ScrollContent>
        </div>
      </section>

      {/* Orion Section */}
      <section className="relative p-15 min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-24 bg-gradient-to-b from-transparent to-black/20">
        <ScrollContent
          contentID="orion_title"
          range={{ in: 1500, out: 2800 }}
          class="text-5xl font-bold mb-16 text-center w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Orion Engineering Consultants</h2>
          <p className="text-lg text-gray-400">Engineering Excellence & Innovation</p>
        </ScrollContent>

        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          <ScrollContent
            contentID="orion_bg"
            range={{ in: 1500, out: 2800 }}
            class="w-full h-auto"
            direction="left"
          >
            <div className="space-y-6">
              <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                <Image
                  src="/orion_hero1.jpg"
                  alt="Orion Engineering Project"
                  width={1000}
                  height={800}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Smart City Infrastructure Project</h3>
                  <p className="text-gray-400">Pioneering sustainable urban development</p>
                </div>
              </div>
              
              <Alert className="bg-purple-500/10 border border-purple-500/30">
                <Award className="h-4 w-4 text-purple-400" />
                <AlertTitle>Excellence in Engineering</AlertTitle>
                <AlertDescription>
                  Orion's innovative structural design system has been adopted as an industry standard in 7 countries
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black rounded-xl p-4 border border-gray-800 flex flex-col items-center text-center">
                  <div className="rounded-full bg-purple-500/20 p-3 mb-2">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">25+</h4>
                  <p className="text-sm text-gray-400">Years of Expertise</p>
                </div>
                
                <div className="bg-black rounded-xl p-4 border border-gray-800 flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-500/20 p-3 mb-2">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">450+</h4>
                  <p className="text-sm text-gray-400">Engineering Professionals</p>
                </div>
              </div>
            </div>
          </ScrollContent>

          <ScrollContent
            contentID="orion_content"
            range={{ in: 1500, out: 2800 }}
            class="w-full h-auto"
            direction="right"
          >
            <Card className="bg-black border-white text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-3 py-1">
                    Engineering Expertise
                  </Badge>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 px-3 py-1">
                    Sustainability Focused
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl">Engineering Innovation</CardTitle>
                <CardDescription className="text-gray-400 text-lg">Transforming concepts into extraordinary structures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Orion Engineering Consultants has built a reputation for delivering world-class engineering solutions
                  across diverse sectors. Our team of specialists combines technical expertise with innovative thinking
                  to overcome complex challenges and create structures that stand the test of time while embracing
                  sustainable practices.
                </p>
                
                <Tabs defaultValue="expertise" className="mt-6">
                  <TabsList className="grid grid-cols-3 bg-gray-800/50">
                    <TabsTrigger value="expertise">Expertise</TabsTrigger>
                    <TabsTrigger value="innovations">Innovations</TabsTrigger>
                    <TabsTrigger value="approach">Our Approach</TabsTrigger>
                  </TabsList>
                  <TabsContent value="expertise" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: <Building2 className="h-5 w-5" />, title: "Structural Engineering" },
                        { icon: <Zap className="h-5 w-5" />, title: "MEP Systems" },
                        { icon: <Globe className="h-5 w-5" />, title: "Environmental Engineering" },
                        { icon: <Shield className="h-5 w-5" />, title: "Geotechnical Solutions" },
                      ].map((service, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-white/5">
                          <div className="p-2 rounded-full bg-purple-500/20 text-purple-400">{service.icon}</div>
                          <div>
                            <h4 className="font-medium">{service.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="innovations" className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { name: "ModuFlex Building System", desc: "Modular construction for rapid deployment" },
                        { name: "Eco-Conscious Materials Research", desc: "Reducing carbon footprint in construction" },
                        { name: "Digital Twin Technology", desc: "Real-time monitoring of structural integrity" },
                        { name: "Seismic Isolation Techniques", desc: "Advanced protection against earthquakes" },
                      ].map((innovation, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                          <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                            <Zap className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">{innovation.name}</h4>
                            <p className="text-sm text-gray-400">{innovation.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="approach" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      {[
                        { value: "Client-Centered", desc: "Solutions tailored to client needs and vision" },
                        { value: "Collaborative", desc: "Cross-disciplinary teamwork for integrated design" },
                        { value: "Data-Driven", desc: "Decisions based on analytical models and simulations" },
                        { value: "Future-Ready", desc: "Anticipating trends and incorporating adaptability" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-medium">{item.value}</h4>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>80+ Active Projects Worldwide</span>
                </div>
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                  Engineering Portfolio <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </ScrollContent>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact_section" className="relative p-15 min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-24 bg-gradient-to-b from-black/20 to-black/40">
        <ScrollContent
          contentID="contact_title"
          range={{ in: 2700, out: 4000 }}
          class="text-5xl font-bold mb-16 text-center w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Contact Our Team</h2>
          <p className="text-lg text-gray-400">Let's build something extraordinary together</p>
        </ScrollContent>

        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          <ScrollContent
            contentID="contact_form"
            range={{ in: 2700, out: 4000 }}
            class="w-full h-auto"
            direction="left"
          >
            <Card className="bg-black border-white text-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Get in Touch</CardTitle>
                <CardDescription className="text-gray-400 text-lg">Fill out the form below and our team will contact you shortly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" className="bg-gray-800/50 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" className="bg-gray-800/50 border-gray-700" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-800/50 border-gray-700" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" className="bg-gray-800/50 border-gray-700" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
                  <select id="projectType" className="w-full rounded-md bg-gray-800/50 border-gray-700 text-white p-2">
                    <option>Commercial Construction</option>
                    <option>Residential Development</option>
                    <option>Infrastructure Project</option>
                    <option>Engineering Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-gray-800/50 border-gray-700 min-h-32" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="subscribe" className="rounded" />
                  <label htmlFor="subscribe" className="text-sm text-gray-400">Subscribe to our newsletter for updates</label>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 px-8 rounded-lg font-medium">
                  Submit Inquiry
                </Button>
              </CardFooter>
            </Card>
          </ScrollContent>

          <ScrollContent
            contentID="contact_info"
            range={{ in: 2700, out: 4000 }}
            class="w-full h-auto"
            direction="right"
          >
            <div className="space-y-6">
              <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                <Image
                  src="/orion_serviceInterior.jpg"
                  alt="Our Office"
                  width={1000}
                  height={800}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Our Offices</h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        city: "Dubai, UAE", 
                        address: "Knoz-Orion Tower, Sheikh Zayed Road", 
                        phone: "+971 4 123 4567",
                        email: "dubai@knozorion.com"
                      },
                      {
                        city: "Riyadh, KSA", 
                        address: "King Fahd Road, Al Olaya District", 
                        phone: "+966 11 987 6543",
                        email: "riyadh@knozorion.com"
                      },
                      {
                        city: "Doha, Qatar", 
                        address: "West Bay Business District", 
                        phone: "+974 4412 3456",
                        email: "doha@knozorion.com"
                      }
                    ].map((office, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/5 space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-red-400" /> {office.city}
                        </h4>
                        <p className="text-gray-400 text-sm pl-6">{office.address}</p>
                        <div className="grid grid-cols-2 gap-2 pl-6">
                          <p className="text-sm flex items-center gap-1">
                            <Phone className="h-3 w-3 text-gray-400" /> {office.phone}
                          </p>
                          <p className="text-sm flex items-center gap-1">
                            <Mail className="h-3 w-3 text-gray-400" /> {office.email}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <br />
                  {/* <div className="pt-4 border-t border-gray-800">
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                      <p>Monday - Friday:</p>
                      <p>8:30 AM - 5:30 PM</p>
                      <p>Saturday:</p>
                      <p>9:00 AM - 1:00 PM</p>
                      <p>Sunday:</p>
                      <p>Closed</p>
                    </div>
                  </div> */}
                </div>
              </div>
              
         
            </div>
          </ScrollContent>
        </div>
      </section>

      {/* Footer */}
      <section className="absolute flex flex-col p-15 h-10 w-full overflow-hidden justify-center items-center bottom-[50px] lg:bottom-[0px]">
        <ScrollContent
          contentID="footer"
          range={{ in: 2700, out: 4000 }}
          class="w-full h-auto flex justify-center items-center text-sm text-gray-300"
          direction="left"
        >
          © 2025 Knoz Al-Najah & Orion Engineering Consultants. All rights
          reserved.
        </ScrollContent>

        <ScrollContent
          contentID="footer_cwa"
          range={{ in: 2700, out: 4000 }}
          class="w-full h-auto"
          direction="left"
        >
          {/* CodeWithAli Branding - Same Line */}
          <div className="mt-6 flex items-center justify-center gap-2 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link
              href="https://codewithali.com/"
              draggable={false}
              className="font-semibold"
            >
              <img
                src="/codewithali.png"
                className="h-10 w-auto mix-blend-screen isolate inline"
                alt="CodeWithAli Logo"
                draggable={false}
              />
              <p className="text-slate-400 text-sm inline">
                CodeWithAli
                <GradientText>CodeWithAli</GradientText>
              </p>
            </Link>
          </div>
        </ScrollContent>
      </section>
    </DynamicBackground>
  );
}