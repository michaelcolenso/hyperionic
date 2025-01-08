document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  // Fetch the list of optimized images
  fetch('optimized-images/')
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const links = doc.querySelectorAll('a');

      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href.endsWith('.jpg') || href.endsWith('.png')) {
          const img = document.createElement('img');
          img.src = `optimized-images/${href}`;
          img.alt = href;
          gallery.appendChild(img);
        }
      });
    })
    .catch((error) => console.error('Error loading images:', error));
});
