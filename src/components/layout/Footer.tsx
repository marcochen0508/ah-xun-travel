"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
    const { t, language } = useLanguage();
    const [contact, setContact] = useState({
        phone: "0808530553",
        phoneLink: "tel:+66808530553",
        line: "suchart74",
        fb: "https://www.facebook.com/suchart74",
        email: "ahxun.cm@gmail.com",
        line_qr: "/line-qr.jpg",
        whatsapp_qr: "/whatsapp-qr.jpg",
        whatsapp_id: "",
        wechat_qr: "/wechat-qr.jpg",
        wechat_id: "",
        footer_desc: t.about.content // Default fallback
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await fetch("/api/admin/content?key=contact_info");
                const data = await res.json();
                if (data.key && data.settings) {
                    const s = data.settings;

                    // Determine footer description based on language
                    let desc = s.footer_desc || t.about.content;
                    if (language === 'th' && s.footer_desc_th) desc = s.footer_desc_th;
                    if (language === 'zh-CN' && s.footer_desc_cn) desc = s.footer_desc_cn;

                    setContact({
                        phone: s.phone || "0808530553",
                        phoneLink: `tel:${s.phone?.replace(/\s/g, '')}` || "tel:+66808530553",
                        line: s.line_id || "suchart74",
                        fb: s.facebook_url || "https://www.facebook.com/suchart74",
                        email: s.email || "ahxun.cm@gmail.com",
                        line_qr: s.line_qr || "/line-qr.jpg",
                        whatsapp_qr: s.whatsapp_qr || "/whatsapp-qr.jpg",
                        whatsapp_id: s.whatsapp_id || "",
                        wechat_qr: s.wechat_qr || "/wechat-qr.jpg",
                        wechat_id: s.wechat_id || "",
                        footer_desc: desc
                    });
                }
            } catch (e) {
                console.error("Failed to fetch contact footer");
            }
        };
        fetchContact();
    }, [language]); // Re-fetch or re-calc when language changes

    return (
        <footer className="bg-lanna-green text-white pt-16 pb-8" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <span className="text-3xl">🐘</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-serif leading-none">阿勛包車</h3>
                                <p className="text-xs text-white/70 tracking-widest mt-1">CHIANG MAI</p>
                            </div>
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed mb-6 font-light whitespace-pre-line">
                            {contact.footer_desc}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
                            {t.nav.home}
                        </h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><Link href="#features" className="hover:text-lanna-gold transition-colors">{t.nav.services}</Link></li>
                            <li><Link href="#destinations" className="hover:text-lanna-gold transition-colors">{t.nav.destinations}</Link></li>
                            <li><Link href="#about" className="hover:text-lanna-gold transition-colors">{t.nav.about}</Link></li>
                            <li><Link href="#reviews" className="hover:text-lanna-gold transition-colors">{t.nav.reviews}</Link></li>
                            <li><Link href="/notes" className="hover:text-lanna-gold transition-colors">{t.nav.charterNotes}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">
                            {t.nav.contact}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-4 text-sm text-white/80">
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-lanna-gold shrink-0" />
                                    <a href={contact.phoneLink} className="hover:text-white transition-colors">
                                        {contact.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-lanna-gold shrink-0" />
                                    <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                                        {contact.email}
                                    </a>
                                </div>
                                {contact.fb && (
                                    <div className="flex items-center gap-3">
                                        <Facebook size={18} className="text-lanna-gold shrink-0" />
                                        <a href={contact.fb} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            Facebook
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* QR Codes Grid */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white p-2 rounded-lg text-center">
                                    <div className="relative aspect-square w-full mb-1">
                                        <Image
                                            src={contact.line_qr}
                                            alt="Line QR"
                                            fill
                                            className="object-contain"
                                            unoptimized={contact.line_qr.startsWith('http')}
                                        />
                                    </div>
                                    <p className="text-[10px] text-lanna-green font-bold truncate">Line: {contact.line}</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg text-center">
                                    <div className="relative aspect-square w-full mb-1">
                                        <Image
                                            src={contact.whatsapp_qr}
                                            alt="WhatsApp QR"
                                            fill
                                            className="object-contain"
                                            unoptimized={contact.whatsapp_qr.startsWith('http')}
                                        />
                                    </div>
                                    <p className="text-[10px] text-lanna-green font-bold truncate">WA: {contact.whatsapp_id}</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg text-center">
                                    <div className="relative aspect-square w-full mb-1">
                                        <Image
                                            src={contact.wechat_qr}
                                            alt="WeChat QR"
                                            fill
                                            className="object-contain"
                                            unoptimized={contact.wechat_qr.startsWith('http')}
                                        />
                                    </div>
                                    <p className="text-[10px] text-lanna-green font-bold truncate">WC: {contact.wechat_id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 font-light">
                    <p>&copy; {new Date().getFullYear()} Ah Xun Chiang Mai Charter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
