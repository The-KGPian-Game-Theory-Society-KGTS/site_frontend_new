"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener("resize", resizeCanvas)

    // Create particles for the background effect
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      shape: string
      rotation: number
      rotationSpeed: number
    }[] = []

    const shapes = [
      // Card symbols
      "♠", "♥", "♦", "♣", "A", "K", "Q", "J",
      // Game theory symbols
      "Σ", "∀", "∃", "∈", "⊂", "∩", "∪", "∅",
      // Chess pieces (using Unicode chess symbols)
      "♔", "♕", "♖", "♗", "♘", "♙",
      // Dice faces
      "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"
    ]
    const colors = ["#ff0000", "#FFFDD0", "#ff3333"]

    // Create an evenly distributed set of particles
    for (let i = 0; i < 100; i++) {
      // Divide the screen into a grid and place particles randomly within each cell
      const gridSize = 10 // 10x10 grid
      const cellWidth = canvas.width / gridSize
      const cellHeight = canvas.height / gridSize
      
      // Calculate which cell this particle belongs to
      const cellX = i % gridSize
      const cellY = Math.floor(i / gridSize)
      
      // Add some randomness within the cell
      const randomX = Math.random() * cellWidth
      const randomY = Math.random() * cellHeight
      
      particles.push({
        x: cellX * cellWidth + randomX,
        y: cellY * cellHeight + randomY,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.font = `${particle.size}px serif`
        ctx.fillStyle = particle.color

        // Add glow effect to text
        if (particle.shape === "♥" || particle.shape === "♦" || 
            particle.shape === "♔" || particle.shape === "♕" ||
            particle.shape === "Σ" || particle.shape === "∀") {
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 25
        }

        ctx.fillText(particle.shape, 0, 0)
        ctx.restore()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Keep particles within bounds
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isClient])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Playing Cards Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/playing-cards-red-glow.png"
          alt="Playing cards with red glow"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Background Canvas for Floating Symbols */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 opacity-80" />

      {/* Vignette Effect */}
      <div className="absolute inset-0 z-30 bg-radial-gradient opacity-70" />

      <div className="container mx-auto px-4 z-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-4 tracking-tight text-glow-red">
            The <span className="text-[#8B0000]">KGPian</span> Game Theory Society
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto">
            Where strategy meets probability, and every decision counts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button className="px-8 py-3 bg-[#8B0000] text-cream rounded-md text-lg font-medium hover:bg-[#A52A2A] transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:shadow-[0_0_25px_rgba(139,0,0,0.7)] cursor-pointer hover:scale-105 transform">
            Join Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-cream/40 text-cream rounded-md text-lg font-medium hover:border-cream/70 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,221,0.3)] cursor-pointer hover:scale-105 transform">
            Explore Games
          </button>
        </motion.div>
      </div>
    </section>
  )
}
