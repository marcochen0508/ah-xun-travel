import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import News from "@/components/layout/News";
import Features from "@/components/layout/Features";
import About from "@/components/layout/About";
import Destinations from "@/components/layout/Destinations";
import Reviews from "@/components/layout/Reviews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-lanna-cream/20 font-sans">
      <Navbar />
      <Hero />
      <News />
      <Features />
      <About />
      <Destinations />
      <Reviews />
      <Footer />
    </main>
  );
}
