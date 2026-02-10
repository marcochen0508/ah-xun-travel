"use client";

import { useEffect, useState } from "react";
import { Upload, Trash2, Calendar, Check, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Banner } from "@/types/schema";

export default function BannersPage() {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const [editId, setEditId] = useState<string | null>(null);

    // Form State
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("23:59");
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

    const handleEdit = (banner: Banner) => {
        setEditId(banner.id);
        setTitle(banner.title || "");
        setImageUrl(banner.image_url);

        if (banner.start_at) {
            const d = new Date(banner.start_at);
            setStartDate(d.toISOString().split('T')[0]);
            setStartTime(d.toTimeString().slice(0, 5));
        }
        if (banner.end_at) {
            const d = new Date(banner.end_at);
            setEndDate(d.toISOString().split('T')[0]);
            setEndTime(d.toTimeString().slice(0, 5));
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setTitle("");
        setImageUrl("");
        setStartDate("");
        setStartTime("00:00");
        setEndDate("");
        setEndTime("23:59");
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
        if (!startDate || !endDate) return alert("請設定開始與結束日期");

        const startAt = new Date(`${startDate}T${startTime}:00`).toISOString();
        const endAt = new Date(`${endDate}T${endTime}:00`).toISOString();

        const payload: any = {
            title,
            image_url: imageUrl,
            is_default: false,
            is_active: true,
            start_at: startAt,
            end_at: endAt,
        };

        if (editId) {
            payload.id = editId;
        }

        try {
            const method = editId ? "PUT" : "POST";
            const res = await fetch("/api/admin/banners", {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                alert(editId ? "更新成功！" : "新增成功！");
                handleCancelEdit(); // Reset form
                fetchBanners();
            } else {
                alert("操作失敗");
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

    const getStatusBadge = (start?: string, end?: string) => {
        if (!start || !end) return <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">未設定</span>;

        const now = new Date();
        const startTime = new Date(start);
        const endTime = new Date(end);

        if (now >= startTime && now <= endTime) {
            return <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">進行中 (Active)</span>;
        } else if (now < startTime) {
            return <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">未開始 (Scheduled)</span>;
        } else {
            return <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full">已結束 (Ended)</span>;
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">首頁看板管理 (Banner)</h2>

            {/* Add/Edit Banner Form */}
            <div className={`p-6 rounded-lg shadow mb-8 transition-colors ${editId ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">{editId ? "編輯看板設定" : "新增期間限定看板"}</h3>
                    {editId && (
                        <button onClick={handleCancelEdit} className="text-sm text-gray-500 hover:text-gray-700 underline">
                            取消編輯
                        </button>
                    )}
                </div>

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

                        {/* Banner Type Selection */}
                        <div className="md:col-span-2 flex gap-6 border-b pb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    checked={!isDefault}
                                    onChange={() => setIsDefault(false)}
                                    className="w-5 h-5 accent-lanna-green"
                                />
                                <span className="font-bold text-gray-800">活動排程 (特定日期顯示)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="type"
                                    checked={isDefault}
                                    onChange={() => setIsDefault(true)}
                                    className="w-5 h-5 accent-blue-500"
                                />
                                <span className="font-bold text-blue-600">隨機輪播 (平常沒活動時顯示)</span>
                            </label>
                        </div>

                        {/* Date Range - Only valid if NOT default */}
                        {!isDefault && (
                            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-50 p-4 rounded border border-yellow-200">
                                {/* Start Date */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold mb-1">
                                        活動開始時間 <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            required={!isDefault}
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="flex-1 border rounded p-2"
                                        />
                                        <select
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                            className="w-32 border rounded p-2"
                                        >
                                            <option value="00:00">00:00 (開始)</option>
                                            <option value="06:00">06:00 (早上)</option>
                                            <option value="09:00">09:00 (上午)</option>
                                            <option value="12:00">12:00 (中午)</option>
                                            <option value="14:00">14:00 (下午)</option>
                                            <option value="18:00">18:00 (晚上)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* End Date */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold mb-1">
                                        活動結束時間 <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            required={!isDefault}
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="flex-1 border rounded p-2"
                                        />
                                        <select
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            className="w-32 border rounded p-2"
                                        >
                                            <option value="00:00">00:00 (開始)</option>
                                            <option value="09:00">09:00 (上午)</option>
                                            <option value="12:00">12:00 (中午)</option>
                                            <option value="14:00">14:00 (下午)</option>
                                            <option value="18:00">18:00 (晚上)</option>
                                            <option value="23:59">23:59 (結束)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-bold mb-1">
                            圖片上傳 <span className="text-xs text-gray-500 font-normal ml-2">(建議尺寸: 1920x1080px, 檔案大小: 2MB 以內)</span>
                        </label>
                        <div className="flex items-center gap-4">
                            <label className={`cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2 ${imageUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-lanna-green hover:bg-lanna-green/90'}`}>
                                <Upload size={18} />
                                {uploading ? "上傳中..." : (imageUrl ? "更換圖片" : "選擇圖片")}
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    disabled={uploading}
                                />
                            </label>
                            {imageUrl && (
                                <div className="relative w-48 h-28 border rounded overflow-hidden group">
                                    <Image src={imageUrl} alt="Preview" fill className="object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setImageUrl("")}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="移除這張圖片"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={uploading || !imageUrl}
                            className={`flex-1 text-white py-2 rounded disabled:opacity-50 font-bold ${editId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-lanna-green hover:bg-lanna-green/90'}`}
                        >
                            {editId ? "更新設定" : "新增看板設定"}
                        </button>
                        {editId && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 font-bold text-gray-600"
                            >
                                取消
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banners.map((banner) => (
                    <div key={banner.id} className={`bg-white rounded-lg shadow overflow-hidden relative group border ${editId === banner.id ? 'ring-2 ring-blue-500' : ''}`}>
                        <div className="relative h-48 w-full">
                            <Image src={banner.image_url} alt={banner.title || "Banner"} fill className="object-cover" />
                            <div className="absolute top-2 right-2 flex gap-2">
                                {getStatusBadge(banner.start_at, banner.end_at)}
                            </div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold truncate">{banner.title || "未命名"}</h4>
                            {banner.start_at && (
                                <div className="text-xs text-gray-500 mt-2">
                                    {new Date(banner.start_at).toLocaleString()} <br />- {new Date(banner.end_at!).toLocaleString()}
                                </div>
                            )}

                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => handleEdit(banner)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded transition-colors font-bold text-sm"
                                >
                                    編輯
                                </button>
                                <button
                                    onClick={() => handleDelete(banner.id)}
                                    className="flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 px-4 rounded transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
