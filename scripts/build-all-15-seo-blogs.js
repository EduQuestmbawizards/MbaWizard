const fs = require('fs');
const path = require('path');

function extractAllText(obj) {
  if (typeof obj === 'string') return ' ' + obj;
  if (Array.isArray(obj)) return obj.map(extractAllText).join(' ');
  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .filter(k => k !== 'src' && k !== 'coverImage' && k !== 'avatar' && k !== 'slug')
      .map(k => extractAllText(obj[k]))
      .join(' ');
  }
  return '';
}

function countWords(obj) {
  return extractAllText(obj).trim().split(/\s+/).filter(Boolean).length;
}

const authorSurinder = {
  name: "Mr. Surinder Gupta (IIT Roorkee)",
  role: "Founder & Master Admissions Mentor (25+ Yrs Exp)",
  avatar: "/images/common/surinder-gupta.jpg"
};

console.log('Starting Master 15 SEO Blog Builder...');
