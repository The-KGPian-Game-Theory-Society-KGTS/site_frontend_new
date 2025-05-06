"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
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

    const shapes = ["♠", "♥", "♦", "♣", "A", "K", "Q", "J"]
    const colors = ["#ff0000", "#FFFDD0", "#ff3333"]

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
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
        if (particle.shape === "♥" || particle.shape === "♦") {
          ctx.shadowColor = "#ff0000"
          ctx.shadowBlur = 15
        }

        ctx.fillText(particle.shape, 0, 0)
        ctx.restore()

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

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
  }, [])

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
      <canvas ref={canvasRef} className="absolute inset-0 z-20 opacity-50" />

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#8B0000] filter drop-shadow-[0_0_10px_rgba(139,0,0,0.8)]">
                ♠
              </div>
            </div>
            <p className="text-cream/90">Game Theory</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#8B0000] filter drop-shadow-[0_0_10px_rgba(139,0,0,0.8)]">
                ♥
              </div>
            </div>
            <p className="text-cream/90">Workshops</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#8B0000] filter drop-shadow-[0_0_10px_rgba(139,0,0,0.8)]">
                ♦
              </div>
            </div>
            <p className="text-cream/90">Competitions</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#8B0000] filter drop-shadow-[0_0_10px_rgba(139,0,0,0.8)]">
                ♣
              </div>
            </div>
            <p className="text-cream/90">Research</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
