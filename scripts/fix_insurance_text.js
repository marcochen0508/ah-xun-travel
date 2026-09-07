import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    console.log('Starting DB text fix...');

    // Update charter notes
    const { data: notesData, error: notesError } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'charter_notes')
        .single();

    if (notesError) {
        console.error('Error fetching charter notes:', notesError);
        return;
    }

    const replaceText = (content) => {
        if (!content) return '';
        return content.replace(/乘客雙重保險保障/g, '乘客雙重保障').replace(/乘客双重保险保障/g, '乘客双重保障');
    };

    const { error: updateNotesError } = await supabase
        .from('general_content')
        .update({
            content_zh_tw: replaceText(notesData.content_zh_tw),
            content_zh_cn: replaceText(notesData.content_zh_cn)
        })
        .eq('key', 'charter_notes');

    if (updateNotesError) {
        console.error('Error updating charter notes:', updateNotesError);
    } else {
        console.log('Charter notes fixed successfully.');
    }

    console.log('Done!');
}

main();
