const fs = require('fs');

const files = [
  'src/data/seo-blogs-cluster-a.ts',
  'src/data/seo-blogs-cluster-b.ts',
  'src/data/seo-blogs-cluster-c.ts'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const slugs = content.match(/"slug":\s*"[^"]+"/g) || [];
  const dates = content.match(/"publishedAt":\s*"[^"]+"/g) || [];
  slugs.forEach((s, idx) => {
    console.log(`  ${s} -> ${dates[idx]}`);
  });
});
