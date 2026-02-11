"use client";

import { useEffect, useState } from "react";
import { Save, Phone, Facebook, Mail, MapPin, FileText } from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        phone: "",
        line_id: "",
        facebook_url: "",
        whatsapp_id: "",
        wechat_id: "",
        email: "",
        line_qr: "",
        whatsapp_qr: "",
        wechat_qr: "",
        footer_desc: "",
        footer_desc_cn: "",
        footer_desc_th: ""
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
                    phone: data.settings?.phone || "",
                    line_id: data.settings?.line_id || "",
                    facebook_url: data.settings?.facebook_url || "",
                    whatsapp_id: data.settings?.whatsapp_id || "",
                    wechat_id: data.settings?.wechat_id || "",
                    email: data.settings?.email || "",
                    line_qr: data.settings?.line_qr || "",
                    whatsapp_qr: data.settings?.whatsapp_qr || "",
                    wechat_qr: data.settings?.wechat_qr || "",
                    footer_desc: data.settings?.footer_desc || "",
                    footer_desc_cn: data.settings?.footer_desc_cn || "",
                    footer_desc_th: data.settings?.footer_desc_th || ""
                });
            }
        } catch (error) {
            console.error("Failed to fetch contact info");
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];

        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('bucket', 'banners'); // Use existing bucket

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData
            });
            const result = await response.json();
            if (response.ok) {
                setFormData(prev => ({ ...prev, [field]: result.url }));
            } else {
                alert("上傳失敗: " + result.error);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("上傳發生錯誤");
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
                title_zh_tw: "聯絡資訊",
                settings: {
                    phone: formData.phone,
                    line_id: formData.line_id,
                    facebook_url: formData.facebook_url,
                    whatsapp_id: formData.whatsapp_id,
                    wechat_id: formData.wechat_id,
                    email: formData.email,
                    line_qr: formData.line_qr,
                    whatsapp_qr: formData.whatsapp_qr,
                    wechat_qr: formData.wechat_qr,
                    footer_desc: formData.footer_desc,
                    footer_desc_cn: formData.footer_desc_cn,
                    footer_desc_th: formData.footer_desc_th
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
                            <label className="block text-sm font-bold text-green-500 mb-1">WhatsApp (Tel/ID)</label>
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

                {/* QR Codes Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <Save size={20} /> QR Codes 上傳
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* LINE QR */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-green-600">LINE QR Code</label>
                            {formData.line_qr && (
                                <div className="relative w-32 h-32 border rounded overflow-hidden mb-2">
                                    <img src={formData.line_qr} alt="Line QR" className="object-cover w-full h-full" />
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'line_qr')}
                                className="block w-full text-sm text-slate-500
                                  file:mr-4 file:cursor-pointer file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-green-50 file:text-green-700
                                  hover:file:bg-green-100"
                            />
                        </div>

                        {/* WhatsApp QR */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-green-500">WhatsApp QR Code</label>
                            {formData.whatsapp_qr && (
                                <div className="relative w-32 h-32 border rounded overflow-hidden mb-2">
                                    <img src={formData.whatsapp_qr} alt="WhatsApp QR" className="object-cover w-full h-full" />
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'whatsapp_qr')}
                                className="block w-full text-sm text-slate-500
                                  file:mr-4 file:cursor-pointer file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-green-50 file:text-green-700
                                  hover:file:bg-green-100"
                            />
                        </div>

                        {/* WeChat QR */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-green-700">WeChat QR Code</label>
                            {formData.wechat_qr && (
                                <div className="relative w-32 h-32 border rounded overflow-hidden mb-2">
                                    <img src={formData.wechat_qr} alt="WeChat QR" className="object-cover w-full h-full" />
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'wechat_qr')}
                                className="block w-full text-sm text-slate-500
                                  file:mr-4 file:cursor-pointer file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-green-50 file:text-green-700
                                  hover:file:bg-green-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Description Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <FileText size={20} /> 頁尾簡介 (Footer Description)
                    </h3>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Traditional Chinese */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">簡介內文 (繁體)</label>
                                <textarea
                                    rows={5}
                                    name="footer_desc"
                                    value={formData.footer_desc || ""}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 focus:ring-2 focus:ring-lanna-green/20 outline-none resize-none text-sm"
                                    placeholder="顯示於頁尾左下角的公司簡介..."
                                />
                            </div>

                            {/* Simplified Chinese */}
                            <div>
                                <label className="block text-sm font-bold text-orange-800 mb-1">简介内文 (简体)</label>
                                <textarea
                                    rows={5}
                                    name="footer_desc_cn"
                                    value={formData.footer_desc_cn || ""}
                                    onChange={handleChange}
                                    className="w-full border border-orange-200 rounded p-2 focus:ring-2 focus:ring-orange-200 outline-none resize-none text-sm bg-orange-50"
                                    placeholder="同繁體則免填"
                                />
                            </div>

                            {/* Thai */}
                            <div>
                                <label className="block text-sm font-bold text-purple-800 mb-1">簡介內文 (泰文)</label>
                                <textarea
                                    rows={5}
                                    name="footer_desc_th"
                                    value={formData.footer_desc_th || ""}
                                    onChange={handleChange}
                                    className="w-full border border-purple-200 rounded p-2 focus:ring-2 focus:ring-purple-200 outline-none resize-none text-sm bg-purple-50"
                                    placeholder="同繁體則免填"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">提示：此處設定的文字將會顯示於網站所有頁面的頁尾左下角。</p>
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
