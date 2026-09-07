import fs from 'fs';

const content = fs.readFileSync('src/components/tour-3d/landmarkData.ts', 'utf8');
const lmMatch = content.match(/export const LANDMARKS: Landmark\[\] = (\[[\s\S]*?\]);\s*$/);
const landmarks = eval(lmMatch[1]);

console.log('Total landmarks:', landmarks.length);

// Fields to check:
// name: { 'zh-TW', 'en', 'th' }
// tag: { 'zh-TW', 'en', 'th' }
// description: { 'zh-TW', 'en', 'th' }
// highlights: { 'zh-TW': [], 'en': [], 'th': [] }
// recommendedTime: { 'zh-TW', 'en', 'th' }
// tips: { 'zh-TW', 'en', 'th' }
// charterNote: { 'zh-TW', 'en', 'th' }

let zhInEnCount = 0;
let zhInThCount = 0;

const chineseRegex = /[\u4e00-\u9fa5]/;

const stats = {
  name: { enHasZh: 0, thHasZh: 0 },
  tag: { enHasZh: 0, thHasZh: 0 },
  description: { enHasZh: 0, thHasZh: 0 },
  highlights: { enHasZh: 0, thHasZh: 0 },
  tips: { enHasZh: 0, thHasZh: 0 },
  charterNote: { enHasZh: 0, thHasZh: 0 }
};

for (const lm of landmarks) {
  if (chineseRegex.test(lm.name['en'] || '')) stats.name.enHasZh++;
  if (chineseRegex.test(lm.name['th'] || '')) stats.name.thHasZh++;
  
  if (chineseRegex.test(lm.tag['en'] || '')) stats.tag.enHasZh++;
  if (chineseRegex.test(lm.tag['th'] || '')) stats.tag.thHasZh++;

  if (chineseRegex.test(lm.description['en'] || '')) stats.description.enHasZh++;
  if (chineseRegex.test(lm.description['th'] || '')) stats.description.thHasZh++;

  if ((lm.highlights['en'] || []).some(h => chineseRegex.test(h))) stats.highlights.enHasZh++;
  if ((lm.highlights['th'] || []).some(h => chineseRegex.test(h))) stats.highlights.thHasZh++;

  if (lm.tips && chineseRegex.test(lm.tips['en'] || '')) stats.tips.enHasZh++;
  if (lm.tips && chineseRegex.test(lm.tips['th'] || '')) stats.tips.thHasZh++;

  if (lm.charterNote && chineseRegex.test(lm.charterNote['en'] || '')) stats.charterNote.enHasZh++;
  if (lm.charterNote && chineseRegex.test(lm.charterNote['th'] || '')) stats.charterNote.thHasZh++;
}

console.log('Multi-language audit results (number of landmarks with Chinese in EN/TH fields):');
console.log(JSON.stringify(stats, null, 2));
