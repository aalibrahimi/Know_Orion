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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/MyComponents/Footer";
import SandEffect from "@/MyComponents/sand-effect";
import Navbar from "@/MyComponents/navbar";
import Contact from "@/MyComponents/Contact";

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
        <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col justify-center items-center bg-blue-300"
      >
        
        <Image src="/construction_frame.svg" width={1000} height={1000} className="w-full h-screen absolute" alt="Construction Frame" draggable={false} />
        <div className="w-[50px] h-screen absolute overflow-hidden inset-1/5 top-0">
          <SandEffect intensity={"heavy"} />
          <SandEffect intensity={"heavy"} />
        </div>
        <div className="w-[50px] h-screen absolute overflow-hidden right-130">
          <SandEffect intensity={"heavy"} />
          <SandEffect intensity={"heavy"} />
        </div>


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
            <Link href="#contact">
              <Button className="px-6 py-6 rounded-none font-medium flex items-center gap-2 bg-blue-900 text-white hover:bg-gray-800 transition-all">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                className="px-6 py-6 rounded-none bg-white border-black text-black hover:bg-black hover:text-white"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeIn}
          >
            <div className="flex justify-center items-center mt-2 gap-4">
            <Link href="https://knoz.fly.dev/" target="_blank">
              <div className="bg-white border-black border-2 rounded-full hover:bg-blue-400/80 object-cover w-12 h-12 flex justify-center items-center">
                <Image src="/KnozIcon.svg" alt="Knoz Icon" width={1000} height={1000} className="w-15 h-auto" draggable={false} />
              </div>
            </Link>

            <Link href="https://www.orionuae.com/" target="_blank">
              <div className="bg-white border-red-500 border-2 rounded-full hover:bg-red-700/65 hover:contrast-175 object-cover w-12 h-12 flex justify-center items-center">
                <Image src="/OrionIcon.svg" alt="Knoz Icon" width={1000} height={1000} className="w-15 h-auto" draggable={false} />
              </div>
            </Link>
            </div>
          </motion.div>
        </motion.div>



  {/* Stats indicators */}
  <motion.div 
      className="flex flex-wrap justify-center gap-8 mt-12"
      variants={fadeIn}
      transition={{ delay: 0.4 }}
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-blue-700">45+</span>
        <span className="text-sm text-gray-600">Years Experience</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-red-700">200+</span>
        <span className="text-sm text-gray-600">Projects Completed</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-800">350+</span>
        <span className="text-sm text-gray-600">Team Members</span>
      </div>
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
     {/* Enhanced About Section with Company Details */}
<section id="about" className="py-20 md:py-32 bg-white">
  <div className="container mx-auto px-4">
    {/* Section heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-blue-600">Two companies</span>,
        <span className="text-red-600"> one vision</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A powerful synergy of construction and engineering excellence, delivering integrated solutions for the most complex building challenges.
      </p>
    </div>

    {/* Two-column layout for about section */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideFromLeft}
        className="relative h-[400px] md:h-[500px]"
      >
        <Image
          src="/orion_hero1.jpg"
          alt="Construction site"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideFromRight}
      >
        <div className="flex gap-2 items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">KNOZ</span>
          <span className="text-xl text-gray-700">Construction</span>
        </div>
        <p className="text-gray-600 mb-6">
          Founded in 1995, KNOZ Construction has established itself as a premier construction firm in the Middle East. Specializing in commercial and residential developments, KNOZ has built a reputation for architectural excellence and timely project delivery.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">25+ years of construction experience</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">150+ residential and commercial projects</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">Operations across UAE, Saudi Arabia, and Qatar</span>
          </li>
        </ul>
      </motion.div>
    </div>

    {/* ORION section - columns reversed */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideFromLeft}
        className="order-2 md:order-1"
      >
        <div className="flex gap-2 items-center mb-4">
          <span className="text-2xl font-bold text-red-600">ORION</span>
          <span className="text-xl text-gray-700">Engineering</span>
        </div>
        <p className="text-gray-600 mb-6">
          Since 2005, ORION Engineering has been at the forefront of structural engineering and innovative building solutions. With a team of expert engineers and cutting-edge technology, ORION specializes in sustainable design and complex infrastructure projects.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">20+ years of engineering excellence</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">15+ award-winning infrastructure designs</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-gray-700">Industry leaders in sustainable building solutions</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideFromRight}
        className="relative h-[400px] md:h-[500px] order-1 md:order-2"
      >
        <Image
          src="/orion_hero2.jpg"
          alt="Engineering work"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
{/* Combined Unison Section - After the ORION section */}
<motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mt-16 p-8 bg-blue-50 rounded-lg"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/orion_hero3.jpg"
            alt="KNOZ ORION Unified"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">KNOZ</span>
            <span className="text-2xl font-bold">|</span>
            <span className="text-2xl font-bold text-red-600">ORION</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-black">The Power of Unified Excellence</h3>
          <p className="text-gray-600 mb-6">
            The 2024 merger of KNOZ Construction and ORION Engineering creates a comprehensive building solutions 
            provider unlike any other in the region. Our integrated approach eliminates traditional barriers between 
            design and construction, delivering projects with unprecedented efficiency and innovation.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-700">Seamless integration of design and construction teams</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-700">Reduced project timelines and fewer complications</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-700">Combined expertise for revolutionary building solutions</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-gray-700">Single point of accountability from concept to completion</span>
            </li>
          </ul>
          <Button
            variant="outline"
            className="rounded-none border-black text-black bg-gradient-to-r from-blue-400 via-blue-500 to-red-400 hover:text-white"
          >
            Our Unified Approach
          </Button>
        </div>
      </div>
    </motion.div>
   
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

     <Contact header="Contact Our Team" desc="Let's build something extraordinary together" btnText="Submit Inquiery" />

      {/* Footer */}
     <Footer />
    </main>
  );
}
