"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
    const [counts, setCounts] = useState({
        routes: 0,
        news: 0,
        reviews: 0 // Previously visitors
    });

    useEffect(() => {
        const fetchCounts = async () => {
            const { count: routesCount } = await supabase
                .from("features_routes")
                .select("*", { count: "exact", head: true });

            const { count: newsCount } = await supabase
                .from("news_events")
                .select("*", { count: "exact", head: true })
                .eq("is_active", true);

            const { count: reviewsCount } = await supabase
                .from("customer_reviews")
                .select("*", { count: "exact", head: true });

            setCounts(prev => ({
                ...prev,
                routes: routesCount || 0,
                news: newsCount || 0,
                reviews: reviewsCount || 0
            }));
        };
        fetchCounts();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-lanna-coffee mb-6">系統總覽</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">特色行程數量</h3>
                    <p className="text-4xl font-bold text-lanna-green mt-2">{counts.routes}</p>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">上架中的最新消息</h3>
                    <p className="text-4xl font-bold text-lanna-gold mt-2">{counts.news}</p>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">累積評論總數</h3>
                    <p className="text-4xl font-bold text-lanna-coffee mt-2">{counts.reviews}</p>
                </div>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                <p className="flex items-center gap-2">
                    ℹ️ <strong>提示：</strong> 請在左側選單選擇要管理的功能。
                </p>
            </div>
        </div>
    );
}
