"use client";

import { useEffect, useState } from "react";
import { Save, Upload, Image as ImageIcon, Globe, Info } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface AboutContent {
    image_url: string;

    // Traditional Chinese
    title: string;
    content: string;

    // Simplified Chinese
    title_cn?: string;
    content_cn?: string;

    // Thai
    title_th?: string;
    content_th?: string;
}

export default function AboutPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [activeLang, setActiveLang] = useState<'tw' | 'cn' | 'th'>('tw');

    const [data, setData] = useState<AboutContent>({
        image_url: "",
        title: "",
        content: ""
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch("/api/admin/content?key=about_us");
            const result = await res.json();
            if (result.key && result.settings) {
                setData(result.settings);
            }
        } catch (error) {
            console.error("Failed to fetch about content");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field: keyof AboutContent, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `about-${Date.now()}.${fileExt}`;

        try {
            const { error: uploadError } = await supabase.storage
                .from('banners')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('banners')
                .getPublicUrl(fileName);

            handleChange('image_url', publicUrl);
        } catch (error) {
            console.error('Upload Error:', error);
            alert('圖片上傳失敗');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async () => {
        setSaving(true);
        try {
            const payload = {
                key: "about_us",
                title_zh_tw: "關於我們 (About Us)",
                settings: data
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

    if (loading) return <div className="p-8">載入中...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">關於我們管理 (About Us)</h2>
                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    className="flex items-center gap-2 bg-lanna-green text-white px-6 py-2 rounded-lg hover:bg-lanna-green/90 font-bold shadow-lg disabled:opacity-50"
                >
                    <Save size={20} />
                    {saving ? "儲存中..." : "儲存設定"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Image Upload */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <ImageIcon size={20} />
                            代表圖片
                        </h3>

                        <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-lg overflow-hidden mb-4 border-2 border-dashed border-gray-300 flex items-center justify-center group">
                            {data.image_url ? (
                                <Image
                                    src={data.image_url}
                                    alt="About Image"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-gray-400">尚無圖片</span>
                            )}

                            <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer">
                                <Upload size={32} className="mb-2" />
                                <span className="text-sm font-bold">更換圖片</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={uploading}
                                />
                            </label>
                        </div>

                        {uploading && <p className="text-sm text-center text-lanna-green animate-pulse">上傳中...</p>}
                        <p className="text-xs text-gray-500 text-center">建議尺寸：600 x 800 px</p>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        {/* Language Tabs */}
                        <div className="flex gap-2 mb-6 border-b border-gray-200 pb-1">
                            <button
                                onClick={() => setActiveLang('tw')}
                                className={`px-4 py-2 rounded-t-lg font-bold transition-colors ${activeLang === 'tw' ? 'bg-lanna-green text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                繁體中文
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

                        {/* Traditional Chinese */}
                        <div className={activeLang === 'tw' ? 'block' : 'hidden'}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">標題 (Title)</label>
                                <input
                                    type="text"
                                    value={data.title || ""}
                                    onChange={(e) => handleChange("title", e.target.value)}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none"
                                    placeholder="關於阿勛"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">內容 (Content)</label>
                                <textarea
                                    rows={10}
                                    value={data.content || ""}
                                    onChange={(e) => handleChange("content", e.target.value)}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none resize-none"
                                    placeholder="阿勛長期深耕清邁..."
                                />
                            </div>
                        </div>

                        {/* Simplified Chinese */}
                        <div className={activeLang === 'cn' ? 'block' : 'hidden'}>
                            <div className="mb-4 bg-orange-50 p-3 rounded-lg">
                                <label className="block text-sm font-bold text-orange-800 mb-1">标题 (简体)</label>
                                <input
                                    type="text"
                                    value={data.title_cn || ""}
                                    onChange={(e) => handleChange("title_cn", e.target.value)}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                            <div className="mb-4 bg-orange-50 p-3 rounded-lg">
                                <label className="block text-sm font-bold text-orange-800 mb-1">内容 (简体)</label>
                                <textarea
                                    rows={10}
                                    value={data.content_cn || ""}
                                    onChange={(e) => handleChange("content_cn", e.target.value)}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                        </div>

                        {/* Thai */}
                        <div className={activeLang === 'th' ? 'block' : 'hidden'}>
                            <div className="mb-4 bg-purple-50 p-3 rounded-lg">
                                <label className="block text-sm font-bold text-purple-800 mb-1">標題 (泰文)</label>
                                <input
                                    type="text"
                                    value={data.title_th || ""}
                                    onChange={(e) => handleChange("title_th", e.target.value)}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                            <div className="mb-4 bg-purple-50 p-3 rounded-lg">
                                <label className="block text-sm font-bold text-purple-800 mb-1">內容 (泰文)</label>
                                <textarea
                                    rows={10}
                                    value={data.content_th || ""}
                                    onChange={(e) => handleChange("content_th", e.target.value)}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm flex gap-3">
                        <Info size={20} className="shrink-0" />
                        <div>
                            <p className="font-bold mb-1">編輯提示：</p>
                            <ul className="list-disc list-inside opacity-80 space-y-1">
                                <li>內容支援換行，前台會自動排版。</li>
                                <li>若簡體或泰文欄位留空，系統將自動顯示在繁體中文欄位輸入的內容。</li>
                                <li>圖片上傳後將儲存於雲端，請勿上傳過大的檔案。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
