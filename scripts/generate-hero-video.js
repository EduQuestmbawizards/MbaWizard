const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Locate @napi-rs/canvas
let createCanvas;
try {
  ({ createCanvas } = require('@napi-rs/canvas'));
} catch (e) {
  // Fallback to scratch install
  const scratchCanvasPath = path.resolve('C:/Users/priya/.gemini/antigravity-ide/brain/721c1efd-f854-472d-a828-97c141dd4c74/scratch/node_modules/@napi-rs/canvas');
  ({ createCanvas } = require(scratchCanvasPath));
}

// Locate FFmpeg
let ffmpegPath = 'ffmpeg';
const scratchFfmpeg = 'C:/Users/priya/.gemini/antigravity-ide/brain/721c1efd-f854-472d-a828-97c141dd4c74/scratch/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe';
if (fs.existsSync(scratchFfmpeg)) {
  ffmpegPath = scratchFfmpeg;
}

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;
const DURATION_SEC = 12;
const TOTAL_FRAMES = FPS * DURATION_SEC; // 360 frames

const OUTPUT_DIR = path.resolve(__dirname, '../public/videos');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const MP4_PATH = path.join(OUTPUT_DIR, 'hero-bg.mp4');
const WEBM_PATH = path.join(OUTPUT_DIR, 'hero-bg.webm');
const POSTER_PATH = path.join(OUTPUT_DIR, 'hero-poster.jpg');

console.log(`Starting video rendering: ${WIDTH}x${HEIGHT} @ ${FPS}fps (${TOTAL_FRAMES} frames, ${DURATION_SEC}s)...`);

// Create fixed particle starfield (periodic motion)
const NUM_PARTICLES = 70;
const particles = [];
for (let i = 0; i < NUM_PARTICLES; i++) {
  particles.push({
    baseX: (Math.sin(i * 123.45) * 0.5 + 0.5) * WIDTH,
    baseY: (Math.cos(i * 678.9) * 0.5 + 0.5) * HEIGHT,
    radius: 1.5 + (i % 4) * 0.9,
    speedX: (Math.sin(i * 45.6) * 1.5 + 0.5),
    speedY: (Math.cos(i * 89.1) * 1.5 + 0.5),
    alpha: 0.2 + (i % 5) * 0.12,
    color: i % 3 === 0 ? '#FFE082' : (i % 3 === 1 ? '#60A5FA' : '#C9A84C'),
  });
}

