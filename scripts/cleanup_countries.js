const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function cleanup() {
    console.log("正在將歷史數據中的瑞典 (Sweden) 與荷蘭 (Netherlands) 改為台灣 (Taiwan)...");

    const { data, error } = await supabase
        .from('page_views')
        .update({ country: 'Taiwan' })
        .in('country', ['Sweden', 'Netherlands']);

    if (error) {
        console.error("更新出錯:", error.message);
    } else {
        console.log("🎉 更新完成！瑞典與荷蘭的瀏覽量已成功合併至台灣。");
    }
}

cleanup();
