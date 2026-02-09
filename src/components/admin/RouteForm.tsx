"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { FeatureRoute } from "@/types/schema";

interface RouteFormProps {
    initialData?: FeatureRoute;
    isEdit?: boolean;
}

export default function RouteForm({ initialData, isEdit = false }: RouteFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<Partial<FeatureRoute>>(
        initialData || {
            title_zh_tw: "",
            title_zh_cn: "",
            title_th: "",
            description_zh_tw: "",
            description_zh_cn: "",
            description_th: "",
            image_url: "",
            pdf_link: "",
            video_link: "",
            is_active: true,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = () => {
        setFormData((prev) => ({ ...prev, is_active: !prev.is_active }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            // Upload to 'routes' bucket (or reuse 'reviews' if preferred, but distinct is better)
            // We will ask user to create 'routes' bucket.
            const { error: uploadError } = await supabase.storage
                .from('routes')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('routes')
                .getPublicUrl(filePath);

            setFormData(prev => ({
                ...prev,
                image_url: publicUrl
            }));

        } catch (error) {
            console.error("Error uploading image:", error);
            alert("圖片上傳失敗，請確認 Storage Bucket 'routes' 是否存在並設定為公開。");
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEdit && initialData?.id) {
                const { error } = await supabase
                    .from("features_routes")
                    .update(formData)
                    .eq("id", initialData.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("features_routes").insert([formData]);
                if (error) throw error;
            }

            alert("儲存成功！");
            router.push("/admin/routes");
            router.refresh();
        } catch (error) {
            console.error("Error saving route:", error);
            alert("儲存失敗，請檢查網路或是資料庫連線。");
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
                    {isEdit ? "編輯特色行程" : "新增特色行程"}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status */}
                <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-700">狀態：</span>
                    <button
                        type="button"
                        onClick={handleToggle}
                        className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${formData.is_active
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {formData.is_active ? "上架中" : "已下架"}
                    </button>
                </div>

                {/* Basic Info (Traditional Chinese - Main) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            行程名稱 (繁體中文) *
                        </label>
                        <input
                            type="text"
                            name="title_zh_tw"
                            required
                            value={formData.title_zh_tw || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            外部 PDF 連結 (Google Drive)
                        </label>
                        <input
                            type="url"
                            name="pdf_link"
                            value={formData.pdf_link || ""}
                            onChange={handleChange}
                            placeholder="https://drive.google.com/..."
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            行程說明影片連結 (YouTube/Google Drive)
                        </label>
                        <input
                            type="url"
                            name="video_link"
                            value={formData.video_link || ""}
                            onChange={handleChange}
                            placeholder="https://youtube.com/..."
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                        />
                    </div>
                </div>

                {/* Descriptions */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        簡介 (繁體中文)
                    </label>
                    <textarea
                        name="description_zh_tw"
                        rows={3}
                        value={formData.description_zh_tw || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                    />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        封面圖片 <span className="text-red-500">*</span>
                    </label>

                    <div className="flex items-center gap-4">
                        <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${uploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            {/* Simple Upload Icon or Text */}
                            <span>{uploading ? "上傳中..." : "選擇圖片上傳"}</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                disabled={uploading}
                                className="hidden"
                            />
                        </label>
                        <span className="text-xs text-gray-500">建議尺寸: 800x600, 支援 jpg/png</span>
                    </div>

                    {/* Hidden URL input if needed manually */}
                    <input
                        type="text"
                        name="image_url"
                        value={formData.image_url || ""}
                        onChange={handleChange}
                        placeholder="或直接輸入圖片網址..."
                        className="w-full border border-gray-300 rounded-md p-2 mt-2 text-xs text-gray-500"
                    />

                    {formData.image_url && (
                        <div className="mt-4 relative w-full h-64 md:w-96 rounded-lg overflow-hidden border">
                            <img
                                src={formData.image_url}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Multi-language Expansion (Simplified Chinese & Thai) */}
                <div className="border-t pt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">多語系設定 (選填)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">簡體中文標題</label>
                            <input
                                type="text"
                                name="title_zh_cn"
                                value={formData.title_zh_cn || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">泰文標題</label>
                            <input
                                type="text"
                                name="title_th"
                                value={formData.title_th || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    {/* Extra Descriptions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">簡體中文簡介</label>
                            <textarea
                                name="description_zh_cn"
                                rows={3}
                                value={formData.description_zh_cn || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">泰文簡介</label>
                            <textarea
                                name="description_th"
                                rows={3}
                                value={formData.description_th || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
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
