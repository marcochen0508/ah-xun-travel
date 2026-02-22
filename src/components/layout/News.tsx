"use client";

import React, { useEffect, useState } from "react";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";
import { NewsEvent } from "@/types/schema";

export default function News() {
    const { t, language } = useLanguage();
    const [news, setNews] = useState<NewsEvent[]>([]);
    const [expandedNews, setExpandedNews] = useState<NewsEvent | null>(null);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -scrollContainerRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollContainerRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const fetchNews = async () => {
            const today = new Date().toISOString().split("T")[0];

            // Simple query to fetch all active news first, then filter locally for dates
            // (Supabase date filtering logic can be complex with strings vs timestamps)
            const { data } = await supabase
                .from("news_events")
                .select("*")
                .eq("is_active", true)
                .order("created_at", { ascending: false });

            if (data && data.length > 0) {
                const validNews = data.filter(item => {
                    const start = item.start_date || "1900-01-01";
                    const end = item.end_date || "2100-12-31";
                    return today >= start && today <= end;
                });

                // Separate pinned and unpinned
                const pinned = validNews.filter(item => item.is_pinned);
                const unpinned = validNews.filter(item => !item.is_pinned);

                // Sort Pinned: Earliest end_date first (or create another logic if needed)
                pinned.sort((a, b) => {
                    const dateA = a.end_date || "9999-12-31";
                    const dateB = b.end_date || "9999-12-31";
                    return dateA.localeCompare(dateB);
                });

                // Sort Unpinned: Earliest end_date first
                unpinned.sort((a, b) => {
                    const dateA = a.end_date || "9999-12-31";
                    const dateB = b.end_date || "9999-12-31";
                    return dateA.localeCompare(dateB);
                });

                setNews([...pinned, ...unpinned]);
            }
        };
        fetchNews();
    }, []);

    if (news.length === 0) return null;

    const getLocalizedContent = (item: NewsEvent) => {
        const title = language === "th" && item.title_th ? item.title_th
            : (language === "zh-CN" && item.title_zh_cn ? item.title_zh_cn
                : (item.title_zh_tw || item.title));

        const content = language === "th" && item.content_th ? item.content_th
            : (language === "zh-CN" && item.content_zh_cn ? item.content_zh_cn
                : (item.content_zh_tw || item.content || ""));

        return { title, content };
    };

    // Helper to auto-link URLs in text
    const renderContentWithLinks = (text: string) => {
        if (!text) return null;
        // Match http/https URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);

        return parts.map((part, i) => {
            if (part.match(urlRegex)) {
                return (
                    <a
                        key={i}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lanna-gold hover:underline font-medium break-all"
                    >
                        {part}
                    </a>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-lanna-coffee mb-4">
                        {language === "th" ? "ข่าวล่าสุด" : (language === "zh-CN" ? "最新消息" : "最新消息")}
                    </h2>
                    <div className="w-24 h-1 bg-lanna-gold mx-auto" />
                </div>

                {news.length === 1 ? (
                    // Single Item Layout - Horizontal
                    <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-lanna-cream/20 flex items-center justify-center p-8">
                            <Calendar size={48} className="text-lanna-gold opacity-50" />
                        </div>
                        <div className="p-8 md:w-2/3">
                            <div className="flex items-center gap-2 text-lanna-gold mb-3 text-sm font-medium">
                                <Calendar size={16} />
                                <span>{news[0].start_date}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {getLocalizedContent(news[0]).title}
                            </h3>
                            <div className="text-gray-600 mb-6 line-clamp-3">
                                {renderContentWithLinks(getLocalizedContent(news[0]).content)}
                            </div>
                            <button
                                onClick={() => setExpandedNews(news[0])}
                                className="text-lanna-gold font-bold hover:underline"
                            >
                                {t.news?.readMore || "Read More"}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Multiple Items Layout - Carousel on Desktop, Stack on Mobile
                    <div className="relative group">
                        {/* Navigation Arrows (Desktop Only) */}
                        {news.length > 3 && (
                            <>
                                <button
                                    onClick={scrollLeft}
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 md:p-3 rounded-full bg-white text-lanna-coffee shadow-lg hover:bg-lanna-cream transition-all hidden md:flex ${!canScrollLeft && "opacity-0 pointer-events-none"
                                        }`}
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={scrollRight}
                                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 md:p-3 rounded-full bg-white text-lanna-coffee shadow-lg hover:bg-lanna-cream transition-all hidden md:flex ${!canScrollRight && "opacity-0 pointer-events-none"
                                        }`}
                                    aria-label="Next"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className={`flex flex-col md:flex-row gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 -px-4 hide-scrollbar`}
                        >
                            {news.map((item) => {
                                const { title, content } = getLocalizedContent(item);
                                return (
                                    <div
                                        key={item.id}
                                        className="snap-start shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
                                    >
                                        <div className="flex items-center gap-2 text-lanna-gold mb-3 text-sm font-medium">
                                            <Calendar size={16} />
                                            <span>{item.start_date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">
                                            {title}
                                        </h3>
                                        <div className="text-gray-600 line-clamp-3 text-sm flex-grow mb-4">
                                            {renderContentWithLinks(content)}
                                        </div>
                                        <div className="pt-4 border-t border-gray-100 mt-auto">
                                            <button
                                                onClick={() => setExpandedNews(item)}
                                                className="text-lanna-gold font-bold hover:underline text-sm"
                                            >
                                                {t.news?.readMore || "Read More"} &rarr;
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Read More Modal */}
            {expandedNews && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                        <button
                            onClick={() => setExpandedNews(null)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <div className="flex items-center gap-2 text-lanna-gold mb-4 text-sm font-medium">
                                <Calendar size={18} />
                                <span>{expandedNews.start_date}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                                {getLocalizedContent(expandedNews).title}
                            </h3>

                            <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap break-words">
                                {renderContentWithLinks(getLocalizedContent(expandedNews).content)}
                            </div>

                            <div className="mt-8 pt-6 border-t flex justify-end">
                                <button
                                    onClick={() => setExpandedNews(null)}
                                    className="px-6 py-2 bg-lanna-gold text-white rounded-lg hover:bg-lanna-gold/90 transition-colors font-bold"
                                >
                                    {t.news?.close || "Close"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
