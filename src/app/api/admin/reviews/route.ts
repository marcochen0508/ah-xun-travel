import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, ...data } = body;

        // Validation (Basic)
        if (!data.name || !data.content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        let error;
        if (id) {
            // Update
            const { error: updateError } = await supabaseAdmin
                .from("customer_reviews")
                .update(data)
                .eq("id", id);
            error = updateError;
        } else {
            // Create
            const { error: insertError } = await supabaseAdmin
                .from("customer_reviews")
                .insert([data]);
            error = insertError;
        }

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error in reviews API:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
