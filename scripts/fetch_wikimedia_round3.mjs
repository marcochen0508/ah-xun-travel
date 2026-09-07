import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
const USER_AGENT = 'AhXunTravelApp/3.0 (https://github.com/marcochen0508/ah-xun-travel; contact: marcochen0508@gmail.com)';

// Targeted search query map for famous landmarks
const COMMONS_SEARCH_MAP = {
  '週日步行街': 'Chiang Mai Sunday evening walking street',
  '週六南門': 'Wua Lai Walking Street Chiang Mai',
  'MAYA': 'MAYA Chiang Mai',
  'One Nimman': 'One Nimman Chiang Mai',
  '阿努善': 'Anusarn Market Chiang Mai',
  '松撇': 'Somphet Market Chiang Mai',
  '瓦洛洛': 'Warorot Market Chiang Mai',
  '長康路': 'Chiang Mai Night Bazaar',
  '清邁大學夜市': 'Kad Na Mor Chiang Mai',
  '素攀純銀廟': 'Wat Sri Suphan',
  '松達寺': 'Wat Suan Dok',
  '界遙寺': 'Wat Chet Yot',
  '悟孟寺': 'Wat Umong Chiang Mai',
  '帕拉寺': 'Wat Pha Lat Chiang Mai',
  '魏功甘': 'Wiang Kum Kam',
  '金山寺': 'Wat Phra That Doi Kham',
  '清邁文化藝術中心': 'Chiang Mai City Arts and Cultural Centre',
  '蘭納民俗博物館': 'Lanna Folklife Museum',
  '清邁國家博物館': 'Chiang Mai National Museum',
  '布通粘粘瀑布': 'Bua Tong Waterfall',
  '清道溶洞': 'Chiang Dao Cave',
  '芳縣天然地熱溫泉': 'Fang Hot Springs',
  '丘湄潘大草原步道': 'Kew Mae Pan',
  '西里蓬瀑布': 'Siriphum Waterfall',
  '湄剛瀑布': 'Mae Klang Waterfall',
  '國王王后雙塔': 'Doi Inthanon Chedi',
  '惠登套湖': 'Huay Tung Tao',
  '木雕工藝村': 'Ban Tawai',
  '博桑手作紙傘村': 'Bo Sang umbrella',
  '大象自然公園': 'Elephant Nature Park',
  '老虎王國': 'Tiger Kingdom Chiang Mai',
  '清邁夜間野生動物園': 'Chiang Mai Night Safari',
  '清邁動物園': 'Chiang Mai Zoo',
  '大峽谷水上樂園': 'Grand Canyon Water Park Chiang Mai',
  '聖獅公園': 'Singha Park Chiang Rai',
  '翠峰茶園': 'Choui Fong Tea',
  '美斯樂': 'Santikhiri Mae Salong',
  '金三角': 'Golden Triangle Thailand',
  '鴉片博物館': 'Hall of Opium Chiang Rai',
  '指天山': 'Phu Chi Fa',
  '美塞': 'Mae Sai border',
  '清盛': 'Chiang Saen Thailand',
  '睡美人洞': 'Tham Luang Nang Non',
  '擺鎮美音寺': 'Wat Phra That Mae Yen',
  '擺鎮大峽谷': 'Pai Canyon',
  '擺鎮二戰紀念大橋': 'Memorial Bridge Pai',
  '擺鎮雲來觀景台': 'Yun Lai Viewpoint Pai',
  '南邦陶瓷': 'Dhanabadee Ceramic Museum',
  '南邦馬車': 'Horse carriage Lampang',
  '南邦舍利寺': 'Wat Phra That Lampang Luang',
  '清邁藍廟': 'Wat Ban Den Chiang Mai',
  '女子監獄': 'Chiang Mai Women Correctional',
  '塔佩泰拳': 'Muay Thai Chiang Mai',
  'Baan Orjao': 'Thai traditional costume Chiang Mai',
};

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(12000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch (e) {
    return false;
  }
}

async function searchCommonsImage(query) {
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1200&format=json`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    const pages = data.query?.pages || {};
    for (const pid of Object.keys(pages)) {
      const info = pages[pid].imageinfo?.[0];
      const title = (pages[pid].title || '').toLowerCase();
      if (info && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
        if (title.endsWith('.pdf') || title.endsWith('.svg') || title.includes('icon') || title.includes('logo')) continue;
        const targetUrl = info.thumburl || info.url;
        if (targetUrl) return targetUrl;
      }
    }
  } catch {}
  return null;
}

async function main() {
  console.log('=== Step 1: Parsing landmark data ===');
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

  let alreadyPresentCount = 0;
  let newlyDownloaded = 0;
  const updatedMap = {};

  for (const l of allLandmarks) {
    const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
    if (fs.existsSync(destFile) && fs.statSync(destFile).size > 5000 && l.currentImage.includes('/images/landmarks/')) {
      alreadyPresentCount++;
      continue;
    }

    // Determine query
    let query = null;
    for (const [key, q] of Object.entries(COMMONS_SEARCH_MAP)) {
      if (l.zhName.includes(key) || l.id.includes(key)) {
        query = q;
        break;
      }
    }

    if (!query) {
      const cleanEn = l.enName.replace(/\([^)]*\)/g, '').trim();
      if (cleanEn && cleanEn.length > 5 && !cleanEn.includes('Cafe') && !cleanEn.includes('Restaurant') && !cleanEn.includes('Kitchen')) {
        query = `${cleanEn} Chiang Mai`;
      }
    }

    if (query) {
      console.log(`Searching Commons: "${l.zhName}" -> query: "${query}"`);
      const imgUrl = await searchCommonsImage(query);
      if (imgUrl) {
        console.log(`  Found! Downloading: ${l.id}.jpg`);
        const ok = await downloadFile(imgUrl, destFile);
        if (ok) {
          updatedMap[l.id] = `/images/landmarks/${l.id}.jpg`;
          newlyDownloaded++;
        }
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Previously Present Real Photos: ${alreadyPresentCount}`);
  console.log(`Newly Downloaded Real Photos: ${newlyDownloaded}`);
  console.log(`Total Real Photos Now: ${alreadyPresentCount + newlyDownloaded}`);
  console.log(`========================================`);

  if (Object.keys(updatedMap).length > 0) {
    let currentContent = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
    for (const [lid, newImg] of Object.entries(updatedMap)) {
      const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
      currentContent = currentContent.replace(targetPattern, `$1"${newImg}"`);
    }
    fs.writeFileSync(LANDMARK_DATA_PATH, currentContent, 'utf-8');
    console.log('✓ landmarkData.ts successfully updated with Commons real photos!');
  }
}

main();
