import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { createHash } from "crypto";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { page_path, referrer } = body;

        if (!page_path) {
            return NextResponse.json({ error: "Missing page_path" }, { status: 400 });
        }

        // Get country code from Vercel header (provided automatically on Vercel deployments)
        const country = req.headers.get("x-vercel-ip-country") || "Taiwan";

        // Get IP and hash it with the current date to create a GDPR-compliant unique ID for the day
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
        const dateStr = new Date().toISOString().slice(0, 10);
        const ipHash = createHash("sha256").update(ip + dateStr).digest("hex");

        const { error } = await supabaseAdmin
            .from("page_views")
            .insert({
                page_path,
                referrer,
                country,
                ip_hash: ipHash
            });

        if (error) {
            console.error("Error inserting page view:", error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
