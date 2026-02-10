const { createClient } = require('@supabase/supabase-js');

// Use PUBLIC keys to simulate frontend access
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAccess() {
    console.log("Testing public access to 'general_content'...");

    const { data, error } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'about_us')
        .single();

    if (error) {
        console.error("Public Access Failed:", error.message);
        console.log("Hint: This likely means RLS policy is missing for SELECT.");
    } else {
        console.log("Public Access Success!");
        console.log("Data:", data);
    }
}

checkAccess();
