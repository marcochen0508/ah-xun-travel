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

        // --- Telegram Notification Logic ---
        const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
            try {
                // Determine stars
                const starString = "⭐".repeat(rating || 5);
                const messageText = `📢 [阿遜旅遊] 收到一則新顧客評價！\n\n👤 顧客：${name}\n🌟 評分：${starString}\n\n💬 內容：\n${content}\n\n👉 請至網站後台審核此則評價。`;

                const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

                const telegramResponse = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: messageText,
                    })
                });

                if (!telegramResponse.ok) {
                    const errorData = await telegramResponse.text();
                    console.error("Telegram API Error:", telegramResponse.status, errorData);
                } else {
                    console.log("Telegram Notification sent successfully.");
                }
            } catch (tgErr) {
                console.error("Failed to send Telegram notification:", tgErr);
                // Do not throw here, we still want to return success to the user!
            }
        } else {
            console.log("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set. Skipping notification.");
        }
        // -------------------------------

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
