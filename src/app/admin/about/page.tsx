"use client";

import { useEffect, useState } from "react";
import { Save, Upload } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        title_zh_tw: "",
        title_zh_cn: "",
        title_th: "",
        content_zh_tw: "",
        content_zh_cn: "",
        content_th: "",
        settings: { image_url: "" } // Store image in settings JSONB
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch("/api/admin/content?key=about_us");
            const data = await res.json();
            if (data.key) {
                setFormData({
                    title_zh_tw: data.title_zh_tw || "",
                    title_zh_cn: data.title_zh_cn || "",
                    title_th: data.title_th || "",
                    content_zh_tw: data.content_zh_tw || "",
                    content_zh_cn: data.content_zh_cn || "",
                    content_th: data.content_th || "",
                    settings: data.settings || { image_url: "" }
                });
            }
        } catch (error) {
            console.error("Failed to fetch about us content");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setUploading(true);
        const file = e.target.files[0];

        try {
            const uploadData = new FormData();
            uploadData.append('file', file);
            uploadData.append('bucket', 'banners'); // Reuse banners bucket for general images

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData
            });
            const data = await res.json();

            if (data.url) {
                setFormData(prev => ({
                    ...prev,
                    settings: { ...prev.settings, image_url: data.url }
                }));
            } else {
                alert("上傳失敗");
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("上傳發生錯誤");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch("/api/admin/content", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    key: "about_us",
                    ...formData
                }),
            });

            if (res.ok) {
                alert("儲存成功！");
            } else {
                alert("儲存失敗");
            }
        } catch (error) {
            alert("發生錯誤");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8">載入中...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">關於我們 (About Us) 編輯</h2>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow">

                {/* Image Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2">公司形象圖片</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative w-full md:w-1/2 h-64 bg-gray-100 rounded overflow-hidden border">
                            {formData.settings?.image_url ? (
                                <Image
                                    src={formData.settings.image_url}
                                    alt="About Us"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    暫無圖片
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <label className={`inline-flex items-center gap-2 px-4 py-2 rounded cursor-pointer text-white font-bold transition-colors ${uploading ? 'bg-gray-400' : 'bg-lanna-green hover:bg-lanna-green/90'}`}>
                                <Upload size={18} />
                                {uploading ? "上傳中..." : "更換圖片"}
                                <input type="file" onChange={handleFileUpload} accept="image/*" className="hidden" disabled={uploading} />
                            </label>
                            <p className="text-sm text-gray-500 mt-2">
                                建議尺寸：1200x800px 或 4:3 比例。<br />
                                這張圖片將顯示在「關於我們」頁面的左側或頂部。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2">文字內容設定</h3>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Traditional Chinese */}
                        <div className="space-y-3 bg-gray-50 p-4 rounded border">
                            <span className="font-bold text-gray-700 block mb-2">繁體中文 (主要)</span>
                            <div>
                                <label className="block text-sm font-medium mb-1">標題</label>
                                <input
                                    type="text"
                                    name="title_zh_tw"
                                    value={formData.title_zh_tw}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                    placeholder="例如：關於阿勳旅遊"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">內容</label>
                                <textarea
                                    name="content_zh_tw"
                                    value={formData.content_zh_tw}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full border rounded p-2"
                                    placeholder="請輸入公司介紹..."
                                />
                            </div>
                        </div>

                        {/* Simplified Chinese */}
                        <div className="space-y-3">
                            <span className="font-bold text-gray-700 block mb-2">簡體中文</span>
                            <div>
                                <label className="block text-sm font-medium mb-1">標題</label>
                                <input
                                    type="text"
                                    name="title_zh_cn"
                                    value={formData.title_zh_cn}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">內容</label>
                                <textarea
                                    name="content_zh_cn"
                                    value={formData.content_zh_cn}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>

                        {/* Thai */}
                        <div className="space-y-3">
                            <span className="font-bold text-gray-700 block mb-2">泰文</span>
                            <div>
                                <label className="block text-sm font-medium mb-1">標題</label>
                                <input
                                    type="text"
                                    name="title_th"
                                    value={formData.title_th}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">內容</label>
                                <textarea
                                    name="content_th"
                                    value={formData.content_th}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold text-lg shadow-lg transform transition-transform active:scale-95 disabled:opacity-50"
                    >
                        <Save size={20} />
                        {saving ? "儲存中..." : "儲存所有變更"}
                    </button>
                </div>
            </form>
        </div>
    );
}
