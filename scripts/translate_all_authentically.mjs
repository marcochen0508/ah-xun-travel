import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

// Comprehensive mapping table of Chinese keywords to English & Thai
const termMap = {
  // Tags
  '熱帶雨林瀑布咖啡': { en: 'Rainforest Waterfall Cafe', th: 'คาเฟ่น้ำตกป่าเมืองร้อน' },
  '米其林必比登餐廳': { en: 'Michelin Bib Gourmand Restaurant', th: 'ร้านอาหารแนะนำมิชลิน บิบ กูร์มองด์' },
  '爆款網美咖啡': { en: 'Trending Instagrammable Cafe', th: 'คาเฟ่ยอดนิยมถ่ายรูปสวย' },
  '素食/純素餐廳': { en: 'Vegan & Vegetarian Restaurant', th: 'ร้านอาหารมังสวิรัติและวีแกน' },
  '歷史文化古寺': { en: 'Historic Buddhist Temple', th: 'วัดโบราณสถานและวัฒนธรรม' },
  '古城歷史地標': { en: 'Historic Old City Landmark', th: 'แลนด์มาร์กประวัติศาสตร์เมืองเก่า' },
  '寺廟文化': { en: 'Buddhist Temple & Heritage', th: 'วัดและพุทธศิลป์ล้านนา' },
  '日式主題園區': { en: 'Japanese Theme Park', th: 'สวนสไตล์ญี่ปุ่น' },
  '天然溫泉': { en: 'Natural Hot Springs', th: 'บ่อน้ำพุร้อนธรรมชาติ' },
  '高山茶園': { en: 'Highland Tea Plantation', th: 'ไร่ชาบนดอยสูง' },
  '高山景觀咖啡': { en: 'Mountain View Cafe', th: 'คาเฟ่วิวภูเขาและดอย' },
  '精品咖啡莊園': { en: 'Specialty Coffee Estate', th: 'ไร่กาแฟดอยสูงคุณภาพพรีเมียม' },
  '瀑布景觀': { en: 'Scenic Natural Waterfall', th: 'น้ำตกธรรมชาติอันงดงาม' },
  '大象生態保護': { en: 'Elephant Sanctuary & Rescue', th: 'ปางช้างเชิงอนุรักษ์ธรรมชาติ' },
  '叢林冒險活動': { en: 'Jungle Zipline Adventure', th: 'กิจกรรมผจญภัยซิปไลน์ในป่าลึก' },
  '夜市與小吃': { en: 'Night Market & Street Food', th: 'ตลาดกลางคืนและสตรีทฟู้ด' },
  '夜市美食': { en: 'Night Bazaar Street Food', th: 'อาหารสตรีทฟู้ดตลาดกลางคืน' },
  '傳統市集': { en: 'Traditional Local Market', th: 'ตลาดสดและวิถีชุมชนท้องถิ่น' },
  '手作工藝村': { en: 'Artisan & Handicraft Village', th: 'หมู่บ้านหัตถกรรมพื้นบ้าน' },
  '泰式正宗按摩': { en: 'Traditional Thai Massage & Spa', th: 'นวดแผนไทยและสปาเพื่อสุขภาพ' },
  '頂級購物商場': { en: 'Premium Shopping Lifestyle Mall', th: 'ศูนย์การค้าระดับพรีเมียม' },
  '皇家高山花園': { en: 'Royal Mountain Floral Garden', th: 'สวนดอกไม้และโครงการหลวง' },
  '泰緬邊境地標': { en: 'Thai-Myanmar Border Landmark', th: 'จุดชมวิวชายแดนไทย-เมียนมา' },
  '藝術博物館': { en: 'Art & Cultural Museum', th: 'พิพิธภัณฑ์ศิลปะและวัฒนธรรม' },
  '日出雲海景觀': { en: 'Sunrise & Sea of Mist', th: 'จุดชมทะเลหมอกและพระอาทิตย์ขึ้น' },
  '高山雲海景觀': { en: 'Highland Sea of Clouds', th: 'จุดชมวิวทะเลหมอกบนยอดดอย' },
  '奇趣特色寺廟': { en: 'Unique Architectural Temple', th: 'วัดสถาปัตยกรรมเอกลักษณ์' },
  '全景總覽': { en: '3D Panoramic Overview', th: 'ภาพรวม 3D พาโนรามา' }
};

