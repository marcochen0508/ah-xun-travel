"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface CharterNotesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CharterNotesModal({ isOpen, onClose }: CharterNotesModalProps) {
    const { t, language } = useLanguage();
    const [notesData, setNotesData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && !notesData) {
            fetchNotes();
        }
    }, [isOpen]);

    const fetchNotes = async () => {
        setLoading(true);
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
        if (!notesData) return { content: "Loading..." };
        return {
            content: language === "th" ? notesData.content_th : (language === "zh-CN" ? notesData.content_zh_cn : notesData.content_zh_tw),
            link: notesData.link_url
        };
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in text-gray-800">
            <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]">
                <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                    <h3 className="text-xl font-bold text-lanna-green font-serif">
                        {t.footer.charterNotes || "包車注意事項"}
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <span className="text-2xl leading-none">&times;</span>
                    </button>
                </div>
                <div className="p-8 overflow-y-auto">
                    {notesData ? (
                        <>
                            <div className="prose prose-stone max-w-none whitespace-pre-wrap mb-8">
                                {(() => {
                                    const { content } = getLocalizedNotes();
                                    return content || "Loading content...";
                                })()}
                            </div>

                            {(() => {
                                const { link } = getLocalizedNotes();
                                if (link) {
                                    return (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-4 bg-lanna-gold text-white font-bold rounded-lg hover:bg-lanna-gold/90 transition-all shadow-md group"
                                        >
                                            <span>Download Document</span>
                                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                        </a>
                                    )
                                }
                                return null;
                            })()}
                        </>
                    ) : (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lanna-gold"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
