const fs = require('fs');
const path = require('path');

// Copy images from assets/img to public/assets/img
const sourceDir = path.join(__dirname, '..', 'assets', 'img');
const destDir = path.join(__dirname, '..', 'public', 'assets', 'img');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${file}`);
    }
  });
  console.log('Images copied successfully!');
} else {
  console.log('Source directory not found. Please ensure assets/img exists.');
}

