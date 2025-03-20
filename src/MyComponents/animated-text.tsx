"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  texts: string[]
  className?: string
  speed?: number
}

export default function AnimatedText({ texts, className = "", speed = 50 }: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Reset animation when not in view
    if (!inView) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setDisplayText("")
      setIsDeleting(false)
      return
    }

    const currentText = texts[currentTextIndex]

    // Handle typing and deleting animation
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        // Still typing
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }, speed)
        timeoutRef.current = timeout
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1500)
        timeoutRef.current = timeout
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        // Still deleting
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1))
        }, speed / 2)
        timeoutRef.current = timeout
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
      }
    }
  }, [displayText, isDeleting, currentTextIndex, texts, inView, speed])

  return (
    <div ref={ref} className={className}>
      <span>{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}

