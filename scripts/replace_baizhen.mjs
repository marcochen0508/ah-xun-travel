import fs from 'fs';

const filesToUpdate = [
  'src/components/tour-3d/landmarkData.ts',
  'src/components/tour-3d/TourUIOverlay.tsx',
  'src/components/tour-3d/calibrate_all.py',
  'src/components/tour-3d/exact_calibrate.py',
  'generate_excel.py',
  'all_landmarks_dump.txt'
];

for (const f of filesToUpdate) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const count = (content.match(/擺鎮/g) || []).length;
    if (count > 0) {
      content = content.replaceAll('擺鎮', '拜縣');
      fs.writeFileSync(f, content, 'utf8');
      console.log(`Updated ${count} occurrences of 擺鎮 -> 拜縣 in ${f}`);
    }
  }
}

// Also check public/images/landmarks for any file renamed
const imgDir = 'public/images/landmarks';
if (fs.existsSync(imgDir)) {
  const files = fs.readdirSync(imgDir);
  for (const file of files) {
    if (file.includes('擺鎮')) {
      const newName = file.replaceAll('擺鎮', '拜縣');
      fs.renameSync(`${imgDir}/${file}`, `${imgDir}/${newName}`);
      console.log(`Renamed image ${file} -> ${newName}`);
    }
  }
}

console.log('All replacements completed!');
