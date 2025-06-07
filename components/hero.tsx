"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

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
      "⚀", "⚁", "⚂", "⚃", "⚄", "⚅",
      // Set theory symbols
      "ℝ", "ℕ", "ℤ", "ℚ", "ℂ",
      // Calculus symbols
      "∫", "∂", "∞", "∇", "∑", "∏","d/dx", "∂/∂x",
      // Currency symbols
      "₹", "$", "€", "£", "¥",
    ]
    const colors = ["#ff0000", "#FFFDD0"] // Red and cream colors in 50:50 proportion

    // Create an evenly distributed set of particles
    const totalParticles = window.innerWidth > 1024 ? 120 : 60
    const gridSize = window.innerWidth > 1024 ? 12 : 10
    const particlesPerCell = Math.ceil(totalParticles / (gridSize * gridSize))
    
    for (let cellY = 0; cellY < gridSize; cellY++) {
      for (let cellX = 0; cellX < gridSize; cellX++) {
        for (let p = 0; p < particlesPerCell; p++) {
          const cellWidth = canvas.width / gridSize
          const cellHeight = canvas.height / gridSize
          
          // Calculate base position for the cell
          const baseX = cellX * cellWidth
          const baseY = cellY * cellHeight
          
          // Add random offset within the cell, but keep some margin from edges
          const margin = window.innerWidth > 1024 ? 20 : 15
          const randomX = baseX + margin + Math.random() * (cellWidth - 2 * margin)
          const randomY = baseY + margin + Math.random() * (cellHeight - 2 * margin)
          
          particles.push({
            x: randomX,
            y: randomY,
            size: Math.random() * (window.innerWidth > 1024 ? 35 : 15) + (window.innerWidth > 1024 ? 15 : 8),
            speedX: (Math.random() - 0.5) * (window.innerWidth > 1024 ? 1.2 : 0.8),
            speedY: (Math.random() - 0.5) * (window.innerWidth > 1024 ? 1.2 : 0.8),
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.03,
          })
        }
      }
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

        // Update position with bouncing
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isClient])

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Playing Cards Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/playing-cards-red-glow.png"
          alt="Playing cards with red glow"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-black/50" /> */}

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
            The <span className="text-red-600">KGPian</span> Game Theory Society
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
          <Link
            href="/games"
            className="px-8 py-3 bg-transparent border-2 border-cream/40 text-cream rounded-md text-lg font-medium hover:border-cream/70 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,221,0.3)] cursor-pointer hover:scale-105 transform"
          >
            Explore Games
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 bg-transparent border-2 border-cream/40 text-cream rounded-md text-lg font-medium hover:border-cream/70 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,221,0.3)] cursor-pointer hover:scale-105 transform"
          >
            Explore Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
