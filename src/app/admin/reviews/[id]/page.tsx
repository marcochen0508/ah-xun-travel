"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Correct hook for Next.js 15+ or 13+ App Dir
import { supabase } from "@/lib/supabase";
import { CustomerReview } from "@/types/schema";
import ReviewForm from "@/components/admin/ReviewForm";

export default function EditReviewPage() {
    const params = useParams();
    const [review, setReview] = useState<CustomerReview | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            fetchReview(params.id as string);
        }
    }, [params.id]);

    const fetchReview = async (id: string) => {
        try {
            const { data, error } = await supabase
                .from("customer_reviews")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw error;
            setReview(data);
        } catch (error) {
            console.error("Error fetching review:", error);
            alert("找不到此評論");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lanna-green"></div>
            </div>
        );
    }

    if (!review) return null;

    return <ReviewForm initialData={review} isEdit />;
}
