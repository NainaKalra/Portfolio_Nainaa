/* ═══════════════════════════════════════
   NAVBAR.JS
   ═══════════════════════════════════════ */

const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-link');

// ── SHOW NAVBAR AFTER HERO ─────────────
const heroHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > heroHeight * 0.85) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }

  if (scrollY > heroHeight * 0.9) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  highlightActive();
});

// ── ACTIVE SECTION HIGHLIGHT ───────────
function highlightActive() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach(link => {
    // support both data-section and href="#id"
    const section = link.dataset.section || link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', section === current);
  });
}

// ── SMOOTH SCROLL ON CLICK ─────────────
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // support both data-section and href="#id"
    const sectionId = link.dataset.section || link.getAttribute('href')?.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});

// ── HAMBURGER TOGGLE ───────────────────
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});