"use client";

import { useEffect, useState } from "react";
import { Save, Globe, Search } from "lucide-react";

import { supabase } from "@/lib/supabase";
import { Lock, Unlock, AlertTriangle } from "lucide-react";

export default function SettingsPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        site_title: "",
        site_description: "",
        site_keywords: "",
        og_title: "",
        og_description: "",
    });

    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [togglingMaintenance, setTogglingMaintenance] = useState(false);

    useEffect(() => {
        checkUserRole();
        fetchContent();
        fetchMaintenanceStatus();
    }, []);

    const checkUserRole = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const email = user.email?.toLowerCase();
            const envSuperAdmins = ["ahxun@example.com", "admin@ahxun.com", "godotchen@hotmail.com"]; // Hardcoded for client-side check visual
            const isEnv = email && envSuperAdmins.includes(email);
            const isMeta = user.app_metadata?.is_super_admin === true;
            setIsSuperAdmin(!!(isEnv || isMeta));
        }
    };

    const fetchMaintenanceStatus = async () => {
        try {
            const res = await fetch("/api/settings/maintenance");
            const data = await res.json();
            setMaintenanceMode(data.maintenance_mode);
        } catch (e) {
            console.error("Failed to fetch maintenance status");
        }
    };

    const fetchContent = async () => {
        try {
            const res = await fetch("/api/admin/content?key=site_settings");
            const data = await res.json();
            if (data.key && data.settings) {
                setFormData({
                    site_title: data.settings.site_title || "",
                    site_description: data.settings.site_description || "",
                    site_keywords: data.settings.site_keywords || "",
                    og_title: data.settings.og_title || "",
                    og_description: data.settings.og_description || "",
                });
            } else {
                // Set defaults if empty
                setFormData({
                    site_title: "阿勛・清邁包車旅遊規劃 | Ah Xun Chiang Mai Travel",
                    site_description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。量身定做您的清邁行程，帶您體驗道地的泰北風光。",
                    site_keywords: "清邁包車, 清邁旅遊, 泰北旅遊, 中文司機, VIP包車",
                    og_title: "阿勛・清邁包車旅遊規劃",
                    og_description: "專業、舒適、深度慢旅。清邁包車首選，提供十人座VIP車型與中文司機。"
                });
            }
        } catch (error) {
            console.error("Failed to fetch site settings");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const payload = {
                key: "site_settings",
                title_zh_tw: "網站基本設定 (SEO)",
                settings: formData
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
        } finally {
            setSaving(false);
        }
    };

    const toggleMaintenance = async () => {
        if (!confirm(maintenanceMode ? "確定要關閉維護模式嗎？網站將恢復公開訪問。" : "確定要開啟維護模式嗎？前台將被隱藏。")) return;

        setTogglingMaintenance(true);
        try {
            const res = await fetch("/api/settings/maintenance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ enabled: !maintenanceMode }),
            });
            const data = await res.json();

            if (res.ok) {
                setMaintenanceMode(data.maintenance_mode);
                alert(data.maintenance_mode ? "維護模式已開啟" : "維護模式已關閉");
            } else {
                alert(data.error || "操作失敗");
            }
        } catch (error) {
            alert("發生錯誤");
        } finally {
            setTogglingMaintenance(false);
        }
    };

    if (loading) return <div className="p-8">載入中...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">網站基本設定 (SEO Settings)</h2>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow">

                {/* Maintenance Mode (Super Admin Only) */}
                {isSuperAdmin && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-800">
                            <AlertTriangle size={20} /> 系統維護模式 (Maintenance Mode)
                        </h3>
                        <p className="text-sm text-red-600 mb-4">
                            開啟後，前台頁面將被強制隱藏（蓋上白色遮罩），僅後台可正常訪問。請僅在系統維護或緊急狀況下使用。
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={toggleMaintenance}
                                disabled={togglingMaintenance}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-white transition-colors shadow-md ${maintenanceMode ? "bg-red-600 hover:bg-red-700" : "bg-gray-500 hover:bg-gray-600"
                                    }`}
                            >
                                {togglingMaintenance ? (
                                    "處理中..."
                                ) : maintenanceMode ? (
                                    <>
                                        <Lock size={18} /> 維護模式：開啟中 (ON)
                                    </>
                                ) : (
                                    <>
                                        <Unlock size={18} /> 維護模式：已關閉 (OFF)
                                    </>
                                )}
                            </button>
                            {maintenanceMode && <span className="text-red-700 font-bold animate-pulse">⚠️ 網站目前處於維護狀態</span>}
                        </div>
                    </div>
                )}

                {/* Basic SEO */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <Search size={20} /> 搜尋引擎優化 (Basic SEO)
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">網站標題 (Title)</label>
                            <input
                                type="text"
                                name="site_title"
                                value={formData.site_title}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="瀏覽器頁籤上的標題"
                            />
                            <p className="text-xs text-gray-500 mt-1">建議長度：60 字元以內</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">網站描述 (Description)</label>
                            <textarea
                                name="site_description"
                                rows={3}
                                value={formData.site_description}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="搜尋結果下方的說明文字"
                            />
                            <p className="text-xs text-gray-500 mt-1">建議長度：160 字元以內</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">關鍵字 (Keywords)</label>
                            <input
                                type="text"
                                name="site_keywords"
                                value={formData.site_keywords}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="例如: 清邁包車, 泰北旅遊, 中文司機 (用逗號分隔)"
                            />
                        </div>
                    </div>
                </div>

                {/* Review & Social Share (Open Graph) */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <Globe size={20} /> 社群分享設定 (Open Graph)
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-blue-700 mb-1">分享標題 (OG Title)</label>
                            <input
                                type="text"
                                name="og_title"
                                value={formData.og_title}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="分享到 FB/Line 時顯示的標題 (通常同網站標題)"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-blue-700 mb-1">分享描述 (OG Description)</label>
                            <textarea
                                name="og_description"
                                rows={2}
                                value={formData.og_description}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="分享到 FB/Line 時顯示的描述"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-lanna-green text-white px-8 py-3 rounded-lg hover:bg-lanna-green/90 font-bold text-lg shadow-lg transform transition-transform active:scale-95 disabled:opacity-50"
                    >
                        <Save size={20} />
                        {saving ? "儲存中..." : "儲存設定"}
                    </button>
                </div>
            </form>
        </div>
    );
}
