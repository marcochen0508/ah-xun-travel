const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // SERVICE_ROLE_KEY

if (!supabaseKey) {
    console.error("Please set SUPABASE_SERVICE_ROLE_KEY env var");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createBucket() {
    console.log("Creating 'routes' bucket...");
    const { data, error } = await supabase.storage.createBucket('routes', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });

    if (error) {
        console.error("Error creating bucket:", error);
    } else {
        console.log("Bucket 'routes' created successfully!");
        console.log("Data:", data);
    }
}

createBucket();
