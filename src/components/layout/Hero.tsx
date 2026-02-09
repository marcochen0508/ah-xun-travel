"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Banner } from "@/types/schema";

export default function Hero() {
    const { t } = useLanguage();
    const [bgImage, setBgImage] = useState("/hero-bg-new.jpg");

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await fetch("/api/banner", { cache: 'no-store' });
                const data = await res.json();
                if (data && data.image_url) {
                    setBgImage(data.image_url);
                }
            } catch (error) {
                console.error("Failed to fetch banner:", error);
            }
        };
        fetchBanner();
    }, []);

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
