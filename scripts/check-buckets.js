const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oxjdrqvwakuepfpluptt.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // SERVICE_ROLE_KEY from .env.local

if (!supabaseKey) {
    console.error("Please set SUPABASE_SERVICE_ROLE_KEY env var");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function listBuckets() {
    console.log("Connecting to Supabase...");
    const { data, error } = await supabase.storage.listBuckets();

    if (error) {
        console.error("Error listing buckets:", error);
    } else {
        console.log("Buckets found:");
        if (data.length === 0) {
            console.log("(No buckets found)");
        }
        data.forEach(b => console.log(` - ${b.name} (Public: ${b.public})`));
    }
}

listBuckets();
