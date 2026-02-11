"use client";

import { useEffect, useState } from "react";
import { Save, Armchair, Languages, Map, Car, Clock, User, Star, Heart, Shield, Smile, Edit2, Globe } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Available icons for selection
const ICON_OPTIONS = [
    { name: "Armchair", label: "座位 (VIP)" },
    { name: "Languages", label: "語言 (中文)" },
    { name: "Map", label: "地圖 (行程)" },
    { name: "Car", label: "車輛" },
    { name: "Clock", label: "時間" },
    { name: "User", label: "用戶" },
    { name: "Star", label: "星星" },
    { name: "Heart", label: "愛心" },
    { name: "Shield", label: "盾牌" },
    { name: "Smile", label: "微笑" }
];

interface FeatureItem {
    id: string; // unique id for key
    icon: string;

    // Traditional Chinese (Default)
    title: string;
    sub: string;
    description: string;

    // Simplified Chinese
    title_cn?: string;
    sub_cn?: string;
    description_cn?: string;

    // Thai
    title_th?: string;
    sub_th?: string;
    description_th?: string;
}

export default function FeaturesPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeLang, setActiveLang] = useState<'tw' | 'cn' | 'th'>('tw');

    // Default 3 features
    const [features, setFeatures] = useState<FeatureItem[]>([
        {
            id: "f1", icon: "Armchair",
            title: "VIP 保母車", sub: "10-SEATER VIP", description: "提供頂級 Toyota Commuter 10人座車型，寬敞舒適的獨立座椅。",
            title_cn: "VIP 保姆车", sub_cn: "10-SEATER VIP", description_cn: "提供顶级 Toyota Commuter 10人座车型，宽敞舒适的独立座椅。",
            title_th: "รถตู้ VIP 10 ที่นั่ง", sub_th: "10-SEATER VIP", description_th: "ห้องโดยสารกว้างขวาง สะดวกสบายระดับ VIP ตอบโจทย์ทุกการเดินทาง ทั้งครอบครัวและหมู่คณะ"
        },
        {
            id: "f2", icon: "Languages",
            title: "中文司機", sub: "CHINESE SPEAKING", description: "全程中文溝通無障礙，在地人帶路，深入體驗清邁文化。",
            title_cn: "中文司机", sub_cn: "CHINESE SPEAKING", description_cn: "全程中文沟通无障碍，在地人带路，深入体验清迈文化。",
            title_th: "คนขับพูดจีนได้", sub_th: "CHINESE SPEAKING", description_th: "คนขับมืออาชีพ สุภาพและเป็นกันเอง สื่อสารภาษาจีนได้ดีเยี่ยม พร้อมแนะนำที่เที่ยว"
        },
        {
            id: "f3", icon: "Map",
            title: "客製化行程", sub: "CUSTOM ITINERARY", description: "想去哪就去哪，彈性規劃路線，不趕時間的慢活旅遊。",
            title_cn: "客制化行程", sub_cn: "CUSTOM ITINERARY", description_cn: "想去哪就去哪，弹性规划路线，不赶时间的慢活旅游。",
            title_th: "จัดแผนเที่ยวตามใจ", sub_th: "CUSTOM ITINERARY", description_th: "จัดทริปได้ตามความต้องการ ยืดหยุ่นเวลาได้ เราพร้อมช่วยวางแผนเส้นทางที่ดีที่สุดให้คุณ"
        }
    ]);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch("/api/admin/content?key=features");
            const data = await res.json();
            if (data.key && data.settings && Array.isArray(data.settings)) {
                setFeatures(data.settings);
            }
        } catch (error) {
            console.error("Failed to fetch features");
        } finally {
            setLoading(false);
        }
    };

    const handleFeatureChange = (index: number, field: keyof FeatureItem, value: string) => {
        const newFeatures = [...features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        setFeatures(newFeatures);
    };

    const handleSubmit = async () => {
        setSaving(true);
        try {
            const payload = {
                key: "features",
                title_zh_tw: "特色服務 (Features)",
                settings: features
            };

            const res = await fetch("/api/admin/content", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert("儲存成功！");
            } else {
                alert("儲存失敗");
            }
        } catch (error) {
            alert("發生錯誤");
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    // Helper to render dynamic icon
    const renderIcon = (iconName: string, size = 20) => {
        const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
        return <IconComponent size={size} />;
    };

    if (loading) return <div className="p-8">載入中...</div>;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">特色服務管理 (Features)</h2>
                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    className="flex items-center gap-2 bg-lanna-green text-white px-6 py-2 rounded-lg hover:bg-lanna-green/90 font-bold shadow-lg disabled:opacity-50"
                >
                    <Save size={20} />
                    {saving ? "儲存中..." : "儲存設定"}
                </button>
            </div>

            {/* Language Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 pb-1">
                <button
                    onClick={() => setActiveLang('tw')}
                    className={`px-4 py-2 rounded-t-lg font-bold transition-colors ${activeLang === 'tw' ? 'bg-lanna-green text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    繁體中文 (預設)
                </button>
                <button
                    onClick={() => setActiveLang('cn')}
                    className={`px-4 py-2 rounded-t-lg font-bold transition-colors ${activeLang === 'cn' ? 'bg-lanna-green text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    简体中文
                </button>
                <button
                    onClick={() => setActiveLang('th')}
                    className={`px-4 py-2 rounded-t-lg font-bold transition-colors ${activeLang === 'th' ? 'bg-lanna-green text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                    泰文 (Thai)
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div key={feature.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
                        <div className="absolute top-4 right-4 text-gray-200 font-bold text-4xl opacity-50">
                            {index + 1}
                        </div>

                        {/* Icon Selection (Language Independent) */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700 mb-1">圖示 (Icon)</label>
                            <div className="grid grid-cols-5 gap-2 bg-gray-50 p-2 rounded-lg border">
                                {ICON_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.name}
                                        type="button"
                                        onClick={() => handleFeatureChange(index, "icon", opt.name)}
                                        className={`flex flex-col items-center justify-center p-2 rounded hover:bg-white hover:shadow transition-all ${feature.icon === opt.name ? "bg-lanna-green text-white shadow-md ring-2 ring-offset-1 ring-lanna-green" : "text-gray-500"}`}
                                        title={opt.label}
                                    >
                                        {renderIcon(opt.name, 20)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Traditional Chinese Fields */}
                        <div className={activeLang === 'tw' ? 'block' : 'hidden'}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">主標題 (繁體)</label>
                                <input
                                    type="text"
                                    value={feature.title}
                                    onChange={(e) => handleFeatureChange(index, "title", e.target.value)}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none"
                                    placeholder="例如: VIP 包車"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">副標題 (Subtitle)</label>
                                <input
                                    type="text"
                                    value={feature.sub}
                                    onChange={(e) => handleFeatureChange(index, "sub", e.target.value)}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none font-mono text-sm"
                                    placeholder="例如: VIP SERVICE"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">描述內文 (繁體)</label>
                                <textarea
                                    rows={4}
                                    value={feature.description}
                                    onChange={(e) => handleFeatureChange(index, "description", e.target.value)}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none resize-none"
                                    placeholder="簡短說明..."
                                />
                            </div>
                        </div>

                        {/* Simplified Chinese Fields */}
                        <div className={activeLang === 'cn' ? 'block' : 'hidden'}>
                            <div className="mb-4 bg-orange-50 p-2 rounded">
                                <label className="block text-sm font-bold text-orange-800 mb-1">主标题 (简体)</label>
                                <input
                                    type="text"
                                    value={feature.title_cn || ""}
                                    onChange={(e) => handleFeatureChange(index, "title_cn", e.target.value)}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                            <div className="mb-4 bg-orange-50 p-2 rounded">
                                <label className="block text-sm font-bold text-orange-800 mb-1">副标题 (Subtitle)</label>
                                <input
                                    type="text"
                                    value={feature.sub_cn || ""}
                                    onChange={(e) => handleFeatureChange(index, "sub_cn", e.target.value)}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none font-mono text-sm"
                                    placeholder="预设使用英文"
                                />
                            </div>
                            <div className="mb-4 bg-orange-50 p-2 rounded">
                                <label className="block text-sm font-bold text-orange-800 mb-1">描述内文 (简体)</label>
                                <textarea
                                    rows={4}
                                    value={feature.description_cn || ""}
                                    onChange={(e) => handleFeatureChange(index, "description_cn", e.target.value)}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                        </div>

                        {/* Thai Fields */}
                        <div className={activeLang === 'th' ? 'block' : 'hidden'}>
                            <div className="mb-4 bg-purple-50 p-2 rounded">
                                <label className="block text-sm font-bold text-purple-800 mb-1">主標題 (泰文)</label>
                                <input
                                    type="text"
                                    value={feature.title_th || ""}
                                    onChange={(e) => handleFeatureChange(index, "title_th", e.target.value)}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                            <div className="mb-4 bg-purple-50 p-2 rounded">
                                <label className="block text-sm font-bold text-purple-800 mb-1">副標題 (Subtitle)</label>
                                <input
                                    type="text"
                                    value={feature.sub_th || ""}
                                    onChange={(e) => handleFeatureChange(index, "sub_th", e.target.value)}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none font-mono text-sm"
                                    placeholder="預設使用英文"
                                />
                            </div>
                            <div className="mb-4 bg-purple-50 p-2 rounded">
                                <label className="block text-sm font-bold text-purple-800 mb-1">描述內文 (泰文)</label>
                                <textarea
                                    rows={4}
                                    value={feature.description_th || ""}
                                    onChange={(e) => handleFeatureChange(index, "description_th", e.target.value)}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
                <p className="font-bold flex items-center gap-2">
                    <Edit2 size={16} />
                    提示：
                </p>
                <ul className="list-disc list-inside mt-1 ml-1 opacity-80">
                    <li>使用上方分頁切換不同語言進行編輯。</li>
                    <li>若簡體或泰文欄位留空，前台將自動使用繁體中文(或預設值)顯示。</li>
                </ul>
            </div>
        </div>
    );
}
