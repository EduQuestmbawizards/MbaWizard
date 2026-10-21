const fs = require('fs');
const path = require('path');

const today = '2026-10-21';

const files = [
  path.join(__dirname, '..', 'src', 'data', 'seo-blogs-cluster-a.ts'),
  path.join(__dirname, '..', 'src', 'data', 'seo-blogs-cluster-b.ts'),
  path.join(__dirname, '..', 'src', 'data', 'seo-blogs-cluster-c.ts')
];

let totalUpdated = 0;

files.forEach((file, fIdx) => {
  let content = fs.readFileSync(file, 'utf8');
  let blogIndex = 0;

  // Stagger times across the day of 2026-10-21: e.g. 08:00, 08:30, 09:00... or all 2026-10-21T...
  const updatedContent = content.replace(/"publishedAt":\s*"[^"]+"/g, (match) => {
    const hour = 8 + Math.floor((fIdx * 5 + blogIndex) / 2);
    const minute = ((fIdx * 5 + blogIndex) % 2) * 30;
    const hourStr = String(hour).padStart(2, '0');
    const minStr = String(minute).padStart(2, '0');
    const newDate = `${today}T${hourStr}:${minStr}:00Z`;
    blogIndex++;
    totalUpdated++;
    return `"publishedAt": "${newDate}"`;
  });

  fs.writeFileSync(file, updatedContent, 'utf8');
  console.log(`Updated ${blogIndex} publishedAt dates in ${path.basename(file)} to ${today}`);
});

console.log(`\nSuccessfully updated all ${totalUpdated} blogs to today's date: ${today}`);
