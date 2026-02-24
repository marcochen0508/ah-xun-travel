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

        // --- Telegram & Email Notification Logic ---
        const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        const GAS_EMAIL_URL = process.env.GAS_EMAIL_URL;

        const starString = "⭐".repeat(rating || 5);
        const emailSubject = `[阿勛旅遊] 新顧客評價通知 - ${name}`;
        const emailBody = `您好，您的網站剛剛收到一則新的顧客評價：\n\n👤 顧客姓名：${name}\n🌟 顧客評分：${starString}\n\n💬 評價內容：\n${content}\n\n👉 請盡快登入網站後台進行審核。`;

        // 1. Send Email via Google Apps Script (if configured)
        if (GAS_EMAIL_URL) {
            try {
                const gasResponse = await fetch(GAS_EMAIL_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        subject: emailSubject,
                        message: emailBody
                    }),
                });
                if (!gasResponse.ok) {
                    console.error("GAS Email API Error:", await gasResponse.text());
                } else {
                    console.log("Email Notification sent via GAS successfully.");
                }
            } catch (emailErr) {
                console.error("Failed to send Email notification:", emailErr);
            }
        }

        // 2. Send Telegram Notification (if configured)
        if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
            try {
                const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
                const telegramResponse = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: `📢 ${emailSubject}\n\n👤 顧客：${name}\n🌟 評分：${starString}\n\n💬 內容：\n${content}\n\n👉 請至網站後台審核此則評價。`,
                    })
                });

                if (!telegramResponse.ok) {
                    console.error("Telegram API Error:", await telegramResponse.text());
                } else {
                    console.log("Telegram Notification sent successfully.");
                }
            } catch (tgErr) {
                console.error("Failed to send Telegram notification:", tgErr);
            }
        }
        // -------------------------------------------

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
