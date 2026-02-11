const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testFetch() {
    console.log("Fetching from 'banners'...");
    const { data: banners, error: bannersError } = await supabase
        .from('banners')
        .select('id, title');

    if (bannersError) {
        console.error("Banners Error:", bannersError.message);
    } else {
        console.log("Banners Count:", banners.length);
    }

    console.log("Fetching from 'routes'...");
    const { data: routes, error: routesError } = await supabase
        .from('routes')
        .select('id, title_zh_tw');

    if (routesError) {
        console.error("Routes Error:", routesError.message);
    } else {
        console.log("Routes Count:", routes.length);
    }
}

testFetch();
