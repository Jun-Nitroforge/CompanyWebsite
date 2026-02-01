"use client";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/Videos/HomePageVideoClips.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay removed */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              New Release
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            Experience the
            <span className="text-primary block">Future of Gaming</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Immerse yourself in breathtaking worlds, forge legendary alliances, and
            write your own story in the most ambitious gaming experiences ever created.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 gap-2"
            >
              <Play className="w-5 h-5" />
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold text-lg px-8 py-6 gap-2 bg-transparent"
            >
              Watch Trailer
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">50M+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Players</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Games</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
