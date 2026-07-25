const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('Installing jimp@0.16.13 locally...');
  
  const scriptContent = `
const Jimp = require('jimp');
const path = require('path');

Jimp.read(path.join(__dirname, '..', 'public', 'logo3e.png'))
  .then(image => {
    console.log('Original dimensions:', image.getWidth(), 'x', image.getHeight());
    
    // autocrop() crops transparent pixels
    image.autocrop();
    
    console.log('Cropped dimensions:', image.getWidth(), 'x', image.getHeight());
    
    return image.writeAsync(path.join(__dirname, '..', 'public', 'logo3e_cropped.png'));
  })
  .then(() => {
    console.log('Successfully cropped and saved to public/logo3e_cropped.png');
  })
  .catch(err => {
    console.error('Error during image processing:', err);
  });
`;

  fs.writeFileSync(path.join(__dirname, 'crop_runner.js'), scriptContent);
  
  try {
    console.log('Executing crop script using classic jimp...');
    execSync('npm install jimp@0.16.13 --no-save', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    execSync('node scratch/crop_runner.js', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  } catch (error) {
    console.error('Execution failed:', error);
  }
}

main();
