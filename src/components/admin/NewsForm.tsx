"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { NewsEvent } from "@/types/schema";

interface NewsFormProps {
    initialData?: NewsEvent;
    isEdit?: boolean;
}

export default function NewsForm({ initialData, isEdit = false }: NewsFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<NewsEvent>>(
        initialData || {
            title: "",
            title_zh_tw: "",
            title_zh_cn: "",
            title_th: "",
            content: "",
            content_zh_tw: "",
            content_zh_cn: "",
            content_th: "",
            image_url: "",
            is_active: true,
            is_pinned: false,
            start_date: new Date().toISOString().split("T")[0],
            end_date: "",
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = () => {
        setFormData((prev) => ({ ...prev, is_active: !prev.is_active }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                ...formData,
                start_date: formData.start_date?.trim() ? formData.start_date : null,
                end_date: formData.end_date?.trim() ? formData.end_date : null,
            };

            if (isEdit && initialData?.id) {
                // Only run update if not mock
                if (!initialData.id.startsWith("mock-")) {
                    const { error } = await supabase
                        .from("news_events")
                        .update(payload)
                        .eq("id", initialData.id);
                    if (error) throw error;
                }
            } else {
                const { error } = await supabase.from("news_events").insert([payload]);
                if (error) throw error;
            }

            alert("儲存成功！");
            router.push("/admin/news");
            router.refresh();
        } catch (error: any) {
            console.error("Error saving news:", error);
            alert(`儲存失敗：${error?.message || "請檢查網路連線或權限設定"}`);
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
                    {isEdit ? "編輯最新消息" : "新增最新消息"}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status & Pin */}
                <div className="flex flex-wrap items-center gap-6 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-700">總開關：</span>
                        <button
                            type="button"
                            onClick={handleToggle}
                            className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${formData.is_active
                                ? "bg-green-100 text-green-700 hover:bg-green-200"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {formData.is_active ? "啟用中" : "已停用"}
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-700">置頂：</span>
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, is_pinned: !prev.is_pinned }))}
                            className={`px-4 py-1 rounded-full text-sm font-bold transition-colors flex items-center gap-1 ${formData.is_pinned
                                ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {formData.is_pinned ? "🔥 已置頂" : "一般排序"}
                        </button>
                    </div>
                </div>

                {/* Date Intelligence */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            顯示開始日期
                        </label>
                        <input
                            type="date"
                            name="start_date"
                            value={formData.start_date || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            顯示結束日期 (選填)
                        </label>
                        <input
                            type="date"
                            name="end_date"
                            value={formData.end_date || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                        <p className="text-xs text-gray-500">留空代表永久顯示</p>
                    </div>
                </div>

                {/* Content */}
                {/* Content - Traditional Chinese (Main) */}
                <div className="space-y-4 border-b pb-6">
                    <h3 className="font-bold text-gray-800">繁體中文 (預設)</h3>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">標題</label>
                        <input
                            type="text"
                            name="title" // Keeping 'title' as alias for main title or using title_zh_tw
                            required
                            value={formData.title || ""}
                            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value, title_zh_tw: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">內容</label>
                        <textarea
                            name="content"
                            rows={4}
                            value={formData.content || ""}
                            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value, content_zh_tw: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Simplified Chinese */}
                <div className="space-y-4 border-b pb-6 bg-gray-50/50 p-4 rounded">
                    <h3 className="font-bold text-gray-800">簡體中文</h3>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">標題 (简)</label>
                        <input
                            type="text"
                            name="title_zh_cn"
                            value={formData.title_zh_cn || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">內容 (简)</label>
                        <textarea
                            name="content_zh_cn"
                            rows={4}
                            value={formData.content_zh_cn || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Thai */}
                <div className="space-y-4 border-b pb-6 bg-gray-50/50 p-4 rounded">
                    <h3 className="font-bold text-gray-800">泰文 (Thai)</h3>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">標題 (TH)</label>
                        <input
                            type="text"
                            name="title_th"
                            value={formData.title_th || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">內容 (TH)</label>
                        <textarea
                            name="content_th"
                            rows={4}
                            value={formData.content_th || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 bg-lanna-green text-white px-6 py-2 rounded-lg hover:bg-lanna-green/90 transition-all font-bold"
                    >
                        <Save size={20} />
                        {loading ? "儲存中..." : "儲存設定"}
                    </button>
                </div>
            </form>
        </div>
    );
}
