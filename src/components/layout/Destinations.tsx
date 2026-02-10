"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";

const destinations = [
    {
        title: "Doi Suthep Temple Tour",
        zhTitle: "素帖山雙龍寺之旅",
        zhCnTitle: "素帖山双龙寺之旅",
        thTitle: "ทัวร์วัดพระธาตุดอยสุเทพ",
        desc: "Chiang Mai's most iconic temple with panoramic views.",
        image: "/dest-1.jpg",
    },
    {
        title: "Mae Wang Bamboo Rafting",
        zhTitle: "湄旺竹筏漂流",
        zhCnTitle: "湄旺竹筏漂流",
        thTitle: "ล่องแพไม้ไผ่แม่วาง",
        desc: "Relaxing bamboo rafting through the gentle jungle river.",
        image: "/dest-2.jpg",
    },
    {
        title: "Old City Cultural Walk",
        zhTitle: "古城文化漫遊",
        zhCnTitle: "古城文化漫游",
        thTitle: "เดินชมเมืองเก่า",
        desc: "Explore the historic temples and streets of the Old City.",
        image: "/dest-3.jpg",
    },
];

export default function Destinations() {
    const { t, language } = useLanguage();
    const [routes, setRoutes] = useState<any[]>([]);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const res = await fetch(`/api/routes?lang=${language}&t=${Date.now()}`);
                const data = await res.json();

                // Ensure data is an array before using
                if (Array.isArray(data)) {
                    // Shuffle the array for random display order
                    const shuffled = data.sort(() => 0.5 - Math.random());
                    setRoutes(shuffled);
                } else {
                    console.error("API returned non-array:", data);
                    setRoutes([]);
                }
            } catch (error) {
                console.error("Failed to fetch routes:", error);
            }
        };
        fetchRoutes();
    }, []);

    // Fallback static data if DB is empty
    const staticDestinations = [
        {
            title: "Doi Suthep Temple Tour",
            zhTitle: "素帖山雙龍寺之旅",
            zhCnTitle: "素帖山双龙寺之旅",
            thTitle: "ทัวร์วัดพระธาตุดอยสุเทพ",
            desc: "Chiang Mai's most iconic temple with panoramic views.",
            image: "/dest-1.jpg",
        },
        {
            title: "Mae Wang Bamboo Rafting",
            zhTitle: "湄旺竹筏漂流",
            zhCnTitle: "湄旺竹筏漂流",
            thTitle: "ล่องแพไม้ไผ่แม่วาง",
            desc: "Relaxing bamboo rafting through the gentle jungle river.",
            image: "/dest-2.jpg",
        },
        {
            title: "Old City Cultural Walk",
            zhTitle: "古城文化漫遊",
            zhCnTitle: "古城文化漫游",
            thTitle: "เดินชมเมืองเก่า",
            desc: "Explore the historic temples and streets of the Old City.",
            image: "/dest-3.jpg",
        },
    ];

    const displayRoutes = routes.length > 0 ? routes : staticDestinations;

    const [selectedDest, setSelectedDest] = useState<any | null>(null);

    const getLocalizedContent = (dest: any) => {
        let title, desc, image;
        if (dest.created_at) { // It's from DB
            title = language === "th" ? dest.title_th : (language === "zh-CN" ? dest.title_zh_cn : dest.title_zh_tw);
            desc = language === "th" ? dest.description_th : (language === "zh-CN" ? dest.description_zh_cn : dest.description_zh_tw);
            image = dest.image_url || "/dest-1.jpg";
        } else { // Static Fallback
            title = language === "th" ? dest.thTitle : (language === "zh-CN" ? dest.zhCnTitle : dest.zhTitle);
            desc = dest.desc;
            image = dest.image;
        }
        return { title, desc, image };
    };

    return (
        <section id="destinations" className="py-20 bg-white text-lanna-coffee">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-lanna-green mb-2">
                        {t.destinations.subtitle}
                    </h2>
                    <h3 className="text-xl font-light text-lanna-coffee/80 tracking-wide">
                        {t.destinations.title}
                    </h3>
                    <div className="w-16 h-1 bg-lanna-gold mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayRoutes.map((item, index) => {
                        const { title, desc, image } = getLocalizedContent(item);
                        return (
                            <div
                                key={index}
                                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-64 w-full bg-gray-200">
                                    <Image
                                        src={image}
                                        alt={title || "Destination"}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 bg-white border-t-4 border-lanna-gold">
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-lanna-gold transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-xs font-serif text-gray-500 uppercase mb-3">
                                        {t.destinations.title}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {desc}
                                    </p>
                                    <button
                                        onClick={() => setSelectedDest(item)}
                                        className="inline-block text-sm font-bold text-lanna-gold hover:text-lanna-green transition-colors uppercase tracking-wider cursor-pointer"
                                    >
                                        {t.destinations.learnMore} &rarr;
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedDest && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Modal Image Header */}
                        <div className="relative h-48 w-full shrink-0">
                            <Image
                                src={getLocalizedContent(selectedDest).image}
                                alt="Cover"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <button
                                onClick={() => setSelectedDest(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white font-serif">
                                {getLocalizedContent(selectedDest).title}
                            </h3>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto">
                            <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap mb-6">
                                {getLocalizedContent(selectedDest).desc}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                                {selectedDest.pdf_link && (
                                    <a
                                        href={selectedDest.pdf_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-lanna-gold text-white text-center rounded-lg font-bold hover:bg-lanna-gold/90 transition-colors shadow-md"
                                    >
                                        {t.destinations.viewItinerary || "View Itinerary"}
                                    </a>
                                )}
                                {selectedDest.video_link && (
                                    <a
                                        href={selectedDest.video_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-white border-2 border-lanna-gold text-lanna-gold text-center rounded-lg font-bold hover:bg-lanna-gold hover:text-white transition-colors shadow-sm"
                                    >
                                        {t.destinations.viewVideo || "View Video"}
                                    </a>
                                )}
                                {!selectedDest.pdf_link && !selectedDest.video_link && (
                                    <div className="text-center text-sm text-gray-400 italic border-t pt-4">
                                        {language === "th" ? "ไม่มีรายละเอียดเพิ่มเติม โปรดติดต่อเรา" : "暫無詳細行程，請直接聯繫我們諮詢"}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
