"use client";

import { useState, useEffect } from "react";
import { X, Facebook, Phone, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const { t } = useLanguage();
    const [contact, setContact] = useState({
        phone: "080-853-0553",
        phoneLink: "tel:+66808530553",
        line_id: "suchart74",
        facebook_url: "https://www.facebook.com/suchart74",
        line_qr: "/line-qr.jpg"
    });

    useEffect(() => {
        if (isOpen) {
            const fetchContact = async () => {
                try {
                    const res = await fetch("/api/admin/content?key=contact_info");
                    const data = await res.json();
                    if (data.key && data.settings) {
                        setContact({
                            phone: data.settings.phone || "080-853-0553",
                            phoneLink: `tel:${data.settings.phone?.replace(/\s/g, '')}` || "tel:+66808530553",
                            line_id: data.settings.line_id || "suchart74",
                            facebook_url: data.settings.facebook_url || "https://www.facebook.com/suchart74",
                            line_qr: data.settings.line_qr || "/line-qr.jpg"
                        });
                    }
                } catch (e) {
                    console.error("Failed to fetch contact");
                }
            };
            fetchContact();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-lanna-green p-4 flex justify-between items-center text-white">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <span className="text-2xl">🐘</span>
                        {t.contact.modalTitle}
                    </h3>
                    <button onClick={onClose} className="hover:rotate-90 transition-transform">
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 flex flex-col items-center gap-6">
                    {/* LINE QR Code */}
                    <div className="text-center">
                        <p className="font-bold text-gray-700 mb-4 flex items-center justify-center gap-2">
                            <span className="text-[#00C300] font-black text-xl">LINE</span>
                            {t.contact.scanLine}
                        </p>
                        <div className="relative w-48 h-48 bg-gray-100 rounded-lg mx-auto border-4 border-[#00C300]/20 flex items-center justify-center overflow-hidden">
                            <Image
                                src={contact.line_qr}
                                alt="LINE QR"
                                fill
                                className="object-cover"
                                unoptimized={contact.line_qr.startsWith('http')}
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">ID: {contact.line_id}</p>
                    </div>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Social Links */}
                    <div className="w-full space-y-4">
                        <a
                            href={contact.facebook_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-xl font-bold hover:bg-[#1877F2]/90 transition-colors shadow-lg shadow-blue-200"
                        >
                            <Facebook size={20} />
                            {t.contact.facebook}
                        </a>

                        <a
                            href={contact.phoneLink}
                            className="flex items-center justify-center gap-3 w-full bg-lanna-gold text-white py-3 rounded-xl font-bold hover:bg-lanna-gold/90 transition-colors shadow-lg shadow-yellow-200"
                        >
                            <Phone size={20} />
                            {contact.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
