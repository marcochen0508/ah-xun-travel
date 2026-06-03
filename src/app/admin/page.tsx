"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { BarChart3, Clock, Globe2, Eye, Users, AlertTriangle, ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
    const [counts, setCounts] = useState({
        routes: 0,
        news: 0,
        reviews: 0,
        pendingReviews: 0
    });
    const [analytics, setAnalytics] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [analyticsLoading, setAnalyticsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Get Routes count
                const { count: routesCount } = await supabase
                    .from("features_routes")
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

        const fetchAnalytics = async () => {
            try {
                const res = await fetch("/api/admin/analytics");
                if (res.ok) {
                    const data = await res.json();
                    setAnalytics(data);
                }
            } catch (error) {
                console.error("Error fetching analytics:", error);
            } finally {
                setAnalyticsLoading(false);
            }
        };

        fetchStats();
        fetchAnalytics();
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

            {/* Core Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-gray-500 text-sm font-medium">特色行程數量</h3>
                    <p className="text-4xl font-bold text-lanna-green mt-2">{counts.routes}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-gray-500 text-sm font-medium">上架中的最新消息</h3>
                    <p className="text-4xl font-bold text-lanna-gold mt-2">{counts.news}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-gray-500 text-sm font-medium">累積評論總數</h3>
                    <p className="text-4xl font-bold text-lanna-coffee mt-2">{counts.reviews}</p>
                </div>
            </div>

            {/* Traffic Analytics Section */}
            <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="text-lanna-green" size={24} />
                    <h2 className="text-2xl font-bold text-gray-800">網站流量與瀏覽統計</h2>
                </div>

                {analyticsLoading ? (
                    <div className="p-8 text-center text-gray-400">載入流量分析數據中...</div>
                ) : analytics?.setupRequired ? (
                    /* SQL Setup Alert */
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-800 space-y-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-amber-900">尚未使用 SQL 建立統計資料表</h3>
                                <p className="text-sm mt-1 text-amber-700">
                                    為了收集與顯示網站瀏覽人次、熱門時段與國家，請在您的 Supabase 控制台的 <strong>SQL Editor</strong> 中執行以下指令：
                                </p>
                            </div>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto font-mono select-all">
{`CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  page_path text NOT NULL,
  referrer text,
  country text,
  ip_hash text
);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated read" ON page_views
  FOR SELECT TO authenticated
  USING (true);`}
                        </pre>
                        <p className="text-xs text-amber-600">
                            * 執行成功後，重新整理本頁面，系統即可開始追蹤並顯示訪客統計。
                        </p>
                    </div>
                ) : analytics ? (
                    <div className="space-y-6">
                        {/* Traffic Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-gray-500 text-sm font-medium">歷史累積總瀏覽量 (Pageviews)</h4>
                                    <p className="text-3xl font-bold text-indigo-600 mt-1">{analytics.totalViews}</p>
                                </div>
                                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-500">
                                    <Eye size={24} />
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-gray-500 text-sm font-medium">過去 7 天累積瀏覽量</h4>
                                    <p className="text-3xl font-bold text-green-600 mt-1">{analytics.totalViewsPast7Days}</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg text-green-500">
                                    <BarChart3 size={24} />
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <h4 className="text-gray-500 text-sm font-medium">過去 7 天不重複訪客 (Visitors)</h4>
                                    <p className="text-3xl font-bold text-amber-600 mt-1">{analytics.totalUniqueVisitors}</p>
                                </div>
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-500">
                                    <Users size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Charts and Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* 7 Days Daily Views */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                                <h3 className="text-gray-800 text-lg font-bold mb-4 flex items-center gap-2">
                                    <BarChart3 size={20} className="text-indigo-500" />
                                    過去 7 天每日流量走勢
                                </h3>
                                <div className="space-y-4">
                                    {analytics.past7Days.map((day: any) => {
                                        const maxViews = Math.max(...analytics.past7Days.map((d: any) => d.views || 1));
                                        const widthPercent = maxViews > 0 ? (day.views / maxViews) * 100 : 0;
                                        return (
                                            <div key={day.date} className="flex items-center gap-4">
                                                <span className="text-xs font-semibold text-gray-500 w-20">{day.date}</span>
                                                <div className="flex-1 bg-gray-100 h-8 rounded-lg overflow-hidden relative">
                                                    <div 
                                                        className="bg-indigo-500/80 h-full rounded-lg transition-all duration-500"
                                                        style={{ width: `${Math.max(day.views > 0 ? 5 : 0, widthPercent)}%` }}
                                                    />
                                                    <span className="absolute left-3 top-2 text-xs font-bold text-gray-700">
                                                        {day.views} 點閱 / {day.visitors} 訪客
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Top Countries */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-gray-800 text-lg font-bold mb-4 flex items-center gap-2">
                                    <Globe2 size={20} className="text-green-500" />
                                    前五大瀏覽國家/地區
                                </h3>
                                <div className="space-y-4">
                                    {analytics.topCountries.length === 0 ? (
                                        <p className="text-sm text-gray-400 italic">尚無地區數據</p>
                                    ) : (
                                        analytics.topCountries.map((c: any, index: number) => (
                                            <div key={c.country} className="flex items-center justify-between border-b border-gray-50 pb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-gray-400 w-4">#{index + 1}</span>
                                                    <span className="text-sm font-semibold text-gray-700">{c.country}</span>
                                                </div>
                                                <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                                                    {c.views} 次點閱
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Hourly Distribution */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-3">
                                <h3 className="text-gray-800 text-lg font-bold mb-2 flex items-center gap-2">
                                    <Clock size={20} className="text-amber-500" />
                                    熱門瀏覽時段分佈 (清邁/泰國時間)
                                </h3>
                                <p className="text-xs text-gray-400 mb-6">了解客人都集中在哪些時段上網（顯示清邁當地時區 UTC+7）</p>
                                <div className="flex justify-between items-end h-40 pt-6 px-2 border-b border-gray-200">
                                    {analytics.hourlyStats.map((item: any) => {
                                        const maxViews = Math.max(...analytics.hourlyStats.map((h: any) => h.views || 1));
                                        const heightPercent = maxViews > 0 ? (item.views / maxViews) * 100 : 0;
                                        return (
                                            <div key={item.hour} className="flex-1 flex flex-col items-center group relative">
                                                {/* Tooltip on hover */}
                                                <span className="absolute -top-8 hidden group-hover:block bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-md z-10 whitespace-nowrap">
                                                    {item.views} 次點閱
                                                </span>
                                                <div 
                                                    className="bg-amber-500/80 group-hover:bg-amber-500 w-3 md:w-6 rounded-t-md transition-all duration-300"
                                                    style={{ height: `${Math.max(item.views > 0 ? 5 : 0, heightPercent)}%` }}
                                                />
                                                <span className="text-[10px] text-gray-400 mt-2 font-mono">{String(item.hour).padStart(2, '0')}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
                                    <span>凌晨 00:00</span>
                                    <span>中午 12:00</span>
                                    <span>晚上 23:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-400 italic">無法取得流量數據</div>
                )}
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
                <p className="flex items-center gap-2">
                    ℹ️ <strong>提示：</strong> 請在左側選單選擇要管理的功能。
                </p>
            </div>
        </div>
    );
}
