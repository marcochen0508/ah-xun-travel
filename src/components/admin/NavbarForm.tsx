"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { NavigationLink } from "@/types/schema";

interface NavbarFormProps {
    initialData?: NavigationLink;
    isEdit?: boolean;
}

export default function NavbarForm({ initialData, isEdit = false }: NavbarFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Link Type State
    const [linkType, setLinkType] = useState<"internal" | "custom">("internal");

    const [formData, setFormData] = useState<Partial<NavigationLink>>(
        initialData || {
            label: "",
            label_zh_tw: "",
            label_zh_cn: "",
            label_th: "",
            url: "/",
            sort_order: 0,
            is_active: true,
        }
    );

    // Initialize link type based on existing URL
    useEffect(() => {
        if (initialData?.url) {
            const internalLinks = ["/", "#services", "#destinations", "#about", "#reviews", "#contact", "charter-notes"];
            if (internalLinks.includes(initialData.url)) {
                setLinkType("internal");
            } else {
                setLinkType("custom");
            }
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            // Ensure label_zh_tw is synced with label if empty
            const submissionData = {
                ...formData,
                label_zh_tw: formData.label_zh_tw || formData.label
            };

            if (isEdit && initialData?.id) {
                const { error } = await supabase
                    .from("navigation_links")
                    .update(submissionData)
                    .eq("id", initialData.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("navigation_links").insert([submissionData]);
                if (error) throw error;
            }

            alert("儲存成功！");
            router.push("/admin/navbar");
            router.refresh();
        } catch (error) {
            console.error("Error saving navbar link:", error);
            alert("儲存失敗，請確認資料庫已更新 (migration_navbar.sql)");
        } finally {
            setLoading(false);
        }
    };

    // Predefined Links
    const predefinedLinks = [
        { label: "首頁 (Home)", value: "/" },
        { label: "服務介紹 (Services)", value: "#services" },
        { label: "特色行程 (Destinations)", value: "#destinations" },
        { label: "關於我們 (About)", value: "#about" },
        { label: "客戶評價 (Reviews)", value: "#reviews" },
        { label: "包車注意事項 (Notes)", value: "charter-notes" },
        { label: "聯絡我們 (Contact)", value: "#contact" },
    ];

    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6 border-b pb-4">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-xl font-bold">
                    {isEdit ? "編輯選單連結" : "新增選單連結"}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status & Order */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">排序 (數字越小越前)</label>
                        <input
                            type="number"
                            name="sort_order"
                            value={formData.sort_order}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="flex items-end pb-2">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className={`px-4 py-2 rounded-lg font-bold transition-colors ${formData.is_active
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                                }`}
                        >
                            {formData.is_active ? "啟用中" : "已停用"}
                        </button>
                    </div>
                </div>

                {/* Link Configuration */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                    <h3 className="font-bold text-blue-800">連結設定</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">連結類型</label>
                        <select
                            value={linkType}
                            onChange={(e) => {
                                setLinkType(e.target.value as "internal" | "custom");
                                if (e.target.value === "internal") {
                                    setFormData(prev => ({ ...prev, url: "/" }));
                                } else {
                                    setFormData(prev => ({ ...prev, url: "" }));
                                }
                            }}
                            className="w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="internal">常用頁面 (快速選擇)</option>
                            <option value="custom">自訂連結 (外部網址)</option>
                        </select>
                    </div>

                    {linkType === "internal" ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">選擇頁面</label>
                            <select
                                name="url"
                                value={formData.url}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                {predefinedLinks.map(link => (
                                    <option key={link.value} value={link.value}>
                                        {link.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                輸入網址 (例如 https://google.com)
                            </label>
                            <input
                                type="text"
                                name="url"
                                required
                                value={formData.url || ""}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="https://..."
                            />
                        </div>
                    )}
                </div>

                {/* Multi-language Labels */}
                <div className="space-y-4">
                    <h3 className="font-bold text-gray-800 border-b pb-2">顯示文字</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">繁體中文 (預設)</label>
                        <input
                            type="text"
                            name="label"
                            required
                            value={formData.label || ""}
                            onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value, label_zh_tw: e.target.value }))}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="例如：關於我們"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">簡體中文</label>
                        <input
                            type="text"
                            name="label_zh_cn"
                            value={formData.label_zh_cn || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="例如：关于我们"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">泰文</label>
                        <input
                            type="text"
                            name="label_th"
                            value={formData.label_th || ""}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="例如：เกี่ยวกับเรา"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-4">
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
