"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";

export default function About() {
    const { t, language } = useLanguage();
    const [dbContent, setDbContent] = useState<any>(null);

    useEffect(() => {
        const fetchAbout = async () => {
            const { data } = await supabase.from("about_info").select("*").eq("id", "about_us_main").single();
            if (data) setDbContent(data);
        };
        fetchAbout();
    }, []);

    const content = dbContent
        ? (language === "th" ? dbContent.content_th : (language === "zh-CN" ? dbContent.content_zh_cn : dbContent.content_zh_tw))
        : t.about.content;

    return (
        <section id="about" className="py-20 bg-lanna-cream/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
                            <Image
                                src="/about-new.jpg"
                                alt={t.about.imageAlt}
                                fill
                                className="object-cover"
                            />
                            {/* Border Frame */}
                            <div className="absolute inset-0 border-[1rem] border-white/20 pointer-events-none"></div>
                        </div>
                        {/* Decorative Background */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-lanna-gold/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-sm font-bold text-lanna-gold tracking-widest mb-2 uppercase">
                            {t.about.subtitle}
                        </h2>
                        <h3 className="text-3xl font-serif font-bold text-lanna-coffee mb-6 relative inline-block">
                            {t.about.title}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-lanna-green rounded-full"></span>
                        </h3>

                        <div className="prose prose-lg text-gray-600 leading-relaxed font-light whitespace-pre-line">
                            {content || t.about.content}
                        </div>

                        {/* Signature or Quote (Optional) */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="font-serif italic text-lanna-coffee/80 text-lg">
                                "Slow down, breathe in, and experience the real Chiang Mai."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