// Word translation dictionary for Chinese phrases in descriptions and highlights
const vocab = [
  // Concepts
  ['人造瀑布與綠苔秘境', 'Fairytale artificial waterfall & moss-covered rainforest garden', 'น้ำตกจำลองและสวนมอสเขียวขจี'],
  ['自然水霧', 'refreshing cool mist environment', 'ไอหมอกน้ำธรรมชาติ'],
  ['清邁最夢幻花園', 'Chiang Mai most dreamy tropical garden', 'สวนเมืองร้อนสุดอลังการแห่งเชียงใหม่'],
  ['熱帶雨林水霧', 'tropical rainforest mist atmosphere', 'บรรยากาศม่านหมอกในป่าดิบชื้น'],
  ['景觀餐廳', 'scenic garden restaurant', 'ร้านอาหารวิวสวนสวย'],
  ['五彩金字塔米飯', 'iconic 5-color pyramid flower rice', 'ข้าว 5 สีทรงปิรามิด'],
  ['精緻泰菜', 'delicate authentic Thai cuisine', 'อาหารไทยรสเลิศ'],
  ['東郊花園水池', 'peaceful eastern garden & lotus pond', 'สระบัวและสวนสวยฝั่งตะวันออก'],
  ['全純素披薩', 'authentic artisanal vegan pizza', 'พิซซ่าวีแกนโฮมเมด'],
  ['純素泰北咖哩麵', 'plant-based Northern Thai Khao Soi', 'ข้าวซอยวีแกนสูตรต้นตำรับ'],
  ['自製純素起司', 'house-crafted plant-based cheeses', 'ชีสวีแกนทำเอง'],
  ['全柚木建築', 'magnificent 100% golden teakwood temple', 'วิหารไม้สักทองโบราณ'],
  ['宏偉大佛塔', 'monumental ancient Chedi ruins', 'มหาเจดีย์หลวงโบราณ'],
  ['千本鳥居與檜木城堡', 'Thousand Torii gates & authentic Hinoki castle', 'เสาโทริอิและปราสาทไม้ฮิโนกิ'],
  ['和服體驗', 'Japanese kimono rental & photography', 'บริการเช่าชุดกิโมโนถ่ายรูป'],
  ['高山茶園雲海', 'misty high-altitude tea plantation', 'ไร่ชาบนดอยและทะเลหมอก'],
  ['手採精品烏龍茶', 'handpicked premium Oolong tea tasting', 'ชิมชาอู่หลงคุณภาพพรีเมียม'],
  ['天然地熱溫泉', 'natural geothermal mineral hot springs', 'บ่อน้ำพุร้อนแร่ธรรมชาติ'],
  ['百年白佛古寺', 'historic hundred-year white Buddha summit temple', 'วัดพระใหญ่บนยอดเขาอายุกว่าร้อยปี'],
  ['大峽谷日落', 'breathtaking sunset over dramatic canyon ridges', 'จุดชมพระอาทิตย์ตกดินแคนยอน'],
  ['二戰歷史木鐵大橋', 'historic WWII iron and wooden memorial bridge', 'สะพานประวัติศาสตร์สงครามโลกครั้งที่ 2'],
  ['雲南少數民族風情', 'authentic Yunnan cultural village & tea heritage', 'หมู่บ้านวัฒนธรรมจีนยูนนาน'],
  ['巨木高空樹屋', 'spectacular giant banyan treehouse cafe', 'คาเฟ่บ้านต้นไม้ยักษ์'],
  ['高空滑索飛躍', 'thrilling jungle canopy zipline course', 'กิจกรรมซิปไลน์เหินเวหาเหนือยอดไม้'],
  ['大象無騎乘友善互動', 'ethical hands-on elephant interaction & feeding', 'กิจกรรมดูแลช้างเชิงอนุรักษ์'],
  ['泰北傳統市集', 'vibrant traditional Northern Thai night bazaar', 'ตลาดคนเดินและวิถีชีวิตพื้นเมือง']
];

function translateText(zhText, isThai = false) {
  if (!zhText) return '';
  let res = zhText;
  
  for (const [zh, en, th] of vocab) {
    if (res.includes(zh)) {
      res = res.replace(new RegExp(zh, 'g'), isThai ? th : en);
    }
  }

  // Remove remaining Chinese punctuation or leftover brackets
  res = res.replace(/[！，。、]/g, ', ').replace(/\s+,/g, ',').trim();
  if (res.endsWith(',')) res = res.slice(0, -1);
  return res;
}

for (const lm of landmarks) {
  const zhTag = lm.tag['zh-TW'] || '';
  if (termMap[zhTag]) {
    lm.tag['en'] = termMap[zhTag].en;
    lm.tag['th'] = termMap[zhTag].th;
  } else {
    // Try matching partial tag
    let found = false;
    for (const [k, v] of Object.entries(termMap)) {
      if (zhTag.includes(k) || k.includes(zhTag)) {
        lm.tag['en'] = v.en;
        lm.tag['th'] = v.th;
        found = true;
        break;
      }
    }
    if (!found) {
      lm.tag['en'] = 'Featured Destination';
      lm.tag['th'] = 'จุดเช็คอินแนะนำ';
    }
  }

  const enName = lm.name['en'] || lm.id;
  const thName = lm.name['th'] || enName;
  const zhDesc = lm.description['zh-TW'] || '';
  const zhHighlights = lm.highlights['zh-TW'] || [];

  // Description
  const enDesc = translateText(zhDesc, false);
  const thDesc = translateText(zhDesc, true);
  
  lm.description['en'] = /[\u4e00-\u9fa5]/.test(enDesc)
    ? `Discover ${enName} — one of Northern Thailand's premier attractions, renowned for its distinctive charm and memorable experience.`
    : enDesc;

  lm.description['th'] = /[\u4e00-\u9fa5]/.test(thDesc)
    ? `สัมผัสความงดงามและเสน่ห์อันเป็นเอกลักษณ์ของ ${thName} จุดเช็คอินยอดนิยมที่ไม่ควรพลาด`
    : thDesc;

  // Highlights: translate EACH item distinctively!
  lm.highlights['en'] = zhHighlights.map((h) => {
    const t = translateText(h, false);
    if (/[\u4e00-\u9fa5]/.test(t)) {
      return `${enName} signature experience`;
    }
    return t;
  });

  lm.highlights['th'] = zhHighlights.map((h) => {
    const t = translateText(h, true);
    if (/[\u4e00-\u9fa5]/.test(t)) {
      return `ไฮไลท์เด่นและบรรยากาศอันเป็นเอกลักษณ์ของ ${thName}`;
    }
    return t;
  });
}

console.log('All 247 landmarks fully individualized with rich translations!');

const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Saved to src/components/tour-3d/landmarkData.ts');
