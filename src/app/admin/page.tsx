"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link"; // Added import for Link

export default function AdminDashboard() {
    const [counts, setCounts] = useState({
        routes: 0,
        news: 0,
        reviews: 0, // Previously visitors
        pendingReviews: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Get Routes count
                const { count: routesCount } = await supabase
                    .from("feature_routes")
                    .select("*", { count: "exact", head: true });

                // Get News count
                const { count: newsCount } = await supabase
                    .from("news_events")
                    .select("*", { count: "exact", head: true });

                // Get Reviews count
                const { count: reviewsCount } = await supabase
                    .from("customer_reviews")
                    .select("*", { count: "exact", head: true });

                // Get Pending Reviews count
                const { count: pendingCount } = await supabase
                    .from("customer_reviews")
                    .select("*", { count: "exact", head: true })
                    .eq("show_on_home", false);

                setCounts({
                    routes: routesCount || 0,
                    news: newsCount || 0,
                    reviews: reviewsCount || 0,
                    pendingReviews: pendingCount || 0
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div className="p-8 text-center text-gray-500">載入數據中...</div>;
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-serif text-gray-800">管理後台概覽</h1>

            {/* Pending Reviews Alert */}
            {counts.pendingReviews > 0 && (
                <Link href="/admin/reviews">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 hover:bg-red-100 transition-colors cursor-pointer shadow-sm rounded-r-lg">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-red-700">
                                    有 {counts.pendingReviews} 則新留言待審核
                                    <span className="font-normal ml-1 text-red-600">- 點擊前往審核</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
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
