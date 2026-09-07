import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

const specificFixes = {
  'lets-relax-spa-長康路-night-bazaa-67': {
    en: "Let's Relax Spa (Night Bazaar)",
    th: "เล็ทส์ รีแลกซ์ สปา (ไนท์บาซาร์)"
  },
  '清大附近燕窩-泰榮清大老字號燕窩-95': {
    en: "Thai Rong Bird's Nest (CMU)",
    th: "รังนกแท้ไทยรุ่ง (หน้า มช.)"
  },
  '坤昌阡-khun-chang-kian-櫻花谷-129': {
    en: "Khun Chang Kian Sakura Highland",
    th: "ขุนช่างเคี่ยน (หุบเขานางพญาเสือโคร่ง)"
  },
  '博桑手工紙傘文創館-145': {
    en: "Bo Sang Umbrella Village & Cultural Centre",
    th: "หมู่บ้านทำร่มบ่อสร้างและหัตถกรรม"
  },
  'ajarn-saiyuds-kitchen-saiyud-皇-155': {
    en: "Ajarn Saiyud's Kitchen (Royal Thai Cuisine)",
    th: "ครัวอาจารย์สายหยุดและหมอทราย"
  },
  '大象朋友飯店-chai-lai-orchid-159': {
    en: "The Chai Lai Orchid Elephant Eco Resort",
    th: "เดอะ ชายลาย ออร์คิด รีสอร์ทช้าง"
  },
  '坤旺皇家農業中心-khun-wang-櫻花谷-189': {
    en: "Khun Wang Royal Agricultural Centre (Sakura Valley)",
    th: "ศูนย์วิจัยเกษตรหลวงเชียงใหม่ (ขุนวาง)"
  }
};

for (const lm of landmarks) {
  if (specificFixes[lm.id]) {
    const fix = specificFixes[lm.id];
    lm.name['en'] = fix.en;
    lm.name['th'] = fix.th;
    lm.description['en'] = `Experience the authentic beauty and culture of ${fix.en}. A top-rated destination for your private tour in Northern Thailand.`;
    lm.description['th'] = `สัมผัสประสบการณ์ท่องเที่ยวและจุดเช็คอินยอดนิยมที่ ${fix.th} เดินทางสะดวกด้วยบริการเหมารถตู้ส่วนตัว`;
    lm.highlights['en'] = [
      `Premier destination: ${fix.en}`,
      `Private chauffeur service with flexible itinerary`
    ];
    lm.highlights['th'] = [
      `จุดเช็คอินและไฮไลท์สำคัญของ ${fix.th}`,
      `เดินทางท่องเที่ยวอย่างสะดวกสบายด้วยรถตู้ส่วนตัว`
    ];
    if (lm.tips) {
      lm.tips['en'] = `Location highlight & travel tip for ${fix.en}.`;
      lm.tips['th'] = `ข้อแนะนำและข้อมูลการเดินทางสำหรับ ${fix.th}`;
    }
    if (lm.charterNote) {
      lm.charterNote['en'] = `Ah-Xun Travel private charter provides dedicated chauffeur service directly to ${fix.en} with comfortable, flexible timing.`;
      lm.charterNote['th'] = `บริการรถตู้พร้อมคนขับนำเที่ยว ${fix.th} อย่างสะดวกสบาย ไม่เร่งรีบ กำหนดเวลาได้เอง`;
    }
  }
}

const header = content.slice(0, content.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(landmarks, null, 2);
const newContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newContent, 'utf8');
console.log('Saved perfect translations!');
