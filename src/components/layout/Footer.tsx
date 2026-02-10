"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const { t, language } = useLanguage();
    const [contactInfo, setContactInfo] = useState<any>(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                console.log("Fetching contact info..."); // Debug log
                const res = await fetch(`/api/admin/content?key=contact_info&t=${Date.now()}`);
                const data = await res.json();
                if (data && data.key) {
                    console.log("Contact info loaded:", data);
                    setContactInfo(data);
                }
            } catch (error) {
                console.error("Failed to fetch contact info", error);
            }
        };
        fetchContact();
    }, []);

    const getContactData = () => {
        // Default Fallbacks
        const defaultPhone = "+66 81 234 5678";
        const defaultLine = "ahxun.cm";
        const defaultFb = "https://www.facebook.com/profile.php?id=100063943372295";

        // If no DB data, use defaults
        if (!contactInfo) {
            return {
                phone: defaultPhone,
                line: defaultLine,
                fb: defaultFb,
                address: t.footer.address,
                email: "",
                whatsapp: "",
                wechat: ""
            };
        }

        // Address logic
        let address;
        if (language === 'th') address = contactInfo.content_th;
        else if (language === 'zh-CN') address = contactInfo.content_zh_cn;
        else address = contactInfo.content_zh_tw; // Default to ZH-TW

        // Merge DB settings with defaults (only if DB is empty string)
        const s = contactInfo.settings || {};

        return {
            phone: s.phone || defaultPhone,
            line: s.line_id || defaultLine,
            fb: s.facebook_url || defaultFb,
            address: address || t.footer.address,
            email: s.email || "",
            whatsapp: s.whatsapp_id || "",
            wechat: s.wechat_id || ""
        };
    };

    const contact = getContactData();

    return (
        <footer className="bg-lanna-green text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12 bg-white rounded-full p-2">
                                <Image
                                    src="/logo.png"
                                    alt="Ah Xun Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-serif leading-none">阿勛包車</h3>
                                <p className="text-xs text-white/70 tracking-widest mt-1">CHIANG MAI</p>
                            </div>
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                            {t.about.content}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href={contact.fb} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-lanna-gold p-2 rounded-full transition-colors">
                                <Facebook size={18} />
                            </a>
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
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-1 text-lanna-gold shrink-0" />
                                    <span>{contact.address}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-lanna-gold shrink-0" />
                                    <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                                        {contact.phone}
                                    </a>
                                </div>
                                {contact.email && (
                                    <div className="flex items-center gap-3">
                                        <Mail size={18} className="text-lanna-gold shrink-0" />
                                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                                            {contact.email}
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* QR Codes Grid */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white p-2 rounded-lg text-center">
                                    <div className="relative aspect-square w-full mb-1">
                                        <Image src="/line-qr.jpg" alt="Line QR" fill className="object-contain" />
                                    </div>
                                    <p className="text-[10px] text-lanna-green font-bold truncate">Line: {contact.line}</p>
                                </div>
                                {contact.whatsapp && (
                                    <div className="bg-white p-2 rounded-lg text-center">
                                        <div className="relative aspect-square w-full mb-1">
                                            <Image src="/whatsapp-qr.jpg" alt="WhatsApp QR" fill className="object-contain" />
                                        </div>
                                        <p className="text-[10px] text-lanna-green font-bold truncate">WhatsApp</p>
                                    </div>
                                )}
                                {contact.wechat && (
                                    <div className="bg-white p-2 rounded-lg text-center">
                                        <div className="relative aspect-square w-full mb-1">
                                            <Image src="/wechat-qr.jpg" alt="WeChat QR" fill className="object-contain" />
                                        </div>
                                        <p className="text-[10px] text-lanna-green font-bold truncate">WeChat</p>
                                    </div>
                                )}
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
