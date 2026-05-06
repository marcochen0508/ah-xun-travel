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
    console.log('Starting DB updates...');

    // 1. Update features
    const { data: featureData, error: featureError } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'features')
        .single();

    if (featureError) {
        console.error('Error fetching features:', featureError);
        return;
    }

    let features = featureData.settings || [];
    
    // Remove if already exists to avoid duplicates
    features = features.filter((f) => f.icon !== 'Wheelchair' && f.icon !== 'HeartHandshake');
    
    // Add the new wheelchair feature
    features.push({
        icon: 'HeartHandshake',
        title: '貼心無障礙服務 / 輪椅免費提供',
        title_cn: '贴心无障碍服务 / 轮椅免费提供',
        title_th: 'บริการเพื่อการเข้าถึงอย่างอบอุ่น / มีรถเข็นให้บริการฟรี',
        sub: 'WHEELCHAIR SERVICE',
        sub_cn: 'WHEELCHAIR SERVICE',
        sub_th: 'WHEELCHAIR SERVICE',
        description: '提供貼心的輪椅借用服務，讓每一位旅客都能盡情享受清邁之美。若您有輪椅需求，請務必於『預約包車時事先告知』，以便我們為您準備。',
        description_cn: '提供贴心的轮椅借用服务，让每一位旅客都能尽情享受清迈之美。若您有轮椅需求，请务必于『预约包车时事先告知』，以便我们为您准备。',
        description_th: 'มีบริการให้ยืมรถเข็นอย่างเอาใจใส่ เพื่อให้ผู้โดยสารทุกคนได้เพลิดเพลินกับความงามของเชียงใหม่อย่างเต็มที่ หากคุณต้องการใช้รถเข็น โปรดแจ้งให้เราทราบล่วงหน้าเมื่อทำการจองรถ เพื่อให้เราสามารถเตรียมการให้คุณได้'
    });

    const { error: updateFeatureError } = await supabase
        .from('general_content')
        .update({ settings: features })
        .eq('key', 'features');

    if (updateFeatureError) {
        console.error('Error updating features:', updateFeatureError);
    } else {
        console.log('Features updated successfully.');
    }

    // 2. Update charter notes
    const { data: notesData, error: notesError } = await supabase
        .from('general_content')
        .select('*')
        .eq('key', 'charter_notes')
        .single();

    if (notesError) {
        console.error('Error fetching charter notes:', notesError);
        return;
    }

    // Simply replace the old long text with the new short text in the notes content.
    const replaceNote = (content) => {
        if (!content) return '';
        // Regex to replace the old wheelchair note
        let newContent = content.replace(/【無障礙服務借用須知】[\s\S]*?(?=【|$)/g, '');
        // Append the new one
        return newContent.trim() + '\n\n' + '【無障礙服務借用須知】\n提供貼心的輪椅借用服務，讓每一位旅客都能盡情享受清邁之美。若您有輪椅需求，請務必於『預約包車時事先告知』，以便我們為您準備。';
    };

    const replaceNoteCn = (content) => {
        if (!content) return '';
        let newContent = content.replace(/【无障碍服务借用须知】[\s\S]*?(?=【|$)/g, '');
        return newContent.trim() + '\n\n' + '【无障碍服务借用须知】\n提供贴心的轮椅借用服务，让每一位旅客都能尽情享受清迈之美。若您有轮椅需求，请务必于『预约包车时事先告知』，以便我们为您准备。';
    };

    const replaceNoteTh = (content) => {
        if (!content) return '';
        let newContent = content.replace(/【ข้อควรรู้การยืมบริการเพื่อการเข้าถึง】[\s\S]*?(?=【|$)/g, '');
        return newContent.trim() + '\n\n' + '【ข้อควรรู้การยืมบริการเพื่อการเข้าถึง】\nมีบริการให้ยืมรถเข็นอย่างเอาใจใส่ เพื่อให้ผู้โดยสารทุกคนได้เพลิดเพลินกับความงามของเชียงใหม่อย่างเต็มที่ หากคุณต้องการใช้รถเข็น โปรดแจ้งให้เราทราบล่วงหน้าเมื่อทำการจองรถ เพื่อให้เราสามารถเตรียมการให้คุณได้';
    };

    const updatedContent_tw = replaceNote(notesData.content_zh_tw);
    const updatedContent_cn = replaceNoteCn(notesData.content_zh_cn);
    const updatedContent_th = replaceNoteTh(notesData.content_th);

    const { error: updateNotesError } = await supabase
        .from('general_content')
        .update({
            content_zh_tw: updatedContent_tw,
            content_zh_cn: updatedContent_cn,
            content_th: updatedContent_th
        })
        .eq('key', 'charter_notes');

    if (updateNotesError) {
        console.error('Error updating charter notes:', updateNotesError);
    } else {
        console.log('Charter notes updated successfully.');
    }

    // 3. Insert news event (we will just update the existing one if we can, or just let it be since it's already inserted)
    const { error: updateNewsError } = await supabase
        .from('news_events')
        .update({
            content: '提供貼心的輪椅借用服務，讓每一位旅客都能盡情享受清邁之美。若您有輪椅需求，請務必於『預約包車時事先告知』，以便我們為您準備。',
            content_zh_tw: '提供貼心的輪椅借用服務，讓每一位旅客都能盡情享受清邁之美。若您有輪椅需求，請務必於『預約包車時事先告知』，以便我們為您準備。',
            content_zh_cn: '提供贴心的轮椅借用服务，让每一位旅客都能尽情享受清迈之美。若您有轮椅需求，请务必于『预约包车时事先告知』，以便我们为您准备。',
            content_th: 'มีบริการให้ยืมรถเข็นอย่างเอาใจใส่ เพื่อให้ผู้โดยสารทุกคนได้เพลิดเพลินกับความงามของเชียงใหม่อย่างเต็มที่ หากคุณต้องการใช้รถเข็น โปรดแจ้งให้เราทราบล่วงหน้าเมื่อทำการจองรถ เพื่อให้เราสามารถเตรียมการให้คุณได้'
        })
        .ilike('title_zh_tw', '%輪椅免費提供%');
        
    if (updateNewsError) {
        console.error('Error updating news:', updateNewsError);
    } else {
        console.log('News updated successfully.');
    }

    console.log('Done!');
}

main();
