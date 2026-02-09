"use client";

import { Armchair, Languages, Map } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: Armchair,
            title: t.features.vipTitle,
            description: t.features.vipDesc,
            sub: "10-SEATER VIP"
        },
        {
            icon: Languages,
            title: t.features.driverTitle,
            description: t.features.driverDesc,
            sub: "CHINESE SPEAKING"
        },
        {
            icon: Map,
            title: t.features.customTitle,
            description: t.features.customDesc,
            sub: "CUSTOM ITINERARY"
        },
    ];

    return (
        <section id="services" className="py-20 bg-lanna-cream text-lanna-coffee">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white/50 border border-lanna-gold/10"
                        >
                            <div className="w-16 h-16 rounded-full bg-lanna-gold/10 flex items-center justify-center mb-6 text-lanna-gold">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 tracking-wider text-lanna-coffee">
                                {feature.title}
                            </h3>
                            <p className="text-xs font-serif text-lanna-gold mb-4 tracking-widest uppercase">
                                {feature.sub}
                            </p>
                            <p className="text-gray-600 leading-relaxed max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorative Divider */}
                <div className="flex justify-center mt-16">
                    <div className="w-24 h-1 bg-lanna-gold/30 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
