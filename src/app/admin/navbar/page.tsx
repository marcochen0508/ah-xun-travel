"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { NavigationLink } from "@/components/admin/NavbarForm";

export default function NavbarListPage() {
    const [links, setLinks] = useState<NavigationLink[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("navigation_links")
                .select("*")
                .order("sort_order", { ascending: true });

            if (error) {
                // If table doesn't exist yet, just clear list
                console.error(error);
                setLinks([]);
            } else {
                setLinks(data || []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("確定要刪除這個連結嗎？")) return;

        try {
            const { error } = await supabase.from("navigation_links").delete().eq("id", id);
            if (error) throw error;
            fetchLinks();
        } catch (err) {
            alert("刪除失敗");
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">選單連結管理</h1>
                    <p className="text-gray-500 text-sm mt-1">自訂網站上方導覽列的連結與排序</p>
                </div>
                <Link
                    href="/admin/navbar/new"
                    className="flex items-center gap-2 bg-lanna-gold text-white px-4 py-2 rounded-lg hover:bg-lanna-gold/90 transition-colors shadow-sm font-medium"
                >
                    <Plus size={20} />
                    新增連結
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-medium text-gray-500 w-20">排序</th>
                            <th className="p-4 font-medium text-gray-500">顯示名稱 (繁中)</th>
                            <th className="p-4 font-medium text-gray-500">連結目標</th>
                            <th className="p-4 font-medium text-gray-500">狀態</th>
                            <th className="p-4 font-medium text-gray-500 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {links.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-400">
                                    目前沒有自訂連結，前台將顯示預設選單。
                                </td>
                            </tr>
                        ) : (
                            links.map((link) => (
                                <tr key={link.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                                    <td className="p-4 font-bold text-gray-400">{link.sort_order}</td>
                                    <td className="p-4 font-medium text-gray-800">{link.label}</td>
                                    <td className="p-4 text-sm text-gray-500 font-mono bg-gray-50 rounded px-2 py-1 w-fit">
                                        {link.url}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${link.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {link.is_active ? "啟用" : "停用"}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-3">
                                            <Link href={`/admin/navbar/${link.id}`} className="text-gray-400 hover:text-lanna-gold">
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(link.id)}
                                                className="text-gray-400 hover:text-red-500"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                <strong>提示：</strong> 若資料庫中沒有任何連結，系統會自動顯示預設的「首頁、服務、行程、關於、評價」選單。一旦您新增了第一個連結，系統就會改為完全依照您的設定顯示。
            </div>
        </div>
    );
}
