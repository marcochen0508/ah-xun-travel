const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAbout() {
    console.log("Checking 'about_us'...");

    const { data, error } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'about_us')
        .single();

    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Settings:", JSON.stringify(data.settings, null, 2));
    }
}

checkAbout();
