
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
