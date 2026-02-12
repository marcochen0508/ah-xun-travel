const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function setSuperAdmin() {
    const email = 'godotchen@hotmail.com';

    // Find User
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
        console.error('User not found:', email);
        return;
    }

    console.log(`Found user ${email} (ID: ${user.id}). Updating app_metadata...`);

    const { data, error } = await supabase.auth.admin.updateUserById(
        user.id,
        { app_metadata: { ...user.app_metadata, is_super_admin: true } }
    );

    if (error) {
        console.error('Error updating user:', error.message);
    } else {
        console.log('Success! User app_metadata updated:', data.user.app_metadata);
    }
}

setSuperAdmin();
