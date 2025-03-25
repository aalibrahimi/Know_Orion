"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavbarSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
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
            <Link href="https://knoz.fly.dev/" target="_blank">
              <span className="text-blue-600 font-extrabold flex justify-center items-center hover:scale-105 transition-transform duration-300">
                <Image
                  src="/knoz.png"
                  alt="Knoz Logo"
                  width={1000}
                  height={1000}
                  className="w-10 h-auto inline mb-1"
                />
                <p className="inline ml-1">KNOZ</p>
              </span>
            </Link>
            <Separator orientation="vertical" className="h-8 w-0.5" />
            <Link href="https://www.orionuae.com/" target="_blank">
              <span className="text-red-600 font-medium flex justify-center items-center hover:scale-105 transition-transform duration-300">
                <Image
                  src="/orion_logo.png"
                  alt="Orion Logo"
                  width={1000}
                  height={1000}
                  className="w-8 h-auto inline"
                />
                <p className="inline ml-1">ORION</p>
              </span>
            </Link>
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
              className={`text-md transition-all duration-100 relative group ${
                isNavbarSolid
                  ? "text-gray-900 font-medium"
                  : "text-gray-900 font-bold"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>
        <Link href="mailto:Knozalnajah@gmail.com" className="hidden md:block">
          <Button
            variant="outline"
            className="text-white border-black bg-blue-700"
          >
            Get in Touch
          </Button>
        </Link>
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-black"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
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
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-gray-900 font-medium text-lg py-2 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="mailto:Knozalnajah@gmail.com" 
                  onClick={closeMenu}
                  className="mt-2"
                >
                  <Button
                    variant="outline"
                    className="w-full text-white border-black bg-blue-700"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}