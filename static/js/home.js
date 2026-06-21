// Days together counter — start date is 12/01/25
const START = new Date('2025-12-01T00:00:00');

function update() {
  const now  = new Date();
  const diff = now - START;
  if (diff < 0) return; // before the date

  const days   = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const hours  = Math.floor(diff / (1000 * 60 * 60));

  const fmt = n => n.toLocaleString();

  const dEl = document.getElementById('days-count');
  const mEl = document.getElementById('months-count');
  const hEl = document.getElementById('hours-count');

  if (dEl) dEl.textContent = fmt(days);
  if (mEl) mEl.textContent = fmt(months);
  if (hEl) hEl.textContent = fmt(hours);
}

update();
setInterval(update, 60 * 1000);

// Footer date
const fEl = document.getElementById('footer-date');
if (fEl) {
  fEl.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// Scroll reveal for cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .quote-inner').forEach(el => {
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
