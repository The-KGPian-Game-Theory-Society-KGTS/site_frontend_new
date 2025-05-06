import Navbar from "@/components/navbar"
import { ArrowLeft, Trophy, Users, Clock, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const getGame = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Prisoner's Dilemma",
    description: "Experience the classic game theory scenario where cooperation and betrayal determine your fate.",
    longDescription: `
      <p class="mb-4">The Prisoner's Dilemma is one of the most famous scenarios in game theory. It illustrates why two completely rational individuals might not cooperate, even if it appears that it is in their best interests to do so.</p>
      
      <p class="mb-4">In the traditional version of the game, two members of a criminal gang are arrested and imprisoned. Each prisoner is in solitary confinement with no means of communicating with the other. The prosecutors lack sufficient evidence to convict the pair on the principal charge, but they have enough to convict both on a lesser charge.</p>
      
      <p class="mb-4">Simultaneously, the prosecutors offer each prisoner a bargain: Each prisoner is given the opportunity either to betray the other by testifying that the other committed the crime, or to cooperate with the other by remaining silent.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    difficulty: "Beginner",
    players: "2",
    duration: "5-10 minutes",
    skills: ["Strategic thinking", "Decision making", "Game theory understanding"],
    rules: [
      "Players make decisions simultaneously without communication",
      "Each player must choose to either cooperate or defect",
      "Payoffs depend on the combination of both players' choices",
      "The game can be played once or repeated multiple times",
    ],
    strategies: [
      {
        name: "Always Defect",
        description: "Choose to defect in every round, regardless of what the other player does.",
      },
      {
        name: "Tit for Tat",
        description: "Start by cooperating, then mirror whatever the other player did in the previous round.",
      },
      {
        name: "Forgiving Tit for Tat",
        description: "Similar to Tit for Tat, but occasionally cooperate even after the other player defects.",
      },
    ],
  }
}

export default function GamePage({ params }: { params: { id: string } }) {
  const game = getGame(params.id)

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/games" className="inline-flex items-center text-cream/70 hover:text-red-500 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to all games</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-6">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-red-600 text-cream text-sm px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.4)] mb-3">
                    {game.difficulty}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream text-shadow-sm">
                    {game.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-black/70 border border-red-600/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <Trophy className="h-6 w-6 text-red-500 mb-2" />
                  <h3 className="text-sm font-medium text-cream/70">Difficulty</h3>
                  <p className="text-cream">{game.difficulty}</p>
                </div>
                <div className="bg-black/70 border border-red-600/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <Users className="h-6 w-6 text-red-500 mb-2" />
                  <h3 className="text-sm font-medium text-cream/70">Players</h3>
                  <p className="text-cream">{game.players}</p>
                </div>
                <div className="bg-black/70 border border-red-600/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <Clock className="h-6 w-6 text-red-500 mb-2" />
                  <h3 className="text-sm font-medium text-cream/70">Duration</h3>
                  <p className="text-cream">{game.duration}</p>
                </div>
                <div className="bg-black/70 border border-red-600/30 rounded-lg p-4 flex flex-col items-center text-center">
                  <BarChart className="h-6 w-6 text-red-500 mb-2" />
                  <h3 className="text-sm font-medium text-cream/70">Skills</h3>
                  <p className="text-cream text-xs">{game.skills[0]}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-serif font-bold text-cream mb-4">About This Game</h2>
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-cream/80">
                  <div dangerouslySetInnerHTML={{ __html: game.longDescription }} />
                </div>

                <h3 className="text-xl font-serif font-bold text-cream mt-8 mb-4">Rules</h3>
                <ul className="space-y-2">
                  {game.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-cream/80">{rule}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-serif font-bold text-cream mt-8 mb-4">Skills You'll Develop</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {game.skills.map((skill, index) => (
                    <span key={index} className="bg-red-900/30 text-cream/90 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="px-6 py-3 bg-red-600 text-cream rounded-md font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]">
                  Play Now
                </button>
              </div>

              <div>
                <div className="bg-black/70 border border-red-600/30 rounded-lg p-6">
                  <h3 className="text-xl font-serif font-bold text-cream mb-4">Strategies</h3>
                  <div className="space-y-4">
                    {game.strategies.map((strategy, index) => (
                      <div key={index} className="pb-4 border-b border-red-900/30 last:border-0 last:pb-0">
                        <h4 className="font-medium text-cream mb-1">{strategy.name}</h4>
                        <p className="text-sm text-cream/70">{strategy.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-serif font-bold text-cream mb-4">Join Tournament</h3>
                  <p className="text-sm text-cream/80 mb-4">
                    Test your skills against other players in our monthly Prisoner's Dilemma tournament.
                  </p>
                  <button className="w-full px-4 py-2 bg-red-600/50 text-cream rounded flex items-center justify-center hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                    Register for Tournament
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 via-red-800/30 to-red-900/20 rounded-lg p-8 text-center border border-red-600/20">
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">Ready to Play?</h3>
              <p className="text-cream/80 max-w-2xl mx-auto mb-6">
                Experience the Prisoner's Dilemma firsthand and test your strategic thinking skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-red-600 text-cream rounded-md text-lg font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]">
                  Play Now
                </button>
                <Link
                  href="/games"
                  className="px-8 py-3 bg-transparent border-2 border-red-600/50 text-cream rounded-md text-lg font-medium hover:border-red-500 transition-colors"
                >
                  Explore Other Games
                </Link>
              </div>
            </div>
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
