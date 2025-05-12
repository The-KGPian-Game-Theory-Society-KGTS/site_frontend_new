"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const games = [
  {
    id: 1,
    title: "Prisoner's Dilemma",
    description: "The classic game theory problem that explores cooperation and betrayal.",
    image: "/games/prisoners-dilemma.jpg",
    link: "https://ncase.me/prisoner/",
  },
  {
    id: 2,
    title: "Trust Game",
    description: "Learn about trust, reciprocity, and social cooperation through this interactive game.",
    image: "/games/trust-game.jpg",
    link: "https://ncase.me/trust/",
  },
  {
    id: 3,
    title: "Evolution of Trust",
    description: "Explore how trust evolves in different scenarios and environments.",
    image: "/games/evolution-of-trust.jpg",
    link: "https://ncase.me/trust/",
  },
]

export default function GamesSection() {
  return (
    <section id="games" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-10 mix-blend-multiply z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Interactive <span className="text-[#8B0000] filter drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]">Games</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Experience game theory concepts through these interactive games. Learn while having fun!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: game.id * 0.1 }}
            >
              <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="relative h-48">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif font-bold text-cream mb-2">{game.title}</h3>
                  <p className="text-cream/80">{game.description}</p>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2 bg-red-600/50 text-cream rounded flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    Play Now
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
