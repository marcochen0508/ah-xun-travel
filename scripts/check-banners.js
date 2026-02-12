const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBanners() {
    // 1. Check if table 'banners' exists
    const { error: tableError } = await supabase.from('banners').select('*').limit(1);
    if (!tableError) {
        console.log("Table 'banners' exists.");
        const { data } = await supabase.from('banners').select('*').limit(1);
        console.log("Sample Banner:", data[0]);
    } else {
        console.log("Table 'banners' does not exist or error:", tableError.message);
    }

    // 2. Check general_content for banner key
    const { data: content, error: contentError } = await supabase.from('general_content').select('key');
    if (content) {
        console.log("Existing keys in general_content:", content.map(c => c.key));
    }
}

checkBanners();
