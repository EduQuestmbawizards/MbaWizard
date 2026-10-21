const fs = require('fs');
const path = require('path');

function countWords(obj) {
  let text = '';
  if (typeof obj === 'string') {
    text += ' ' + obj;
  } else if (Array.isArray(obj)) {
    obj.forEach(item => {
      text += ' ' + countWords(item);
    });
  } else if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      text += ' ' + countWords(obj[key]);
    }
  }
  return text.trim().split(/\s+/).filter(Boolean).length;
}

console.log('Word counter helper ready.');
