"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/i18n";
import ContactModal from "./ContactModal";
import CharterNotesModal from "./CharterNotesModal";

const Navbar = () => {
    const scrolled = useScroll(20);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [notesModalOpen, setNotesModalOpen] = useState(false);

    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.services, href: "#services" },
        { name: t.nav.destinations, href: "#destinations" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.reviews, href: "#reviews" },
        // Notes will be handled separately in render loop to add custom click handler
    ];

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

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-lanna-gold transition-colors font-medium text-sm tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Custom Link for Charter Notes */}
                        <button
                            onClick={() => setNotesModalOpen(true)}
                            className="hover:text-lanna-gold transition-colors font-medium text-sm tracking-wide"
                        >
                            {t.nav.charterNotes || "包車注意事項"}
                        </button>

                        <Link
                            href="#contact"
                            className="hover:text-lanna-gold transition-colors font-medium text-sm tracking-wide"
                        >
                            {t.nav.contact}
                        </Link>
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2 border-b border-lanna-gold/10 hover:text-lanna-gold font-medium text-lg"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={handleNotesClick}
                            className="text-left py-2 border-b border-lanna-gold/10 hover:text-lanna-gold font-medium text-lg"
                        >
                            {t.nav.charterNotes || "包車注意事項"}
                        </button>

                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 border-b border-lanna-gold/10 hover:text-lanna-gold font-medium text-lg"
                        >
                            {t.nav.contact}
                        </Link>

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
