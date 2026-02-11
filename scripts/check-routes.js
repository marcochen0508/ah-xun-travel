const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = 'sb_publishable_B5q6zJBYURM9sVJVOrfwUA_7fzptgYj';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testFetch() {
    console.log("Fetching from 'features_routes'...");
    const { data: routes, error: routesError } = await supabase
        .from('features_routes')
        .select('id, title_zh_tw');

    if (routesError) {
        console.error("Routes Error:", routesError.message);
    } else {
        console.log("Routes Count:", routes.length);
    }
}

testFetch();
