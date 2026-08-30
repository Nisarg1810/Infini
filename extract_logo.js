const fs = require('fs');
const svg = fs.readFileSync('C:/Users/patel/Downloads/INFNI_logo.svg', 'utf8');
const match = svg.match(/data:image\/(?:jpeg|png);base64,([^"']+)/);
if (match) {
  fs.writeFileSync('c:/Users/patel/OneDrive/Desktop/Infini/public/images/logo.jpg', Buffer.from(match[1], 'base64'));
  console.log('Logo extracted successfully!');
} else {
  console.log('No base64 image found in SVG');
}
