"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/i18n";
import { NavigationLink } from "@/types/schema";
import ContactModal from "./ContactModal";
import CharterNotesModal from "./CharterNotesModal";

const Navbar = () => {
    const scrolled = useScroll(20);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [notesModalOpen, setNotesModalOpen] = useState(false);

    const { language, setLanguage, t } = useLanguage();

    const [dynamicLinks, setDynamicLinks] = useState<NavigationLink[]>([]);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const { data, error } = await supabase
                    .from("navigation_links")
                    .select("*")
                    .eq("is_active", true)
                    .order("sort_order", { ascending: true });

                if (!error && data && data.length > 0) {
                    setDynamicLinks(data);
                } else {
                    // Fallback to defaults if no links in DB
                    const defaults: any[] = [
                        { id: '1', url: "/", label_zh_tw: t.nav.home, label_zh_cn: t.nav.home, label_th: t.nav.home },
                        { id: '2', url: "#services", label_zh_tw: t.nav.services, label_zh_cn: t.nav.services, label_th: t.nav.services },
                        { id: '3', url: "#destinations", label_zh_tw: t.nav.destinations, label_zh_cn: t.nav.destinations, label_th: t.nav.destinations },
                        { id: '4', url: "#about", label_zh_tw: t.nav.about, label_zh_cn: t.nav.about, label_th: t.nav.about },
                        { id: '5', url: "#reviews", label_zh_tw: t.nav.reviews, label_zh_cn: t.nav.reviews, label_th: t.nav.reviews },
                        { id: '6', url: "charter-notes", label_zh_tw: t.nav.charterNotes, label_zh_cn: t.nav.charterNotes, label_th: t.nav.charterNotes },
                        { id: '7', url: "#contact", label_zh_tw: t.nav.contact, label_zh_cn: t.nav.contact, label_th: t.nav.contact },
                    ];
                    setDynamicLinks(defaults);
                }
            } catch (err) {
                console.error("Failed to fetch nav links:", err);
            }
        };
        fetchLinks();
    }, [t]);

    const getLocalizedLabel = (link: NavigationLink) => {
        if (language === "th" && link.label_th) return link.label_th;
        if (language === "zh-CN" && link.label_zh_cn) return link.label_zh_cn;
        return link.label_zh_tw || link.label;
    };

    const languages: { code: Language; label: string }[] = [
        { code: "zh-TW", label: "繁體中文" },
        { code: "zh-CN", label: "简体中文" },
        { code: "th", label: "ไทย" },
    ];

    const handleNotesClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setNotesModalOpen(true);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-lanna-cream/95 backdrop-blur-md shadow-md py-3 text-lanna-coffee"
                        : "bg-transparent py-5 text-white"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-bold text-2xl flex items-center gap-2">
                        <span className="text-3xl">🐘</span>
                        <div className="flex flex-col">
                            <span className="tracking-widest font-serif text-lg">阿勛</span>
                            <span className="text-xs font-light tracking-wider">
                                清邁包車旅遊規劃
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {dynamicLinks.map((link) => (
                            link.url === "charter-notes" ? (
                                <button
                                    key={link.id}
                                    onClick={() => setNotesModalOpen(true)}
                                    className="hover:text-lanna-gold transition-colors font-medium text-sm tracking-wide"
                                >
                                    {getLocalizedLabel(link)}
                                </button>
                            ) : (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className="hover:text-lanna-gold transition-colors font-medium text-sm tracking-wide"
                                >
                                    {getLocalizedLabel(link)}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-1 hover:text-lanna-gold transition-colors"
                            >
                                <Globe size={20} />
                                <span className="text-xs font-bold uppercase">{language}</span>
                                <ChevronDown size={14} />
                            </button>

                            {langMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden min-w-[120px] animate-fade-in-up">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLangMenuOpen(false);
                                            }}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === lang.code ? "text-lanna-gold font-bold" : ""}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setContactModalOpen(true)}
                            className={cn(
                                "px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-sm",
                                scrolled
                                    ? "bg-lanna-gold text-white hover:bg-lanna-gold/90"
                                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                            )}
                        >
                            {t.nav.consult}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={() => setLangMenuOpen(!langMenuOpen)}>
                            <Globe size={24} />
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-lanna-cream shadow-lg p-4 flex flex-col gap-4 text-lanna-coffee border-t border-lanna-gold/20 h-screen">
                        {dynamicLinks.map((link) => (
                            link.url === "charter-notes" ? (
                                <button
                                    key={link.id}
                                    onClick={handleNotesClick}
                                    className="text-left py-2 border-b border-lanna-gold/10 hover:text-lanna-gold font-medium text-lg"
                                >
                                    {getLocalizedLabel(link)}
                                </button>
                            ) : (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2 border-b border-lanna-gold/10 hover:text-lanna-gold font-medium text-lg"
                                >
                                    {getLocalizedLabel(link)}
                                </Link>
                            )
                        ))}

                        <div className="mt-4">
                            <p className="text-sm font-bold text-gray-400 mb-2">{t.nav.language}</p>
                            <div className="flex gap-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`px-3 py-1 rounded-full text-sm border ${language === lang.code ? "bg-lanna-gold text-white border-lanna-gold" : "border-gray-300"}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setContactModalOpen(true);
                            }}
                            className="bg-lanna-gold text-white px-4 py-3 rounded-full w-full mt-4 font-bold shadow-lg"
                        >
                            {t.nav.consult}
                        </button>
                    </div>
                )}
            </nav>

            {/* Contact Modal */}
            <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

            {/* Charter Notes Modal */}
            <CharterNotesModal isOpen={notesModalOpen} onClose={() => setNotesModalOpen(false)} />
        </>
    );
};

export default Navbar;
