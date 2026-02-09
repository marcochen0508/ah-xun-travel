"use client";

import { useEffect, useState } from "react";
import { Upload, Trash2, Calendar, Check, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Banner } from "@/types/schema";

export default function BannersPage() {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [startAt, setStartAt] = useState("");
    const [endAt, setEndAt] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const res = await fetch("/api/admin/banners");
            const data = await res.json();
            setBanners(data || []);
        } catch (error) {
            console.error("Failed to fetch banners", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setUploading(true);
        const file = e.target.files[0];

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('bucket', 'banners');
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}.${fileExt}`;
            formData.append('path', fileName);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.url) {
                setImageUrl(data.url);
            } else {
                alert("上傳失敗");
            }
        } catch (error) {
            console.error(error);
            alert("上傳發生錯誤");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!imageUrl) return alert("請上傳圖片");
        if (!startAt || !endAt) return alert("請設定開始與結束時間");

        const payload = {
            title,
            image_url: imageUrl,
            is_default: false,
            is_active: true,
            start_at: new Date(startAt).toISOString(),
            end_at: new Date(endAt).toISOString(),
        };

        try {
            const res = await fetch("/api/admin/banners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert("新增成功！");
                // Reset form
                setTitle("");
                setImageUrl("");
                setStartAt("");
                setEndAt("");
                fetchBanners();
            } else {
                alert("新增失敗");
            }
        } catch (error) {
            alert("發生錯誤");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("確定要刪除嗎？")) return;
        try {
            await fetch(`/api/admin/banners?id=${id}`, { method: "DELETE" });
            fetchBanners();
        } catch (error) {
            alert("刪除失敗");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">首頁看板管理 (Banner)</h2>

            {/* Add New Banner Form */}
            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="font-bold text-lg mb-4">新增期間限定看板</h3>
                <div className="text-sm text-gray-500 mb-4">
                    提示：若無設定任何活動看板，首頁將顯示系統預設圖片。
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold mb-1">標題 (備註用)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="例如：水燈節活動"
                            />
                        </div>

                        {/* Date Range - Always Visible */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-50 p-4 rounded border border-yellow-200">
                            <div>
                                <label className="block text-sm font-bold mb-1">
                                    活動開始時間 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="datetime-local"
                                    required
                                    value={startAt}
                                    onChange={(e) => setStartAt(e.target.value)}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">
                                    活動結束時間 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="datetime-local"
                                    required
                                    value={endAt}
                                    onChange={(e) => setEndAt(e.target.value)}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-bold mb-1">
                            圖片上傳 <span className="text-xs text-gray-500 font-normal ml-2">(建議尺寸: 1920x1080px, 檔案大小: 2MB 以內)</span>
                        </label>
                        <div className="flex items-center gap-4">
                            <label className="cursor-pointer bg-lanna-green text-white px-4 py-2 rounded hover:bg-lanna-green/90 flex items-center gap-2">
                                <Upload size={18} />
                                {uploading ? "上傳中..." : "選擇圖片"}
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    disabled={uploading}
                                />
                            </label>
                            {imageUrl && (
                                <div className="relative w-32 h-20 border rounded overflow-hidden">
                                    <Image src={imageUrl} alt="Preview" fill className="object-cover" />
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={uploading || !imageUrl}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 font-bold"
                    >
                        新增看板設定
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banners.map((banner) => (
                    <div key={banner.id} className="bg-white rounded-lg shadow overflow-hidden relative group">
                        <div className="relative h-48 w-full">
                            <Image src={banner.image_url} alt={banner.title || "Banner"} fill className="object-cover" />
                            <div className="absolute top-2 right-2 flex gap-2">
                                {banner.is_default && (
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">預設</span>
                                )}
                                {banner.start_at && (
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">排程</span>
                                )}
                            </div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold truncate">{banner.title || "未命名"}</h4>
                            {banner.start_at && (
                                <p className="text-xs text-gray-500 mt-2">
                                    {new Date(banner.start_at).toLocaleDateString()} - {new Date(banner.end_at!).toLocaleDateString()}
                                </p>
                            )}
                            <button
                                onClick={() => handleDelete(banner.id)}
                                className="mt-4 w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 py-2 rounded transition-colors"
                            >
                                <Trash2 size={16} /> 刪除
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
