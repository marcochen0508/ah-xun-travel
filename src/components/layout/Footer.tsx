"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import CharterNotesModal from "./CharterNotesModal";

export default function Footer() {
    const { t, language } = useLanguage();
    const [showNotes, setShowNotes] = useState(false);

    return (
        <footer className="bg-lanna-green text-white py-16" id="contact">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-3xl">🐘</span>
                        <div className="flex flex-col">
                            <span className="tracking-widest font-serif font-bold text-xl">{t.footer.logoText || "阿勛"}</span>
                            <span className="text-xs font-light tracking-wider opacity-80">
                                {t.footer.brandName}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                        {t.hero.subtitle.split('\n').join(' ')}
                    </p>
                    {/* Socials Removed as per request */}
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-6 text-lanna-gold">{t.footer.quickLinks}</h4>
                    <ul className="space-y-3 text-sm text-white/80">
                        <li><a href="#" className="hover:text-white transition-colors">{t.nav.home}</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                        <li><a href="#destinations" className="hover:text-white transition-colors">{t.nav.destinations}</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                        <li><a href="#reviews" className="hover:text-white transition-colors">{t.nav.reviews}</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
                        <li>
                            <button onClick={() => setShowNotes(true)} className="hover:text-lanna-gold transition-colors text-left">
                                {t.footer.charterNotes || "Charter Notes"}
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-bold text-lg mb-6 text-lanna-gold">{t.nav.contact}</h4>
                    <div className="flex flex-col md:flex-row gap-8">
                        <ul className="space-y-4 text-sm text-white/80 flex-1">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-lanna-gold" />
                                <span>0808530553 (TH)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-lanna-gold" />
                                <span>Chiang Mai, Thailand</span>
                            </li>
                        </ul>
                        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
                            {/* LINE QR */}
                            <div className="bg-white p-2 rounded-lg inline-block text-center shadow-lg">
                                <div className="relative w-24 h-24 mb-2 mx-auto">
                                    <Image
                                        src="/line-qr.jpg"
                                        alt="LINE QR Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lanna-coffee text-xs font-bold block">LINE ID: suchart74</span>
                            </div>

                            {/* WhatsApp QR */}
                            <div className="bg-white p-2 rounded-lg inline-block text-center shadow-lg">
                                <div className="relative w-24 h-24 mb-2 mx-auto">
                                    <Image
                                        src="/whatsapp-qr.jpg"
                                        alt="WhatsApp QR Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lanna-coffee text-xs font-bold block">WhatsApp</span>
                            </div>

                            {/* WeChat QR */}
                            <div className="bg-white p-2 rounded-lg inline-block text-center shadow-lg">
                                <div className="relative w-24 h-24 mb-2 mx-auto">
                                    <Image
                                        src="/wechat-qr.jpg"
                                        alt="WeChat QR Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lanna-coffee text-xs font-bold block">WeChat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/60">
                &copy; {new Date().getFullYear()} AH XUN Travel. {t.footer.rights}.
            </div>

            {/* Notes Modal */}
            <CharterNotesModal isOpen={showNotes} onClose={() => setShowNotes(false)} />
        </footer>
    );
}
