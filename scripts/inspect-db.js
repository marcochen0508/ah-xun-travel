const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectSchema() {
    const { data, error } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public');

    if (error) {
        // Try RPC if listing tables is restricted, or just try to select from expected tables
        console.log("Error listing tables (might be permissions). Testing specific tables...");
        await testTable('general_content');
        await testTable('site_settings');
        await testTable('admin_profiles');
    } else {
        console.log('Tables in public schema:', data.map(t => t.table_name));
    }
}

async function testTable(tableName) {
    const { count, error } = await supabase.from(tableName).select('*', { count: 'exact', head: true });
    if (error) {
        console.log(`Table '${tableName}' does not exist or is not accessible:`, error.message);
    } else {
        console.log(`Table '${tableName}' exists.`);
    }
}

inspectSchema();
