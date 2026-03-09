/* =============================================
   PORTFOLIO SCRIPT :: script.js
   ============================================= */

// ---- LIVE TIME ----
(function () {
  const el = document.getElementById('heroTime');
  if (!el) return;
  const tick = () => {
    const n = new Date();
    el.textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`;
  };
  tick();
  setInterval(tick, 10000);
})();


// ---- PARALLAX HERO BG on mouse move ----
(function () {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 600) return; // Disable on mobile
    const x = (e.clientX / window.innerWidth  - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
  });
})();


// ---- HERO NAME letters split on hover ----
(function () {
  const block = document.querySelector('.name-word--block');
  if (!block) return;
  const text = block.textContent;
  block.innerHTML = text.split('').map(c =>
    `<span class="letter">${c}</span>`
  ).join('');

  block.querySelectorAll('.letter').forEach((l, i) => {
    l.style.display = 'inline-block';
    l.style.transition = `transform 0.3s cubic-bezier(.34,1.56,.64,1) ${i * 30}ms`;
    l.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 600) return; // Disable on mobile
      l.style.transform = `translateY(-${6 + Math.random() * 10}px) rotate(${(Math.random()-0.5)*8}deg)`;
    });
    l.addEventListener('mouseleave', () => {
      if (window.innerWidth <= 600) return; // Disable on mobile
      l.style.transform = '';
    });
  });
})();


// ---- SCROLL REVEAL ----
(function () {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('visible'), 80);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
})();


// ---- STICKER wobble on scroll ----
(function () {
  const stickers = document.querySelectorAll('.sticker-btn');
  if (!stickers.length) return;
  window.addEventListener('scroll', () => {
    const s = window.scrollY * 0.04;
    stickers.forEach((st, i) => {
      const base = parseFloat(st.style.getPropertyValue('--r')) || 0;
      st.style.transform = `rotate(${base + Math.sin(s + i) * 2}deg)`;
    });
  }, { passive: true });
})();


// ---- TICKER duplicate for seamless loop ----
(function () {
  const inner = document.querySelector('.ticker-inner');
  if (!inner) return;
  // duplicate text so loop is seamless
  inner.textContent += inner.textContent;
})();