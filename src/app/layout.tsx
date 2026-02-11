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

export const metadata: Metadata = {
  title: "阿勛・清邁包車旅遊規劃 | Ah Xun Chiang Mai Travel",
  description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。量身定做您的清邁行程，帶您體驗道地的泰北風光。",
  keywords: ["清邁包車", "清邁旅遊", "泰北旅遊", "中文司機", "VIP包車", "Chiang Mai Travel", "Charter Service"],
  authors: [{ name: "Ah Xun" }],
  creator: "Ah Xun",
  publisher: "Ah Xun Chiang Mai Travel",
  openGraph: {
    title: "阿勛・清邁包車旅遊規劃",
    description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。",
    url: "https://ah-xun-travel.vercel.app",
    siteName: "Ah Xun Chiang Mai Travel",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public folder
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
    title: "阿勛・清邁包車旅遊規劃",
    description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。",
    images: ["/og-image.jpg"], // Needs to be added to public folder
  },
  alternates: {
    canonical: "https://ah-xun-travel.vercel.app",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <JsonLd />
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
