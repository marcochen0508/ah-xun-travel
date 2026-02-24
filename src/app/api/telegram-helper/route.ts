import { NextResponse } from "next/server";

export async function GET() {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    if (!TELEGRAM_TOKEN) {
        return NextResponse.json({ error: "還沒有設定 TELEGRAM_BOT_TOKEN 喔！" });
    }

    try {
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/getUpdates`;
        const response = await fetch(telegramUrl);
        const data = await response.json();

        if (!data.ok) {
            return NextResponse.json({ error: "Telegram API 錯誤", details: data });
        }

        const updates = data.result;
        if (!updates || updates.length === 0) {
            return NextResponse.json({
                message: "目前沒有收到任何新訊息。請確認您已經把機器人加入群組，並且在群組裡隨便發送了一句測試訊息，然後再重新整理這個網頁！"
            });
        }

        // Find the most recent message
        const lastUpdate = updates[updates.length - 1];
        const chatInfo = lastUpdate.message?.chat || lastUpdate.my_chat_member?.chat;

        if (!chatInfo) {
            return NextResponse.json({
                message: "抓不到對話資訊，請在群組裡再發送一次測試訊息後重試。",
                raw_data: lastUpdate
            });
        }

        return NextResponse.json({
            "恭喜": "成功抓到通訊群組資料！",
            "這就是您的群組_ID": chatInfo.id,
            "群組名稱": chatInfo.title || chatInfo.first_name || "未知名稱",
            "群組類型": chatInfo.type,
            "下一步": `請把上面的群組_ID（包含負號）複製起來，貼到 Vercel 的 TELEGRAM_CHAT_ID 就可以了！`
        });

    } catch (error: any) {
        return NextResponse.json({ error: "抓取失敗", message: error.message });
    }
}
