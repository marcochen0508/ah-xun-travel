import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Helper to get current session user
async function getCurrentUser() {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                },
            },
        }
    );
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

export async function POST(request: NextRequest) {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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
