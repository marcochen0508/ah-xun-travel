const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkRoutes() {
    const { data, error } = await supabase
        .from('features_routes')
        .select('id, title_zh_tw, image_url');

    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Existing Routes:");
        data.forEach(route => {
            console.log(`- ${route.title_zh_tw}: ${route.image_url}`);
        });
    }
}

checkRoutes();
