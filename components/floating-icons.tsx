"use client"

import { useEffect, useRef } from "react"

type FloatingIcon = {
  x: number
  y: number
  size: number
  speed: number
  symbol: string
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Create floating icons
    const symbols = ["♠", "♥", "♦", "♣", "A", "K", "Q", "J", "10"]
    const icons: FloatingIcon[] = []

    for (let i = 0; i < 20; i++) {
      icons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.1,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      icons.forEach((icon) => {
        ctx.save()
        ctx.translate(icon.x, icon.y)
        ctx.rotate(icon.rotation)
        ctx.font = `${icon.size}px serif`

        // Add glow effect to red suits
        if (icon.symbol === "♥" || icon.symbol === "♦") {
          ctx.fillStyle = "#ff0000"
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 15
        } else {
          ctx.fillStyle = `rgba(255, 221, 208, ${icon.opacity})`
        }

        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(icon.symbol, 0, 0)
        ctx.restore()

        // Update position
        icon.y += icon.speed
        icon.rotation += icon.rotationSpeed

        // Reset position if out of screen
        if (icon.y > canvas.height + icon.size) {
          icon.y = -icon.size
          icon.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10 opacity-30" aria-hidden="true" />
}
