const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

let createCanvas;
try {
  ({ createCanvas } = require('@napi-rs/canvas'));
} catch (e) {
  const scratchCanvas = path.resolve('C:/Users/priya/.gemini/antigravity-ide/brain/721c1efd-f854-472d-a828-97c141dd4c74/scratch/node_modules/@napi-rs/canvas');
  ({ createCanvas } = require(scratchCanvas));
}

let ffmpegPath = 'ffmpeg';
const scratchFfmpeg = 'C:/Users/priya/.gemini/antigravity-ide/brain/721c1efd-f854-472d-a828-97c141dd4c74/scratch/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe';
if (fs.existsSync(scratchFfmpeg)) {
  ffmpegPath = scratchFfmpeg;
}

const WIDTH = 960;
const HEIGHT = 540; // 16:9 HD preview video for carousel player frame
const FPS = 30;
const DURATION = 6; // 6 seconds seamless loop
const TOTAL_FRAMES = FPS * DURATION; // 180 frames

const OUTPUT_DIR = path.resolve(__dirname, '../public/videos');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 6 Tools matching the bottom cards
const tools = [
  {
    id: 'consulting',
    title: 'MBA ADMISSION CONSULTING',
    badge: 'M7 & TOP 25 GLOBAL ADMITS',
    theme: { bg1: '#07112c', bg2: '#1b2a52', accent: '#FFE082', accent2: '#60A5FA' },
    render(ctx, p, theta) {
      // Admit Badges floating
      const schools = ['WHARTON', 'INSEAD', 'COLUMBIA', 'ISB', 'IIM AHMEDABAD', 'LBS'];
      for (let i = 0; i < schools.length; i++) {
        const sx = 140 + (i % 3) * 240 + Math.sin(theta + i) * 15;
        const sy = 140 + Math.floor(i / 3) * 110 + Math.cos(theta + i * 1.2) * 10;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        roundRect(ctx, sx, sy, 210, 80, 12);
        ctx.fill();
        ctx.strokeStyle = i === Math.floor((p * 6)) % 6 ? '#FFE082' : 'rgba(201, 168, 76, 0.3)';
        ctx.lineWidth = i === Math.floor((p * 6)) % 6 ? 2 : 1;
        roundRect(ctx, sx, sy, 210, 80, 12);
        ctx.stroke();

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(schools[i], sx + 20, sy + 34);

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#34D399';
        ctx.fillText('✓ ADMIT CONFIRMED', sx + 20, sy + 58);
      }

      // Bottom conversion bar
      ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
      roundRect(ctx, 120, 390, 720, 85, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      roundRect(ctx, 120, 390, 720, 85, 12);
      ctx.stroke();

      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#FFE082';
      ctx.fillText('98% Conversion', 150, 435);
      ctx.font = '400 13px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('M7 & IIM B-School Admits', 150, 458);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#60A5FA';
      ctx.fillText('$4.2M+ Scholarships', 390, 435);
      ctx.font = '400 13px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('Secured For 2024-2026 Batches', 390, 458);

      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#34D399';
      ctx.fillText('1-on-1 Mentors', 660, 435);
      ctx.font = '400 13px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('Surinder Gupta (IIT Roorkee)', 660, 458);
    }
  },
  {
    id: 'gmat-prep',
    title: 'GMAT FOCUS EDITION PREP',
    badge: 'TARGET 705+ SCORE ROADMAP',
    theme: { bg1: '#071618', bg2: '#163124', accent: '#A3E635', accent2: '#FBBF24' },
    render(ctx, p, theta) {
      // 3 Section gauges (Quant, Verbal, Data Insights)
      const sections = [
        { name: 'Quantitative Reasoning', score: 'Q88', pct: '89th %ile', bar: 0.89 },
        { name: 'Data Insights', score: 'DI85', pct: '94th %ile', bar: 0.94 },
        { name: 'Verbal Reasoning', score: 'V86', pct: '92nd %ile', bar: 0.92 }
      ];

      for (let i = 0; i < 3; i++) {
        const sy = 120 + i * 105;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        roundRect(ctx, 120, sy, 720, 85, 12);
        ctx.fill();

        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(sections[i].name, 145, sy + 35);

        ctx.font = 'bold 22px sans-serif';
        ctx.fillStyle = '#FFE082';
        ctx.fillText(sections[i].score, 660, sy + 38);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = '#34D399';
        ctx.fillText(sections[i].pct, 730, sy + 38);

        // Progress track
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        roundRect(ctx, 145, sy + 55, 670, 10, 5);
        ctx.fill();

        // Animated fill
        const fillW = 670 * sections[i].bar * (0.95 + 0.05 * Math.sin(theta + i));
        ctx.fillStyle = i === 0 ? '#60A5FA' : (i === 1 ? '#FBBF24' : '#34D399');
        roundRect(ctx, 145, sy + 55, fillW, 10, 5);
        ctx.fill();
      }

      // Predicted Total Score badge
      const totalScore = 740 + Math.floor(Math.sin(theta) * 20 + 20);
      ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
      roundRect(ctx, 320, 445, 320, 60, 30);
      ctx.fill();
      ctx.strokeStyle = '#FFE082';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 320, 445, 320, 60, 30);
      ctx.stroke();

      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText(`Target Total: ${totalScore} Focus (99th %ile)`, 480, 482);
      ctx.textAlign = 'left';
    }
  },
  {
    id: 'gmat-mocks',
    title: 'GMAT ADAPTIVE MOCK TESTS',
    badge: 'FULL-LENGTH IRT 205-805 SUITE',
    theme: { bg1: '#04171a', bg2: '#0b3238', accent: '#2DD4BF', accent2: '#38BDF8' },
    render(ctx, p, theta) {
      // IRT Algorithm Curve
      ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
      roundRect(ctx, 120, 110, 720, 270, 14);
      ctx.fill();
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.3)';
      roundRect(ctx, 120, 110, 720, 270, 14);
      ctx.stroke();

      // Grid lines inside graph
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      for (let y = 140; y < 360; y += 40) {
        ctx.beginPath(); ctx.moveTo(140, y); ctx.lineTo(820, y); ctx.stroke();
      }

      // Curve
      ctx.strokeStyle = '#2DD4BF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let gx = 0; gx <= 660; gx += 10) {
        const normX = gx / 660;
        // Sigmoid IRT curve with live oscillation
        const irty = 330 - (1 / (1 + Math.exp(-6 * (normX - 0.45)))) * 170 + Math.sin(normX * 12 + theta) * 8;
        if (gx === 0) ctx.moveTo(150 + gx, irty);
        else ctx.lineTo(150 + gx, irty);
      }
      ctx.stroke();

      // Current Point on curve
      const ptNorm = (p * 0.8 + 0.1);
      const ptX = 150 + ptNorm * 660;
      const ptY = 330 - (1 / (1 + Math.exp(-6 * (ptNorm - 0.45)))) * 170 + Math.sin(ptNorm * 12 + theta) * 8;
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#2DD4BF';
      ctx.shadowBlur = 15;
      ctx.beginPath(); ctx.arc(ptX, ptY, 7, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;

      // Question indicator
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#FFE082';
      ctx.fillText(`Question 18/21: Difficulty Level High (θ = +2.4)`, 150, 145);

      // Bottom Stats row
      const stats = [
        { label: 'CALIBRATED POOL', val: '4,000+ Questions' },
        { label: 'SCORE ACCURACY', val: '±10 Points Real Exam' },
        { label: 'SECTIONAL DRILLS', val: '51 Adaptive Sets' }
      ];
      for (let i = 0; i < 3; i++) {
        const bx = 120 + i * 245;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        roundRect(ctx, bx, 400, 230, 80, 10);
        ctx.fill();

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText(stats[i].label, bx + 16, 426);
        ctx.font = 'bold 18px sans-serif';
        ctx.fillStyle = '#2DD4BF';
        ctx.fillText(stats[i].val, bx + 16, 458);
      }
    }
  },
  {
    id: 'cat-coaching',
    title: 'CAT COACHING & MENTORSHIP',
    badge: 'TARGET 99+ PERCENTILE & IIM CALLS',
    theme: { bg1: '#1a081e', bg2: '#38123f', accent: '#E879F9', accent2: '#F472B6' },
    render(ctx, p, theta) {
      // Record Badge
      ctx.fillStyle = 'rgba(232, 121, 249, 0.15)';
      roundRect(ctx, 120, 110, 720, 100, 14);
      ctx.fill();
      ctx.strokeStyle = 'rgba(232, 121, 249, 0.4)';
      roundRect(ctx, 120, 110, 720, 100, 14);
      ctx.stroke();

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#E879F9';
      ctx.fillText('★ MBA WIZARDS RECORD BENCHMARK', 150, 140);

      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#FFE082';
      ctx.fillText('99.8%ile CAT', 150, 185);

      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('IIM Ahmedabad, Bangalore, Calcutta Calls Secured', 420, 175);

      // 3 Section Cards
      const catSec = [
        { name: 'Quantitative Aptitude', sub: 'Ability Model & Shortcut Speed' },
        { name: 'VARC Comprehension', sub: 'Speed Reading & Inference Logic' },
        { name: 'DILR Problem Solving', sub: 'Caselet Matrix & Puzzles' },
      ];

      for (let i = 0; i < 3; i++) {
        const sy = 230 + i * 85;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        roundRect(ctx, 120, sy, 720, 70, 10);
        ctx.fill();

        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(catSec[i].name, 150, sy + 32);

        ctx.font = '400 13px sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(catSec[i].sub, 150, sy + 54);

        ctx.font = 'bold 14px sans-serif';
        ctx.fillStyle = '#E879F9';
        ctx.fillText('✓ 99+ %ile Faculty', 660, sy + 40);
      }
    }
  },
  {
    id: 'ai-cat',
    title: 'AI CAT MOCK INTERVIEWER',
    badge: 'IIM WAT-PI SIMULATION ENGINE',
    theme: { bg1: '#071526', bg2: '#0e2b4d', accent: '#38BDF8', accent2: '#818CF8' },
    render(ctx, p, theta) {
      // AI Face Mesh Simulation Box (Candidate view)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.8)';
      roundRect(ctx, 120, 110, 340, 280, 14);
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 120, 110, 340, 280, 14);
      ctx.stroke();

      // Face tracking oval
      const faceX = 290 + Math.sin(theta * 2) * 6;
      const faceY = 220 + Math.cos(theta * 2) * 4;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.ellipse(faceX, faceY, 65, 85, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Eye tracking dots
      ctx.fillStyle = '#34D399';
      ctx.beginPath(); ctx.arc(faceX - 25, faceY - 15, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(faceX + 25, faceY - 15, 4, 0, Math.PI * 2); ctx.fill();

      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText('● EYE CONTACT: 98% [CONFIDENT]', 140, 345);
      ctx.fillText('● SPEECH CADENCE: 142 WPM', 140, 370);

      // Radar & Dynamic Question Box (Right side)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      roundRect(ctx, 480, 110, 360, 280, 14);
      ctx.fill();

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#FFE082';
      ctx.fillText('DYNAMIC IIM INTERVIEW QUESTION:', 500, 140);

      ctx.font = '500 15px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('"Why should IIM Ahmedabad select', 500, 175);
      ctx.fillText('you over candidates with 4+ years of', 500, 202);
      ctx.fillText('consulting experience?"', 500, 229);

      // Radar Scores
      const scores = [
        { label: 'Domain Mastery', val: '96/100' },
        { label: 'Composure & Clarity', val: '94/100' },
        { label: 'Logic & Structuring', val: '98/100' }
      ];
      for (let s = 0; s < 3; s++) {
        ctx.font = '400 13px sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(scores[s].label, 500, 280 + s * 30);
        ctx.font = 'bold 14px sans-serif';
        ctx.fillStyle = '#34D399';
        ctx.fillText(scores[s].val, 760, 280 + s * 30);
      }

      // Bottom live status
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText('⚡ 100-Point Diagnostic Radar Report Generated Instantly', 140, 440);
    }
  },
  {
    id: 'ai-gmat',
    title: 'AI GMAT INTERVIEWER',
    badge: 'M7, EUROPE & ISB ADMISSIONS SIMULATOR',
    theme: { bg1: '#1c0a0a', bg2: '#3d1616', accent: '#F87171', accent2: '#FBBF24' },
    render(ctx, p, theta) {
      // STAR Method Visualizer
      ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
      roundRect(ctx, 120, 110, 720, 350, 14);
      ctx.fill();
      ctx.strokeStyle = 'rgba(248, 113, 113, 0.35)';
      roundRect(ctx, 120, 110, 720, 350, 14);
      ctx.stroke();

      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#F87171';
      ctx.fillText('★ STAR METHOD ANSWER EVALUATION ENGINE (M7 PANELS)', 150, 145);

      const star = [
        { letter: 'S', name: 'Situation', val: '98%', desc: 'Context & Stakeholder Clarity' },
        { letter: 'T', name: 'Task', val: '96%', desc: 'Leadership Challenge Defined' },
        { letter: 'A', name: 'Action', val: '99%', desc: 'Individual Strategic Impact' },
        { letter: 'R', name: 'Result', val: '95%', desc: 'Quantified Business Outcome' }
      ];

      for (let i = 0; i < 4; i++) {
        const sy = 175 + i * 65;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        roundRect(ctx, 150, sy, 660, 52, 8);
        ctx.fill();

        ctx.font = 'bold 18px sans-serif';
        ctx.fillStyle = '#FFE082';
        ctx.fillText(star[i].letter, 175, sy + 32);

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(star[i].name, 210, sy + 32);

        ctx.font = '400 13px sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.fillText(star[i].desc, 330, sy + 32);

        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#34D399';
        ctx.fillText(star[i].val, 740, sy + 32);
      }

      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#FFE082';
      ctx.fillText('Wharton • INSEAD • Columbia • ISB Personas Supported', 150, 485);
    }
  }
];

