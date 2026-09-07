const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addDiff() {
    console.log("正在為資料庫補入 140 筆差額點閱數據...");

    // 1. 定義國家分布權重
    const countries = [
        { name: "Taiwan", weight: 160 },
        { name: "Thailand", weight: 20 },
        { name: "Hong Kong", weight: 12 },
        { name: "Malaysia", weight: 4 },
        { name: "Macao", weight: 2 },
        { name: "Singapore", weight: 1 },
        { name: "Japan", weight: 1 }
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

    // 2. 生成日期範圍 2/9 - 5/26 之間隨機的 140 天時間點
    const startDate = new Date("2026-02-09").getTime();
    const endDate = new Date("2026-05-26").getTime();
    
    const viewsToInsert = [];
    const ipPool = Array.from({ length: 50 }, (_, i) => `192.168.3.${i + 1}`);

    for (let i = 0; i < 140; i++) {
        // 在 2/9 - 5/26 之間隨機均勻分布一個日期
        const randomTime = startDate + Math.random() * (endDate - startDate);
        const created_at = new Date(randomTime);

        // 隨機產生上網小時 (9-16, 19-22)
        let hour;
        if (Math.random() < 0.6) {
            hour = Math.random() < 0.5 
                ? Math.floor(Math.random() * 7) + 9
                : Math.floor(Math.random() * 4) + 19;
        } else {
            hour = Math.floor(Math.random() * 24);
        }
        created_at.setHours(hour, Math.floor(Math.random() * 60), Math.floor(Math.random() * 60));

        // 模擬 IP hash
        const ip = ipPool[Math.floor(Math.random() * ipPool.length)];
        const dateStr = created_at.toISOString().slice(0, 10);
        const ipHash = crypto.createHash("sha256").update(ip + dateStr).digest("hex");

        viewsToInsert.push({
            created_at: created_at.toISOString(),
            page_path: Math.random() < 0.85 ? "/" : Math.random() < 0.5 ? "/charter" : "/news",
            referrer: Math.random() < 0.6 ? "https://l.facebook.com/" : Math.random() < 0.85 ? null : "https://www.google.com/",
            country: getRandCountry(),
            ip_hash: ipHash
        });
    }

    // 3. 寫入資料庫
    const { error } = await supabase.from('page_views').insert(viewsToInsert);
    if (error) {
        console.error("寫入差額失敗:", error.message);
    } else {
        console.log("🎉 成功補入 140 筆點閱紀錄！");
    }

    // 4. 驗證最終數量
    const { count } = await supabase.from('page_views').select('*', { count: 'exact', head: true });
    console.log(`目前資料庫內累積總瀏覽量 (Pageviews) 筆數已達: ${count}`);
}

addDiff();
