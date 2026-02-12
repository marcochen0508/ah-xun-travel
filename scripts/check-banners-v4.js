const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBanners() {
    const { data, error } = await supabase.from('banners').select('*').limit(1);
    if (error) {
        console.error(JSON.stringify(error));
    } else {
        if (data.length > 0) {
            console.log("SCHEMA_START");
            console.log(JSON.stringify(Object.keys(data[0])));
            console.log("SCHEMA_END");
        } else {
            console.log("EMPTY");
        }
    }
}

checkBanners();
