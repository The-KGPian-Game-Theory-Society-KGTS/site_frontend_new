import Navbar from "@/components/navbar"
import BlackHoleGame from "./blackhole"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import FloatingIcons from "@/components/floating-icons"

export default function BlackHolePage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <FloatingIcons />
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
                Black <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Hole</span>
              </h1>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 backdrop-blur-sm">
              <BlackHoleGame />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 