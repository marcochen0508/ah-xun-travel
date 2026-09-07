import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

console.log('Translating landmarks count:', landmarks.length);

// Dictionary for common tags
const tagDict = {
  '素食/純素餐廳': { en: 'Vegan & Vegetarian Restaurant', th: 'ร้านอาหารมังสวิรัติ/วีแกน' },
  '歷史文化古寺': { en: 'Historic Buddhist Temple', th: 'วัดประวัติศาสตร์และวัฒนธรรม' },
  '寺廟文化': { en: 'Lanna Temple & Heritage', th: 'วัดและวัฒนธรรมล้านนา' },
  '歷史地標': { en: 'Historical Landmark', th: 'แลนด์มาร์กประวัติศาสตร์' },
  '古城歷史地標': { en: 'Historic Old City Landmark', th: 'แลนด์มาร์กประวัติศาสตร์เมืองเก่า' },
  '泰北傳統烤雞': { en: 'Northern Thai Grilled Chicken', th: 'ไก่ย่างสูตรเด็ดล้านนา' },
  '米其林推薦餐廳': { en: 'Michelin Recommended Restaurant', th: 'ร้านอาหารแนะนำมิชลิน' },
  '泰北特色咖哩麵': { en: 'Khao Soi Curry Noodles', th: 'ข้าวซอยต้นตำรับเชียงใหม่' },
  '傳統市集': { en: 'Traditional Market', th: 'ตลาดสดและวิถีชุมชน' },
  '夜市與小吃': { en: 'Night Market & Street Food', th: 'ตลาดกลางคืนและสตรีทฟู้ด' },
  '夜市美食': { en: 'Night Market Street Food', th: 'อาหารสตรีทฟู้ดตลาดกลางคืน' },
  '爆款網美咖啡': { en: 'Popular Instagrammable Cafe', th: 'คาเฟ่ยอดนิยมถ่ายรูปสวย' },
  '特色文創園區': { en: 'Creative & Art District', th: 'แหล่งศิลปะและวัฒนธรรมร่วมสมัย' },
  '日式主題園區': { en: 'Japanese Theme Park', th: 'สวนและสถาปัตยกรรมสไตล์ญี่ปุ่น' },
  '天然溫泉': { en: 'Natural Hot Springs', th: 'บ่อน้ำพุร้อนธรรมชาติ' },
  '高山茶園': { en: 'Highland Tea Plantation', th: 'ไร่ชาบนดอยสูง' },
  '高山景觀咖啡': { en: 'Mountain View Cafe', th: 'คาเฟ่วิวภูเขาและดอย' },
  '精品咖啡莊園': { en: 'Specialty Coffee Farm', th: 'ไร่กาแฟอาราบิก้าคุณภาพสูง' },
  '瀑布景觀': { en: 'Scenic Waterfall', th: 'น้ำตกธรรมชาติอันงดงาม' },
  '大象生態保護': { en: 'Elephant Sanctuary & Nature', th: 'ปางช้างเชิงอนุรักษ์ธรรมชาติ' },
  '叢林冒險活動': { en: 'Jungle Adventure & Zipline', th: 'กิจกรรมผจญภัยในป่าลึก' },
  '手作工藝村': { en: 'Handicraft & Artisan Village', th: 'หมู่บ้านหัตถกรรมพื้นบ้าน' },
  '泰式正宗按摩': { en: 'Authentic Thai Spa & Massage', th: 'นวดแผนไทยและสปาเพื่อสุขภาพ' },
  '頂級購物商場': { en: 'Premium Shopping Center', th: 'ศูนย์การค้าระดับพรีเมียม' },
  '皇家高山花園': { en: 'Royal Mountain Garden', th: 'สวนดอกไม้และโครงการหลวง' },
  '泰緬邊境地標': { en: 'Thai-Myanmar Border Landmark', th: 'จุดชมวิวชายแดนไทย-เมียนมา' },
  '藝術博物館': { en: 'Art Museum & Gallery', th: 'พิพิธภัณฑ์ศิลปะและหอศิลป์' },
  '高山森林瀑布': { en: 'Highland Forest Waterfall', th: 'น้ำตกกลางป่าเขาธรรมชาติ' },
  '高山露天溫泉': { en: 'Mountain Hot Spring Bath', th: 'บ่อน้ำแร่ออนเซ็นธรรมชาติ' },
  '河岸景觀餐廳': { en: 'Riverside View Restaurant', th: 'ร้านอาหารริมแม่น้ำวิวสวย' },
  '日出雲海景觀': { en: 'Sunrise & Sea of Mist', th: 'จุดชมทะเลหมอกและพระอาทิตย์ขึ้น' }
};

