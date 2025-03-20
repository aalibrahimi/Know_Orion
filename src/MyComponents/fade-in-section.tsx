"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function FadeInSection({ children, delay = 0, direction = "up", className = "" }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // If the element is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        // No need to keep observing after it's visible
        if (domRef.current) observer.unobserve(domRef.current)
      }
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [])

  // Define transform based on direction
  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(20px)"
      case "down":
        return "translateY(-20px)"
      case "left":
        return "translateX(20px)"
      case "right":
        return "translateX(-20px)"
      default:
        return "translateY(20px)"
    }
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

