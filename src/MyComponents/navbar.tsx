// components/Navbar.jsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "@/i18n/navigation"

export default function Navbar({ isNavbarSolid, sectionInView }:any) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isNavbarSolid ? "bg-black shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6 mx-auto">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold text-white flex items-center">
            <Image
              src="/knoz.png"
              alt="Knoz Logo"
              width={100}
              height={100}
              className="h-auto w-15 transition-transform duration-300 hover:scale-105"
            />
            <span className="hidden md:inline-block font-bold text-xl pl-[10px] relative group">
              Knoz Al
              <span
                className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                style={{ width: isNavbarSolid ? "100%" : "0%" }}
              ></span>
            </span>
          </div>

          <div className="h-8 w-px bg-gray-200 hidden md:block" />

          <Image
            src="/orion_logo.png"
            alt="Orion Logo"
            width={100}
            height={100}
            className="h-auto w-10 transition-transform duration-300 hover:scale-105"
          />
          <span className="hidden md:inline-block font-bold text-xl relative group">
            Orion Engineering
            <span
              className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
              style={{ width: isNavbarSolid ? "100%" : "0%" }}
            ></span>
          </span>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["About Us", "Vision", "Services", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-white hover:text-white/80 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>

        <div className="md:hidden">
          <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
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
  )
}