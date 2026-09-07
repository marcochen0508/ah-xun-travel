const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seedData() {
    console.log("開始補入歷史流量數據...");

    // 清空現有測試數據（非必要，但能確保數據乾淨）
    // const { error: deleteErr } = await supabase.from('page_views').delete().neq('page_path', 'keep_this_dummy');

    const countries = [
        { name: "Taiwan", weight: 150 },
        { name: "Thailand", weight: 20 },
        { name: "Hong Kong", weight: 15 },
        { name: "Macao", weight: 5 },
        { name: "Malaysia", weight: 5 },
        { name: "Netherlands", weight: 2 },
        { name: "Sweden", weight: 2 }
    ];

    const getRandCountry = () => {
        const totalWeight = countries.reduce((acc, c) => acc + c.weight, 0);
        let r = Math.random() * totalWeight;
        for (const c of countries) {
            if (r < c.weight) return c.name;
            r -= c.weight;
        }
        return "Taiwan";
    };

    // 過去 7 天的時間區間 (5/27 - 6/2)
    const dates = [];
    for (let i = 7; i >= 1; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d);
    }

    const viewsToInsert = [];
    const totalViewsToSeed = 202; // GA4 顯示的 7 天瀏覽次數大約是 202 次

    // 模擬 123 個不重複 IP
    const ipPool = Array.from({ length: 123 }, (_, i) => `192.168.1.${i + 1}`);

    for (let i = 0; i < totalViewsToSeed; i++) {
        // 隨機選一天
        const baseDate = dates[Math.floor(Math.random() * dates.length)];
        
        // 隨機產生小時，模擬上網尖峰時段 (早上 9 點 ~ 晚上 11 點比較多)
        let hour;
        const rand = Math.random();
        if (rand < 0.6) {
            // 60% 機率在 10:00 - 16:00 或 19:00 - 22:00
            hour = Math.random() < 0.5 
                ? Math.floor(Math.random() * 6) + 10  // 10-15
                : Math.floor(Math.random() * 4) + 19; // 19-22
        } else {
            hour = Math.floor(Math.random() * 24);
        }

        const minute = Math.floor(Math.random() * 60);
        const second = Math.floor(Math.random() * 60);

        const created_at = new Date(baseDate);
        created_at.setHours(hour, minute, second);

        // 模擬不重複訪客 IP 雜湊
        const ip = ipPool[Math.floor(Math.random() * ipPool.length)];
        const dateStr = created_at.toISOString().slice(0, 10);
        const ipHash = crypto.createHash("sha256").update(ip + dateStr).digest("hex");

        viewsToInsert.push({
            created_at: created_at.toISOString(),
            page_path: Math.random() < 0.85 ? "/" : Math.random() < 0.5 ? "/charter" : "/news",
            referrer: Math.random() < 0.6 ? "https://l.facebook.com/" : Math.random() < 0.8 ? null : "https://www.google.com/",
            country: getRandCountry(),
            ip_hash: ipHash
        });
    }

    // 分批寫入資料庫（防單次寫入限制）
    const chunkSize = 50;
    for (let i = 0; i < viewsToInsert.length; i += chunkSize) {
        const chunk = viewsToInsert.slice(i, i + chunkSize);
        const { error } = await supabase.from('page_views').insert(chunk);
        if (error) {
            console.error("批次寫入出錯:", error.message);
        } else {
            console.log(`已寫入 ${i + chunk.length} 筆數據...`);
        }
    }

    console.log("🎉 歷史數據補入完成！");
}

seedData();
