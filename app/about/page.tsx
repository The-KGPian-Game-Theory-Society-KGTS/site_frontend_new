import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              About <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-8">
              <p className="text-cream/80 leading-relaxed mb-4">
                KGTS is a community of strategy enthusiasts, uniting students who are eager to understand how decisions are made, influenced, and optimized. Rooted in the principles of game theory, we explore both competitive and cooperative scenarios—ranging from economic models and voting systems to real-world negotiations and everyday games. Whether analyzing complex systems or engaging in strategic games, we approach challenges with logic, creativity, and a keen curiosity about how rational choices shape outcomes.
              </p>
              <p className="text-cream/80 leading-relaxed mb-4">
                Our members engage in strategy development, case studies, research discussions, riddle-solving sessions, and game nights. At KGTS, we foster an environment where rigorous thinking meets playful exploration, allowing strategic minds to thrive and grow together.

              </p>
              <p className="text-cream/80 leading-relaxed">
                Our flagship event, Stratathon, brings together students from across IIT Kharagpur to face exciting and challenging strategic problems, sharpening their analytical skills and encouraging innovative thinking. Alongside, fun-filled events like the Treasure Hunt offer a thrilling way to develop teamwork, creativity, and quick decision-making. These events provide KGPians with unique opportunities to apply game theory concepts in real-world scenarios while enjoying friendly competition and collaboration.
              </p>
            </div>
          </div>

          

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-6 text-center">What is Game Theory?</h2>
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-8">
              <p className="text-cream/80 leading-relaxed mb-6">
                Game theory is a mathematical framework for analyzing situations where multiple decision-makers (called players) interact, and each one’s outcome depends on the choices of others.
                It studies how strategies are formed in both competitive and cooperative settings—such as market competition, business negotiations, auctions, military conflicts, political campaigns, or even dating.
                The goal is to understand and predict the behavior of rational agents, often revealing surprising or counterintuitive outcomes.
                Game theory has widespread applications across economics, computer science, politics, policy making, healthcare, law and more.

              </p>
              <div className="gap-y-4">
                <div>
                  <h3 className="text-xl font-medium text-cream mb-3">Applications</h3>
                  <ul className="space-y-2 text-cream/80">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Economics:</strong> Game theory helps analyze how individuals, firms, and markets make decisions when their outcomes depend on others. It’s used to study competition, pricing strategies, auctions, bargaining, and market design to predict behaviors and improve efficiency.

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Computer Science:</strong> In computer science, game theory models interactions between algorithms or agents, such as in network security, distributed computing, and artificial intelligence. It helps design protocols where multiple users or systems act strategically, like in online auctions or resource allocation.

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Politics:</strong> Game theory models strategic interactions in voting, coalition building, diplomacy, and conflict. It helps predict how political actors behave in elections, negotiations, or international relations, offering insights into cooperation and competition dynamics.

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Policy Making:</strong> Policymakers use game theory to understand the strategic behavior of stakeholders, such as governments, corporations, and citizens. It aids in designing regulations, tax policies, and international agreements that account for incentives and potential responses.

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Medicine and Healthcare:</strong> Game theory is applied to model interactions between patients, healthcare providers, and insurers. It helps analyze vaccination decisions, epidemic control, treatment strategies, and resource allocation to improve health outcomes and policy design.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>
                        <strong className="text-cream">Law:</strong> In law, game theory studies negotiation, litigation strategies, plea bargaining, and contract design. It helps predict how parties will behave during disputes or agreements, assisting in creating fair and efficient legal processes.
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
    </div>
  )
}
