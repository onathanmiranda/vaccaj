const fs = require('fs');
const sharp = require('sharp');

const folderPath = './public/images/panofka/';

fs.readdirSync(folderPath).forEach(file => {
  if(file.includes('.webp')) return;
  sharp(folderPath+file)
  .toFormat('webp')
  .toFile(folderPath + file.replace('.png', '').replace('.jpeg', '').replace('.jpg', '') + '.webp');
});