// Draw a single frame at normalized time p in [0, 1)
function renderFrame(canvas, ctx, p, frameIndex) {
  const theta = 2 * Math.PI * p;

  // 1. Base Dark Navy Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  bgGrad.addColorStop(0, '#020721');
  bgGrad.addColorStop(0.5, '#05164d');
  bgGrad.addColorStop(1, '#010517');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 2. Dynamic Ambient Gradient Mesh Orbs (Seamless periodic orbits)
  // Orb 1: Warm Gold (Top Right)
  const orb1X = 1450 + 160 * Math.cos(theta);
  const orb1Y = 320 + 90 * Math.sin(theta);
  const orb1Grad = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 700);
  orb1Grad.addColorStop(0, 'rgba(201, 168, 76, 0.28)');
  orb1Grad.addColorStop(0.5, 'rgba(201, 168, 76, 0.08)');
  orb1Grad.addColorStop(1, 'rgba(201, 168, 76, 0)');
  ctx.fillStyle = orb1Grad;
  ctx.beginPath();
  ctx.arc(orb1X, orb1Y, 700, 0, Math.PI * 2);
  ctx.fill();

  // Orb 2: Deep Indigo / Royal Blue (Left Bottom)
  const orb2X = 450 + 120 * Math.sin(theta);
  const orb2Y = 700 + 110 * Math.cos(theta);
  const orb2Grad = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 800);
  orb2Grad.addColorStop(0, 'rgba(30, 90, 220, 0.32)');
  orb2Grad.addColorStop(0.6, 'rgba(13, 37, 104, 0.12)');
  orb2Grad.addColorStop(1, 'rgba(5, 22, 77, 0)');
  ctx.fillStyle = orb2Grad;
  ctx.beginPath();
  ctx.arc(orb2X, orb2Y, 800, 0, Math.PI * 2);
  ctx.fill();

  // Orb 3: Radiant Amber Glow (Center Floating)
  const orb3X = 960 + 180 * Math.cos(theta * 2);
  const orb3Y = 540 + 100 * Math.sin(theta);
  const orb3Grad = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, 550);
  orb3Grad.addColorStop(0, 'rgba(255, 180, 50, 0.16)');
  orb3Grad.addColorStop(0.5, 'rgba(184, 134, 11, 0.06)');
  orb3Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = orb3Grad;
  ctx.beginPath();
  ctx.arc(orb3X, orb3Y, 550, 0, Math.PI * 2);
  ctx.fill();

  // 3. Subtle Cybernetic Perspective Grid (Horizontal wave lines)
  ctx.save();
  ctx.strokeStyle = 'rgba(201, 168, 76, 0.08)';
  ctx.lineWidth = 1;
  const gridOffsetY = (p * 80) % 80;
  for (let y = -80; y <= HEIGHT + 80; y += 80) {
    const currentY = y + gridOffsetY;
    ctx.beginPath();
    ctx.moveTo(0, currentY);
    ctx.lineTo(WIDTH, currentY);
    ctx.stroke();
  }
  for (let x = 0; x <= WIDTH; x += 120) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
    ctx.stroke();
  }
  ctx.restore();

  // 4. Floating Particles & Connecting Constellation Nodes
  ctx.save();
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const pt = particles[i];
    const px = (pt.baseX + Math.sin(theta + i) * 60 + WIDTH) % WIDTH;
    const py = (pt.baseY + Math.cos(theta + i * 0.7) * 45 + HEIGHT) % HEIGHT;

    ctx.fillStyle = pt.color;
    ctx.globalAlpha = pt.alpha * (0.7 + 0.3 * Math.sin(theta * 3 + i));
    ctx.beginPath();
    ctx.arc(px, py, pt.radius, 0, Math.PI * 2);
    ctx.fill();

    // Connect close neighbors
    if (i < 25) {
      const nextPt = particles[(i + 1) % NUM_PARTICLES];
      const npx = (nextPt.baseX + Math.sin(theta + (i + 1)) * 60 + WIDTH) % WIDTH;
      const npy = (nextPt.baseY + Math.cos(theta + (i + 1) * 0.7) * 45 + HEIGHT) % HEIGHT;
      const dist = Math.hypot(px - npx, py - npy);
      if (dist < 180) {
        ctx.strokeStyle = 'rgba(201, 168, 76, 0.15)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(npx, npy);
        ctx.stroke();
      }
    }
  }
  ctx.restore();

  // 5. Ambient Background Typography (Watermark / Motion Headline)
  ctx.save();
  ctx.font = 'bold 110px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
  ctx.lineWidth = 2;
  const marqueeOffset = Math.sin(theta) * 40;
  ctx.strokeText("STRATEGY  •  STORY  •  EXECUTION", WIDTH / 2 + marqueeOffset, 210);
  ctx.restore();

  // 6. Interactive Tool Showcase Cards (Smoothly morphing / cycling in 4 quadrants)
  // We showcase the 4 exact tools from PrepTools.tsx:
  // Tool 0: AI CAT Mock Interviewer
  // Tool 1: AI GMAT Interviewer
  // Tool 2: GMAT Adaptive Mock Tests (IRT 205-805)
  // Tool 3: Schedule A Free Trial Demo (1-on-1 Faculty Roadmap)
  const numTools = 4;
  const activeCycle = p * numTools; // e.g. 0 to 4
  const currentIdx = Math.floor(activeCycle) % numTools;
  const nextIdx = (currentIdx + 1) % numTools;
  const cycleFrac = activeCycle - Math.floor(activeCycle); // 0 to 1

  // Smooth ease in out for card transition
  const cardEase = 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, (cycleFrac - 0.7) / 0.3)));
  const isTransitioning = cycleFrac > 0.7;

  // Let's render the Showcase Hub Card on the right-center side (Hero layout friendly)
  // Position: X: 1120, Y: 460, Width: 680, Height: 440
  drawGlassCard(ctx, 1100, 360, 720, 520, theta);

  // Draw active tool content inside the card with smooth crossfade
  if (!isTransitioning) {
    drawToolContent(ctx, currentIdx, 1100, 360, 720, 520, theta, 1.0);
  } else {
    drawToolContent(ctx, currentIdx, 1100 - cardEase * 40, 360, 720, 520, theta, 1.0 - cardEase);
    drawToolContent(ctx, nextIdx, 1100 + (1 - cardEase) * 40, 360, 720, 520, theta, cardEase);
  }

  // 7. Left Side Ambient Dashboard Badges (Simulating real admissions & score proof)
  drawStatsPill(ctx, 160, 720, "TOP GMAT FOCUS SCORE", "780", "99th Percentile Verified", "#FFE082", theta, 0);
  drawStatsPill(ctx, 480, 720, "CAT PERCENTILE RECORD", "99.8%ile", "IIM A/B/C Calls Secured", "#60A5FA", theta, 1);
  drawStatsPill(ctx, 800, 720, "M7 & IIM CONVERSION", "98%", "Proven Admissions Strategy", "#34D399", theta, 2);

  // 8. Subtle Vignette & Frame Borders
  const vigGrad = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, HEIGHT * 0.45, WIDTH / 2, HEIGHT / 2, WIDTH * 0.75);
  vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
  vigGrad.addColorStop(1, 'rgba(1, 4, 18, 0.75)');
  ctx.fillStyle = vigGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