function roundRect(ctx, x, y, width, height, radius) {
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    radius = Object.assign({ tl: 0, tr: 0, br: 0, bl: 0 }, radius);
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
}

async function renderToolVideo(tool) {
  console.log(`Rendering video for: ${tool.id} (${tool.title})...`);
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  const mp4Path = path.join(OUTPUT_DIR, `tool-${tool.id}.mp4`);
  const webmPath = path.join(OUTPUT_DIR, `tool-${tool.id}.webm`);
  const posterPath = path.join(OUTPUT_DIR, `tool-${tool.id}-poster.jpg`);

  // Render Frame 0 as Poster
  renderSingleFrame(canvas, ctx, tool, 0, 0);
  const posterBuf = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(posterPath, posterBuf);

  // Spawn FFmpeg for MP4
  const mp4Process = spawn(ffmpegPath, [
    '-y',
    '-f', 'image2pipe',
    '-vcodec', 'png',
    '-r', String(FPS),
    '-i', '-',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-preset', 'ultrafast',
    '-crf', '24',
    '-b:v', '1800k',
    '-movflags', '+faststart',
    '-an',
    mp4Path
  ]);

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const p = f / TOTAL_FRAMES;
    renderSingleFrame(canvas, ctx, tool, p, f);
    const buf = canvas.toBuffer('image/png');
    const ok = mp4Process.stdin.write(buf);
    if (!ok) {
      await new Promise(r => mp4Process.stdin.once('drain', r));
    }
  }

  mp4Process.stdin.end();

  await new Promise((resolve, reject) => {
    mp4Process.on('close', code => code === 0 ? resolve() : reject(new Error(`Code ${code}`)));
  });

  // Convert to WebM
  await new Promise((resolve, reject) => {
    const webmProcess = spawn(ffmpegPath, [
      '-y',
      '-i', mp4Path,
      '-c:v', 'libvpx-vp9',
      '-b:v', '1500k',
      '-crf', '32',
      '-an',
      webmPath
    ]);
    webmProcess.on('close', code => code === 0 ? resolve() : reject(new Error(`Code ${code}`)));
  });

  const mp4MB = (fs.statSync(mp4Path).size / (1024 * 1024)).toFixed(2);
  const webmMB = (fs.statSync(webmPath).size / (1024 * 1024)).toFixed(2);
  console.log(`✓ ${tool.id} generated! MP4: ${mp4MB}MB, WebM: ${webmMB}MB`);
}

