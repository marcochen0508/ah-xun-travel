import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

if (!fs.existsSync(OUT_IMG_DIR)) {
  fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
}

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');

const USER_AGENT = 'AhXunTravelApp/1.0 (https://github.com/marcochen0508/ah-xun-travel; marcochen0508@gmail.com)';

// Key Wikipedia article titles mapping for landmarks in Chiang Mai / Chiang Rai
const TITLE_MAP = {
  // Old City
  '塔佩門': 'Tha Phae Gate',
  '契迪龍寺': 'Wat Chedi Luang',
  '帕邢寺': 'Wat Phra Singh',
  '清曼寺': 'Wat Chiang Man',
  '盼道寺': 'Wat Phan Tao',
  '羅摩利寺': 'Wat Lok Moli',
  '布帕蘭寺': 'Wat Buppharam, Chiang Mai',
  '三王紀念碑': 'Three Kings Monument',
  '蘭納民俗博物館': 'Lanna Folklife Museum',
  '清邁文化藝術中心': 'Chiang Mai City Arts and Cultural Centre',
  '瓦洛洛傳統大市場': 'Warorot Market',
  '清邁長康路夜市': 'Chiang Mai Night Bazaar',
  '阿努善夜市': 'Anusarn Market',
  
  // South Old City & Nimman
  '素攀純銀廟': 'Wat Sri Suphan',
  '松達寺': 'Wat Suan Dok',
  '界遙寺': 'Wat Chet Yot',
  '悟孟寺': 'Wat Umong',
  '帕拉寺': 'Wat Pha Lat',
  '魏功甘古城': 'Wiang Kum Kam',
  '清邁國家博物館': 'Chiang Mai National Museum',
  '清邁大學': 'Chiang Mai University',
  
  // Suthep & Nature
  '素貼山': 'Doi Suthep',
  '素貼山雙龍寺': 'Wat Phra That Doi Suthep',
  '蒲屏皇宮': 'Bhubing Palace',
  '湄康蓬': 'Mae Kampong',
  '博桑手作紙傘村': 'Bo Sang, Thailand',
  '三甘攀天然溫泉': 'San Kamphaeng district',
  '山甘烹溫泉': 'San Kamphaeng district',
  '梅莎七層瀑布': 'Mae Sa Waterfall',
  '梅莎大象營': 'Mae Sa Elephant Camp',
  '大象自然公園': 'Elephant Nature Park',
  '金山寺': 'Wat Phra That Doi Kham',
  '皇家花園': 'Royal Park Rajapruek',
  '蒙瞻山': 'Mon Cham',
  '皇后植物園': 'Queen Sirikit Botanic Garden',
  '帕丘峽谷': 'Mae Wang National Park',
  '惠登套湖': 'Huay Tung Tao',
  '木雕工藝村': 'Ban Tawai',
  '老虎王國': 'Tiger Kingdom, Chiang Mai',
  '清邁夜間野生動物園': 'Chiang Mai Night Safari',
  
  // Inthanon
  '因他儂山': 'Doi Inthanon',
  '國王王后雙塔': 'Doi Inthanon National Park',
  '瓦吉拉坦瀑布': 'Wachirathan Falls',
  'Mae Ya 瀑布': 'Mae Ya Waterfall',
  '歐鑾峽谷國家公園': 'Ob Luang National Park',
  '布通粘粘瀑布': 'Bua Tong Waterfalls',
  '清邁藍廟': 'Wat Ban Den',
  '清道溶洞': 'Chiang Dao Cave',
  '芳縣天然地熱溫泉': 'Fang Hot Springs',
  '安康山': 'Doi Ang Khang',
  '南邦舍利寺': 'Wat Phra That Lampang Luang',
  '南邦馬車': 'Lampang',
  
  // Chiang Rai & Golden Triangle
  '清萊白廟': 'Wat Rong Khun',
  '清萊藍廟': 'Wat Rong Suea Ten',
  '清萊黑屋': 'Baan Dam Museum',
  '清萊觀音寺': 'Wat Huay Pla Kang',
  '清萊金黃鐘樓': 'Chiang Rai Clock Tower',
  '聖獅公園': 'Singha Park',
  '清萊玉佛寺': 'Wat Phra Kaew, Chiang Rai',
  '南奔哈利奔猜大金塔寺': 'Wat Phra That Hariphunchai',
  '南奔 Chamadevi 方塔寺': 'Wat Chammathewi',
  '翠峰茶園': 'Choui Fong Tea',
  '美斯樂': 'Santikhiri',
  '金三角': 'Golden Triangle (Southeast Asia)',
  '鴉片博物館': 'Hall of Opium',
  '皇太后行宮與花園': 'Doi Tung Royal Villa',
  '指天山': 'Phu Chi Fa',
  '美塞': 'Mae Sai',
  '百萬啤酒瓶寺': 'Wat Pa Maha Chedi Kaew',
  '擺鎮美音寺': 'Wat Phra That Mae Yen',
  '擺鎮大峽谷': 'Pai, Thailand',
  '擺鎮二戰紀念大橋': 'Memorial Bridge, Pai',
};

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(12000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 3000) return false;
    fs.writeFileSync(dest, buf);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  console.log('1. Extracting landmark items from database...');
  const idRegex = /"id":\s*"([^"]+)",[\s\S]*?"name":\s*{\s*"zh-TW":\s*"([^"]+)"/g;
  let match;
  const landmarks = [];

  while ((match = idRegex.exec(content)) !== null) {
    landmarks.push({ id: match[1], zhName: match[2] });
  }

  console.log(`Found ${landmarks.length} landmarks.`);

  // Map each landmark to a wiki title
  const landmarkToTitle = {};
  const titlesToQuery = new Set();

  for (const l of landmarks) {
    let title = null;
    for (const [key, wikiTitle] of Object.entries(TITLE_MAP)) {
      if (l.zhName.includes(key) || l.id.includes(key)) {
        title = wikiTitle;
        break;
      }
    }
    if (!title) {
      const bracket = (l.zhName.match(/\(([^)]+)\)/) || [])[1];
      if (bracket && bracket.length > 3 && !bracket.includes('店') && !bracket.includes('菜') && !bracket.includes('麵')) {
        title = bracket.trim();
      }
    }

    if (title) {
      landmarkToTitle[l.id] = title;
      titlesToQuery.add(title);
    }
  }

  const allTitles = Array.from(titlesToQuery);
  console.log(`Querying Wikipedia for ${allTitles.length} distinct landmark topics in batches...`);

  const titleToImage = {};

  // Batch query Wikipedia (up to 40 titles per request)
  for (let i = 0; i < allTitles.length; i += 40) {
    const batch = allTitles.slice(i, i + 40);
    const titlesParam = batch.map(t => encodeURIComponent(t)).join('|');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titlesParam}&prop=pageimages&pithumbsize=1200&format=json`;

    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
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
      console.error('Batch query error:', e);
    }
  }

  console.log(`Received ${Object.keys(titleToImage).length} official Wikipedia image URLs.`);

  // Download images
  let successCount = 0;
  const updatedMap = {};

  for (const l of landmarks) {
    const title = landmarkToTitle[l.id];
    if (!title) continue;

    // Find image URL for this title
    let imgUrl = titleToImage[title];
    if (!imgUrl) {
      for (const [t, img] of Object.entries(titleToImage)) {
        if (t.toLowerCase() === title.toLowerCase()) {
          imgUrl = img;
          break;
        }
      }
    }

    if (imgUrl) {
      const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
      const relUrl = `/images/landmarks/${l.id}.jpg`;
      console.log(`Downloading for "${l.zhName}" -> ${l.id}.jpg...`);
      const ok = await downloadFile(imgUrl, destFile);
      if (ok) {
        console.log(`  ✓ Saved ${l.id}.jpg`);
        updatedMap[l.id] = relUrl;
        successCount++;
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`🎉 Successfully Downloaded & Verified Wikipedia Photos: ${successCount}`);
  console.log(`========================================`);

  // Update landmarkData.ts
  let updatedContent = content;
  for (const [lid, newImg] of Object.entries(updatedMap)) {
    const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
    updatedContent = updatedContent.replace(targetPattern, `$1"${newImg}"`);
  }

  fs.writeFileSync(LANDMARK_DATA_PATH, updatedContent, 'utf-8');
  console.log('✓ landmarkData.ts successfully updated with official Wikipedia photos!');
}

main();
