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
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
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
          style={{
            backgroundColor: scrollY > 50 ? "rgba(0,0,0,0.8)" : "transparent",
            backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
          }}
        >
          <div className="container flex h-24 items-center justify-between px-6 mx-auto">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-white flex items-center">
                <Image
                  src="/knoz.png"
                  alt="Knoz Logo"
                  width={100}
                  height={100}
                  className="h-auto w-15"
                />
                <span className="hidden md:inline-block font-bold text-xl pl-[10px]">
                  Knoz Al
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full gap-4"
                    style={{ width: scrollY > 100 ? "100%" : "0%" }}
                  ></span>
                </span>
              </div>

              <div className="h-8 w-px  bg-gray-200 hidden md:block" />

              <Image
                src="/orion_logo.png"
                alt="Orion Logo"
                width={100}
                height={100}
                className="h-auto w-10"
              />
              <span className="hidden md:inline-block font-bold text-xl">
                Orion Engineering
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{ width: scrollY > 100 ? "100%" : "0%" }}
                ></span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {["About Us", "Vision", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg font-medium text-white hover:text-white/80 transition-colors relative group"
                  >
                    {item}
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
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-all transform hover:scale-105">
              Discover Our Vision <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              Our Projects
            </button>
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
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
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
      <section className="relative grid grid-cols-2 p-15 h-screen w-full overflow-hidden justify-center items-center">
        <ScrollContent
          contentID="knozy"
          range={{ in: 500, out: 1500 }}
          class="text-4xl font-bold flex justify-center"
          direction="left"
        >
          Hehe KNOZ
        </ScrollContent>

        <ScrollContent
          contentID="knozy_bg"
          range={{ in: 500, out: 1500 }}
          class="w-full h-auto"
          direction="right"
        >
          <div className="bg-black w-full h-auto rounded-2xl">
            <Image
              src="/orion_hero3.jpg"
              alt="Orionhehe"
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </ScrollContent>
      </section>

      {/* Orion Section */}
      <section className="relative grid grid-cols-2 p-15 h-screen w-full overflow-hidden justify-center items-center">
        <ScrollContent
          contentID="oreo"
          range={{ in: 1500, out: 2500 }}
          class="text-4xl font-bold flex justify-center"
          direction="left"
        >
          Hehe ORION
        </ScrollContent>

        <ScrollContent
          contentID="oreo_bg"
          range={{ in: 1500, out: 2500 }}
          class="w-full h-auto"
          direction="right"
        >
          <div className="bg-black w-full h-auto rounded-2xl">
            <Image
              src="/orion_hero1.jpg"
              alt="Orionhehe2"
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </ScrollContent>
      </section>

      {/* Contact Section */}
      <section className="relative grid grid-cols-2 p-15 h-screen w-full overflow-hidden justify-center items-center">
        <ScrollContent
          contentID="contacto"
          range={{ in: 2500, out: 3500 }}
          class="text-4xl font-bold flex justify-center"
          direction="left"
        >
          <div className="grid grid-rows-2">
            <p>Hehe CONTACTO</p>
          </div>
        </ScrollContent>

        <ScrollContent
          contentID="contacto_bg"
          range={{ in: 2500, out: 3500 }}
          class="w-full h-auto"
          direction="right"
        >
          <div className="bg-black w-full h-auto rounded-2xl">
            <Image
              src="/orion_serviceInterior.jpg"
              alt="Orionhehe3"
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </ScrollContent>
      </section>

      {/* Footer */}
      <section className="absolute flex flex-col p-15 h-10 w-full overflow-hidden justify-center items-center bottom-[100px]">
        <ScrollContent
          contentID="footer"
          range={{ in: 2500, out: 3500 }}
          class="w-full h-auto flex justify-center items-center text-sm text-gray-300"
          direction="left"
        >
          © 2025 Knoz Al-Najah & Orion Engineering Consultants. All rights
          reserved.
        </ScrollContent>

        <ScrollContent
          contentID="footer_cwa"
          range={{ in: 2500, out: 3500 }}
          class="w-full h-auto"
          direction="left"
        >
          {/* CodeWithAli Branding - Same Line */}
          <div className="mt-6 flex items-center justify-center gap-2 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link
              href="https://codewithali.com/"
              target="_blank"
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
