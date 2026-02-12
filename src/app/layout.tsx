import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { supabase } from "@/lib/supabase";

export async function generateMetadata(): Promise<Metadata> {
  // Default Metadata
  const defaultMeta = {
    title: "阿勛・清邁包車旅遊規劃 | Ah Xun Chiang Mai Travel",
    description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。量身定做您的清邁行程，帶您體驗道地的泰北風光。",
    keywords: ["清邁包車", "清邁旅遊", "泰北旅遊", "中文司機", "VIP包車", "Chiang Mai Travel", "Charter Service"],
    og_title: "阿勛・清邁包車旅遊規劃",
    og_description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。"
  };

  try {
    const { data } = await supabase
      .from('general_content')
      .select('settings')
      .eq('key', 'site_settings')
      .single();

    if (data?.settings) {
      const s = data.settings;
      return {
        title: s.site_title || defaultMeta.title,
        description: s.site_description || defaultMeta.description,
        keywords: s.site_keywords ? s.site_keywords.split(',').map((k: string) => k.trim()) : defaultMeta.keywords,
        authors: [{ name: "Ah Xun" }],
        creator: "Ah Xun",
        publisher: "Ah Xun Chiang Mai Travel",
        openGraph: {
          title: s.og_title || s.site_title || defaultMeta.og_title,
          description: s.og_description || s.site_description || defaultMeta.og_description,
          url: "https://ah-xun-travel.vercel.app",
          siteName: "Ah Xun Chiang Mai Travel",
          images: [
            {
              url: "/og-image.jpg",
              width: 1200,
              height: 630,
              alt: s.site_title || defaultMeta.title,
            },
          ],
          locale: "zh-TW",
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: s.og_title || s.site_title || defaultMeta.og_title,
          description: s.og_description || s.site_description || defaultMeta.og_description,
          images: ["/og-image.jpg"],
        },
        alternates: {
          canonical: "https://ah-xun-travel.vercel.app",
        },
      };
    }
  } catch (e) {
    console.error("Failed to fetch dynamic metadata", e);
  }

  return {
    title: defaultMeta.title,
    description: defaultMeta.description,
    keywords: defaultMeta.keywords,
    authors: [{ name: "Ah Xun" }],
    creator: "Ah Xun",
    publisher: "Ah Xun Chiang Mai Travel",
    openGraph: {
      title: defaultMeta.og_title,
      description: defaultMeta.og_description,
      url: "https://ah-xun-travel.vercel.app",
      siteName: "Ah Xun Chiang Mai Travel",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ah Xun Chiang Mai Travel",
        },
      ],
      locale: "zh-TW",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultMeta.og_title,
      description: defaultMeta.og_description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: "https://ah-xun-travel.vercel.app",
    },
  };
}

import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MaintenanceBlocker from "@/components/MaintenanceBlocker";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <MaintenanceBlocker />
          <JsonLd />
          <Toaster position="top-center" richColors />
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
    </html >
  );
}
