"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, X, Upload } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CustomerReview } from "@/types/schema";
import Image from "next/image";

interface ReviewFormProps {
    initialData?: CustomerReview;
    isEdit?: boolean;
}

export default function ReviewForm({ initialData, isEdit = false }: ReviewFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<CustomerReview>>(
        initialData || {
            name: "",
            content: "",
            rating: 5,
            photos: [],
            show_on_home: true,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = () => {
        setFormData((prev) => ({ ...prev, show_on_home: !prev.show_on_home }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const files = Array.from(e.target.files);
        const newPhotos: string[] = [];

        try {
            for (const file of files) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `${fileName}`;

                // Use Backend API to upload (Bypass RLS)
                const uploadFormData = new FormData();
                uploadFormData.append('file', file);
                uploadFormData.append('bucket', 'reviews');
                uploadFormData.append('path', filePath);

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: uploadFormData
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Upload failed');
                }

                newPhotos.push(result.url);
            }

            setFormData(prev => ({
                ...prev,
                photos: [...(prev.photos || []), ...newPhotos]
            }));

        } catch (error: any) {
            console.error("Error uploading image:", error);
            alert(`圖片上傳失敗：${error.message || "未知錯誤"}。請確認 Storage Bucket 'reviews' 是否存在。`);
        } finally {
            setUploading(false);
            // Reset input
            e.target.value = "";
        }
    };

    const removePhoto = (indexToRemove: number) => {
        setFormData(prev => ({
            ...prev,
            photos: prev.photos?.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                ...formData,
                id: isEdit ? initialData?.id : undefined
            };

            const response = await fetch("/api/admin/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Save failed");
            }

            alert("儲存成功！");
            router.push("/admin/reviews");
            router.refresh();
        } catch (error) {
            console.error("Error saving review:", error);
            alert("儲存失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 border-b pb-4">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-xl font-bold">
                    {isEdit ? "編輯顧客回饋" : "新增顧客回饋"}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status */}
                <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-700">狀態：</span>
                    <button
                        type="button"
                        onClick={handleToggle}
                        className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${formData.show_on_home
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {formData.show_on_home ? "顯示於首頁" : "隱藏"}
                    </button>
                </div>

                {/* Name */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        客戶姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-green outline-none"
                    />
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        使用心得 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="content"
                        required
                        rows={5}
                        value={formData.content || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-green outline-none"
                    />
                </div>

                {/* Rating */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        評分 (1-5)
                    </label>
                    <select
                        name="rating"
                        value={formData.rating || 5}
                        onChange={handleChange}
                        className="w-full md:w-32 border border-gray-300 rounded-md p-2"
                    >
                        {[5, 4, 3, 2, 1].map(r => (
                            <option key={r} value={r}>{r} 星</option>
                        ))}
                    </select>
                </div>

                {/* Photos Upload */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        活動照片 (可多選)
                    </label>

                    {/* Upload Button */}
                    <div className="flex items-center gap-4">
                        <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${uploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            <Upload size={20} />
                            <span>{uploading ? "上傳中..." : "選擇照片上傳"}</span>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleFileUpload}
                                disabled={uploading}
                                className="hidden"
                            />
                        </label>
                        <span className="text-xs text-gray-500">支援 jpg, png, webp (建議壓縮後再上傳)</span>
                    </div>

                    {/* Preview Grid */}
                    {formData.photos && formData.photos.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {formData.photos.map((photo, index) => (
                                <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border bg-gray-50">
                                    <Image
                                        src={photo}
                                        alt={`Preview ${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removePhoto(index)}
                                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-6">
                    <button
                        type="submit"
                        disabled={loading || uploading}
                        className="flex items-center gap-2 bg-lanna-green text-white px-6 py-2 rounded-lg hover:bg-lanna-green/90 transition-all font-bold disabled:opacity-50"
                    >
                        <Save size={20} />
                        {loading ? "儲存中..." : "儲存設定"}
                    </button>
                </div>
            </form>
        </div>
    );
}
