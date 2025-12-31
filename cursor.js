const cursor = document.getElementById('custom-cursor');

const normalCursor = '/img/cursor.png';
const pointerCursor = '/img/cliccable cursor.png';

// Posizione reale del mouse
let mouseX = 0;
let mouseY = 0;

// Posizione attuale del cursore custom
let currentX = 0;
let currentY = 0;

// Velocità del “ritardo”: più basso = più lento e smooth
const speed = 0.15;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Cambia immagine quando il cursore è sopra elementi cliccabili
document.querySelectorAll('a, button').forEach(elem => {
  elem.addEventListener('mouseenter', () => {
    cursor.src = pointerCursor;
  });
  elem.addEventListener('mouseleave', () => {
    cursor.src = normalCursor;
  });
});

// Animazione smooth
function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();
