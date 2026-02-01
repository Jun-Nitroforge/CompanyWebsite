"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "NEXUS World Championship 2026 Announced",
    excerpt:
      "The biggest esports event of the year is coming. Join players from around the globe competing for $10M in prizes.",
    image: "/images/news-1.jpg",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    category: "Esports",
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Dragon's Conquest",
    excerpt:
      "An exclusive look at how our team brought the mythical world of Dragon's Conquest to life using cutting-edge technology.",
    image: "/images/news-2.jpg",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "Community Spotlight: Player Stories",
    excerpt:
      "Meet the incredible players who make our community special. Their stories of triumph, friendship, and passion.",
    image: "/images/news-3.jpg",
    date: "Jan 22, 2026",
    readTime: "4 min read",
    category: "Community",
  },
];

export function LatestNews() {
  return (
    <section id="news" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Latest News
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground gap-2 self-start md:self-auto"
          >
            View All News
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <article className="lg:col-span-2 group">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
              <Image
                src={newsArticles[0].image || "/placeholder.svg"}
                alt={newsArticles[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {newsArticles[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {newsArticles[0].title}
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {newsArticles[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {newsArticles[0].date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {newsArticles[0].readTime}
              </span>
            </div>
          </article>

          {/* Side Articles */}
          <div className="flex flex-col gap-8">
            {newsArticles.slice(1).map((article) => (
              <article key={article.id} className="group">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
