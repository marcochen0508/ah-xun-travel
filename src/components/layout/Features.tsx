"use client";

import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
    const { t, language } = useLanguage();
    const [features, setFeatures] = useState([
        {
            icon: "Armchair",
            title: t.features.vipTitle,
            sub: "10-SEATER VIP",
            description: t.features.vipDesc
        },
        {
            icon: "Languages",
            title: t.features.driverTitle,
            sub: "CHINESE SPEAKING",
            description: t.features.driverDesc
        },
        {
            icon: "Map",
            title: t.features.customTitle,
            sub: "CUSTOM ITINERARY",
            description: t.features.customDesc
        }
    ]);

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const res = await fetch("/api/admin/content?key=features");
                const data = await res.json();
                if (data.key && data.settings && Array.isArray(data.settings)) {
                    setFeatures(data.settings);
                }
            } catch (error) {
                console.error("Failed to fetch features");
            }
        };
        fetchFeatures();
    }, []);

    // Helper to render dynamic icon
    const renderIcon = (iconName: string, size = 32) => {
        const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
        return <IconComponent size={size} strokeWidth={1.5} />;
    };

    const getLocalizedContent = (feature: any) => {
        if (language === 'zh-CN') {
            return {
                title: feature.title_cn || feature.title,
                sub: feature.sub_cn || feature.sub,
                description: feature.description_cn || feature.description
            };
        }
        if (language === 'th') {
            return {
                title: feature.title_th || feature.title,
                sub: feature.sub_th || feature.sub,
                description: feature.description_th || feature.description
            };
        }
        // Default zh-TW
        return {
            title: feature.title,
            sub: feature.sub,
            description: feature.description
        };
    };

    return (
        <section id="services" className="py-20 bg-lanna-cream text-lanna-coffee">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature: any, index) => {
                        const content = getLocalizedContent(feature);
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white/50 border border-lanna-gold/10"
                            >
                                <div className="w-16 h-16 rounded-full bg-lanna-gold/10 flex items-center justify-center mb-6 text-lanna-gold">
                                    {renderIcon(feature.icon)}
                                </div>
                                <h3 className="text-xl font-bold mb-2 tracking-wider text-lanna-coffee">
                                    {content.title}
                                </h3>
                                <p className="text-xs font-serif text-lanna-gold mb-4 tracking-widest uppercase">
                                    {content.sub}
                                </p>
                                <p className="text-gray-600 leading-relaxed max-w-xs">
                                    {content.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Decorative Divider */}
                <div className="flex justify-center mt-16">
                    <div className="w-24 h-1 bg-lanna-gold/30 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
