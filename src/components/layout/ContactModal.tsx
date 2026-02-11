"use client";

import { X, Facebook, Phone, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const { t } = useLanguage();

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
                            <Image src="/line-qr.jpg" alt="LINE QR" fill className="object-cover" />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">ID: suchart74</p>
                    </div>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Social Links */}
                    <div className="w-full space-y-4">
                        <a
                            href="https://www.facebook.com/suchart74"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-xl font-bold hover:bg-[#1877F2]/90 transition-colors shadow-lg shadow-blue-200"
                        >
                            <Facebook size={20} />
                            {t.contact.facebook}
                        </a>

                        <a
                            href="tel:+66808530553"
                            className="flex items-center justify-center gap-3 w-full bg-lanna-gold text-white py-3 rounded-xl font-bold hover:bg-lanna-gold/90 transition-colors shadow-lg shadow-yellow-200"
                        >
                            <Phone size={20} />
                            080-853-0553
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
