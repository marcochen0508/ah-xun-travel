const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: Missing environment variables SUPABASE_URL or SUPABASE_SERVICE_KEY');
    console.log('Usage: node scripts/create-first-admin.js');
    console.log('Make sure .env.local exists or vars are set.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createAdmin() {
    const email = 'admin@ahxun.com';
    const password = 'password123';

    console.log(`Creating user: ${email}...`);

    const { data, error } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true
    });

    if (error) {
        console.error('Error creating user:', error.message);
    } else {
        console.log('User created successfully!');
        console.log('Email:', data.user.email);
        console.log('ID:', data.user.id);
        console.log('-----------------------------------');
        console.log('PLEASE LOGIN WITH THESE CREDENTIALS:');
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }
}

createAdmin();
