import Navbar from "@/components/navbar"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const getBlogPost = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "The Nash Equilibrium Explained",
    excerpt: "A deep dive into one of game theory's most important concepts and its real-world applications.",
    content: `
      <p class="mb-4">The Nash equilibrium is a fundamental concept in game theory named after mathematician John Forbes Nash Jr. It describes a situation where no player can benefit by changing their strategy while the other players keep theirs unchanged.</p>
      
      <p class="mb-4">In game theory, the Nash equilibrium is a solution concept of a non-cooperative game involving two or more players in which each player is assumed to know the equilibrium strategies of the other players, and no player has anything to gain by changing only their own strategy.</p>
      
      <h3 class="text-xl font-serif font-bold text-cream mt-6 mb-3">Understanding Nash Equilibrium</h3>
      
      <p class="mb-4">Consider a game with n players, where each player i chooses a strategy si from a strategy set Si. Let s = (s1, s2, ..., sn) be a strategy profile, and let s-i be the strategies chosen by all players except player i. Let ui(s) be the payoff to player i given the strategy profile s.</p>
      
      <p class="mb-4">A strategy profile s* is a Nash equilibrium if no player can benefit by changing their strategy while the other players keep theirs unchanged. Formally, for each player i:</p>
      
      <div class="bg-black/50 border border-red-600/30 p-4 rounded-lg my-6 text-center">
        <p class="text-cream">ui(s*i, s*-i) ≥ ui(si, s*-i) for all si in Si</p>
      </div>
      
      <h3 class="text-xl font-serif font-bold text-cream mt-6 mb-3">Applications in Real Life</h3>
      
      <p class="mb-4">The Nash equilibrium has applications in various fields:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2 text-cream/80">
        <li><strong class="text-cream">Economics:</strong> Market competition, pricing strategies, and auction theory</li>
        <li><strong class="text-cream">Politics:</strong> Voting systems, international relations, and arms races</li>
        <li><strong class="text-cream">Biology:</strong> Evolution and animal behavior</li>
        <li><strong class="text-cream">Computer Science:</strong> Network routing, security protocols, and artificial intelligence</li>
      </ul>
      
      <h3 class="text-xl font-serif font-bold text-cream mt-6 mb-3">The Prisoner's Dilemma</h3>
      
      <p class="mb-4">One of the most famous examples of Nash equilibrium is the Prisoner's Dilemma. In this scenario, two criminals are arrested and interrogated separately. Each has two options: confess or remain silent.</p>
      
      <p class="mb-4">If both remain silent, they each receive a minor sentence. If both confess, they receive moderate sentences. If one confesses while the other remains silent, the confessor goes free while the other receives a severe sentence.</p>
      
      <p class="mb-4">The Nash equilibrium in this game is for both prisoners to confess, even though they would be better off if both remained silent. This illustrates how rational individual choices can lead to suboptimal collective outcomes.</p>
      
      <h3 class="text-xl font-serif font-bold text-cream mt-6 mb-3">Conclusion</h3>
      
      <p class="mb-4">The Nash equilibrium remains one of the most important concepts in game theory and continues to influence our understanding of strategic interactions across various disciplines. Its applications extend from economics and politics to evolutionary biology and artificial intelligence.</p>
      
      <p>By understanding Nash equilibrium, we gain insights into why rational individuals might make decisions that seem suboptimal from a collective perspective, and how we might design systems to better align individual incentives with collective goals.</p>
    `,
    author: "Dr. Alex Chen",
    date: "September 28, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Theory",
    relatedPosts: [2, 3, 6],
  }
}

// This would also come from a database or API
const getRelatedPosts = (ids: number[]) => {
  return [
    {
      id: 2,
      title: "Game Theory in Everyday Life",
      excerpt: "How the principles of game theory can be observed in our daily interactions and decision-making.",
      author: "Maya Patel",
      date: "October 5, 2023",
      image: "/placeholder.svg?height=200&width=300",
      category: "Applications",
    },
    {
      id: 3,
      title: "The Prisoner's Dilemma: A Modern Take",
      excerpt: "Exploring contemporary applications of this classic game theory problem in politics and business.",
      author: "James Wilson",
      date: "October 12, 2023",
      image: "/placeholder.svg?height=200&width=300",
      category: "Analysis",
    },
    {
      id: 6,
      title: "Behavioral Game Theory: When Humans Don't Play Rationally",
      excerpt: "Exploring how cognitive biases and emotions affect strategic decision-making.",
      author: "Dr. Lisa Zhang",
      date: "November 15, 2023",
      image: "/placeholder.svg?height=200&width=300",
      category: "Analysis",
    },
  ]
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)
  const relatedPosts = getRelatedPosts(post.relatedPosts)

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-cream/70 hover:text-red-500 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to all articles</span>
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-cream/70 gap-4 mb-6">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-red-500" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-red-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-red-500" />
                  <span>{post.category}</span>
                </div>
              </div>

              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-8">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-cream/80 prose-a:text-red-500 hover:prose-a:text-red-400">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-red-600/30">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">Related Articles</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 bg-red-600 text-cream text-xs px-2 py-1 rounded shadow-[0_0_10px_rgba(255,0,0,0.4)]">
                        {relatedPost.category}
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>

                      <div className="flex items-center mt-2 text-xs text-cream/60">
                        <span>{relatedPost.author}</span>
                      </div>

                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="mt-3 flex items-center text-red-500 hover:text-red-400 transition-colors text-sm group/btn"
                      >
                        <span>Read Article</span>
                        <ArrowLeft
                          className="ml-2 transition-transform rotate-180 group-hover/btn:translate-x-1"
                          size={14}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
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
