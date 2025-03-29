const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 192, 256, 512];
const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'icon.svg');

// Генерируем иконки разных размеров
sizes.forEach(size => {
  sharp(svgPath)
    .resize(size, size)
    .toFile(path.join(publicDir, `icon-${size}x${size}.png`))
    .then(() => console.log(`Generated ${size}x${size} icon`))
    .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
});

// Создаем favicon.ico (32x32)
sharp(svgPath)
  .resize(32, 32)
  .toFile(path.join(publicDir, 'favicon.ico'))
  .then(() => console.log('Generated favicon.ico'))
  .catch(err => console.error('Error generating favicon.ico:', err));

// Создаем apple-icon.png (180x180)
sharp(svgPath)
  .resize(180, 180)
  .toFile(path.join(publicDir, 'apple-icon.png'))
  .then(() => console.log('Generated apple-icon.png'))
  .catch(err => console.error('Error generating apple-icon.png:', err)); 