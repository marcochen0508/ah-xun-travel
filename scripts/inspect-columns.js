const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectColumns(tableName) {
    const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);

    if (error) {
        console.log(`Error selecting from ${tableName}:`, error.message);
        return;
    }

    if (data && data.length > 0) {
        console.log(`Columns for ${tableName}:`, Object.keys(data[0]));
        console.log(`Sample row for ${tableName}:`, data[0]);
    } else {
        console.log(`Table ${tableName} is empty, cannot infer columns from data.`);
        // Try inserting a dummy row to fail and get column error? No, let's just assume empty.
    }
}

async function main() {
    await inspectColumns('admin_profiles');
    await inspectColumns('site_settings');
    await inspectColumns('general_content');
}

main();
