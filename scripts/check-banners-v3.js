const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBanners() {
    const { data, error } = await supabase.from('banners').select('*').limit(1);
    if (error) {
        console.error("Error:", error.message);
    } else {
        if (data.length > 0) {
            console.log("COLUMNS:", Object.keys(data[0]).sort().join(', '));
        } else {
            console.log("No data, trying to get columns from empty select...");
            const { data: cols, error: colError } = await supabase.from('banners').select('*').limit(0);
            if (colError) console.error("Col Error:", colError.message);
            else console.log("Success with empty select.");
        }
    }
}

checkBanners();
