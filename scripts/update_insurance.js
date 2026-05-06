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
    console.log('Starting DB updates for insurance...');

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
    features = features.filter((f) => f.icon !== 'ShieldCheck');
    
    // Add the new insurance feature
    features.push({
        icon: 'ShieldCheck',
        title: '雙重保險守護',
        title_cn: '双重保险守护',
        title_th: 'ความคุ้มครองประกันภัยสองชั้น',
        sub: 'EXTRA INSURANCE',
        sub_cn: 'EXTRA INSURANCE',
        sub_th: 'EXTRA INSURANCE',
        description: '阿勛做到其他業者很少在意的事。除了政府強制險，我們更為每位乘客額外加購 5 萬泰銖醫療險。這份看不見的細節，是我們對您「安心漫遊」的守護承諾。',
        description_cn: '阿勋做到其他业者很少在意的事。除了政府强制险，我们更为每位乘客额外加购 5 万泰铢医疗险。这份看不见的细节，是我们对您「安心漫游」的守护承诺。',
        description_th: 'เราดูแลในสิ่งที่คนอื่นมักมองข้าม นอกจากประกันภาคบังคับแล้ว เรายังซื้อประกันภัยค่ารักษาพยาบาลเพิ่มเติม 50,000 บาท ให้ผู้โดยสารทุกคน นี่คือคำมั่นสัญญาของเราเพื่อให้คุณเดินทางได้อย่างอุ่นใจ'
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

    const replaceNote = (content, newAddition) => {
        if (!content) return '';
        // Remove existing insurance note if we ran this script before
        let newContent = content.replace(/【乘客雙重保險保障】[\s\S]*?(?=【|$)/g, '');
        newContent = newContent.replace(/【乘客双重保险保障】[\s\S]*?(?=【|$)/g, '');
        newContent = newContent.replace(/【ความคุ้มครองประกันภัยสองชั้นสำหรับผู้โดยสาร】[\s\S]*?(?=【|$)/g, '');
        return newContent.trim() + '\n\n' + newAddition;
    };

    const add_tw = '【乘客雙重保險保障】\n為保障您的旅途安全，除泰國政府強制險外，阿勛包車額外為每位乘客加購保額 5 萬泰銖之醫療保險，提供您雙重安全守護，讓您放心暢遊清邁。';
    const add_cn = '【乘客双重保险保障】\n为保障您的旅途安全，除泰国政府强制险外，阿勋包车额外为每位乘客加购保额 5 万泰铢之医疗保险，提供您双重安全守护，让您放心畅游清迈。';
    const add_th = '【ความคุ้มครองประกันภัยสองชั้นสำหรับผู้โดยสาร】\nเพื่อความปลอดภัยในการเดินทางของคุณ นอกเหนือจากประกันภัยภาคบังคับของรัฐบาลไทยแล้ว อาชิน & สุชาติ รถเช่าเชียงใหม่ ยังได้ซื้อประกันภัยค่ารักษาพยาบาลเพิ่มเติมในวงเงิน 50,000 บาท ให้ผู้โดยสารทุกคน เพื่อให้คุณเดินทางท่องเที่ยวเชียงใหม่ได้อย่างอุ่นใจและไร้กังวล';

    const updatedContent_tw = replaceNote(notesData.content_zh_tw, add_tw);
    const updatedContent_cn = replaceNote(notesData.content_zh_cn, add_cn);
    const updatedContent_th = replaceNote(notesData.content_th, add_th);

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

    // 3. Insert news event
    const { data: existingNews, error: existNewsError } = await supabase
        .from('news_events')
        .select('*')
        .ilike('title_zh_tw', '%雙重保險%');
        
    if (existingNews && existingNews.length === 0) {
        const { error: insertNewsError } = await supabase
            .from('news_events')
            .insert({
                title: '【服務再升級】比您更在乎，那些看不見的細節：雙重保險守護',
                content: '阿勛的包車服務，想給您的不只是舒適的座駕。阿勛做到其他業者很少在意的事。除政府強制險之外，我們額外加購了每人 5 萬保額的乘客醫療保險。這份保證是我對每一位旅人的守護承諾。讓您在清邁的每一段旅程，都能在雙重保險的守護下，放心歡笑、安心漫遊。',
                title_zh_tw: '【服務再升級】比您更在乎，那些看不見的細節：雙重保險守護',
                title_zh_cn: '【服务再升级】比您更在乎，那些看不见的细节：双重保险守护',
                title_th: '【อัปเกรดบริการ】เราใส่ใจมากกว่า ในรายละเอียดที่คุณอาจมองไม่เห็น: ความคุ้มครองประกันภัยสองชั้น',
                content_zh_tw: '阿勛的包車服務，想給您的不只是舒適的座駕。阿勛做到其他業者很少在意的事。除政府強制險之外，我們額外加購了每人 5 萬保額的乘客醫療保險。這份保證是我對每一位旅人的守護承諾。讓您在清邁的每一段旅程，都能在雙重保險的守護下，放心歡笑、安心漫遊。',
                content_zh_cn: '阿勋的包车服务，想给您的不只是舒适的座驾。阿勋做到其他业者很少在意的事。除政府强制险之外，我们额外加购了每人 5 万保额的乘客医疗保险。这份保证是我对每一位旅人的守护承诺。让您在清迈的每一段旅程，都能在双重保险的守护下，放心欢笑、安心漫游。',
                content_th: 'บริการรถเช่าของเรา ไม่ได้มอบเพียงแค่ความสะดวกสบายในการเดินทางเท่านั้น แต่เราทำในสิ่งที่บริษัทอื่นมักละเลย นอกเหนือจากประกันภัยภาคบังคับแล้ว เราได้ซื้อประกันภัยค่ารักษาพยาบาลเพิ่มเติม 50,000 บาท ให้กับผู้โดยสารทุกคน คำมั่นสัญญานี้คือความตั้งใจของเราที่จะดูแลนักเดินทางทุกท่าน ให้ทุกการเดินทางในเชียงใหม่ของคุณเต็มไปด้วยรอยยิ้มและความสบายใจ ภายใต้ความคุ้มครองสองชั้น',
                start_date: new Date().toISOString(),
                is_active: true
            });
            
        if (insertNewsError) {
            console.error('Error inserting news:', insertNewsError);
        } else {
            console.log('News inserted successfully.');
        }
    } else {
        console.log('News article about insurance already exists.');
    }

    console.log('Done!');
}

main();
