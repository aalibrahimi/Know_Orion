"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoadingAnimation from "@/components/loading-animation"
import AnimatedText from "@/MyComponents/animated-text"
import DynamicBackground from "@/MyComponents/dynamic-background"
import FadeInSection from "@/MyComponents/fade-in-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <DynamicBackground>
      <h3>Home</h3>
    </DynamicBackground>
  )
}

