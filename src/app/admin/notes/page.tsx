"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { GeneralContent } from "@/types/schema";

export default function AdminNotesPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<GeneralContent>>({
        content_zh_tw: "",
        content_zh_cn: "",
        content_th: "",
        link_url: "",
    });

    useEffect(() => {
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("general_content")
                .select("*")
                .eq("key", "charter_notes")
                .single();

            if (data) {
                setFormData(data);
            }
        };
        fetchNotes();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from("general_content")
                .upsert({ ...formData, key: "charter_notes" })
                .eq("key", "charter_notes");

            if (error) throw error;

            alert("儲存成功！");
        } catch (error) {
            console.error("Error saving notes:", error);
            alert("儲存失敗");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-serif text-gray-800">編輯包車注意事項</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Link Section */}
                    <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            雲端硬碟檔案連結 (Word/PDF)
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="url"
                                name="link_url"
                                value={formData.link_url || ""}
                                onChange={handleChange}
                                placeholder="https://drive.google.com/file/d/..."
                                className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-lanna-gold outline-none"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            * 此連結將會顯示在「包車注意事項」視窗中，供用戶下載或查看。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Traditional Chinese */}
                        <div className="space-y-2">
                            <label className="block text-lg font-bold text-gray-800 border-l-4 border-lanna-gold pl-3">
                                繁體中文內容
                            </label>
                            <textarea
                                name="content_zh_tw"
                                rows={8}
                                value={formData.content_zh_tw || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-lanna-gold outline-none leading-relaxed"
                                placeholder="請輸入包車注意事項..."
                            />
                        </div>

                        {/* Simplified Chinese */}
                        <div className="space-y-2">
                            <label className="block text-lg font-bold text-gray-800 border-l-4 border-gray-300 pl-3">
                                簡體中文內容
                            </label>
                            <textarea
                                name="content_zh_cn"
                                rows={8}
                                value={formData.content_zh_cn || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-lanna-gold outline-none leading-relaxed"
                            />
                        </div>

                        {/* Thai */}
                        <div className="space-y-2">
                            <label className="block text-lg font-bold text-gray-800 border-l-4 border-gray-300 pl-3">
                                泰文內容
                            </label>
                            <textarea
                                name="content_th"
                                rows={8}
                                value={formData.content_th || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-lanna-gold outline-none leading-relaxed"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end pt-6 border-t">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-2 bg-lanna-green text-white px-8 py-3 rounded-lg hover:bg-lanna-green/90 transition-all font-bold disabled:opacity-50 shadow-md transform active:scale-95"
                        >
                            <Save size={20} />
                            {loading ? "儲存中..." : "儲存變更"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
