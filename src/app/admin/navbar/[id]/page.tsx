"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import NavbarForm from "@/components/admin/NavbarForm";
import { NavigationLink } from "@/types/schema";

export default function EditNavbarLinkPage() {
    const params = useParams();
    const [link, setLink] = useState<NavigationLink | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLink = async () => {
            if (!params.id) return;

            const { data, error } = await supabase
                .from("navigation_links")
                .select("*")
                .eq("id", params.id)
                .single();

            if (error) {
                console.error("Error fetching link:", error);
            } else {
                setLink(data);
            }
            setLoading(false);
        };

        fetchLink();
    }, [params.id]);

    if (loading) return <div className="p-8">載入中...</div>;
    if (!link) return <div className="p-8">找不到該連結</div>;

    return <NavbarForm initialData={link} isEdit={true} />;
}
