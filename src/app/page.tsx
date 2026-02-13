import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import News from "@/components/layout/News";
import Features from "@/components/layout/Features";
import About from "@/components/layout/About";
import Destinations from "@/components/layout/Destinations";
import Reviews from "@/components/layout/Reviews";
import Footer from "@/components/layout/Footer";

import { supabase } from "@/lib/supabase";

async function getSiteSettings() {
  try {
    const { data } = await supabase
      .from('general_content')
      .select('settings')
      .eq('key', 'site_settings')
      .single();
    return data?.settings || {};
  } catch (e) {
    console.error("Failed to fetch site settings", e);
    return {};
  }
}

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <main className="min-h-screen bg-lanna-cream/20 font-sans">
      <Navbar />
      <Hero
        customTitle={settings.home_h1}
        customSubtitle={settings.home_h2}
      />
      <News />
      <Features />
      <About />
      <Destinations />
      <Reviews />
      <Footer />
    </main>
  );
}
