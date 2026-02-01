"use client";

import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Join the Community",
    description: "Connect with millions of players worldwide who share your passion for gaming.",
  },
  {
    icon: MessageCircle,
    title: "Forums & Discussions",
    description: "Share strategies, tips, and stories with fellow gamers in our active forums.",
  },
  {
    icon: Trophy,
    title: "Competitive Events",
    description: "Participate in tournaments and climb the leaderboards to prove your skills.",
  },
  {
    icon: Zap,
    title: "Exclusive Rewards",
    description: "Earn unique in-game items, early access, and special perks as a community member.",
  },
];

export function Community() {
  return (
    <section id="community" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Community
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Play Together, Grow Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Join a vibrant community of over 50 million players. Share your achievements,
              make lasting friendships, and be part of something bigger than just gaming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Join Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Members
                </div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">1M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Daily Active
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Countries
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
