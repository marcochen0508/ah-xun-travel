import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

if (!fs.existsSync(OUT_IMG_DIR)) {
  fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
}

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
const USER_AGENT = 'AhXunTravelApp/2.0 (https://github.com/marcochen0508/ah-xun-travel; contact: marcochen0508@gmail.com)';

// Key Mapping of Known Topics (EN / TH Wikipedia Titles)
const EXTENDED_MAPPINGS = {
  '清邁文化藝術中心': { en: 'Chiang Mai City Arts and Cultural Centre', th: 'หอศิลปวัฒนธรรมเมืองเชียงใหม่' },
  '蘭納民俗博物館': { en: 'Lanna Folklife Museum', th: 'พิพิธภัณฑ์พื้นถิ่นล้านนา' },
  '清邁動物園': { en: 'Chiang Mai Zoo', th: 'สวนสัตว์เชียงใหม่' },
  'MAYA 百貨': { en: 'Maya Lifestyle Shopping Center' },
  '清邁大學': { en: 'Chiang Mai University', th: 'มหาวิทยาลัยเชียงใหม่' },
  '素攀純銀廟': { en: 'Wat Sri Suphan', th: 'วัดศรีสุพรรณ' },
  '松達寺': { en: 'Wat Suan Dok', th: 'วัดสวนดอก' },
  '界遙寺': { en: 'Wat Chet Yot', th: 'วัดเจ็ดยอด' },
  '悟孟寺': { en: 'Wat Umong', th: 'วัดอุโมงค์' },
  '帕拉寺': { en: 'Wat Pha Lat', th: 'วัดผาลาด' },
  '魏功甘古城': { en: 'Wiang Kum Kam', th: 'เวียงกุมกาม' },
  '雙龍寺': { en: 'Wat Phra That Doi Suthep', th: 'วัดพระธาตุดอยสุเทพราชวรวิหาร' },
  '素貼山': { en: 'Doi Suthep', th: 'ดอยสุเทพ' },
  '蒲屏皇宮': { en: 'Bhubing Palace', th: 'พระตำหนักภูพิงคราชนิเวศน์' },
  '金山寺': { en: 'Wat Phra That Doi Kham', th: 'วัดพระธาตุดอยคำ' },
  '皇家花園': { en: 'Royal Park Rajapruek', th: 'อุทยานหลวงราชพฤกษ์' },
  '清邁夜間野生動物園': { en: 'Chiang Mai Night Safari', th: 'เชียงใหม่ไนท์ซาฟารี' },
  '湄林瀑布': { en: 'Mae Sa Waterfall', th: 'น้ำตกแม่สา' },
  '梅莎七層瀑布': { en: 'Mae Sa Waterfall', th: 'น้ำตกแม่สา' },
  '梅莎大象營': { en: 'Mae Sa Elephant Camp', th: 'ปางช้างแม่สา' },
  '大象自然公園': { en: 'Elephant Nature Park', th: 'ศูนย์บริบาลช้าง' },
  '蒙瞻山': { en: 'Mon Cham', th: 'ม่อนแจ่ม' },
  '皇后植物園': { en: 'Queen Sirikit Botanic Garden', th: 'สวนพฤกษศาสตร์สมเด็จพระนางเจ้าสิริกิติ์' },
  '布通粘粘瀑布': { en: 'Bua Tong Waterfalls', th: 'น้ำพุเจ็ดสีและน้ำตกบัวตอง' },
  '清邁藍廟': { en: 'Wat Ban Den', th: 'วัดเด่นสะหลีศรีเมืองแกน' },
  '清道溶洞': { en: 'Chiang Dao Cave', th: 'ถ้ำเชียงดาว' },
  '清道山': { en: 'Doi Chiang Dao', th: 'ดอยเชียงดาว' },
  '老虎王國': { en: 'Tiger Kingdom, Chiang Mai' },
  '惠登套湖': { en: 'Huay Tung Tao', th: 'อ่างเก็บน้ำห้วยตึงเฒ่า' },
  '芳縣天然地熱溫泉': { en: 'Fang Hot Springs', th: 'บ่อน้ำพุร้อนฝาง' },
  '安康山': { en: 'Doi Ang Khang', th: 'ดอยอ่างขาง' },
  '安康山皇家農業計劃': { en: 'Royal Agricultural Station Angkhang', th: 'สถานีเกษตรหลวงอ่างขาง' },
  '木雕工藝村': { en: 'Ban Tawai', th: 'บ้านถวาย' },
  '帕丘峽谷': { en: 'Mae Wang National Park', th: 'อุทยานแห่งชาติแม่วาง' },
  '因他儂山': { en: 'Doi Inthanon', th: 'ดอยอินทนนท์' },
  '因他儂國家公園': { en: 'Doi Inthanon National Park', th: 'อุทยานแห่งชาติดอยอินทนนท์' },
  '瓦吉拉坦瀑布': { en: 'Wachirathan Falls', th: 'น้ำตกวชิรธาร' },
  'Mae Ya 瀑布': { en: 'Mae Ya Waterfall', th: 'น้ำตกแม่ยะ' },
  '西里蓬瀑布': { en: 'Siriphum Waterfall', th: 'น้ำตกสิริภูมิ' },
  '湄剛瀑布': { en: 'Mae Klang Waterfall', th: 'น้ำตกแม่กลาง' },
  '丘湄潘大草原步道': { en: 'Kew Mae Pan Nature Trail', th: 'กิ่วแม่ปาน' },
  '歐鑾峽谷國家公園': { en: 'Ob Luang National Park', th: 'อุทยานแห่งชาติออบหลวง' },
  '湄康蓬古村': { en: 'Mae Kampong', th: 'บ้านแม่กำปอง' },
  '湄康蓬瀑布': { en: 'Mae Kampong Waterfall', th: 'น้ำตกแม่กำปอง' },
  '三甘攀天然溫泉': { en: 'San Kamphaeng Hot Springs', th: 'น้ำพุร้อนสันกำแพง' },
  '山甘烹溫泉': { en: 'San Kamphaeng Hot Springs', th: 'น้ำพุร้อนสันกำแพง' },
  '博桑手作紙傘村': { en: 'Bo Sang, Thailand', th: 'บ้านบ่อสร้าง' },
  '清萊白廟': { en: 'Wat Rong Khun', th: 'วัดร่องขุ่น' },
  '清萊藍廟': { en: 'Wat Rong Suea Ten', th: 'วัดร่องเสือเต้น' },
  '清萊黑屋': { en: 'Baan Dam Museum', th: 'พิพิธภัณฑ์บ้านดำ' },
  '清萊觀音寺': { en: 'Wat Huay Pla Kang', th: 'วัดห้วยปลากั้ง' },
  '清萊金黃鐘樓': { en: 'Chiang Rai Clock Tower', th: 'หอนาฬิกาเชียงราย' },
  '聖獅公園': { en: 'Singha Park', th: 'สิงห์ปาร์ค เชียงราย' },
  '清萊玉佛寺': { en: 'Wat Phra Kaew, Chiang Rai', th: 'วัดพระแก้ว (เชียงราย)' },
  '清萊夜市': { en: 'Chiang Rai Night Bazaar', th: 'ไนท์บาซาร์เชียงราย' },
  '翠峰茶園': { en: 'Choui Fong Tea', th: 'ไร่ชาฉุยฟง' },
  '美斯樂': { en: 'Santikhiri', th: 'ดอยแม่สลอง' },
  '金三角': { en: 'Golden Triangle (Southeast Asia)', th: 'สามเหลี่ยมทองคำ' },
  '鴉片博物館': { en: 'Hall of Opium', th: 'หอฝิ่น' },
  '皇太后行宮與花園': { en: 'Doi Tung Royal Villa', th: 'พระตำหนักดอยตุง' },
  '指天山': { en: 'Phu Chi Fa', th: 'ภูชี้ฟ้า' },
  '美塞': { en: 'Mae Sai', th: 'อำเภอแม่สาย' },
  '清盛古城': { en: 'Chiang Saen District', th: 'อำเภอเชียงแสน' },
  '白水洞國家公園': { en: 'Tham Luang Nang Non', th: 'ถ้ำหลวง-ขุนน้ำนางนอน' },
  '睡美人洞': { en: 'Tham Luang Nang Non', th: 'วนอุทยานถ้ำหลวง-ขุนน้ำนางนอน' },
  '南邦舍利寺': { en: 'Wat Phra That Lampang Luang', th: 'วัดพระธาตุลำปางหลวง' },
  '南奔哈利奔猜大金塔寺': { en: 'Wat Phra That Hariphunchai', th: 'วัดพระธาตุหริภุญชัยวรมหาวิหาร' },
  '南奔 Chamadevi 方塔寺': { en: 'Wat Chammathewi', th: 'วัดจามเทวี' },
  '擺鎮美音寺': { en: 'Wat Phra That Mae Yen', th: 'วัดพระธาตุแม่เย็น' },
  '擺鎮大峽谷': { en: 'Pai Canyon', th: 'กองแลน' },
  '擺鎮二戰紀念大橋': { en: 'Memorial Bridge, Pai', th: 'สะพานประวัติศาสตร์ท่าปาย' },
  '百萬啤酒瓶寺': { en: 'Wat Pa Maha Chedi Kaew', th: 'วัดป่ามหาเจดีย์แก้ว' },
};

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch (e) {
    return false;
  }
}