// Helper: Glassmorphic Hub Card Container
function drawGlassCard(ctx, x, y, w, h, theta) {
  ctx.save();
  // Card shadow / glow
  ctx.shadowColor = 'rgba(201, 168, 76, 0.35)';
  ctx.shadowBlur = 30 + 10 * Math.sin(theta);
  ctx.shadowOffsetY = 15;

  // Glass background
  ctx.fillStyle = 'rgba(7, 24, 82, 0.65)';
  roundRect(ctx, x, y, w, h, 20);
  ctx.fill();

  // Glass border
  ctx.shadowColor = 'transparent';
  const borderGrad = ctx.createLinearGradient(x, y, x + w, y + h);
  borderGrad.addColorStop(0, 'rgba(255, 224, 130, 0.55)');
  borderGrad.addColorStop(0.5, 'rgba(201, 168, 76, 0.25)');
  borderGrad.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
  ctx.strokeStyle = borderGrad;
  ctx.lineWidth = 1.5;
  roundRect(ctx, x, y, w, h, 20);
  ctx.stroke();

  // Card header bar
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  roundRect(ctx, x, y, w, 56, { tl: 20, tr: 20, bl: 0, br: 0 });
  ctx.fill();

  // Header Dots
  ctx.fillStyle = '#EF4444';
  ctx.beginPath(); ctx.arc(x + 28, y + 28, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#F59E0B';
  ctx.beginPath(); ctx.arc(x + 48, y + 28, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#10B981';
  ctx.beginPath(); ctx.arc(x + 68, y + 28, 6, 0, Math.PI * 2); ctx.fill();

  // Header Title
  ctx.font = '600 14px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText("MBA WIZARDS • PROPRIETARY AI & PREP SUITE", x + 92, y + 28);

  // Live Pulse Indicator
  const pulseR = 4 + 2 * Math.sin(theta * 4);
  ctx.fillStyle = '#10B981';
  ctx.beginPath(); ctx.arc(x + w - 40, y + 28, pulseR, 0, Math.PI * 2); ctx.fill();
  ctx.font = '600 12px sans-serif';
  ctx.fillStyle = '#34D399';
  ctx.textAlign = 'right';
  ctx.fillText("LIVE DEMO", x + w - 52, y + 28);

  ctx.restore();
}

// Tool data definitions (exact from PrepTools.tsx)
const toolsData = [
  {
    badge: "EXCLUSIVE AI INNOVATION",
    title: "AI CAT Mock Interviewer",
    subtitle: "Real-Time IIM WAT-PI Simulation Engine",
    metric1: { label: "Facial / Eye-Contact", val: "97.4%", status: "Optimal" },
    metric2: { label: "Speech Cadence (WPM)", val: "144 WPM", status: "Balanced" },
    metric3: { label: "IIM Benchmark Radar", val: "95 / 100", status: "Top 1%" },
    callout: "Targeting IIM Ahmedabad, Bangalore, Calcutta",
    type: "radar",
  },
  {
    badge: "GLOBAL B-SCHOOL ADMISSIONS",
    title: "AI GMAT Interviewer",
    subtitle: "M7, Europe & ISB Admissions Simulator",
    metric1: { label: "STAR Framework Alignment", val: "98.2%", status: "Elite" },
    metric2: { label: "Leadership Presence", val: "9.6 / 10", status: "Executive" },
    metric3: { label: "Storytelling Conciseness", val: "94.0%", status: "High Impact" },
    callout: "Targeting Wharton, INSEAD, Columbia & ISB",
    type: "bars",
  },
  {
    badge: "GMAT FOCUS EDITION 2026",
    title: "GMAT Adaptive Mock Tests",
    subtitle: "Full-Length IRT-Calibrated Practice Exam Suite",
    metric1: { label: "IRT Scoring Calibration", val: "765 Score", status: "±10 Accuracy" },
    metric2: { label: "Quant / Data Insights", val: "88th %ile", status: "Advanced" },
    metric3: { label: "Time-Sink Detection", val: "0 Traps", status: "Pacing Verified" },
    callout: "4,000+ Calibrated Question Bank & Live 205-805 Model",
    type: "chart",
  },
  {
    badge: "1-ON-1 FACULTY MENTORSHIP",
    title: "Free Trial Demo & Audit",
    subtitle: "Tailored Baseline Diagnostic & Score Roadmap",
    metric1: { label: "Lead Mentor Evaluation", val: "Surinder Gupta", status: "IIT Roorkee" },
    metric2: { label: "Profile Diagnostic Audit", val: "1-on-1 Live", status: "Personalized" },
    metric3: { label: "B-School Admission Odds", val: "98% Admit", status: "Track Record" },
    callout: "Comprehensive Quant, Verbal & Target B-School Audit",
    type: "roadmap",
  },
];

// Helper: Draw tool specific animated contents
function drawToolContent(ctx, idx, x, y, w, h, theta, opacity) {
  if (opacity <= 0.01) return;
  const tool = toolsData[idx];

  ctx.save();
  ctx.globalAlpha = opacity;

  // Tool Badge
  ctx.fillStyle = 'rgba(201, 168, 76, 0.18)';
  roundRect(ctx, x + 36, y + 80, 240, 28, 14);
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 76, 0.5)';
  ctx.lineWidth = 1;
  roundRect(ctx, x + 36, y + 80, 240, 28, 14);
  ctx.stroke();

  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#FFE082';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText("✦  " + tool.badge, x + 50, y + 94);

  // Tool Title
  ctx.font = 'bold 28px sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(tool.title, x + 36, y + 135);

  // Subtitle
  ctx.font = '400 15px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
  ctx.fillText(tool.subtitle, x + 36, y + 168);

  // Content Area: Interactive Dashboard Simulation
  const boxX = x + 36;
  const boxY = y + 195;
  const boxW = w - 72;
  const boxH = 210;

  ctx.fillStyle = 'rgba(2, 10, 42, 0.7)';
  roundRect(ctx, boxX, boxY, boxW, boxH, 12);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  roundRect(ctx, boxX, boxY, boxW, boxH, 12);
  ctx.stroke();

  // Metrics Grid (3 columns)
  const colW = (boxW - 32) / 3;
  const metrics = [tool.metric1, tool.metric2, tool.metric3];
  for (let m = 0; m < 3; m++) {
    const mx = boxX + 16 + m * colW;
    const my = boxY + 16;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, mx, my, colW - 12, 80, 8);
    ctx.fill();

    ctx.font = '500 11px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.fillText(metrics[m].label, mx + 12, my + 20);

    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = m === 0 ? '#FFE082' : (m === 1 ? '#60A5FA' : '#34D399');
    ctx.fillText(metrics[m].val, mx + 12, my + 46);

    ctx.font = 'bold 10px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillText("● " + metrics[m].status, mx + 12, my + 66);
  }

  // Visual Animation inside the card (Sine Wave / IRT Curve / Waveform)
  const vizY = boxY + 115;
  ctx.save();
  ctx.strokeStyle = '#FFE082';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let vx = 0; vx < boxW - 32; vx += 4) {
    const freq = tool.type === 'radar' ? 0.04 : (tool.type === 'chart' ? 0.025 : 0.035);
    const amp = 24 + 10 * Math.sin(theta * 2 + vx * 0.01);
    const waveY = vizY + 40 + Math.sin(vx * freq + theta * 3) * amp * (vx / (boxW - 32));
    if (vx === 0) ctx.moveTo(boxX + 16 + vx, waveY);
    else ctx.lineTo(boxX + 16 + vx, waveY);
  }
  ctx.stroke();

  // Glowing point tracking the wave
  const trackerX = boxX + 16 + ((theta / (2 * Math.PI)) * (boxW - 32));
  const trackerAmp = 24 + 10 * Math.sin(theta * 2 + (trackerX - boxX) * 0.01);
  const trackerY = vizY + 40 + Math.sin((trackerX - boxX) * 0.035 + theta * 3) * trackerAmp * ((trackerX - boxX) / (boxW - 32));
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = '#FFE082';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(trackerX, trackerY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Footer Callout
  ctx.font = '600 13px sans-serif';
  ctx.fillStyle = 'rgba(255, 224, 130, 0.9)';
  ctx.textAlign = 'left';
  ctx.fillText("✓  " + tool.callout, x + 36, y + 435);

  // Active Tool Dots (4 dots for 4 tools)
  for (let d = 0; d < 4; d++) {
    const dotX = x + w - 100 + d * 18;
    const dotY = y + 435;
    ctx.fillStyle = d === idx ? '#FFE082' : 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(dotX, dotY, d === idx ? 5 : 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// Helper: Stats Badges
function drawStatsPill(ctx, x, y, label, stat, subtext, color, theta, offset) {
  ctx.save();
  const floatY = y + Math.sin(theta + offset * 1.5) * 8;

  ctx.fillStyle = 'rgba(5, 22, 77, 0.7)';
  roundRect(ctx, x, floatY, 290, 85, 14);
  ctx.fill();

  ctx.strokeStyle = 'rgba(201, 168, 76, 0.25)';
  ctx.lineWidth = 1;
  roundRect(ctx, x, floatY, 290, 85, 14);
  ctx.stroke();

  ctx.font = 'bold 10px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.textAlign = 'left';
  ctx.fillText(label, x + 16, floatY + 22);

  ctx.font = 'bold 28px sans-serif';
  ctx.fillStyle = color;
  ctx.fillText(stat, x + 16, floatY + 54);

  ctx.font = '400 11px sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillText(subtext, x + 16, floatY + 72);

  ctx.restore();
}

// Helper: Rounded Rectangle
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

// Main Encoding Process
async function main() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Save First Frame as Poster Image
  console.log('Rendering Frame 0 for Poster Image...');
  renderFrame(canvas, ctx, 0, 0);
  const posterBuffer = canvas.toBuffer('image/jpeg', { quality: 0.92 });
  fs.writeFileSync(POSTER_PATH, posterBuffer);
  console.log(`Poster image saved: ${POSTER_PATH} (${(posterBuffer.length / 1024).toFixed(1)} KB)`);

  // Start FFmpeg process for MP4
  console.log('Spawning FFmpeg for MP4 generation...');
  const ffmpegMp4Args = [
    '-y',
    '-f', 'image2pipe',
    '-vcodec', 'png',
    '-r', String(FPS),
    '-i', '-',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-preset', 'medium',
    '-crf', '23',
    '-b:v', '2500k',
    '-maxrate', '3200k',
    '-bufsize', '6000k',
    '-movflags', '+faststart',
    '-an', // No audio
    MP4_PATH,
  ];

  const mp4Process = spawn(ffmpegPath, ffmpegMp4Args);
  let mp4Stderr = '';
  mp4Process.stderr.on('data', (d) => { mp4Stderr += d.toString(); });

  mp4Process.on('error', (err) => {
    console.error('FFmpeg MP4 Process Error:', err);
  });

  // Render each frame and pipe to FFmpeg
  console.log(`Piping ${TOTAL_FRAMES} frames to FFmpeg...`);
  const startTime = Date.now();

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const p = f / TOTAL_FRAMES; // 0 to 359/360
    renderFrame(canvas, ctx, p, f);
    const pngBuffer = canvas.toBuffer('image/png');
    
    const canWrite = mp4Process.stdin.write(pngBuffer);
    if (!canWrite) {
      await new Promise((resolve) => mp4Process.stdin.once('drain', resolve));
    }

    if ((f + 1) % 60 === 0 || f === TOTAL_FRAMES - 1) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      const pct = (((f + 1) / TOTAL_FRAMES) * 100).toFixed(0);
      console.log(`Progress: ${f + 1}/${TOTAL_FRAMES} frames (${pct}%) in ${elapsed}s`);
    }
  }

  mp4Process.stdin.end();

  await new Promise((resolve, reject) => {
    mp4Process.on('close', (code) => {
      if (code === 0) {
        console.log(`MP4 render complete! Output: ${MP4_PATH}`);
        resolve();
      } else {
        console.error('FFmpeg MP4 failed with code:', code, mp4Stderr);
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });
  });

  const mp4SizeMB = (fs.statSync(MP4_PATH).size / (1024 * 1024)).toFixed(2);
  console.log(`MP4 File Size: ${mp4SizeMB} MB (Target: < 5 MB)`);

  // Generate WebM from MP4 for fastest, highest fidelity conversion
  console.log('Generating WebM from MP4...');
  const ffmpegWebmArgs = [
    '-y',
    '-i', MP4_PATH,
    '-c:v', 'libvpx-vp9',
    '-b:v', '2000k',
    '-crf', '32',
    '-an',
    WEBM_PATH,
  ];

  await new Promise((resolve, reject) => {
    const webmProcess = spawn(ffmpegPath, ffmpegWebmArgs);
    let webmStderr = '';
    webmProcess.stderr.on('data', (d) => { webmStderr += d.toString(); });
    webmProcess.on('close', (code) => {
      if (code === 0) {
        console.log(`WebM render complete! Output: ${WEBM_PATH}`);
        resolve();
      } else {
        console.error('FFmpeg WebM failed with code:', code, webmStderr);
        reject(new Error(`FFmpeg WebM exited with code ${code}`));
      }
    });
  });

  const webmSizeMB = (fs.statSync(WEBM_PATH).size / (1024 * 1024)).toFixed(2);
  console.log(`WebM File Size: ${webmSizeMB} MB (Target: < 5 MB)`);
  console.log('All hero video assets generated successfully!');
}

main().catch((err) => {
  console.error('Fatal error in generator:', err);
  process.exit(1);
});
