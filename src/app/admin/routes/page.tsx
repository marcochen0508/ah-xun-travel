"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { FeatureRoute } from "@/types/schema";

export default function RoutesPage() {
    const [routes, setRoutes] = useState<FeatureRoute[]>([]);
    const [loading, setLoading] = useState(true);

    // Mock data for display before DB connection is real
    const mockData: FeatureRoute[] = [
        {
            id: "mock-1",
            title_zh_tw: "素帖山雙龍寺半日遊",
            description_zh_tw: "清邁必訪地標，俯瞰古城全景。",
            is_active: true,
            is_pinned: false,
            image_url: "/dest-1.jpg"
        },
        {
            id: "mock-2",
            title_zh_tw: "茵他濃國家公園一日遊",
            description_zh_tw: "泰國最高峰，探索瀑布與寒帶植物。",
            is_active: false,
            is_pinned: false,
            image_url: "/dest-2.jpg"
        }
    ];

    useEffect(() => {
        fetchRoutes();
    }, []);

    const fetchRoutes = async () => {
        setLoading(true);
        try {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
                // Use mock data if env not set
                console.warn("Supabase env not set, using mock data");
                setRoutes(mockData);
            } else {
                const { data, error } = await supabase
                    .from("features_routes")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) throw error;
                setRoutes(data || []);
            }
        } catch (err) {
            console.error("Error fetching routes:", err);
            // Fallback to mock on error for demo purposes
            setRoutes(mockData);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("確定要刪除此行程嗎？此動作無法復原。")) return;

        try {
            // Only run real delete if Supabase is connected
            if (!id.startsWith("mock-")) {
                const { error } = await supabase.from("features_routes").delete().eq("id", id);
                if (error) throw error;
            }

            setRoutes(routes.filter(r => r.id !== id));
            alert("刪除成功");
        } catch (err) {
            console.error("Error deleting:", err);
            alert("刪除失敗");
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">特色行程管理</h1>
                <Link
                    href="/admin/routes/new"
                    className="flex items-center gap-2 bg-lanna-gold text-white px-4 py-2 rounded-lg hover:bg-lanna-gold/90 transition-colors shadow-sm font-medium"
                >
                    <Plus size={20} />
                    新增行程
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-10 text-gray-500">載入中...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 font-medium text-gray-500 w-20">狀態</th>
                                <th className="p-4 font-medium text-gray-500">行程名稱</th>
                                <th className="p-4 font-medium text-gray-500">簡介</th>
                                <th className="p-4 font-medium text-gray-500 text-right">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((route) => (
                                <tr key={route.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4">
                                        <span
                                            className={`inline-block w-3 h-3 rounded-full ${route.is_active ? "bg-green-500" : "bg-gray-300"
                                                }`}
                                            title={route.is_active ? "上架中" : "已下架"}
                                        />
                                    </td>
                                    <td className="p-4 font-medium text-gray-800">
                                        <div className="flex items-center gap-2">
                                            {route.is_pinned && (
                                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold">
                                                    置頂
                                                </span>
                                            )}
                                            {route.title_zh_tw}
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500 text-sm max-w-xs truncate">
                                        {route.description_zh_tw || "-"}
                                    </td>
                                    <td className="p-4 flex gap-3 justify-end">
                                        <Link
                                            href={`/admin/routes/${route.id}`}
                                            className="text-gray-400 hover:text-lanna-gold transition-colors"
                                            title="編輯"
                                        >
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(route.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                            title="刪除"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        {route.pdf_link && (
                                            <a
                                                href={route.pdf_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                                title="查看 PDF"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {routes.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-400">
                                        目前沒有任何行程資料
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
