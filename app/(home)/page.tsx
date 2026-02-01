import { Navbar } from "@/components/SiteChrome/navbar";
import { Hero } from "@/components/hero";
import { FeaturedGames } from "@/components/featured-games";
import { LatestNews } from "@/components/latest-news";
import { Community } from "@/components/community";
import { Footer } from "@/components/SiteChrome/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <LatestNews />
      <Community />
      <Footer />
    </main>
  );
}
