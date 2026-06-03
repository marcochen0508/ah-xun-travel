const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seedData() {
    console.log("開始補入 YTD 歷史流量數據...");

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

    // 2. 生成 2/9 - 5/26 期間所有日期的權重
    const startDate = new Date("2026-02-09");
    const endDate = new Date("2026-05-26");
    const days = [];
    let curDate = new Date(startDate);

    while (curDate <= endDate) {
        days.push(new Date(curDate));
        curDate.setDate(curDate.getDate() + 1);
    }

    // 計算每日權重，模擬 GA 上的波動趨勢
    const dayWeights = days.map(d => {
        const month = d.getMonth() + 1; // 1-12
        const date = d.getDate();
        
        let weight = 1.0;
        if (month === 2) {
            // 2月份剛架站流量較少
            weight = 0.3;
        } else if (month === 3) {
            // 3月中旬有小高峰
            if (date >= 10 && date <= 20) {
                weight = 1.8;
            } else {
                weight = 0.6;
            }
        } else if (month === 4) {
            // 4月份中等
            weight = 0.5;
        } else if (month === 5) {
            // 5月中旬 (5/10 - 5/20) 有大型點閱高峰
            if (date >= 10 && date <= 20) {
                weight = 3.8;
            } else {
                weight = 1.0;
            }
        }
        return { date: d, weight };
    });

    const totalWeightSum = dayWeights.reduce((acc, dw) => acc + dw.weight, 0);

    // 3. 分配 2,116 筆點閱數據到各天中
    const totalViewsToSeed = 2116;
    const viewsToInsert = [];
    
    // 建立 300 個不重複 IP 池
    const ipPool = Array.from({ length: 300 }, (_, i) => `192.168.2.${i + 1}`);

    dayWeights.forEach(dw => {
        // 計算此日期分配到的點閱數
        const count = Math.round((dw.weight / totalWeightSum) * totalViewsToSeed);
        
        for (let i = 0; i < count; i++) {
            // 隨機小時，模擬上網尖峰 (9-16 點, 19-22 點較多)
            let hour;
            const rand = Math.random();
            if (rand < 0.6) {
                hour = Math.random() < 0.5 
                    ? Math.floor(Math.random() * 7) + 9   // 9-15
                    : Math.floor(Math.random() * 4) + 19;  // 19-22
            } else {
                hour = Math.floor(Math.random() * 24);
            }

            const minute = Math.floor(Math.random() * 60);
            const second = Math.floor(Math.random() * 60);

            const created_at = new Date(dw.date);
            created_at.setHours(hour, minute, second);

            // 生成 IP 哈希，模擬不重複訪客
            const ip = ipPool[Math.floor(Math.random() * ipPool.length)];
            const dateStr = created_at.toISOString().slice(0, 10);
            const ipHash = crypto.createHash("sha256").update(ip + dateStr).digest("hex");

            viewsToInsert.push({
                created_at: created_at.toISOString(),
                page_path: Math.random() < 0.82 ? "/" : Math.random() < 0.5 ? "/charter" : "/news",
                referrer: Math.random() < 0.55 ? "https://l.facebook.com/" : Math.random() < 0.85 ? null : "https://www.google.com/",
                country: getRandCountry(),
                ip_hash: ipHash
            });
        }
    });

    console.log(`生成完畢，準備向資料庫寫入 ${viewsToInsert.length} 筆點閱紀錄...`);

    // 4. 分批寫入資料庫
    const chunkSize = 100;
    for (let i = 0; i < viewsToInsert.length; i += chunkSize) {
        const chunk = viewsToInsert.slice(i, i + chunkSize);
        const { error } = await supabase.from('page_views').insert(chunk);
        if (error) {
            console.error("批次寫入失敗:", error.message);
        } else {
            console.log(`已成功寫入 ${i + chunk.length} / ${viewsToInsert.length} 筆...`);
        }
    }

    console.log("🎉 所有歷史點閱數據補入成功！");
}

seedData();
