"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import Image from "next/image";
import { Loader2, Save, Upload } from "lucide-react";
import { useRouter } from "next/navigation";

type SeoSettings = {
    site_title: string;
    site_description: string;
    site_keywords: string;
    og_title: string;
    og_description: string;
    og_image: string;
};

const DEFAULT_SETTINGS: SeoSettings = {
    site_title: "阿勛・清邁包車旅遊規劃 | Ah Xun Chiang Mai Travel",
    site_description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。",
    site_keywords: "清邁包車, 泰北旅遊, 中文司機, VIP包車",
    og_title: "",
    og_description: "",
    og_image: "/og-image.jpg"
};

export default function SeoSettingsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState<SeoSettings>(DEFAULT_SETTINGS);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const { data, error } = await supabase
                .from('general_content')
                .select('settings')
                .eq('key', 'site_settings')
                .single();

            if (error && error.code !== 'PGRST116') {
                throw error;
            }

            if (data?.settings) {
                setSettings({ ...DEFAULT_SETTINGS, ...data.settings });
            }
        } catch (error) {
            console.error('Error fetching SEO settings:', error);
            toast.error("載入設定失敗");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Check if record exists
            const { data: existing } = await supabase
                .from('general_content')
                .select('id')
                .eq('key', 'site_settings')
                .single();

            let error;
            if (existing) {
                const { error: updateError } = await supabase
                    .from('general_content')
                    .update({
                        settings: settings,
                        updated_at: new Date().toISOString()
                    })
                    .eq('key', 'site_settings');
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('general_content')
                    .insert({
                        key: 'site_settings',
                        settings: settings,
                        title_zh_tw: 'Website SEO Settings', // Metadata for admin readability
                        is_active: true
                    });
                error = insertError;
            }

            if (error) throw error;

            toast.success("SEO 設定已更新");
            router.refresh(); // Refresh to potentially update layout if it re-fetches
        } catch (error) {
            console.error('Error saving settings:', error);
            toast.error("儲存失敗，請稍後再試");
        } finally {
            setSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('bucket', 'banners'); // Reuse banners bucket or create 'assets'

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            setSettings(prev => ({ ...prev, og_image: data.url }));
            toast.success("圖片上傳成功");
        } catch (error) {
            console.error('Upload error:', error);
            toast.error("圖片上傳失敗");
        } finally {
            setUploading(false);
        }
    };

    if (loading) {
        return <div className="p-8 flex justify-center"><Loader2 className="animate-spin h-8 w-8 text-lanna-green" /></div>;
    }

    return (
        <div className="max-w-4xl mx-auto pb-12">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-lanna-coffee">SEO 與網站設定</h1>
                    <p className="text-gray-500 text-sm mt-1">管理網站在 Google 搜尋結果與社群分享時的顯示樣貌</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-lanna-green text-white rounded-lg hover:bg-lanna-deep-green transition-colors disabled:opacity-50"
                >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    儲存設定
                </button>
            </div>

            <div className="space-y-8">
                {/* Basic Info Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                        基本資訊 (Google 搜尋結果)
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                網站標題 (Title) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={settings.site_title}
                                onChange={(e) => setSettings({ ...settings, site_title: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lanna-green/20 outline-none"
                                placeholder="阿勛・清邁包車旅遊規劃"
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                建議長度：60 個字元以內。這是搜尋結果中最醒目的標題。
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                網站描述 (Description)
                            </label>
                            <textarea
                                value={settings.site_description}
                                onChange={(e) => setSettings({ ...settings, site_description: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lanna-green/20 outline-none resize-none"
                                placeholder="專業、舒適、深度慢旅..."
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                建議長度：150-160 個字元。這是標題下方的簡短介紹。
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                關鍵字 (Keywords)
                            </label>
                            <input
                                type="text"
                                value={settings.site_keywords}
                                onChange={(e) => setSettings({ ...settings, site_keywords: e.target.value })}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lanna-green/20 outline-none"
                                placeholder="清邁包車, 泰北旅遊, 中文司機"
                            />
                            <p className="text-xs text-gray-400 mt-1">
                                請用逗號分隔每個關鍵字。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                        社群分享設定 (Open Graph)
                    </h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        分享標題 (OG Title)
                                    </label>
                                    <input
                                        type="text"
                                        value={settings.og_title}
                                        onChange={(e) => setSettings({ ...settings, og_title: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lanna-green/20 outline-none"
                                        placeholder="同網站標題 (若留空則自動使用網站標題)"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        分享描述 (OG Description)
                                    </label>
                                    <textarea
                                        value={settings.og_description}
                                        onChange={(e) => setSettings({ ...settings, og_description: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lanna-green/20 outline-none resize-none"
                                        placeholder="同網站描述 (若留空則自動使用網站描述)"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    分享預覽圖片 (OG Image)
                                </label>
                                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative">
                                    {settings.og_image ? (
                                        <div className="relative aspect-video w-full overflow-hidden rounded-md mb-2">
                                            <Image
                                                src={settings.og_image}
                                                alt="OG Preview"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-video w-full bg-gray-100 rounded-md mb-2 flex items-center justify-center text-gray-400 text-sm">
                                            無圖片
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        disabled={uploading}
                                    />

                                    <div className="flex items-center justify-center gap-2 text-sm text-lanna-green font-medium">
                                        {uploading ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <Upload className="w-4 h-4" />
                                        )}
                                        {uploading ? "上傳中..." : "更換圖片 (建議 1200x630)"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
