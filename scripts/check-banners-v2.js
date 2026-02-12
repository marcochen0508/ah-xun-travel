const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBanners() {
    const { data, error } = await supabase.from('banners').select('*').limit(1);
    if (error) {
        console.error("Error fetching banners:", error.message);
    } else {
        console.log("Banners count:", data.length);
        if (data.length > 0) {
            console.log("Banner Column names:", Object.keys(data[0]));
            // Check if internal_note already exists
            if (Object.keys(data[0]).includes('internal_note')) {
                console.log("internal_note column ALREADY EXISTS.");
            } else {
                console.log("internal_note column IS MISSING.");
            }
        } else {
            console.log("Banners table is empty.");
        }
    }
}

checkBanners();
