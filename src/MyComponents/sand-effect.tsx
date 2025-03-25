"use client"

import { useEffect, useRef } from "react"

type SandIntensity = "light" | "medium" | "heavy"

interface SandEffectProps {
  intensity?: SandIntensity
}

interface Sanddrop {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function SandEffect({ intensity = "medium" }: SandEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const raindrops: Sanddrop[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Raindrop factory function
    const createRaindrop = (): Sanddrop => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        length: Math.random() * 2 + 0.5,
        speed: Math.random() * 10 + 5,
        opacity: Math.random() * 0.4 + 0.3,
        
        update() {
          this.y += this.speed
          // Makes effect wavey --> wind effect
          this.x += Math.sin(this.y / 50) * 0.5
          if (this.y > canvas.height) {
            this.y = Math.random() * -100
            this.x = Math.random() * canvas.width
          }
        },
        
        draw(ctx: CanvasRenderingContext2D) {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.x, this.y + this.length)
          ctx.strokeStyle = `rgba(204, 138, 17, ${this.opacity})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    }

    // Create raindrops based on intensity
    const dropCount: Record<SandIntensity, number> = {
      light: 1500,
      medium: 2500,
      heavy: 5000,
    }

    for (let i = 0; i < dropCount[intensity]; i++) {
      raindrops.push(createRaindrop())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      raindrops.forEach((drop) => {
        drop.update()
        drop.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [intensity])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />
}