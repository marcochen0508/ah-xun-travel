import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
const USER_AGENT = 'AhXunTravelApp/5.0 (https://github.com/marcochen0508/ah-xun-travel; contact: marcochen0508@gmail.com)';

// Targeted curated keywords for famous restaurants, cafes, markets, parks in Chiang Mai & Chiang Rai
const CURATED_SEARCH_MAP = {
  // --- Markets & Food ---
  'Somphet Market': ['Somphet Market', 'Chiang Mai market fruit', 'ตลาดสมเพชร'],
  '松佩': ['Somphet Market', 'Chiang Mai Somphet'],
  'Chiang Mai Gate Night Market': ['Chiang Mai Gate night market', 'Chiang Mai Gate food', 'ประตูเชียงใหม่'],
  'Chiang Mai Gate': ['Chiang Mai Gate', 'Pratu Chiang Mai'],
  '南門小吃街': ['Chiang Mai Gate night market', 'Chiang Mai Gate street food'],
  '南門傳統早市': ['Chiang Mai Gate market morning', 'Chiang Mai Gate food'],
  'Ploen Ruedee': ['Ploen Ruedee Night Market Chiang Mai', 'Night Bazaar Chiang Mai food'],
  'Lamduan Fah Ham': ['Khao Soi Lamduan', 'Khao Soi Chiang Mai', 'ข้าวซอยลำดวนฟ้าฮ่าม'],
  '七十年咖哩麵': ['Khao Soi Lamduan', 'Khao Soi Chiang Mai'],
  'Tong Tem Toh': ['Tong Tem Toh Chiang Mai', 'Northern Thai food Chiang Mai', 'ต๋องเต็มโต๊ะ'],
  '童添圖': ['Tong Tem Toh Chiang Mai', 'Northern Thai food Chiang Mai'],
  'Khao Soi Nimman': ['Khao Soi Nimman', 'Khao Soi Chiang Mai noodles', 'ข้าวซอยนิมมาน'],
  'Cherng Doi': ['Cherng Doi Roast Chicken Chiang Mai', 'Kai Yang Chiang Mai', 'ไก่ย่างเชิงดอย'],
  'Guay Tiew Kua Gai': ['Guay Tiew Kua Gai Nimman', 'Thai fried noodles Chiang Mai'],
  'Gopuek Kua-KAI': ['Gopuek Kua-Kai Chiang Mai', 'Thai toast Chiang Mai'],
  'Anchan': ['Anchan Vegetarian Restaurant Chiang Mai', 'Butterfly pea noodles Chiang Mai'],
  'Goodsouls Kitchen': ['Goodsouls Kitchen Chiang Mai', 'Vegan food Chiang Mai'],
  'Baan Landai': ['Baan Landai Fine Thai Cuisine', 'Michelin Thai food Chiang Mai'],
  'Meena Rice': ['Meena Rice Based Cuisine Chiang Mai', 'Colored rice Chiang Mai', 'มีนา มีข้าว'],
  '五色米飯': ['Meena Rice Based Cuisine Chiang Mai', 'Colored rice Chiang Mai'],
  '黑森林': ['Khaomao-Khaofang Chiang Mai', 'Black forest restaurant Chiang Mai', 'ข้าวเม่า-ข้าวฟ่าง'],
  'Khaomao-Khaofang': ['Khaomao-Khaofang Chiang Mai', 'Black forest restaurant Chiang Mai'],
  'Carp Café': ['Carp Cafe Chiang Mai', 'Koi fish cafe Chiang Mai'],
  '錦鯉咖啡館': ['Carp Cafe Chiang Mai', 'Koi fish cafe Chiang Mai'],

  // --- Nimman, Art & Nature ---
  'Baan Kang Wat': ['Baan Kang Wat Chiang Mai', 'Artist village Chiang Mai', 'บ้านข้างวัด'],
  '森林手作藝術村': ['Baan Kang Wat Chiang Mai', 'Artist village Chiang Mai'],
  'Nana Jungle': ['Nana Jungle Chiang Mai', 'Bread market Chiang Mai', 'นานาจังเกิ้ล'],
  'MARS.cnx': ['MARS.cnx Chiang Mai', 'Space cafe Chiang Mai'],
  'PLUTO Cafe': ['PLUTO Cafe Chiang Mai', 'Black cafe Chiang Mai'],
  'The Baristro': ['The Baristro at Ping River', 'The Baristro Chiang Mai'],
  'Oasis Spa': ['Oasis Spa Chiang Mai', 'Lanna spa Chiang Mai', 'โอเอซิส สปา'],
  '綠野仙蹤蘭納館': ['Oasis Spa Chiang Mai', 'Lanna spa Chiang Mai'],
  'Elephant POOPOOPAPER': ['Elephant POOPOOPAPER Park Chiang Mai', 'Poo poo paper Chiang Mai'],
  'Kanta Elephant': ['Kanta Elephant Sanctuary Chiang Mai', 'Elephant bath Chiang Mai'],
  'Pongyang Jungle Coaster': ['Pongyang Jungle Coaster Chiang Mai', 'Jungle coaster Chiang Mai'],
  'Eagle Track': ['Eagle Track Zipline Chiang Mai', 'Zipline Chiang Mai'],
  'Dragon Flight': ['Dragon Flight Zipline Chiang Mai', 'Canopy walkway Chiang Mai'],
  'Summit Green Valley': ['Summit Green Valley Chiang Mai', 'Golf Chiang Mai'],
  'Mae Wang Bamboo Rafting': ['Mae Wang bamboo rafting', 'Bamboo raft Chiang Mai', 'ล่องแพแม่วาง'],
  '美王河竹伐漂流': ['Mae Wang bamboo rafting', 'Bamboo raft Chiang Mai'],

  // --- Inthanon & Chiang Dao & Pai & Chiang Rai ---
  'Doi Inthanon Peak': ['Doi Inthanon summit', 'Highest spot in Thailand', 'ยอดดอยอินทนนท์'],
  '因他儂山頂': ['Doi Inthanon summit', 'Highest spot in Thailand'],
  'Kew Mae Pan': ['Kew Mae Pan trail', 'Kew Mae Pan nature trail', 'กิ่วแม่ปาน'],
  'Khun Wang': ['Khun Wang Royal Agricultural Centre', 'Cherry blossom Chiang Mai', 'ศูนย์วิจัยเกษตรหลวงเชียงใหม่ ขุนวาง'],
  '坤旺': ['Khun Wang Royal Agricultural Centre', 'Cherry blossom Chiang Mai'],
  'Ban Pa Pong Piang': ['Ban Pa Pong Piang rice terrace', 'Rice terraces Chiang Mai', 'บ้านป่าบงเปียง'],
  '梯田梯稻觀景台': ['Ban Pa Pong Piang rice terrace', 'Rice terraces Chiang Mai'],
  'Ang Ka': ['Ang Ka Nature Trail', 'Ang Ka Doi Inthanon', 'อ่างกา ดอยอินทนนท์'],
  '冷溫帶高山步道': ['Ang Ka Nature Trail', 'Ang Ka Doi Inthanon'],
  'Mae Taeng Elephant': ['Mae Taeng Elephant Park Chiang Mai', 'Mae Taeng Elephant'],
  'Wat Saeng Kaew Phothiyan': ['Wat Saeng Kaew Phothiyan', 'วัดแสงแก้วโพธิญาณ'],
  '孔雀王廟': ['Wat Saeng Kaew Phothiyan', 'วัดแสงแก้วโพธิญาณ'],
  'Hinoki Land': ['Hinoki Land Chiang Mai', 'Japanese castle Chiang Mai', 'ฮิโนกิแลนด์'],
  '檜木王國': ['Hinoki Land Chiang Mai', 'Japanese castle Chiang Mai'],
  'Mon Ngo': ['Mon Ngo Chiang Mai', 'Mon Ngo viewpoint', 'ดอยม่อนเงาะ'],
  'Long Neck Karen': ['Long Neck Karen village Chiang Mai', 'Kayan people Thailand', 'กะเหรี่ยงคอยาว'],
  '長頸族': ['Long Neck Karen village Chiang Mai', 'Kayan people Thailand'],
  'Chiang Rai Night Bazaar': ['Chiang Rai Night Bazaar', 'Night market Chiang Rai', 'ไนท์บาซาร์เชียงราย'],
  'Lalitta': ['Lalitta Cafe Chiang Rai', 'Waterfall cafe Chiang Rai', 'ลลิตา คาเฟ่'],
  'Doi Chang Coffee': ['Doi Chang coffee plantation', 'Doi Chaang Chiang Rai', 'ดอยช้าง'],
  '象山高山咖啡': ['Doi Chang coffee plantation', 'Doi Chaang Chiang Rai'],
  'Santichon Village': ['Santichon Village Pai', 'Chinese village Pai', 'หมู่บ้านสันติชล'],
  '擺鎮山地村': ['Santichon Village Pai', 'Chinese village Pai'],
  'Pai Treehouse': ['Pai Treehouse Resort', 'Treehouse Pai Thailand'],
  'Central Festival': ['Central Festival Chiang Mai', 'Central Chiang Mai', 'เซ็นทรัล เชียงใหม่'],
};

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(12000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 4000) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch (e) {
    return false;
  }
}

