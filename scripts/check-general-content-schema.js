const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
    // Try to insert a dummy row with all expected columns to see if it errors
    // or just select if we can't inspect schema directly via API easily

    // We'll try to select all columns for a non-existent key
    const { data, error } = await supabase
        .from('general_content')
        .select('key, title_zh_tw, content_zh_tw, settings')
        .limit(1);

    if (error) {
        console.error("Schema Check Error:", error.message);
    } else {
        console.log("Schema Check Passed: Columns exist.");
        console.log("Data sample:", data);
    }
}

checkSchema();
