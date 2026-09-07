import fs from 'fs';

// 1. Remove from landmarkData.ts
const lmContent = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = lmContent.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

const filteredLandmarks = landmarks.filter(lm => !lm.id.includes('looper-co'));
console.log(`Original count: ${landmarks.length}, Filtered count: ${filteredLandmarks.length}`);

const header = lmContent.slice(0, lmContent.indexOf('export const LANDMARKS: Landmark[] = ['));
const newLandmarksJson = JSON.stringify(filteredLandmarks, null, 2);
const newLmContent = `${header}export const LANDMARKS: Landmark[] = ${newLandmarksJson};\n`;

fs.writeFileSync('src/components/tour-3d/landmarkData.ts', newLmContent, 'utf8');
console.log('Saved filtered landmarkData.ts');

// 2. Remove from generate_excel.py
let excelPy = fs.readFileSync('generate_excel.py', 'utf8');
// remove dictionary entry containing Looper Co.
excelPy = excelPy.replace(/\s*\{\s*"圖號":\s*3,\s*"分區名稱":\s*"3_清邁長康路夜市區",\s*"景點\/餐廳\/體驗名稱":\s*"Looper Co\. \(復古洗車廠酒吧咖啡\)"[\s\S]*?\},/g, '');
fs.writeFileSync('generate_excel.py', excelPy, 'utf8');
console.log('Removed Looper Co. from generate_excel.py');

// 3. Remove from all_landmarks_dump.txt
if (fs.existsSync('all_landmarks_dump.txt')) {
  let dump = fs.readFileSync('all_landmarks_dump.txt', 'utf8');
  dump = dump.split('\n').filter(line => !line.includes('looper-co')).join('\n');
  fs.writeFileSync('all_landmarks_dump.txt', dump, 'utf8');
  console.log('Removed Looper Co. from all_landmarks_dump.txt');
}
