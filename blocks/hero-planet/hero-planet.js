export default function decorate(block) {
  // Kao design: H1 with underline first, then image below
  // EDS block structure: block > row > cell > content
  // hero-planet has 2 rows: [h1], [picture]

  // Find the picture and h1 elements (they're nested in row > cell divs)
  const picture = block.querySelector('picture');
  const h1 = block.querySelector('h1');

  if (picture && h1) {
    // Clear block and rebuild with stacked layout
    block.textContent = '';

    // Add content container (H1 first)
    const contentContainer = document.createElement('div');
    contentContainer.className = 'hero-planet-content';
    contentContainer.appendChild(h1.cloneNode(true));
    block.appendChild(contentContainer);

    // Add image container (image second)
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hero-planet-image';
    imageContainer.appendChild(picture.cloneNode(true));
    block.appendChild(imageContainer);
  }
}
