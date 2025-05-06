"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const games = [
  {
    id: 1,
    title: "Prisoner's Dilemma",
    description: "Experience the classic game theory scenario where cooperation and betrayal determine your fate.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Ultimatum Game",
    description: "Test your negotiation skills in this economic game about fairness and strategic offers.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Stag Hunt",
    description: "A coordination game that explores the tension between social cooperation and individual safety.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Public Goods Game",
    description: "Explore the dynamics of group contributions and free-riding in this economic experiment.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Advanced",
  },
]

export default function GamesSection() {
  return (
    <section id="games" className="py-20 bg-gradient-to-b from-red-950/30 to-black relative">
      <div className="absolute inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-10 mix-blend-multiply" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Strategy <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Games</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Test your strategic thinking with our collection of interactive games based on game theory principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.slice(0, 3).map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-cream font-serif font-bold text-xl">{game.title}</div>
                <div className="absolute top-4 right-4 bg-red-600/80 text-cream text-xs px-2 py-1 rounded shadow-[0_0_10px_rgba(255,0,0,0.4)]">
                  {game.difficulty}
                </div>
              </div>

              <div className="p-4">
                <p className="text-cream/80 text-sm">{game.description}</p>

                <button className="mt-4 w-full py-2 bg-red-600/50 text-cream rounded flex items-center justify-center hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                  <span>Play Now</span>
                  <ExternalLink size={14} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/games"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-red-600/50 text-cream rounded-md hover:border-red-500 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            <span>Explore All Games</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-900/20 via-red-800/30 to-red-900/20 rounded-lg p-8 text-center border border-red-600/20">
          <h3 className="text-2xl font-serif font-bold text-cream mb-4">Game Theory Tournament</h3>
          <p className="text-cream/80 max-w-2xl mx-auto mb-6">
            Join our monthly tournament where participants compete in various game theory scenarios. Test your strategic
            thinking against fellow enthusiasts and win exciting prizes!
          </p>
          <button className="px-8 py-3 bg-red-600 text-cream rounded-md text-lg font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]">
            Register for Tournament
          </button>
        </div>
      </div>
    </section>
  )
}