async function batchGetWikiImages(wikiLang, titles) {
  const titleToImage = {};
  if (titles.length === 0) return titleToImage;

  for (let i = 0; i < titles.length; i += 30) {
    const batch = titles.slice(i, i + 30);
    const param = batch.map(t => encodeURIComponent(t)).join('|');
    const url = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&titles=${param}&prop=pageimages&pithumbsize=1200&format=json`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(8000) });
      const data = await res.json();
      const pages = data.query?.pages || {};
      const normMap = {};
      (data.query?.normalized || []).forEach(n => { normMap[n.to] = n.from; });

      for (const pid of Object.keys(pages)) {
        if (pid !== '-1') {
          const page = pages[pid];
          const img = page.thumbnail?.source;
          if (img) {
            titleToImage[page.title] = img;
            if (normMap[page.title]) {
              titleToImage[normMap[page.title]] = img;
            }
          }
        }
      }
    } catch (e) {
      console.error(`Batch ${wikiLang} error:`, e.message);
    }
  }
  return titleToImage;
}

async function main() {
  console.log('=== Step 1: Parsing landmarks ===');
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
  console.log(`Parsed ${allLandmarks.length} landmarks.`);

  // Collect EN and TH titles to query in bulk
  const enTitles = new Set();
  const thTitles = new Set();
  const landmarkMap = {};

  for (const l of allLandmarks) {
    let mapping = null;
    for (const [k, v] of Object.entries(EXTENDED_MAPPINGS)) {
      if (l.zhName.includes(k) || l.id.includes(k)) {
        mapping = v;
        break;
      }
    }
    if (!mapping) {
      const cleanEn = l.enName.replace(/\([^)]*\)/g, '').trim();
      const cleanTh = l.thName.replace(/\([^)]*\)/g, '').trim();
      mapping = {};
      if (cleanEn && cleanEn.length > 3 && !cleanEn.includes('Cafe') && !cleanEn.includes('Restaurant')) {
        mapping.en = cleanEn;
      }
      if (cleanTh && cleanTh.length > 3) {
        mapping.th = cleanTh;
      }
    }

    landmarkMap[l.id] = mapping;
    if (mapping.en) enTitles.add(mapping.en);
    if (mapping.th) thTitles.add(mapping.th);
  }

  console.log(`=== Step 2: Batch querying Wikipedia (${enTitles.size} EN titles, ${thTitles.size} TH titles) ===`);
  const enImages = await batchGetWikiImages('en', Array.from(enTitles));
  const thImages = await batchGetWikiImages('th', Array.from(thTitles));
  console.log(`EN images returned: ${Object.keys(enImages).length}`);
  console.log(`TH images returned: ${Object.keys(thImages).length}`);

  console.log('=== Step 3: Downloading matched photos ===');
  let downloadedCount = 0;
  let alreadyPresentCount = 0;
  const updatedMap = {};

  for (const l of allLandmarks) {
    const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
    if (fs.existsSync(destFile) && fs.statSync(destFile).size > 5000 && l.currentImage.includes('/images/landmarks/')) {
      alreadyPresentCount++;
      continue;
    }

    const mapping = landmarkMap[l.id];
    let imgUrl = null;
    if (mapping.en && enImages[mapping.en]) imgUrl = enImages[mapping.en];
    if (!imgUrl && mapping.th && thImages[mapping.th]) imgUrl = thImages[mapping.th];

    // Case-insensitive fallback
    if (!imgUrl && mapping.en) {
      const matchKey = Object.keys(enImages).find(k => k.toLowerCase() === mapping.en.toLowerCase());
      if (matchKey) imgUrl = enImages[matchKey];
    }
    if (!imgUrl && mapping.th) {
      const matchKey = Object.keys(thImages).find(k => k === mapping.th);
      if (matchKey) imgUrl = thImages[matchKey];
    }

    if (imgUrl) {
      console.log(`Downloading: ${l.zhName} -> ${l.id}.jpg`);
      const ok = await downloadFile(imgUrl, destFile);
      if (ok) {
        updatedMap[l.id] = `/images/landmarks/${l.id}.jpg`;
        downloadedCount++;
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Existing Real Photos: ${alreadyPresentCount}`);
  console.log(`New Photos Downloaded: ${downloadedCount}`);
  console.log(`Total Real Photos Now: ${alreadyPresentCount + downloadedCount}`);
  console.log(`========================================`);

  if (Object.keys(updatedMap).length > 0) {
    let updatedContent = content;
    for (const [lid, newImg] of Object.entries(updatedMap)) {
      const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
      updatedContent = updatedContent.replace(targetPattern, `$1"${newImg}"`);
    }
    fs.writeFileSync(LANDMARK_DATA_PATH, updatedContent, 'utf-8');
    console.log('✓ landmarkData.ts successfully updated with new real photos!');
  }
}

main();
