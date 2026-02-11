"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function About() {
    const { t, language } = useLanguage();
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // Use API route with cache buster to ensure fresh data
                const res = await fetch(`/api/admin/content?key=about_us&t=${Date.now()}`);
                const data = await res.json();

                if (data && data.key) {
                    setContent(data);
                }
            } catch (error) {
                console.error("Failed to fetch about content", error);
            }
        };
        fetchContent();
    }, []);

    // Helper to get current language content
    const getLocalizedData = () => {
        // Default static data
        const staticData = {
            title: t.about.title,
            content: t.about.content,
            image: "/about-new.jpg"
        };

        if (!content || !content.settings) return staticData;

        const s = content.settings;

        // Dynamic data from DB with Fallback Logic
        // Priority: Current Lang -> zh-TW (Default in DB) -> Static Default
        let title = s.title; // Default (zh-TW)
        let desc = s.content; // Default (zh-TW)

        if (language === 'th') {
            if (s.title_th) title = s.title_th;
            if (s.content_th) desc = s.content_th;
        } else if (language === 'zh-CN') {
            if (s.title_cn) title = s.title_cn;
            if (s.content_cn) desc = s.content_cn;
        }

        return {
            title: title || staticData.title,
            content: desc || staticData.content,
            image: s.image_url || staticData.image
        };
    };

    const { title, content: desc, image } = getLocalizedData();

    return (
        <section id="about" className="py-20 bg-lanna-cream/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src={image}
                                alt="About Ah Xun Travel"
                                fill
                                className="object-cover"
                            />
                            {/* Decorative Border */}
                            <div className="absolute inset-0 border-[10px] border-white/20 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lanna-green leading-tight">
                            {title}
                        </h2>

                        <div className="w-20 h-1 bg-lanna-gold rounded-full"></div>

                        <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                            {desc}
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
}
