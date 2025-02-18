// Preload critical images
const preloadImages = [
  '/logo.png',
  '/hero-background.webp'
];

preloadImages.forEach(image => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = image;
  document.head.appendChild(link);
});

// Preload critical fonts
const preloadFonts = [
  '/fonts/inter-var.woff2'
];

preloadFonts.forEach(font => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.href = font;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}); 