const fs = require('fs');
const sharp = require('sharp');

const folderPath = './public/images/vaccaj/';

fs.readdirSync(folderPath).forEach(file => {
  sharp(folderPath+file)
  .toFormat('webp')
  .toFile(folderPath + file.replace('.png', '').replace('.jpeg', '').replace('.jpg', '') + '.webp');
});