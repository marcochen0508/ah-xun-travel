import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
if (!lmMatch) {
  console.log('No LANDMARKS found');
  process.exit(1);
}

const landmarks = eval(lmMatch[1]);
console.log('Loaded landmarks count:', landmarks.length);

// Let's analyze how getGoogleMapsSearchUrl works and test each landmark
function extractEnglishOrCleanName(rawName) {
  // First check if there is an English name in parentheses, e.g. "擺鎮大峽谷 (Pai Canyon / 孔敬峽谷)" -> "Pai Canyon"
  const paren = rawName.match(/\(([^)]+)\)/);
  if (paren && paren[1]) {
    // split by slash or comma
    const parts = paren[1].split(/[\/,]/);
    for (const part of parts) {
      const trimmed = part.trim();
      // If it contains letters
      if (/[a-zA-Z]/.test(trimmed)) {
        return trimmed;
      }
    }
  }
  // If the rawName itself starts with English e.g. "Lalitta Café (清萊仙境瀑布咖啡)"
  const prefixMatch = rawName.match(/^([a-zA-Z0-9\s'&.-]+)/);
  if (prefixMatch && prefixMatch[1].trim().length > 2) {
    return prefixMatch[1].trim();
  }
  // Fallback: strip parenthesis
  return rawName.replace(/\([^)]*\)/g, '').trim();
}

landmarks.forEach((lm, index) => {
  const zh = lm.name['zh-TW'] || '';
  const en = lm.name['en'] || '';
  const cleanEn = extractEnglishOrCleanName(zh) || extractEnglishOrCleanName(en);
  
  // Specific location checks
  let verifiedQuery = lm.googleMapsQuery || '';

  if (!verifiedQuery) {
    // Pai spots
    if (zh.includes('擺鎮') || zh.includes('拜縣') || zh.includes('Pai') || en.includes('Pai')) {
      if (zh.includes('樹屋')) verifiedQuery = 'Pai Treehouse Resort, Pai';
      else if (zh.includes('雲來')) verifiedQuery = 'Yun Lai Viewpoint, Pai';
      else if (zh.includes('大峽谷')) verifiedQuery = 'Pai Canyon, Pai';
      else if (zh.includes('紀念大橋') || zh.includes('二戰')) verifiedQuery = 'Memorial Bridge Pai, Mae Hong Son';
      else if (zh.includes('山地村') || zh.includes('Santichon')) verifiedQuery = 'Santichon Village, Pai';
      else if (zh.includes('美音寺') || zh.includes('美茵寺') || zh.includes('Mae Yen')) verifiedQuery = 'Wat Phra That Mae Yen, Pai';
      else verifiedQuery = `${cleanEn}, Pai, Mae Hong Son`;
    }
    // Chiang Rai specific spots
    else if (lm.regionId === 'chiang-rai') {
      if (zh.includes('翠峰茶園')) verifiedQuery = 'Choui Fong Tea Plantation, Mae Chan, Chiang Rai';
      else if (zh.includes('美斯樂') || zh.includes('Mae Salong')) verifiedQuery = 'Doi Mae Salong, Chiang Rai';
      else if (zh.includes('金三角')) verifiedQuery = 'Golden Triangle, Chiang Saen, Chiang Rai';
      else if (zh.includes('鴉片博物館')) verifiedQuery = 'Hall of Opium Museum, Chiang Saen, Chiang Rai';
      else if (zh.includes('皇太后行宮') || zh.includes('Doi Tung')) verifiedQuery = 'Doi Tung Royal Villa, Chiang Rai';
      else if (zh.includes('指天山')) verifiedQuery = 'Phu Chi Fa, Chiang Rai';
      else if (zh.includes('美塞泰緬邊境') || zh.includes('Mae Sai')) verifiedQuery = 'Mae Sai Border Market, Chiang Rai';
      else if (zh.includes('象山') || zh.includes('Doi Chang')) verifiedQuery = 'Doi Chang Coffee, Mae Suai, Chiang Rai';
      else if (zh.includes('Lalitta')) verifiedQuery = 'Lalitta Café, Chiang Rai';
      else if (zh.includes('百萬啤酒瓶寺')) verifiedQuery = 'Wat Pa Maha Chedi Kaew, Khun Han, Sisaket';
      else if (zh.includes('白廟') || zh.includes('Wat Rong Khun')) verifiedQuery = 'Wat Rong Khun - White Temple, Chiang Rai';
      else if (zh.includes('藍廟') || zh.includes('Wat Rong Suea Ten')) verifiedQuery = 'Wat Rong Suea Ten (Blue Temple), Chiang Rai';
      else if (zh.includes('黑屋') || zh.includes('Baandam')) verifiedQuery = 'Baandam Museum (Black House), Chiang Rai';
      else if (zh.includes('長頸族')) verifiedQuery = 'Long Neck Karen Village, Chiang Rai';
      else if (zh.includes('觀音寺') || zh.includes('Wat Huay Pla Kang')) verifiedQuery = 'Wat Huay Pla Kang, Chiang Rai';
      else if (zh.includes('辛哈公園') || zh.includes('Singha Park')) verifiedQuery = 'Singha Park Chiang Rai';
      else if (zh.includes('清萊夜市') || zh.includes('Chiang Rai Night Bazaar')) verifiedQuery = 'Chiang Rai Night Bazaar';
      else if (zh.includes('清萊鐘樓') || zh.includes('Clock Tower')) verifiedQuery = 'Chiang Rai Clock Tower';
      else {
        verifiedQuery = `${cleanEn}, Chiang Rai`;
      }
    }
  }

  if (verifiedQuery) {
    console.log(`[#${index + 1}] ${zh} => QUERY: "${verifiedQuery}"`);
  }
});