async function searchCommonsImage(query) {
  if (!query || query.length < 3) return null;
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1200&format=json`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(6000) });
    const data = await res.json();
    const pages = data.query?.pages || {};

    for (const pid of Object.keys(pages)) {
      const info = pages[pid].imageinfo?.[0];
      const title = (pages[pid].title || '').toLowerCase();
      if (info && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
        if (title.endsWith('.pdf') || title.endsWith('.svg') || title.includes('logo') || title.includes('icon') || title.includes('map')) continue;
        const targetUrl = info.thumburl || info.url;
        if (targetUrl) return targetUrl;
      }
    }
  } catch {}
  return null;
}

async function searchWikiImage(wikiLang, query) {
  if (!query || query.length < 3) return null;
  try {
    const searchUrl = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=2&format=json`;
    const sRes = await fetch(searchUrl, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(6000) });
    const sData = await sRes.json();
    const results = sData.query?.search || [];
    if (results.length === 0) return null;

    const titles = results.map(r => encodeURIComponent(r.title)).join('|');
    const imgUrl = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&titles=${titles}&prop=pageimages&pithumbsize=1200&format=json`;
    const iRes = await fetch(imgUrl, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(6000) });
    const iData = await iRes.json();
    const pages = iData.query?.pages || {};

    for (const pid of Object.keys(pages)) {
      if (pid !== '-1' && pages[pid].thumbnail?.source) {
        return pages[pid].thumbnail.source;
      }
    }
  } catch {}
  return null;
}

async function main() {
  console.log('=== Starting Round 5 Targeted Extraction ===');
  const landmarkRegex = /{\s*"id":\s*"([^"]+)",[\s\S]*?"name":\s*{\s*"zh-TW":\s*"([^"]+)",\s*"en":\s*"([^"]+)",\s*"th":\s*"([^"]+)"\s*},[\s\S]*?"districtId":\s*"([^"]+)",[\s\S]*?"category":\s*"([^"]+)",[\s\S]*?"image":\s*"([^"]+)"/g;

  let match;
  const allLandmarks = [];
  while ((match = landmarkRegex.exec(content)) !== null) {
    allLandmarks.push({
      id: match[1],
      zhName: match[2],
      enName: match[3],
      thName: match[4],
      districtId: match[5],
      category: match[6],
      currentImage: match[7],
    });
  }

  let alreadyPresent = 0;
  const remainingLandmarks = [];

  for (const l of allLandmarks) {
    const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
    if (fs.existsSync(destFile) && fs.statSync(destFile).size > 4000 && l.currentImage.includes('/images/landmarks/')) {
      alreadyPresent++;
    } else {
      remainingLandmarks.push(l);
    }
  }

  console.log(`Initial Real Photos: ${alreadyPresent}`);
  console.log(`Processing remaining: ${remainingLandmarks.length}...`);

  let newSuccess = 0;
  const updatedMap = {};

  for (const l of remainingLandmarks) {
    // Find matching search keywords
    let candidateQueries = [];
    for (const [k, qList] of Object.entries(CURATED_SEARCH_MAP)) {
      if (l.zhName.includes(k) || l.enName.includes(k) || l.id.includes(k)) {
        candidateQueries.push(...qList);
        break;
      }
    }

    if (candidateQueries.length === 0) {
      const cleanEn = l.enName.replace(/[\u4e00-\u9fa5\(\)]/g, '').trim();
      const cleanTh = l.thName.replace(/[\u4e00-\u9fa5\(\)]/g, '').trim();
      if (cleanEn) candidateQueries.push(cleanEn, `${cleanEn} Chiang Mai`);
      if (cleanTh) candidateQueries.push(cleanTh, `${cleanTh} เชียงใหม่`);
    }

    let foundUrl = null;
    let matchedQ = '';
    for (const q of candidateQueries) {
      foundUrl = await searchCommonsImage(q);
      if (!foundUrl) foundUrl = await searchWikiImage('en', q);
      if (!foundUrl) foundUrl = await searchWikiImage('th', q);
      if (foundUrl) {
        matchedQ = q;
        break;
      }
    }

    if (foundUrl) {
      const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
      const ok = await downloadFile(foundUrl, destFile);
      if (ok) {
        console.log(`[FOUND R5] "${l.zhName}" matched query "${matchedQ}"`);
        updatedMap[l.id] = `/images/landmarks/${l.id}.jpg`;
        newSuccess++;
      }
    }
  }

  console.log(`\n======================================================`);
  console.log(`Initial Real Photos: ${alreadyPresent}`);
  console.log(`Round 5 Newly Downloaded: ${newSuccess}`);
  console.log(`TOTAL REAL PHOTOS NOW: ${alreadyPresent + newSuccess} / ${allLandmarks.length}`);
  console.log(`======================================================`);

  if (Object.keys(updatedMap).length > 0) {
    let currentContent = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
    for (const [lid, newImg] of Object.entries(updatedMap)) {
      const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
      currentContent = currentContent.replace(targetPattern, `$1"${newImg}"`);
    }
    fs.writeFileSync(LANDMARK_DATA_PATH, currentContent, 'utf-8');
    console.log('✓ landmarkData.ts successfully updated with Round 5 real photos!');
  }
}

main();
