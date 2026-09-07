import fs from 'fs';
import path from 'path';

const LANDMARK_DATA_PATH = path.resolve('src/components/tour-3d/landmarkData.ts');
const OUT_IMG_DIR = path.resolve('public/images/landmarks');

if (!fs.existsSync(OUT_IMG_DIR)) {
  fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
}

const content = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
const USER_AGENT = 'AhXunTravelApp/4.0 (https://github.com/marcochen0508/ah-xun-travel; contact: marcochen0508@gmail.com)';

// Helper to extract clean English and clean Chinese from strings like "清萊金黃鐘樓 (Chiang Rai Clock Tower)"
function extractCleanNames(rawZh, rawEn, rawTh) {
  let en = rawEn || '';
  let zh = rawZh || '';
  let th = rawTh || '';

  // Extract bracket content
  const bracketEn = (rawZh.match(/\(([A-Za-z0-9\s'&.,\-/]+)\)/) || [])[1] ||
                    (rawEn.match(/\(([A-Za-z0-9\s'&.,\-/]+)\)/) || [])[1] || '';

  let cleanEn = bracketEn.trim();
  if (!cleanEn) {
    cleanEn = rawEn.replace(/[\u4e00-\u9fa5\(\)]/g, '').trim();
  }
  // Strip slash notes e.g. "Mon Jam / 夢瞻山" -> "Mon Jam"
  if (cleanEn.includes('/')) {
    cleanEn = cleanEn.split('/')[0].trim();
  }

  // Clean Thai
  let cleanTh = rawTh.replace(/[\u4e00-\u9fa5\(\)]/g, '').trim();
  if (cleanTh.includes('/')) {
    cleanTh = cleanTh.split('/')[0].trim();
  }

  const cleanZh = rawZh.replace(/\([^)]*\)/g, '').trim();

  return { cleanEn, cleanZh, cleanTh };
}

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

// 1. Wikipedia Page Image Search by Query (EN or TH)
async function searchWikipediaImage(wikiLang, query) {
  if (!query || query.length < 3) return null;
  try {
    const searchUrl = `https://${wikiLang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=3&format=json`;
    const sRes = await fetch(searchUrl, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(6000) });
    const sData = await sRes.json();
    const results = sData.query?.search || [];
    if (results.length === 0) return null;

    // Query images for the top results
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

// 2. Wikimedia Commons File Search
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

// 3. Wikivoyage Search (Great for food, cafes, nightlife)
async function searchWikivoyageImage(query) {
  if (!query || query.length < 3) return null;
  try {
    const searchUrl = `https://en.wikivoyage.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=2&format=json`;
    const sRes = await fetch(searchUrl, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(6000) });
    const sData = await sRes.json();
    const results = sData.query?.search || [];
    if (results.length === 0) return null;

    const titles = results.map(r => encodeURIComponent(r.title)).join('|');
    const imgUrl = `https://en.wikivoyage.org/w/api.php?action=query&titles=${titles}&prop=pageimages&pithumbsize=1200&format=json`;
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

async function findBestImage(landmark) {
  const { cleanEn, cleanZh, cleanTh } = extractCleanNames(landmark.zhName, landmark.enName, landmark.thName);

  // Queries to try
  const queries = [];
  if (cleanEn && cleanEn.length > 2) {
    queries.push({ type: 'wiki_en', q: cleanEn });
    queries.push({ type: 'commons', q: `${cleanEn} Chiang Mai` });
    queries.push({ type: 'commons', q: cleanEn });
    queries.push({ type: 'voyage', q: cleanEn });
  }

  if (cleanTh && cleanTh.length > 2) {
    queries.push({ type: 'wiki_th', q: cleanTh });
    queries.push({ type: 'commons', q: `${cleanTh} เชียงใหม่` });
    queries.push({ type: 'commons', q: cleanTh });
  }

  if (cleanZh && cleanZh.length > 2) {
    queries.push({ type: 'commons', q: `${cleanZh} 清邁` });
    queries.push({ type: 'commons', q: cleanZh });
  }

  for (const item of queries) {
    let url = null;
    if (item.type === 'wiki_en') url = await searchWikipediaImage('en', item.q);
    else if (item.type === 'wiki_th') url = await searchWikipediaImage('th', item.q);
    else if (item.type === 'commons') url = await searchCommonsImage(item.q);
    else if (item.type === 'voyage') url = await searchWikivoyageImage(item.q);

    if (url) return { url, query: item.q, type: item.type };
  }

  return null;
}

async function main() {
  console.log('=== Starting Deep Multi-Source Wikipedia & Commons Round 4 Search ===');
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
  const needSearch = [];

  for (const l of allLandmarks) {
    const destFile = path.join(OUT_IMG_DIR, `${l.id}.jpg`);
    if (fs.existsSync(destFile) && fs.statSync(destFile).size > 4000 && l.currentImage.includes('/images/landmarks/')) {
      alreadyPresent++;
    } else {
      needSearch.push(l);
    }
  }

  console.log(`Existing Real Photos: ${alreadyPresent}`);
  console.log(`Searching for remaining: ${needSearch.length} landmarks...`);

  let newSuccessCount = 0;
  const updatedMap = {};

  // Process in small parallel chunks (e.g. 5 concurrent)
  const CONCURRENCY = 6;
  for (let i = 0; i < needSearch.length; i += CONCURRENCY) {
    const chunk = needSearch.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (landmark) => {
        const res = await findBestImage(landmark);
        if (res && res.url) {
          const destFile = path.join(OUT_IMG_DIR, `${landmark.id}.jpg`);
          const ok = await downloadFile(res.url, destFile);
          if (ok) {
            console.log(`[SUCCESS] "${landmark.zhName}" matched via [${res.type}: "${res.query}"]`);
            updatedMap[landmark.id] = `/images/landmarks/${landmark.id}.jpg`;
            newSuccessCount++;
          }
        }
      })
    );
  }

  console.log(`\n======================================================`);
  console.log(`Initial Real Photos: ${alreadyPresent}`);
  console.log(`Round 4 Newly Downloaded: ${newSuccessCount}`);
  console.log(`TOTAL REAL PHOTOS NOW: ${alreadyPresent + newSuccessCount} / ${allLandmarks.length}`);
  console.log(`======================================================`);

  if (Object.keys(updatedMap).length > 0) {
    let currentContent = fs.readFileSync(LANDMARK_DATA_PATH, 'utf-8');
    for (const [lid, newImg] of Object.entries(updatedMap)) {
      const targetPattern = new RegExp(`("id":\\s*"${lid}"[\\s\\S]*?"image":\\s*)"[^"]+"`, 'g');
      currentContent = currentContent.replace(targetPattern, `$1"${newImg}"`);
    }
    fs.writeFileSync(LANDMARK_DATA_PATH, currentContent, 'utf-8');
    console.log('✓ landmarkData.ts successfully updated with Round 4 real photos!');
  }
}

main();
