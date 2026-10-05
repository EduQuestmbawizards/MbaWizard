const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/priya/.gemini/antigravity-ide/brain/cdb566be-bb4b-4905-8666-204aae158b9b';
const publicImagesDir = path.join(__dirname, '../public/images/blogs');
const dataFile = path.join(__dirname, '../src/data/cat-iim-interview-blogs.ts');

const mappings = {
  "top-cat-personal-interview-questions": "cat_interview_panel_1791183017672.jpg",
  "iim-interview-questions-and-answers": "cat_interview_panel_1791183017672.jpg",
  "why-cat-toppers-get-rejected-in-interviews": "cat_interview_panel_1791183017672.jpg",
  "personal-interview-vs-cat-score-which-matters-more": "cat_interview_panel_1791183017672.jpg",
  "the-biggest-pi-mistakes-iim-aspirants-make": "cat_interview_panel_1791183017672.jpg",
  "ai-based-cat-interview-preparation": "ai_interview_prep_desk_1791183159182.jpg",
  "how-to-prepare-for-iim-interviews-without-coaching": "self_study_library_1791183194136.jpg",
  "current-affairs-questions-asked-in-iim-interviews": "self_study_library_1791183194136.jpg",
  "tell-me-about-yourself-iim-interview-guide": "cat_interview_panel_1791183017672.jpg",
  "mock-interviews-for-iim-admissions": "ai_interview_prep_desk_1791183159182.jpg",
  "iim-ahmedabad-interview-experience": "iima_campus_brick_1791183042073.jpg",
  "iim-bangalore-interview-questions": "iimb_stone_campus_1791183063413.jpg",
  "iim-calcutta-interview-questions": "iimc_lake_campus_1791183082615.jpg",
  "iim-lucknow-interview-questions": "iima_campus_brick_1791183042073.jpg",
  "iim-kozhikode-interview-questions": "iimk_hilltop_campus_1791183103683.jpg",
  "spjimr-interview-questions": "xlri_campus_hall_1791183236854.jpg",
  "mdi-gurgaon-interview-questions": "iift_trade_tower_1791183267099.jpg",
  "xlri-interview-questions": "xlri_campus_hall_1791183236854.jpg",
  "fms-delhi-interview-questions": "fms_delhi_red_building_1791183131518.jpg",
  "iift-interview-questions": "iift_trade_tower_1791183267099.jpg"
};

console.log("Copying generated photorealistic images without text to public/images/blogs/...");

Object.entries(mappings).forEach(([slug, srcFileName]) => {
  const srcPath = path.join(brainDir, srcFileName);
  const destPath = path.join(publicImagesDir, `${slug}.jpg`);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFileName} -> ${slug}.jpg`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

// Update data file to use .jpg cover images
let code = fs.readFileSync(dataFile, 'utf8');
code = code.replace(/\/images\/blogs\/([a-zA-Z0-9_\-]+)\.svg/g, '/images/blogs/$1.jpg');
fs.writeFileSync(dataFile, code, 'utf8');

console.log("Updated src/data/cat-iim-interview-blogs.ts with .jpg cover images!");
