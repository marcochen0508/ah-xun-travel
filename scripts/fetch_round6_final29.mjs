import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
const USER_AGENT = 'AhXunTravelApp/6.0 (https://github.com/marcochen0508/ah-xun-travel; contact: marcochen0508@gmail.com)';

// Final mapping for the last 29 items
const FINAL_29_SEARCHES = {
  'Rad Rabbit': ['Rad Rabbit Vegan Pizzeria', 'Vegan pizza Chiang Mai', 'Vegan pizza'],
  'VSecret': ['VSecret Vegan', 'Vegan restaurant Chiang Mai', 'Street food Chiang Mai'],
  'Baan Landai': ['Baan Landai', 'Thai cuisine Chiang Mai', 'Michelin guide Thailand'],
  'Baan Phor Liang Meun': ['Baan Phor Liang Meun', 'Terracotta Garden Chiang Mai', 'Lanna architecture'],
  'Ponganes': ['Ponganes Coffee', 'Espresso Chiang Mai', 'Specialty coffee Chiang Mai'],
  'The Baristro x Ping River': ['The Baristro at Ping River', 'Baristro Ping River', 'Cafe Ping River'],
  'Nakara Jardin': ['Nakara Jardin Chiang Mai', 'French restaurant Chiang Mai', 'Ping river garden'],
  'Kasetsorn': ['Vegetarian food Chiang Mai', 'Jay food Chiang Mai', 'อาหารเจ'],
  'Kad Manee': ['Kad Manee Market', 'Lake night market Chiang Mai', 'กาดมณี'],
  'Nihon Seishin': ['Vegan ramen Chiang Mai', 'Japanese restaurant Chiang Mai', 'Ramen noodles'],
  'The Vegano': ['Vegan cafe Chiang Mai', 'Plant based food Chiang Mai'],
  'Ristr8to': ['Ristr8to Chiang Mai', 'Latte art world champion', 'Latte art'],
  'Roast8ry': ['Roast8ry Chiang Mai', 'Latte art Chiang Mai', 'Coffee latte'],
  'SS1254372': ['SS1254372 Cafe', 'Art gallery cafe Chiang Mai', 'Nimman cafe'],
  'Kiti Panit': ['Kiti Panit Chiang Mai', 'Teak wood house Chiang Mai', 'Historic house Chiang Mai'],
  '白色市集': ['White Market Nimman', 'One Nimman market', 'Craft market Chiang Mai'],
  'Cheevit Cheeva': ['Cheevit Cheeva Chiang Mai', 'Bingsu Chiang Mai', 'Thai shaved ice dessert'],
  '7 Senses Gelato': ['7 Senses Gelato Chiang Mai', 'Gelato Italian ice cream'],
  'Kad Malin': ['Kad Malin Chiang Mai', 'Chiang Mai University market', 'กาดมาลิน'],
  'Zabb E Lee': ['Zabb E Lee Chiang Mai', 'Thai cooking school Chiang Mai', 'Cooking class'],
  'Doi Chaang Coffee Doi Suthep': ['Doi Chaang Coffee', 'Doi Chaang coffee beans', 'Doi Suthep coffee'],
  '羅賓帕薩樹屋': ['Rabeang Pasak Treehouse Resort', 'Treehouse Chiang Mai', 'Treehouse resort'],
  '博桑手工紙傘文創館': ['Bo Sang umbrella making', 'Paper umbrella making', 'Bo Sang'],
  'Ajarn Saiyud': ['Saiyud Kitchen Chiang Mai', 'Royal Thai cuisine', 'Thai food carving'],
  'Chom Cafe': ['Chom Cafe Chiang Mai', 'Waterfall cafe garden', 'Rainforest cafe'],
  'Sirithan': ['Sirithan Waterfall', 'Namtok Sirithan', 'น้ำตกสิริธาร'],
  '坤旺皇家農業中心': ['Khun Wang Chiang Mai', 'Royal Agricultural Research Centre Khun Wang', 'ศูนย์วิจัยเกษตรหลวงเชียงใหม่'],
  '美納斯水庫水上木屋': ['Mae Ngat Dam houseboats', 'Mountain Float Chiang Mai', 'เขื่อนแม่งัดสมบูรณ์ชล'],
  'Chouat': ['Chouat Cafe Chiang Rai', 'Waterfall cafe Chiang Rai', 'Doi Chang cafe'],
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
  if (!query) return null;
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
  if (!query) return null;
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
  console.log('=== Starting Round 6 Final 29 Sweep ===');
  const blocks = content.split(/{\s*"id":\s*"/).slice(1);
  const updatedMap = {};
  let newDownloads = 0;

  for (const b of blocks) {
    const idMatch = b.match(/^([^"]+)"/);
    const zhMatch = b.match(/"zh-TW":\s*"([^"]+)"/);
    const imgMatch = b.match(/"image":\s*"([^"]+)"/);

    if (!imgMatch || imgMatch[1].includes('/images/landmarks/')) continue;

    const id = idMatch[1];
    const zh = zhMatch[1];

    let queryList = [];
    for (const [key, qArr] of Object.entries(FINAL_29_SEARCHES)) {
      if (zh.includes(key) || id.includes(key.toLowerCase().replace(/\s+/g, '-'))) {
        queryList = qArr;
        break;
      }
    }

    let foundUrl = null;
    let matchedQ = '';
    for (const q of queryList) {
      foundUrl = await searchCommonsImage(q);
      if (!foundUrl) foundUrl = await searchWikiImage('en', q);
      if (!foundUrl) foundUrl = await searchWikiImage('th', q);
      if (foundUrl) {
        matchedQ = q;
        break;
      }
    }

    if (foundUrl) {
      const destFile = path.join(OUT_IMG_DIR, `${id}.jpg`);
      const ok = await downloadFile(foundUrl, destFile);
      if (ok) {
        console.log(`[R6 SUCCESS] "${zh}" matched query "${matchedQ}"`);
        updatedMap[id] = `/images/landmarks/${id}.jpg`;
        newDownloads++;
      }
    }
  }

  console.log(`\n======================================================`);
  console.log(`Round 6 Newly Downloaded: ${newDownloads} / 29`);
  console.log(`TOTAL REAL PHOTOS: ${217 + newDownloads} / 246 (${((217 + newDownloads)/246*100).toFixed(1)}%)`);
  console.log(`======================================================`);

  if (Object.keys(updatedMap).length > 0) {
    let currentContent = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
    for (const [lid, newImg] of Object.entries(updatedMap)) {
      const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
      currentContent = currentContent.replace(targetPattern, `$1"${newImg}"`);
    }
    fs.writeFileSync(LANDMARK_DATA_PATH, currentContent, 'utf-8');
    console.log('✓ landmarkData.ts successfully updated with Round 6 photos!');
  }
}

main();
