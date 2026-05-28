/* ── Nav: transparent → solid on scroll ── */
const nav = document.getElementById('siteNav');
function updateNav() {
  if (!nav) return;
  if (window.scrollY > 70) {
    nav.classList.add('scrolled');
    nav.classList.remove('hero-nav');
  } else {
    nav.classList.remove('scrolled');
    nav.classList.add('hero-nav');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── Hero BG parallax ── */
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `scale(1.08) translateY(${window.scrollY * 0.22}px)`;
  }, { passive: true });
}

/* ── Mobile nav ── */
function openNav() {
  const mn = document.getElementById('mobileNav');
  if (mn) { mn.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeNav() {
  const mn = document.getElementById('mobileNav');
  if (mn) { mn.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── Intersection observer: fade-up ── */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => io.observe(el));
}

/* ── Product filter tabs (products page) ── */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.filter;
    document.querySelectorAll('.filterable').forEach(card => {
      if (target === 'all' || card.dataset.cat === target) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ── Contact form ── */
const cf = document.getElementById('contactForm');
if (cf) {
  cf.addEventListener('submit', e => {
    e.preventDefault();
    const btn = cf.querySelector('.submit-btn');
    const orig = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#4a7c59';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; cf.reset(); }, 3500);
  });
}

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