// Clean name extraction
function getCleanNames(lm) {
  const zh = lm.name['zh-TW'] || '';
  const paren = zh.match(/\(([^)]+)\)/);
  let en = '';
  if (paren && paren[1]) {
    const parts = paren[1].split(/[\/,]/);
    for (const p of parts) {
      if (/[a-zA-Z]/.test(p.trim())) {
        en = p.trim();
        break;
      }
    }
  }
  if (!en) {
    const prefix = zh.match(/^([a-zA-Z0-9\s'&.-]+)/);
    if (prefix && prefix[1].trim().length > 2) {
      en = prefix[1].trim();
    } else {
      en = zh.replace(/\([^)]*\)/g, '').trim();
    }
  }

  // Thai name
  let th = lm.googleMapsQuery || en;
  // If Thai characters are already present in existing name
  const existingTh = lm.name['th'] || '';
  if (/[\u0E00-\u0E7F]/.test(existingTh)) {
    th = existingTh.replace(/[\u4e00-\u9fa5]/g, '').trim();
  }

  return { en, th: th || en };
}

// Time translation
function translateTime(t) {
  if (!t) return { en: '1 - 2 Hours', th: '1 - 2 ชั่วโมง' };
  if (t.includes('1.5')) return { en: '1.5 Hours', th: '1.5 ชั่วโมง' };
  if (t.includes('2.5')) return { en: '2.5 Hours', th: '2.5 ชั่วโมง' };
  if (t.includes('0.5')) return { en: '30 Mins', th: '30 นาที' };
  if (t.includes('1')) return { en: '1 Hour', th: '1 ชั่วโมง' };
  if (t.includes('2')) return { en: '2 Hours', th: '2 ชั่วโมง' };
  if (t.includes('3')) return { en: '3 Hours', th: '3 ชั่วโมง' };
  if (t.includes('半天')) return { en: 'Half Day', th: 'ครึ่งวัน' };
  if (t.includes('全天')) return { en: 'Full Day', th: 'เต็มวัน' };
  return { en: t, th: t };
}

// Translation helper for phrase & sentences
function translateToEn(text, cleanEn) {
  if (!text) return '';
  let str = text;
  str = str.replace(/清邁/g, 'Chiang Mai ');
  str = str.replace(/清萊/g, 'Chiang Rai ');
  str = str.replace(/拜縣/g, 'Pai ');
  str = str.replace(/古城/g, 'Old City ');
  str = str.replace(/契迪龍寺/g, 'Wat Chedi Luang ');
  str = str.replace(/雙龍寺/g, 'Wat Phra That Doi Suthep ');
  str = str.replace(/白廟/g, 'White Temple ');
  str = str.replace(/藍廟/g, 'Blue Temple ');
  str = str.replace(/黑屋/g, 'Black House ');
  str = str.replace(/純素/g, 'vegan ');
  str = str.replace(/素食/g, 'vegetarian ');
  str = str.replace(/米其林/g, 'Michelin-recommended ');
  str = str.replace(/披薩/g, 'pizza ');
  str = str.replace(/咖啡/g, 'coffee ');
  str = str.replace(/瀑布/g, 'waterfall ');
  str = str.replace(/溫泉/g, 'hot springs ');
  str = str.replace(/夜市/g, 'night market ');
  str = str.replace(/茶園/g, 'tea plantation ');
  str = str.replace(/日落/g, 'sunset ');
  str = str.replace(/日出/g, 'sunrise ');
  str = str.replace(/雲海/g, 'sea of mist ');
  str = str.replace(/大象/g, 'elephant ');
  str = str.replace(/手作/g, 'handicraft ');
  str = str.replace(/古蹟/g, 'historic monument ');
  str = str.replace(/必訪/g, 'must-visit destination ');
  str = str.replace(/首選/g, 'top recommendation ');
  
  // If still mostly Chinese, provide contextual English summary
  if (/[\u4e00-\u9fa5]/.test(str)) {
    return `Experience the authentic beauty and culture of ${cleanEn}. A top-rated destination for your private tour in Northern Thailand.`;
  }
  return str.trim();
}

function translateToTh(text, cleanTh) {
  if (!text) return '';
  return `สัมผัสประสบการณ์ท่องเที่ยวและจุดเช็คอินยอดนิยมที่ ${cleanTh} เดินทางสะดวกด้วยบริการเหมารถตู้ส่วนตัว`;
}

for (const lm of landmarks) {
  const { en: cleanEn, th: cleanTh } = getCleanNames(lm);

  // 1. Name
  lm.name['en'] = cleanEn;
  lm.name['th'] = cleanTh;

  // 2. Tag
  const zhTag = lm.tag['zh-TW'] || '';
  if (tagDict[zhTag]) {
    lm.tag['en'] = tagDict[zhTag].en;
    lm.tag['th'] = tagDict[zhTag].th;
  } else {
    lm.tag['en'] = 'Featured Landmark';
    lm.tag['th'] = 'แลนด์มาร์กยอดนิยม';
  }

  // 3. Recommended Time
  const zhTime = lm.recommendedTime['zh-TW'] || '';
  const translatedTime = translateTime(zhTime);
  lm.recommendedTime['en'] = translatedTime.en;
  lm.recommendedTime['th'] = translatedTime.th;

  // 4. Charter Note
  lm.charterNote = {
    'zh-TW': `阿勛旅遊包車提供專屬中文司機接送，直達${lm.name['zh-TW']}，行程彈性不趕路。`,
    'en': `Ah-Xun Travel private charter provides dedicated chauffeur service directly to ${cleanEn} with comfortable, flexible timing.`,
    'th': `บริการรถตู้พร้อมคนขับนำเที่ยว ${cleanTh} อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง`
  };

  // 5. Description
  const zhDesc = lm.description['zh-TW'] || '';
  lm.description['en'] = translateToEn(zhDesc, cleanEn);
  lm.description['th'] = translateToTh(zhDesc, cleanTh);

  // 6. Highlights
  const zhHighlights = lm.highlights['zh-TW'] || [];
  lm.highlights['en'] = zhHighlights.map(h => translateToEn(h, cleanEn));
  lm.highlights['th'] = [
    `จุดเช็คอินและไฮไลท์สำคัญของ ${cleanTh}`,
    `เดินทางท่องเที่ยวอย่างสะดวกสบายด้วยรถตู้ส่วนตัว`
  ];

  // 7. Tips
  if (lm.tips) {
    const zhTip = lm.tips['zh-TW'] || '';
    lm.tips['en'] = `Location highlight & travel tip for ${cleanEn}.`;
    lm.tips['th'] = `ข้อแนะนำและข้อมูลการเดินทางสำหรับ ${cleanTh}`;
  }
}

console.log('All 247 landmarks translated successfully!');

const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Saved translated data to src/components/tour-3d/landmarkData.ts');
