import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

console.log('Total landmarks:', landmarks.length);

// Generate optimal googleMapsQuery for all landmarks
function getCleanQuery(lm) {
  if (lm.googleMapsQuery) return lm.googleMapsQuery;

  const zh = lm.name['zh-TW'] || '';
  const en = lm.name['en'] || '';
  const th = lm.name['th'] || '';

  // Pai landmarks
  if (lm.id.includes('pai-') || zh.includes('擺鎮') || zh.includes('拜縣') || zh.includes('Pai')) {
    if (lm.id.includes('treehouse') || zh.includes('樹屋')) return 'Pai Treehouse Resort';
    if (lm.id.includes('yun-lai') || zh.includes('雲來')) return 'Yun Lai Viewpoint, Pai';
    if (lm.id.includes('canyon') || zh.includes('大峽谷')) return 'Pai Canyon, Pai';
    if (lm.id.includes('memorial-bridge') || zh.includes('紀念大橋') || zh.includes('二戰')) return 'Memorial Bridge, Pai';
    if (lm.id.includes('santichon') || zh.includes('山地村')) return 'Santichon Village, Pai';
    if (lm.id.includes('mae-yen') || zh.includes('美音寺') || zh.includes('美茵寺')) return 'Wat Phra That Mae Yen, Pai';
    return `Pai, Mae Hong Son`;
  }

  // Lampang / Lamphun landmarks
  if (zh.includes('南邦舍利寺') || lm.id.includes('lampang-luang')) return 'Wat Phra That Lampang Luang, Lampang';
  if (zh.includes('南邦馬車') || lm.id.includes('horse-carriage')) return 'Lampang Horse Carriage, Lampang';
  if (zh.includes('哈利奔猜') || lm.id.includes('hariphunchai')) return 'Wat Phra That Hariphunchai, Lamphun';
  if (zh.includes('Chamadevi') || lm.id.includes('chama-devi') || zh.includes('方塔寺')) return 'Wat Chama Devi, Lamphun';
  if (zh.includes('百萬啤酒瓶寺') || lm.id.includes('maha-chedi-kaew')) return 'Wat Pa Maha Chedi Kaew, Sisaket';

  // Extract English in parentheses
  const paren = zh.match(/\(([^)]+)\)/);
  let bestEnglish = '';
  if (paren && paren[1]) {
    const parts = paren[1].split(/[\/,]/);
    for (const part of parts) {
      const trimmed = part.trim();
      if (/[a-zA-Z]/.test(trimmed)) {
        bestEnglish = trimmed;
        break;
      }
    }
  }

  if (!bestEnglish) {
    const prefix = zh.match(/^([a-zA-Z0-9\s'&.-]+)/);
    if (prefix && prefix[1].trim().length > 2) {
      bestEnglish = prefix[1].trim();
    }
  }

  const cleanName = bestEnglish || zh.replace(/\([^)]*\)/g, '').trim();

  // Add location context
  if (lm.regionId === 'chiang-rai') {
    if (cleanName.toLowerCase().includes('chiang rai')) return cleanName;
    return `${cleanName}, Chiang Rai`;
  } else {
    if (cleanName.toLowerCase().includes('chiang mai')) return cleanName;
    return `${cleanName}, Chiang Mai`;
  }
}

let updatedCount = 0;
for (const lm of landmarks) {
  const q = getCleanQuery(lm);
  if (!lm.googleMapsQuery || lm.googleMapsQuery !== q) {
    lm.googleMapsQuery = q;
    updatedCount++;
  }
}

console.log(`Updated queries for ${updatedCount} landmarks.`);

// Write back to landmarkData.ts
const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Successfully updated src/components/tour-3d/landmarkData.ts');
