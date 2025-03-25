"use client"

import { useEffect, useRef } from "react"

type RainIntensity = "light" | "medium" | "heavy"

interface RainEffectProps {
  intensity?: RainIntensity
}

interface Raindrop {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function RainEffect({ intensity = "medium" }: RainEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const raindrops: Raindrop[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Raindrop factory function
    const createRaindrop = (): Raindrop => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        length: Math.random() * 2 + 0.5,
        speed: Math.random() * 3 + 2,
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
    const dropCount: Record<RainIntensity, number> = {
      light: 100,
      medium: 200,
      heavy: 10000,
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