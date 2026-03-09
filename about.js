/* =============================================
   ABOUT PAGE SCRIPT :: about.js
   ============================================= */

// ---- SCROLL REVEAL ----
(function () {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
})();


// ---- SKILL TAGS — stagger in on scroll ----
(function () {
  const groups = document.querySelectorAll('.skill-tags');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const tags = entry.target.querySelectorAll('.skill-tag');
      tags.forEach((tag, i) => {
        tag.style.opacity   = '0';
        tag.style.transform = 'translateY(8px)';
        tag.style.transition = `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms`;
        setTimeout(() => {
          tag.style.opacity   = '1';
          tag.style.transform = 'translateY(0)';
        }, 80 + i * 40);
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  groups.forEach(g => obs.observe(g));
})();


// ---- PHOTO FRAME tilt on mouse proximity ----
(function () {
  const frame = document.querySelector('.photo-frame');
  if (!frame) return;
  frame.addEventListener('mousemove', (e) => {
    const rect   = frame.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / rect.width;
    const dy     = (e.clientY - cy) / rect.height;
    frame.style.transform = `rotate(0deg) perspective(600px) rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg) scale(1.02)`;
  });
  frame.addEventListener('mouseleave', () => {
    frame.style.transform = 'rotate(1.5deg)';
  });
})();