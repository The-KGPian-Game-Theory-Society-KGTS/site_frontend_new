"use client";

import { Trophy, Users, Clock } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react";

type Game = {
  id: string;
  title: string;
  description: string;
  image: string;
  players: string;
  duration: string;
  link: string;
};

// Dummy data
const dummyGames: Game[] = [
  {
    id: "1",
    title: "Black Hole",
    description: "A strategic board game where players compete to minimize their exposure to the gravitational pull of the black hole. Place your numbered tiles wisely - the player with the lowest sum of values adjacent to the black hole wins!",
    image: "/games/black-hole.png",
    players: "2",
    duration: "1 - 30 min",
    link: "/games/blackhole",
  },
];

export default function GamesPage() {
  const [games] = useState<Game[]>(dummyGames);

  const Games = games;

  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Games</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-4xl mx-auto">
              Explore our collection of game theory games that challenge your strategic thinking and decision-making skills.
            </p>
          </div>

          {Games.length === 0 ? (
            <div className="text-center text-cream/80">
              No games available at the moment. Please check back later.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Games.map((game) => (
                <div key={game.id} className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${game.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-2">
                      {game.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-cream/70">
                        <Users size={16} className="mr-2 text-red-500" />
                        <span>{game.players} Players</span>
                      </div>
                      <div className="flex items-center text-cream/70">
                        <Clock size={16} className="mr-2 text-red-500" />
                        <span>{game.duration}</span>
                      </div>
                    </div>

                    <div className="mt-4 relative flex-grow">
                      <div className="overflow-hidden">
                        <p
                          className={cn(
                            "text-cream/80 transition-[max-height] duration-500 ease-in-out",
                            "group-hover:max-h-[500px]",
                            "max-h-[4.5rem]"
                          )}
                        >
                          {game.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={game.link}
                      className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                    >
                      Play Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
