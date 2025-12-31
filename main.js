// subtle underline jitter for links
// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('mouseenter', () => {
//     link.style.letterSpacing = '0.03em';
//   });
//   link.addEventListener('mouseleave', () => {
//     link.style.letterSpacing = '0';
//   });
// });



// slide.js
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // blocca il reload immediato

    const href = this.href;

    const page = document.querySelector('.page');

    // Determina direzione 
    const direction = href.includes('about') ? 'left' : 'right';

    // Applica classe di slide out
    page.classList.add(direction === 'left' ? 'slide-out-left' : 'slide-out-right');

    // Dopo 500ms , cambia pagina
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

document.addEventListener('DOMContentLoaded', () => {

  // Mostra solo una volta per sessione
  if (sessionStorage.getItem('homeAlertSeen')) return;

  const alertBox = document.createElement('div');
  alertBox.className = 'home-alert';

  alertBox.innerHTML = `
    <p>
      <strong>Website under construction</strong><br><br>
      You can still navigate it,<br>
      but beware of some bugs!
    </p>
    <button class="alert-close">Got it</button>
  `;

  document.body.appendChild(alertBox);

  alertBox.querySelector('.alert-close').addEventListener('click', () => {
    alertBox.remove();
    sessionStorage.setItem('homeAlertSeen', 'true');
  });

});

