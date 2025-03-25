"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import GradientText from "@/MyComponents/GradientText";
import Contact from "@/MyComponents/Contact";

type NavItem = {
  label: string;
  href: string;
};

type ServiceItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type ProjectItem = {
  title: string;
  location: string;
  category: string;
  year: number;
  image: string;
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavbarSolid(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: -50, opacity: 0 },
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
  };

  const slideFromRight = {
    hidden: { x: 50, opacity: 0 },
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
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const constructionServices: ServiceItem[] = [
    {
      title: "Commercial Construction",
      description:
        "Innovative solutions for office buildings, retail spaces, and industrial facilities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <rect
            x="2"
            y="8"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17 8V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V8"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 12V16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12V16" stroke="currentColor" strokeWidth="2" />
          <path d="M16 12V16" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Residential Development",
      description:
        "Luxury homes and apartment complexes designed with modern living in mind.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <path
            d="M3 10.25V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V10.25"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 10L11.3659 2.63943C11.7056 2.36021 12.2944 2.36021 12.6341 2.63943L22 10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Infrastructure Projects",
      description:
        "Roads, bridges, and public facilities that connect communities and improve quality of life.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <path d="M4 19V7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 19V7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4 7C4 4.79086 5.79086 3 8 3H16C18.2091 3 20 4.79086 20 7"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M7 7L17 7" stroke="currentColor" strokeWidth="2" />
          <path d="M7 11L17 11" stroke="currentColor" strokeWidth="2" />
          <path d="M7 15L17 15" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const engineeringServices: ServiceItem[] = [
    {
      title: "Structural Engineering",
      description:
        "Advanced structural solutions that ensure safety, efficiency, and sustainability.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <path
            d="M12 3L21 8V16L12 21L3 16V8L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 3L12 21" stroke="currentColor" strokeWidth="2" />
          <path d="M21 8L3 16" stroke="currentColor" strokeWidth="2" />
          <path d="M3 8L21 16" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "MEP Systems",
      description:
        "Mechanical, electrical, and plumbing systems designed for optimal building performance.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <path d="M4 14H7" stroke="currentColor" strokeWidth="2" />
          <path d="M9 14H12" stroke="currentColor" strokeWidth="2" />
          <path d="M14 14H17" stroke="currentColor" strokeWidth="2" />
          <path d="M19 14H22" stroke="currentColor" strokeWidth="2" />
          <path d="M4 10H22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M13 6C13 4.34315 14.3431 3 16 3V3C17.6569 3 19 4.34315 19 6V10H13V6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 18C12 16.3431 10.6569 15 9 15V15C7.34315 15 6 16.3431 6 18V22H12V18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Design",
      description:
        "Eco-friendly approaches that minimize environmental impact and maximize energy efficiency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
          <path d="M12 3V7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M5.63605 5.63599L8.46448 8.46442"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 12H7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M5.63605 18.364L8.46448 15.5356"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" />
          <path
            d="M18.364 18.364L15.5356 15.5356"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M21 12H17" stroke="currentColor" strokeWidth="2" />
          <path
            d="M18.364 5.63599L15.5356 8.46442"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const projects: ProjectItem[] = [
    {
      title: "Azure Tower",
      location: "Dubai, UAE",
      category: "Commercial",
      year: 2023,
      image: "/hero_building.jpg",
    },
    {
      title: "Riverside Residences",
      location: "Abu Dhabi, UAE",
      category: "Residential",
      year: 2022,
      image: "/orion_hero1.jpg",
    },
    {
      title: "Central Business District",
      location: "Riyadh, KSA",
      category: "Infrastructure",
      year: 2024,
      image: "/orion_hero2.jpg",
    },
    {
      title: "Green Valley Complex",
      location: "Dubai, UAE",
      category: "Residential",
      year: 2023,
      image: "/orion_hero3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isNavbarSolid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className="text-blue-600 font-extrabold">KNOZ</span>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-red-600 font-medium">ORION</span>
            </div>
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isNavbarSolid ? "text-gray-900" : "text-gray-900"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </motion.nav>

          <Button
            variant="outline"
            className="hidden md:flex text-white border-black bg-blue-700  "
          >
            Get in Touch
          </Button>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-black">
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
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col justify-center items-center bg-blue-300"
      >
        <motion.div
          className="container mx-auto px-4 z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={fadeIn}
          >
            <span className="text-blue-600">Building</span> the future,
            <br />
            <span className="text-red-600">together</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            variants={fadeIn}
          >
            A strategic merger of two construction industry leaders, creating
            unparalleled expertise in building solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeIn}
          >
            <Button className="px-6 py-6 rounded-none font-medium flex items-center gap-2 bg-blue-900 text-white hover:bg-gray-800 transition-all">
              Our Services <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="px-6 py-6 rounded-none bg-white border-black text-black hover:bg-black hover:text-white"
            >
              View Projects
            </Button>
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
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-blue-600">Two companies</span>,
                <br />
                <span className="text-red-600">one vision</span>
              </h2>
              <p className="text-gray-600 mb-6">
                <span className="font-semibold text-blue-600">
                  Knoz Construction
                </span>{" "}
                and
                <span className="font-semibold text-red-600">
                  {" "}
                  Orion Engineering
                </span>{" "}
                have joined forces to create a unified company that combines
                decades of expertise in construction and engineering. With our
                combined strengths, we're setting new standards in the industry.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-blue-600">45+</p>
                  <p className="text-gray-500">Years Combined Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">200+</p>
                  <p className="text-gray-500">Projects Completed</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-none border-black text-black  text-white"
              >
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideFromRight}
              className="relative h-[400px] md:h-[500px]"
            >
              <Image
                src="/orion_hero1.jpg"
                alt="Construction site"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Featured Projects
              </h2>
              <p className="text-gray-600 max-w-xl">
                A showcase of our most innovative and impactful construction and
                engineering projects.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button className="bg-black hover:bg-gray-800 text-white">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[300px] md:h-[350px] bg-gray-100 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="bg-white text-black mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-white/80 text-sm">
                          {project.location}
                        </p>
                        <p className="text-white/80 text-sm">{project.year}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black"
                      >
                        View Project <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

     <Contact />

      {/* Footer */}
      <footer className="py-4 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center">
              <span className="text-blue-500 font-bold">KNOZ</span>
              <span className="mx-1 font-bold">|</span>
              <span className="text-red-500 font-bold">ORION</span>
            </div>

            <span className="h-4 w-px bg-gray-700 hidden md:block"></span>

            <p>
              &copy; {new Date().getFullYear()} KNOZ | ORION. All rights
              reserved.
            </p>

            <span className="h-4 w-px bg-gray-700 hidden md:block"></span>

            <Link
              href="https://codewithali.com/"
              draggable={false}
              className="font-semibold group transition-all duration-300 hover:scale-105 flex items-center"
            >
              <img
                src="/codewithali.png"
                className="h-6 w-auto mix-blend-screen isolate mr-2"
                alt="CodeWithAli Logo"
                draggable={false}
              />
              <p className="text-slate-600 group-hover:hidden">CodeWithAli</p>
              <p className="text-blue hidden group-hover:inline">
                <GradientText>CodeWithAli</GradientText>
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