function renderSingleFrame(canvas, ctx, tool, p, f) {
  const theta = 2 * Math.PI * p;

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  bg.addColorStop(0, tool.theme.bg1);
  bg.addColorStop(1, tool.theme.bg2);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Dynamic light orbs
  const orbX = 700 + Math.cos(theta) * 80;
  const orbY = 200 + Math.sin(theta) * 60;
  const orb = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, 400);
  orb.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
  orb.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = orb;
  ctx.beginPath(); ctx.arc(orbX, orbY, 400, 0, Math.PI * 2); ctx.fill();

  // Top Title Bar
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  roundRect(ctx, 40, 30, 220, 32, 16);
  ctx.fill();
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#FFE082';
  ctx.fillText('✦ ' + tool.badge, 55, 51);

  ctx.font = 'bold 22px sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(tool.title, 40, 92);

  // Custom tool visual rendering
  tool.render(ctx, p, theta);

  // Subtle scanline / border vignette
  const vig = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, HEIGHT * 0.4, WIDTH / 2, HEIGHT / 2, WIDTH * 0.8);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

async function run() {
  console.log('Generating 6 dedicated tool/program videos...');
  for (const t of tools) {
    await renderToolVideo(t);
  }
  console.log('All 6 videos rendered successfully!');
}

run().catch(err => {
  console.error('Error generating videos:', err);
  process.exit(1);
});
