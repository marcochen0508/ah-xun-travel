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

        if (!content) return staticData;

        // Dynamic data from DB
        let title, desc;
        if (language === 'th') {
            title = content.title_th;
            desc = content.content_th;
        } else if (language === 'zh-CN') {
            title = content.title_zh_cn;
            desc = content.content_zh_cn;
        } else {
            title = content.title_zh_tw;
            desc = content.content_zh_tw;
        }

        return {
            title: title || staticData.title,
            content: desc || staticData.content,
            image: content.settings?.image_url || staticData.image
        };
    };

    const { title, content: desc, image } = getLocalizedData();

    return (
        <section id="about" className="py-20 bg-lanna-cream/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
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
                        <div className="inline-block px-4 py-1 bg-lanna-gold/10 text-lanna-gold rounded-full text-sm font-bold tracking-wider mb-2">
                            EST. 2015
                        </div>

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
