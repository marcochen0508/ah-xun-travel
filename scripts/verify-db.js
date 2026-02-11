const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj'; // Using ANON key for public read check

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log("Testing connection to Supabase...");
    // Try to fetch from 'banners' table which should be public readable
    const { data, error } = await supabase
        .from('banners')
        .select('count', { count: 'exact', head: true });

    if (error) {
        console.error("Connection Failed:", error.message);
        process.exit(1);
    } else {
        console.log("Connection Successful!");
        console.log("Banners count:", data); // Valid response means connection works
    }
}

testConnection();
