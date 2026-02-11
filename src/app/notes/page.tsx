"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";

export default function CharterNotesPage() {
    const { t, language } = useLanguage();
    const [notesData, setNotesData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const { supabase } = await import("@/lib/supabase");
            const { data } = await supabase
                .from("general_content")
                .select("*")
                .eq("key", "charter_notes")
                .single();
            if (data) setNotesData(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    const getLocalizedNotes = () => {
        if (!notesData) return { content: "" };
        return {
            content: language === "th" ? notesData.content_th : (language === "zh-CN" ? notesData.content_zh_cn : notesData.content_zh_tw),
            link: notesData.link_url
        };
    };

    return (
        <main className="min-h-screen bg-lanna-cream/20 font-sans flex flex-col">
            <Navbar />

            <div className="flex-grow container mx-auto px-4 pt-32 pb-16">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-lanna-green font-serif mb-8 text-center border-b pb-4">
                        {t.footer.charterNotes || "包車注意事項"}
                    </h1>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="animate-spin text-lanna-gold h-10 w-10" />
                        </div>
                    ) : notesData ? (
                        <div className="animate-fade-in">
                            <div className="prose prose-stone max-w-none whitespace-pre-wrap mb-10 text-lg leading-relaxed text-gray-700">
                                {getLocalizedNotes().content || "暫無內容"}
                            </div>

                            {getLocalizedNotes().link && (
                                <div className="text-center">
                                    <a
                                        href={getLocalizedNotes().link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lanna-gold text-white font-bold rounded-full hover:bg-lanna-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <span>下載詳細文件</span>
                                        <span>&darr;</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            暫無內容 unable to load content.
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
