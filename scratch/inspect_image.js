const fs = require('fs');
const path = require('path');

// A very basic PNG parser to read width and height
const filePath = path.join(__dirname, '..', 'public', 'logo3e.png');
const buffer = fs.readFileSync(filePath);

const width = buffer.readUInt32BE(16);
const height = buffer.readUInt32BE(20);

console.log(`Dimensions of logo3e.png: ${width}x${height} pixels`);
console.log(`File size: ${buffer.length} bytes`);
