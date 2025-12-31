const cursor = document.getElementById('custom-cursor');

const normalCursor = '/img/cursor.png';
const pointerCursor = '/img/cliccable cursor.png';

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

const speed = 0.18; // smoothness

// posizione reale mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// animazione smooth
function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// hover su elementi cliccabili
document.querySelectorAll('a, button, [role="button"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.src = pointerCursor;
  });
  el.addEventListener('mouseleave', () => {
    cursor.src = normalCursor;
  });
});
