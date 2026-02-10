"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Banner } from "@/types/schema";

export default function Hero() {
    const { t } = useLanguage();
    const [bannerList, setBannerList] = useState<Banner[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgImage, setBgImage] = useState("/images/banner-default.jpg"); // Default fallback
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                // Add timestamp to prevent caching
                const res = await fetch(`/api/banner?t=${Date.now()}`, { cache: 'no-store' });
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    console.log("Banners loaded:", data.length);
                    setBannerList(data);
                    setBgImage(data[0].image_url);
                } else {
                    console.log("No banners loaded.");
                }
            } catch (error) {
                console.error("Failed to fetch banner:", error);
            }
        };

        fetchBanner();
    }, []);

    // Rotation Logic
    useEffect(() => {
        if (bannerList.length <= 1) return;

        console.log("Setting up rotation for", bannerList.length, "items");

        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 1) % bannerList.length;
                console.log("Rotating to index:", nextIndex);
                setBgImage(bannerList[nextIndex].image_url);
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [bannerList]);

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Chiang Mai Landscape"
                    fill
                    className="object-cover transition-opacity duration-1000"
                    priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
                    {t.hero.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-8 drop-shadow-md tracking-wide whitespace-pre-line">
                    {t.hero.subtitle}
                </h2>

                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-lanna-gold hover:bg-lanna-gold/90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
                >
                    {t.hero.cta} <ArrowRight size={20} />
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
                </div>
            </div>
        </div>
    );
}
