"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { NewsEvent } from "@/types/schema";

export default function NewsPage() {
    const [news, setNews] = useState<NewsEvent[]>([]);
    const [loading, setLoading] = useState(true);

    // Mock data
    const mockData: NewsEvent[] = [
        {
            id: "mock-news-1",
            title: "2026 春節包車早鳥優惠",
            is_active: true,
            start_date: "2025-12-01",
            end_date: "2026-02-28",
            content: "即日起預訂春節期間包車，享9折優惠！"
        },
        {
            id: "mock-news-2",
            title: "清邁潑水節特別通告",
            is_active: false,
            start_date: "2026-04-01",
            end_date: "2026-04-15"
        }
    ];

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        setLoading(true);
        try {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
                setNews(mockData);
            } else {
                const { data, error } = await supabase
                    .from("news_events")
                    .select("*")
                    .order("created_at", { ascending: false });
                if (error) throw error;
                setNews(data || []);
            }
        } catch (err) {
            console.error(err);
            setNews(mockData);
        } finally {
            setLoading(false);
        }
    };

    const getStatus = (item: NewsEvent) => {
        const now = new Date();
        const start = item.start_date ? new Date(item.start_date) : null;
        const end = item.end_date ? new Date(item.end_date) : null;

        if (!item.is_active) return { label: "停用中", color: "bg-gray-300 text-gray-700" };

        if (start && now < start) return { label: "預約上架", color: "bg-blue-100 text-blue-700" };
        if (end && now > end) return { label: "已過期", color: "bg-red-100 text-red-700" };

        return { label: "顯示中", color: "bg-green-100 text-green-700" };
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">最新消息管理</h1>
                <Link
                    href="/admin/news/new"
                    className="flex items-center gap-2 bg-lanna-gold text-white px-4 py-2 rounded-lg hover:bg-lanna-gold/90 transition-colors shadow-sm font-medium"
                >
                    <Plus size={20} />
                    發布消息
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">智能狀態</th>
                            <th className="p-4 font-medium text-gray-500">標題</th>
                            <th className="p-4 font-medium text-gray-500">顯示期間</th>
                            <th className="p-4 font-medium text-gray-500 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map(item => {
                            const status = getStatus(item);
                            return (
                                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${status.color}`}>
                                            {status.label}
                                        </span>
                                    </td>
                                    <td className="p-4 font-medium">{item.title}</td>
                                    <td className="p-4 text-sm text-gray-500 flex items-center gap-2">
                                        <Calendar size={14} />
                                        {item.start_date || "即日起"} ~ {item.end_date || "永久"}
                                    </td>
                                    <td className="p-4 text-right">
                                        <Link href={`/admin/news/${item.id}`} className="text-gray-400 hover:text-lanna-gold">
                                            <Edit size={18} />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
