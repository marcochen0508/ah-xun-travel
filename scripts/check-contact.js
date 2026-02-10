const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkContact() {
    console.log("Checking 'contact_info' in general_content...");

    // Check if row exists
    const { data, error } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'contact_info')
        .single();

    if (error) {
        console.error("Error fetching contact_info:", error.message);
    } else {
        console.log("Data found:");
        console.log("Content (Address):", data.content_zh_tw);
        console.log("Settings:", JSON.stringify(data.settings, null, 2));
    }
}

checkContact();
