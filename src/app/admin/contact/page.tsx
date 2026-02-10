"use client";

import { useEffect, useState } from "react";
import { Save, Phone, Facebook, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        // Address (Multi-language)
        address_zh_tw: "",
        address_zh_cn: "",
        address_th: "",

        // Settings (Contact Details)
        phone: "",
        line_id: "",
        facebook_url: "",
        whatsapp_id: "",
        wechat_id: "",
        email: ""
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch("/api/admin/content?key=contact_info");
            const data = await res.json();
            if (data.key) {
                setFormData({
                    address_zh_tw: data.content_zh_tw || "",
                    address_zh_cn: data.content_zh_cn || "",
                    address_th: data.content_th || "",

                    phone: data.settings?.phone || "",
                    line_id: data.settings?.line_id || "",
                    facebook_url: data.settings?.facebook_url || "",
                    whatsapp_id: data.settings?.whatsapp_id || "",
                    wechat_id: data.settings?.wechat_id || "",
                    email: data.settings?.email || ""
                });
            }
        } catch (error) {
            console.error("Failed to fetch contact info");
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
                key: "contact_info",
                title_zh_tw: "聯絡資訊", // Fixed title
                content_zh_tw: formData.address_zh_tw,
                content_zh_cn: formData.address_zh_cn,
                content_th: formData.address_th,
                settings: {
                    phone: formData.phone,
                    line_id: formData.line_id,
                    facebook_url: formData.facebook_url,
                    whatsapp_id: formData.whatsapp_id,
                    wechat_id: formData.wechat_id,
                    email: formData.email
                }
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

    if (loading) return <div className="p-8">載入中...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">聯絡資訊管理 (Contact Info)</h2>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow">

                {/* Social & Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <Phone size={20} /> 基本聯絡資料
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">聯絡電話 (Phone)</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="e.g. +66 81 234 5678"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">電子信箱 (Email)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="e.g. contact@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-green-600 mb-1">LINE ID</label>
                            <input
                                type="text"
                                name="line_id"
                                value={formData.line_id}
                                onChange={handleChange}
                                className="w-full border rounded p-2 border-green-200 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-blue-600 mb-1">Facebook URL</label>
                            <input
                                type="text"
                                name="facebook_url"
                                value={formData.facebook_url}
                                onChange={handleChange}
                                className="w-full border rounded p-2 border-blue-200 focus:border-blue-500"
                                placeholder="https://facebook.com/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-green-500 mb-1">WhatsApp ID</label>
                            <input
                                type="text"
                                name="whatsapp_id"
                                value={formData.whatsapp_id}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-green-700 mb-1">WeChat ID</label>
                            <input
                                type="text"
                                name="wechat_id"
                                value={formData.wechat_id}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Address Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <MapPin size={20} /> 公司地址 (Address)
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">地址 (繁體中文)</label>
                            <input
                                type="text"
                                name="address_zh_tw"
                                value={formData.address_zh_tw}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                placeholder="請輸入中文地址..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">地址 (簡體中文)</label>
                            <input
                                type="text"
                                name="address_zh_cn"
                                value={formData.address_zh_cn}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">地址 (泰文)</label>
                            <input
                                type="text"
                                name="address_th"
                                value={formData.address_th}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                            />
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
