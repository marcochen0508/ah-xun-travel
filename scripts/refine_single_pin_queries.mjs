import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

// Special refined queries for landmarks to avoid ambiguous duplicate search results in Google Maps
const refinedQueries = {
  // Pai attractions
  '拜縣山地村-santichon-village-245': 'หมู่บ้านสันติชล Santichon Village Pai',
  '拜縣美音寺大佛-wat-phra-that-mae-yen-246': 'Wat Phra That Mae Yen Pai',
  '拜縣二戰紀念大橋-memorial-bridge-pai-244': 'Tha-Pai Memorial Bridge Pai',
  '拜縣大峽谷-pai-canyon-孔敬峽谷-243': 'Pai Canyon Mae Hong Son',
  '拜縣雲來觀景台-yun-lai-viewpoint-pai-242': 'Yun Lai Viewpoint Pai',
  '拜縣樹屋度假村咖啡-pai-treehouse-resort-241': 'Pai Treehouse Resort',
  
  // Chiang Rai attractions
  '清萊白廟-wat-rong-khun-217': 'Wat Rong Khun - White Temple',
  '清萊藍廟-wat-rong-suea-ten-218': 'Wat Rong Suea Ten (Blue Temple)',
  '清萊黑屋博物館-baandam-museum-219': 'Baandam Museum',
  '清萊觀音寺-wat-huay-pla-kang-220': 'Wat Huay Pla Kang',
  '翠峰茶園-choui-fong-tea-plantation-231': 'Choui Fong Tea Plantation Mae Chan',
  '美斯樂高山村-doi-mae-salong-232': 'Doi Mae Salong Chiang Rai',
  '金三角-golden-triangle-chiang-sae-233': 'Golden Triangle Chiang Saen',
  '鴉片博物館-hall-of-opium-234': 'Hall of Opium Golden Triangle Park',
  '皇太后行宮與花園-doi-tung-royal-villa-235': 'Doi Tung Royal Villa Chiang Rai',
  '指天山觀景台-phu-chi-fah-236': 'Phu Chi Fa Forest Park Chiang Rai',
  '美塞泰緬邊境大門-mae-sai-border-market-237': 'Mae Sai Border Checkpoint',
  '象山高山咖啡莊園-doi-chang-coffee-farm-238': 'Doi Chaang Caffe Doi Chang',
  '聖獅公園-singha-park-222': 'Singha Park Chiang Rai',
  '城柱山頂古寺-wat-phra-that-doi-chom-thong-226': 'Wat Phra That Doi Chom Thong Chiang Rai',
  '清萊玉佛寺-wat-phra-kaew-chiang-rai-225': 'Wat Phra Kaew Chiang Rai',
  '南邦舍利寺-wat-phra-that-lampang-luang-210': 'Wat Phra That Lampang Luang',
  '南奔哈利奔猜大金塔寺-wat-phra-that-hariphunchai-227': 'Wat Phra That Hariphunchai Lamphun',
  '南奔-chamadevi-方塔寺-wat-chama-devi-228': 'Wat Chama Devi Lamphun',
  '百萬啤酒瓶寺-wat-pa-maha-chedi-kaew-240': 'Wat Pa Maha Chedi Kaew Sisaket'
};

let count = 0;
for (const lm of landmarks) {
  if (refinedQueries[lm.id]) {
    lm.googleMapsQuery = refinedQueries[lm.id];
    count++;
  }
}

console.log(`Applied ${count} highly targeted Google Maps queries.`);

const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Saved to src/components/tour-3d/landmarkData.ts');
