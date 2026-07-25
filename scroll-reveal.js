const revealSelectors = [
  '.reveal',
  'button',
  'img',
  'iframe',
  '.grid-clickable-text',
  '.subtitle2',
  '.video-wrap',
  '.faq',
  '.grid-text',
  '.mid-box'
];

const revealElements = Array.from(document.querySelectorAll(revealSelectors.join(',')));

revealElements.forEach(el => {
  if (!el.classList.contains('reveal')) {
    el.classList.add('reveal');
  }
});

if (revealElements.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  revealElements.forEach(el => observer.observe(el));
}
