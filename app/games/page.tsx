import Navbar from "@/components/navbar"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

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
  {
    id: 5,
    title: "Battle of the Sexes",
    description: "A classic coordination game about conflicting preferences and finding compromise.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Chicken Game",
    description: "Test your nerve in this high-stakes game of brinkmanship and strategic risk-taking.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "Matching Pennies",
    description: "A zero-sum game that explores mixed strategies and probabilistic thinking.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Beginner",
  },
  {
    id: 8,
    title: "Centipede Game",
    description: "A sequential game that tests trust, cooperation, and backward induction reasoning.",
    image: "/placeholder.svg?height=300&width=300",
    difficulty: "Advanced",
  },
]

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Strategy <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Games</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Test your strategic thinking with our collection of interactive games based on game theory principles.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className={`px-4 py-2 rounded-full border ${
                    difficulty === "All"
                      ? "bg-red-600 border-red-600 text-cream"
                      : "border-red-600/30 text-cream hover:border-red-500 hover:bg-red-900/20"
                  } transition-colors`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
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
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-900/20 via-red-800/30 to-red-900/20 rounded-lg p-8 text-center border border-red-600/20">
            <h3 className="text-2xl font-serif font-bold text-cream mb-4">Game Theory Tournament</h3>
            <p className="text-cream/80 max-w-2xl mx-auto mb-6">
              Join our monthly tournament where participants compete in various game theory scenarios. Test your
              strategic thinking against fellow enthusiasts and win exciting prizes!
            </p>
            <button className="px-8 py-3 bg-red-600 text-cream rounded-md text-lg font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]">
              Register for Tournament
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-red-600/30 py-6 text-center text-sm text-cream/60 relative z-10">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} The KGPian Game Theory Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
