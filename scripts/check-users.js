const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAdminProfiles() {
    const { data, error } = await supabase.from('admin_profiles').select('*');
    if (error) {
        console.log('Error fetching admin_profiles:', error.message);
    } else {
        console.log('admin_profiles count:', data.length);
        if (data.length > 0) console.log('Sample profile:', data[0]);
    }
}

async function checkAuthUsers() {
    const { data: { users }, error } = await supabase.auth.admin.listUsers();
    if (error) {
        console.log('Error listing users:', error.message);
    } else {
        console.log('Total users:', users.length);
        const godot = users.find(u => u.email === 'godotchen@hotmail.com');
        if (godot) {
            console.log('Godot User Metadata:', godot.user_metadata);
            console.log('Godot App Metadata:', godot.app_metadata);
        } else {
            console.log('Godot user not found.');
        }
    }
}

async function main() {
    await checkAdminProfiles();
    await checkAuthUsers();
}

main();
