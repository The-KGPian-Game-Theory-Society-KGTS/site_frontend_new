import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              About <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-cream mb-6">Our History</h2>
              <p className="text-cream/80 leading-relaxed mb-4">
                The KGPian Game Theory Society was founded in 2015 by a group of passionate mathematics and economics
                students at IIT Kharagpur who shared a common interest in strategic decision-making and its applications
                across various disciplines.
              </p>
              <p className="text-cream/80 leading-relaxed mb-4">
                What began as informal discussions and problem-solving sessions quickly evolved into a structured
                organization dedicated to exploring the fascinating world of game theory through workshops,
                competitions, and collaborative research projects.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Over the years, we have grown to become one of the most active academic societies on campus, attracting
                students from diverse backgrounds including mathematics, economics, computer science, and engineering
                who are united by their interest in strategic thinking and decision theory.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.3)]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="KGPian Game Theory Society founding members"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-black/70 border border-red-600/30 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-6 text-center">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20v-6M6 20V10M18 20V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-cream mb-2">Education</h3>
                <p className="text-cream/70">
                  To promote understanding of game theory principles and their applications through workshops, seminars,
                  and accessible resources.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-cream mb-2">Research</h3>
                <p className="text-cream/70">
                  To encourage original research and exploration of game theory applications in various fields through
                  collaborative projects.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-cream mb-2">Community</h3>
                <p className="text-cream/70">
                  To build a vibrant community of game theory enthusiasts who can learn from each other and grow
                  together intellectually.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-6 text-center">What is Game Theory?</h2>
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-8">
              <p className="text-cream/80 leading-relaxed mb-6">
                Game theory is the study of mathematical models of strategic interactions among rational agents. It has
                applications in all fields of social science, as well as in logic, systems science, and computer
                science. Originally, it addressed two-person zero-sum games, in which each participant's gains or losses
                are exactly balanced by those of other participants.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-cream mb-3">Key Concepts</h3>
                  <ul className="space-y-2 text-cream/80">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Nash Equilibrium:</strong> A state where no player can benefit by
                        changing their strategy while the other players keep theirs unchanged.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Dominant Strategy:</strong> A strategy that is optimal regardless
                        of what the opponent does.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Pareto Optimality:</strong> A state where no individual can be
                        made better off without making at least one individual worse off.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Zero-Sum Games:</strong> Games where one player's gain is exactly
                        balanced by the other player's loss.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-cream mb-3">Applications</h3>
                  <ul className="space-y-2 text-cream/80">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Economics:</strong> Market behavior, auctions, pricing
                        strategies, and industrial organization.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Political Science:</strong> Voting systems, international
                        relations, and conflict resolution.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Biology:</strong> Evolution, animal behavior, and ecological
                        systems.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Computer Science:</strong> Artificial intelligence, machine
                        learning, and network security.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-cream rounded-md hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
            >
              Meet Our Team
            </Link>
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
