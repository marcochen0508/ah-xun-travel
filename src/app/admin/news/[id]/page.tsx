"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import NewsForm from "@/components/admin/NewsForm";
import { NewsEvent } from "@/types/schema";

export default function EditNewsPage() {
    const params = useParams();
    const [news, setNews] = useState<NewsEvent | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            if (!params.id) return;

            const { data, error } = await supabase
                .from("news_events")
                .select("*")
                .eq("id", params.id)
                .single();

            if (error) {
                console.error("Error fetching news:", error);
            } else {
                setNews(data);
            }
            setLoading(false);
        };

        fetchNews();
    }, [params.id]);

    if (loading) return <div className="p-8">載入中...</div>;
    if (!news) return <div className="p-8">找不到該則消息</div>;

    return <NewsForm initialData={news} isEdit={true} />;
}
