"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Dragon's Conquest",
    category: "RPG",
    image: "/images/game-1.jpg",
    rating: 4.9,
    description: "Embark on an epic journey through mystical lands",
  },
  {
    id: 2,
    title: "Neon Velocity",
    category: "Racing",
    image: "/images/game-2.jpg",
    rating: 4.8,
    description: "Push the limits of speed in a cyberpunk world",
  },
  {
    id: 3,
    title: "FC Pro 26",
    category: "Sports",
    image: "/images/game-3.jpg",
    rating: 4.7,
    description: "The beautiful game, reimagined for a new era",
  },
  {
    id: 4,
    title: "Shadow Strike",
    category: "Action",
    image: "/images/game-4.jpg",
    rating: 4.9,
    description: "Tactical combat at its most intense",
  },
];

export function FeaturedGames() {
  return (
    <section id="games" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Our Games
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground gap-2 self-start md:self-auto"
          >
            View All Games
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <article
              key={game.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                    {game.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-foreground text-xs font-medium">{game.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {game.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {game.description}
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  >
                    Play Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
