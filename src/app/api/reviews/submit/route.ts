import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, content, rating, photos } = body;

        // Basic Validation
        if (!name || !content) {
            return NextResponse.json(
                { error: "Name and Content are required" },
                { status: 400 }
            );
        }

        // Use Admin Client to bypass RLS for public submission
        const { data, error } = await supabaseAdmin
            .from("customer_reviews")
            .insert([
                {
                    name,
                    content,
                    rating: rating || 5,
                    photos: photos || [],
                    show_on_home: false, // Default to hidden (Pending Approval)
                },
            ])
            .select()
            .single();

        if (error) {
            console.error("Error submitting review:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
