"use client"

import { useEffect, useRef, useState } from "react"

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
  const [mounted, setMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if screen width is desktop size (1024px or larger)
    setIsDesktop(window.innerWidth >= 1024)
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!mounted) return

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
    const symbols = [
      // Card symbols
      "♠", "♥", "♦", "♣", "A", "K", "Q", "J",
      // Game theory symbols
      "Σ", "∀", "∃", "∈", "⊂", "∩", "∪", "∅",
      // Chess pieces
      "♔", "♕", "♖", "♗", "♘", "♙",
      // Dice faces
      "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"
    ]

    // Create a seeded random number generator
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed++) * 10000
      return x - Math.floor(x)
    }

    // Initialize icons with deterministic positions
    const icons: FloatingIcon[] = []
    for (let i = 0; i < 60; i++) {
      const seed = i * 0.1
      // Adjust size based on screen size
      const baseSize = isDesktop ? 20 : 12 // Larger base size for desktop
      const sizeVariation = isDesktop ? 30 : 20 // Larger variation for desktop
      icons.push({
        x: seededRandom(seed) * canvas.width,
        y: seededRandom(seed + 1) * canvas.height,
        size: baseSize + seededRandom(seed + 2) * sizeVariation,
        speed: 0.3 + seededRandom(seed + 3) * 0.5,
        symbol: symbols[Math.floor(seededRandom(seed + 4) * symbols.length)],
        opacity: 0.15 + seededRandom(seed + 5) * 0.2,
        rotation: seededRandom(seed + 6) * Math.PI * 2,
        rotationSpeed: (seededRandom(seed + 7) - 0.5) * 0.02,
      })
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear with a semi-transparent black to create a trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      icons.forEach((icon) => {
        ctx.save()
        ctx.translate(icon.x, icon.y)
        ctx.rotate(icon.rotation)
        ctx.font = `${icon.size}px serif`

        // Add glow effect to red suits and special symbols
        if (icon.symbol === "♥" || icon.symbol === "♦" || 
            icon.symbol === "♔" || icon.symbol === "♕" ||
            icon.symbol === "Σ" || icon.symbol === "∀") {
          ctx.fillStyle = `rgba(255, 0, 0, ${icon.opacity})`
          ctx.shadowColor = "rgba(255, 0, 0, 0.5)"
          ctx.shadowBlur = isDesktop ? 20 : 15 // Larger glow for desktop
        } else {
          ctx.fillStyle = `rgba(255, 221, 208, ${icon.opacity})`
          ctx.shadowColor = "rgba(255, 221, 208, 0.3)"
          ctx.shadowBlur = isDesktop ? 15 : 10 // Larger glow for desktop
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
          icon.x = seededRandom(Date.now() + icon.x) * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [mounted, isDesktop]) // Add isDesktop to dependencies

  // Don't render anything on the server
  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.4,
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
        aria-hidden="true" 
      />
    </div>
  )
}
