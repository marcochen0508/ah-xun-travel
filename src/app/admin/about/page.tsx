"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AboutAdminPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState({
        content_zh_tw: "",
        content_zh_cn: "",
        content_th: ""
    });

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = async () => {
        try {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
                setContent({
                    content_zh_tw: "阿勛包車提供清邁最在地的旅遊服務...",
                    content_zh_cn: "阿勋包车提供清迈最在地的旅游服务...",
                    content_th: "AH XUN Provides the best service..."
                });
            } else {
                const { data, error } = await supabase.from("about_info").select("*").eq("id", "about_us_main").single();
                if (data) {
                    setContent({
                        content_zh_tw: data.content_zh_tw || "",
                        content_zh_cn: data.content_zh_cn || "",
                        content_th: data.content_th || ""
                    });
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
                alert("模擬儲存成功");
            } else {
                const { error } = await supabase.from("about_info").upsert({
                    id: "about_us_main",
                    ...content,
                    updated_at: new Date().toISOString()
                });
                if (error) throw error;
                alert("儲存成功");
            }
        } catch (err: any) {
            console.error(err);
            alert(`儲存失敗: ${err.message || "未知錯誤，請檢查網路或權限設定"}`);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>載入中...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">關於我們 - 內容編輯</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">繁體中文內容</label>
                    <textarea
                        name="content_zh_tw"
                        rows={5}
                        value={content.content_zh_tw}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:ring-2 ring-lanna-gold outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">簡體中文內容</label>
                    <textarea
                        name="content_zh_cn"
                        rows={5}
                        value={content.content_zh_cn}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:ring-2 ring-lanna-gold outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">泰文內容</label>
                    <textarea
                        name="content_th"
                        rows={5}
                        value={content.content_th}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:ring-2 ring-lanna-gold outline-none"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-lanna-green text-white px-6 py-2 rounded-lg hover:bg-lanna-green/90 transition-all font-bold"
                    >
                        <Save size={20} />
                        {saving ? "儲存中..." : "更新內容"}
                    </button>
                </div>
            </form>
        </div>
    );
}
