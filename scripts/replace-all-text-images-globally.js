const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/priya/.gemini/antigravity-ide/brain/cdb566be-bb4b-4905-8666-204aae158b9b';
const publicImagesDir = path.join(__dirname, '../public/images/blogs');

// Extra generated image mappings for Topics 26-40
const extraSchoolMappings = {
  "harvard-mba-interview-questions": "harvard_campus_quad_1791184272198.jpg",
  "stanford-mba-interview-questions": "stanford_gsb_quad_1791184315470.jpg",
  "wharton-mba-interview-questions": "harvard_campus_quad_1791184272198.jpg",
  "kellogg-mba-interview-questions": "insead_isb_campus_1791184392411.jpg",
  "insead-mba-interview-questions": "insead_isb_campus_1791184392411.jpg",
  "isb-interview-questions": "insead_isb_campus_1791184392411.jpg",
  "hec-paris-mba-interview-questions": "xlri_campus_hall_1791183236854.jpg",
  "lbs-mba-interview-questions": "harvard_campus_quad_1791184272198.jpg",
  "oxford-mba-interview-questions": "self_study_library_1791183194136.jpg",
  "cambridge-mba-interview-questions": "iimc_lake_campus_1791183082615.jpg",
  "mba-video-interview-questions-explained": "ai_interview_prep_desk_1791183159182.jpg",
  "how-to-prepare-for-kira-talent-interviews": "ai_interview_prep_desk_1791183159182.jpg",
  "one-way-mba-video-interview-guide": "ai_interview_prep_desk_1791183159182.jpg",
  "mba-video-essays-common-mistakes": "cat_interview_panel_1791183017672.jpg",
  "ai-evaluation-of-video-interview-performance": "ai_interview_prep_desk_1791183159182.jpg"
};

// Copy all images to public/images/blogs/${slug}.jpg
Object.entries(extraSchoolMappings).forEach(([slug, srcFile]) => {
  const srcPath = path.join(brainDir, srcFile);
  const destPath = path.join(publicImagesDir, `${slug}.jpg`);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFile} -> ${slug}.jpg`);
  }
});

// Update data files:
// 1. src/data/mba-interview-school-video-blogs.ts
const schoolVideoPath = path.join(__dirname, '../src/data/mba-interview-school-video-blogs.ts');
if (fs.existsSync(schoolVideoPath)) {
  let code = fs.readFileSync(schoolVideoPath, 'utf8');
  code = code.replace(/\/images\/blogs\/([a-zA-Z0-9_\-]+)\.svg/g, '/images/blogs/$1.jpg');
  fs.writeFileSync(schoolVideoPath, code, 'utf8');
  console.log("Updated mba-interview-school-video-blogs.ts to .jpg cover images");
}

// 2. src/data/blogs-data.ts
const blogsDataPath = path.join(__dirname, '../src/data/blogs-data.ts');
if (fs.existsSync(blogsDataPath)) {
  let code = fs.readFileSync(blogsDataPath, 'utf8');
  code = code.replace(/\/images\/blogs\/([a-zA-Z0-9_\-]+)\.svg/g, '/images/blogs/$1.jpg');
  fs.writeFileSync(blogsDataPath, code, 'utf8');
  console.log("Updated blogs-data.ts to .jpg cover images");
}

// 3. src/lib/blog.ts
const blogLibPath = path.join(__dirname, '../src/lib/blog.ts');
if (fs.existsSync(blogLibPath)) {
  let code = fs.readFileSync(blogLibPath, 'utf8');
  code = code.replace(/\/images\/blogs\/\$\{([^}]+)\}\.svg/g, '/images/blogs/${$1}.jpg');
  fs.writeFileSync(blogLibPath, code, 'utf8');
  console.log("Updated src/lib/blog.ts to default to .jpg");
}

console.log("Global image replacement complete!");
