import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

// Let's create an exhaustive mapping of exact Google Maps POI titles for all 248 landmarks
// where the generic name was causing Google Maps to show multiple search results!

const poiOverrides = {
  // 蒙恩山
  '蒙恩山雲海茶園-mon-ngo-viewpoint-209': 'Doi Mon Ngo Summit Viewpoint',
  
  // 芳縣溫泉
  '芳縣天然溫泉-fang-hot-springs-206': 'Fang Hot Springs',
  
  // 安康山
  '安康山皇家農業場-doi-ang-khang-208': 'Royal Agricultural Station Angkhang',

  // 拜縣景點
  '拜縣樹屋度假村咖啡-pai-treehouse-resort-241': 'Pai Treehouse Resort',
  '拜縣雲來觀景台-yun-lai-viewpoint-pai-242': 'Yun Lai Viewpoint Pai',
  '拜縣大峽谷-pai-canyon-孔敬峽谷-243': 'Pai Canyon',
  '拜縣二戰紀念大橋-memorial-bridge-pai-244': 'Tha-Pai Memorial Bridge',
  '拜縣山地村-santichon-village-245': 'หมู่บ้านสันติชล (Santichon Village)',
  '拜縣美音寺大佛-wat-phra-that-mae-yen-246': 'Wat Phra That Mae Yen',

  // 清萊
  '清萊白廟-wat-rong-khun-217': 'Wat Rong Khun - White Temple',
  '清萊藍廟-wat-rong-suea-ten-218': 'Wat Rong Suea Ten (Blue Temple)',
  '清萊黑屋博物館-baandam-museum-219': 'Baandam Museum',
  '清萊觀音寺-wat-huay-pla-kang-220': 'Wat Huay Pla Kang',
  '清萊金黃鐘樓-chiang-rai-clock-tower-221': 'Chiang Rai Clock Tower',
  '聖獅公園-singha-park-222': 'Singha Park Chiang Rai',
  '清萊夜市-chiang-rai-night-bazaar-224': 'Chiang Rai Night Bazaar',
  '清萊玉佛寺-wat-phra-kaew-chiang-rai-225': 'Wat Phra Kaew Chiang Rai',
  '城柱山頂古寺-wat-phra-that-doi-chom-thong-226': 'Wat Phra That Doi Chom Thong',
  '翠峰茶園-choui-fong-tea-plantation-231': 'Choui Fong Tea Plantation Mae Chan',
  '美斯樂高山村-doi-mae-salong-232': 'Doi Mae Salong',
  '金三角-golden-triangle-chiang-sae-233': 'Golden Triangle Park Chiang Saen',
  '鴉片博物館-hall-of-opium-234': 'Hall of Opium Museum',
  '皇太后行宮與花園-doi-tung-royal-villa-235': 'Doi Tung Royal Villa',
  '指天山觀景台-phu-chi-fah-236': 'Phu Chi Fa Forest Park',
  '美塞泰緬邊境大門-mae-sai-border-market-237': 'Mae Sai Border Checkpoint',
  '象山高山咖啡莊園-doi-chang-coffee-farm-238': 'Doi Chaang Coffee Farm',
  '百萬啤酒瓶寺-wat-pa-maha-chedi-kaew-240': 'Wat Pa Maha Chedi Kaew',

  // 南邦 / 南奔
  '南邦舍利寺-wat-phra-that-lampang-luang-210': 'Wat Phra That Lampang Luang',
  '南邦馬車古城體驗-lampang-horse-carriage-211': 'Lampang Horse Carriage Station',
  '南奔哈利奔猜大金塔寺-wat-phra-that-hariphunchai-227': 'Wat Phra That Hariphunchai',
  '南奔-chamadevi-方塔寺-wat-chama-devi-228': 'Wat Chama Devi Lamphun',

  // 湄甘榜 / 茵他儂 / 湄林
  '湄甘榜巨樹咖啡-the-giant-chiangmai-138': 'The Giant Chiangmai',
  '茵他儂山頂國家公園-doi-inthanon-national-161': 'Doi Inthanon National Park',
  '國王王后雙塔-king--queen-pagodas-162': 'The Great Holy Relics Pagoda Nabhamethanidol and Nabhapolbhumisiri',
  '茵他儂高山瀑布群-wachirathan-waterfall-163': 'Wachirathan Waterfall',
  '吉姆湯普森絲綢農場-jim-thompson-farm-164': 'Mae Klang Waterfall Doi Inthanon',
  '茵他儂高山部落市集-hmong-market-doi-inthanon-165': 'Hmong Market Doi Inthanon',
  '茵他儂高山咖啡莊園-mae-klang-luang-coffee-166': 'Mae Klang Luang Coffee',
  '湄林叢林飛躍高空索道-jungle-flight--zipline-181': 'Jungle Flight Chiang Mai',
  '湄林大象生態公園-elephant-nature-park-182': 'Elephant Nature Park Chiang Mai',
  '湄林瀑布水岸景觀餐廳-pongyang-jungle-coaster--zi-183': 'Pongyang Jungle Coaster & Zipline',
  '詩麗吉王后植物園-queen-sirikit-botanic-gar-184': 'Queen Sirikit Botanic Garden',
  '夢境山高山梯田花海-mon-jam-flower-fields-185': 'Mon Jam Chiang Mai',
  '湄林草莓園體驗-mae-rim-strawberry-farms-186': 'Mae Rim Strawberry Farm',
  '湄沙瀑布自然步道-mae-sa-waterfall-187': 'Mae Sa Waterfall',
  '湄林越野atv體驗-atv-adventure-chiang-mai-188': 'Chiang Mai ATV Adventure',
  '湄林叢林竹筏漂流-mae-rim-bamboo-rafting-189': 'Mae Taeng Bamboo Rafting',
  '老虎王國互動體驗-tiger-kingdom-chiang-mai-190': 'Tiger Kingdom Chiang Mai',

  // 素貼山
  '素貼山雙龍寺-wat-phra-that-doi-suthep-101': 'Wat Phra That Doi Suthep',
  '蒲屏皇宮-bhubing-palace-102': 'Bhubing Palace',
  '帕拉寺-wat-pha-lat-隱世森林寺廟-103': 'Wat Pha Lat (Wat Palad)',
  '素貼山觀景台-doi-suthep-viewpoint-104': 'Doi Suthep Viewpoint'
};

let updated = 0;
for (const lm of landmarks) {
  if (poiOverrides[lm.id]) {
    lm.googleMapsQuery = poiOverrides[lm.id];
    updated++;
  }
}

console.log(`Updated ${updated} landmarks with exact official Google Maps POI titles!`);

// Let's also check all queries in general to make sure no awkward trailing commas or broken formats
for (const lm of landmarks) {
  if (lm.googleMapsQuery) {
    lm.googleMapsQuery = lm.googleMapsQuery.replace(/,\s*,/g, ',').trim();
  }
}

const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Saved to src/components/tour-3d/landmarkData.ts');
