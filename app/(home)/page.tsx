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
      <section id="our-team" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            className="text-5xl sm:text-6xl font-bold uppercase tracking-wide"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Team
          </h2>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg">
            We are a group of seasoned creators united by a passion for game development,
            software engineering, and web design. Our mission is to build immersive 3D
            worlds and high-quality digital experiences that connect players and users
            with the worlds we create—whether through games, applications, or websites.
          </p>
        </div>
      </section>
      <FeaturedGames />
      <LatestNews />
      <Community />
      <Footer />
    </main>
  );
}
