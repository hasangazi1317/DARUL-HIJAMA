document.documentElement.classList.add('js');

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

// Navbar: solid background after scrolling
const onScroll = () => nav.classList.toggle('sc', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
};
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.querySelectorAll('.menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Hero: floating golden particles
const pf = document.querySelector('.particles');
for (let i = 0; i < 26; i++) {
  const p = document.createElement('i');
  const s = 2 + Math.random() * 5;
  p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${8 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s`;
  pf.appendChild(p);
}

// Reveal on scroll (about image + service cards)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.rev').forEach((el) => io.observe(el));

document.getElementById('yr').textContent = new Date().getFullYear();
