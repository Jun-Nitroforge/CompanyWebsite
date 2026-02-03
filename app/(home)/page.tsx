import { Navbar } from "@/components/SiteChrome/navbar";
import { Hero } from "@/components/hero";
import { OurTeam } from "@/components/our-team";
import { WhoWeAre } from "@/components/who-we-are";
import { OurServices } from "@/components/our-services";
import { Footer } from "@/components/SiteChrome/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OurTeam />
      <WhoWeAre />
      <OurServices />
      <Footer />
    </main>
  );
}

