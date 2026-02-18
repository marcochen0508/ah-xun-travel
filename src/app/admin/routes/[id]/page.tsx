"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import RouteForm from "@/components/admin/RouteForm";
import { FeatureRoute } from "@/types/schema";

export default function EditRoutePage() {
    const params = useParams();
    const id = params.id as string;
    const [route, setRoute] = useState<FeatureRoute | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchRoute(id);
        }
    }, [id]);

    const fetchRoute = async (routeId: string) => {
        setLoading(true);
        try {
            if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
                // Mock fetch
                console.log("Mock fetching route", routeId);
                setRoute({
                    id: routeId,
                    title_zh_tw: "素帖山雙龍寺半日遊",
                    description_zh_tw: "清邁必訪地標，俯瞰古城全景。",
                    is_active: true,
                    is_pinned: false,
                    image_url: "/dest-1.jpg",
                    pdf_link: "https://google.com"
                });
            } else {
                const { data, error } = await supabase
                    .from("features_routes")
                    .select("*")
                    .eq("id", routeId)
                    .single();
                if (error) throw error;
                setRoute(data);
            }
        } catch (err) {
            console.error("Error fetching route:", err);
            alert("讀取失敗");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center py-10">載入中...</div>;
    if (!route) return <div className="text-center py-10">找不到此行程</div>;

    return (
        <div>
            <RouteForm initialData={route} isEdit={true} />
        </div>
    );
}
