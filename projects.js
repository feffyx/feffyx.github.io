document.addEventListener('DOMContentLoaded', () => {

  // ===== Chiudi tutti gli overlay all'avvio =====
  document.querySelectorAll('.card-overlay').forEach(overlay => {
    overlay.style.display = 'none';
  });

  const cards = document.querySelectorAll('.project-card');
  const overlays = document.querySelectorAll('.card-overlay');
  const timelineItems = document.querySelectorAll('.projects-timeline li');

  // Mappa progetti → anni
  const projectYearMap = {
    "eco": "2024",
    "sortify": "2025",
    "mollyscanvas": "2026",
    "trustfall": "2026",
    "voxtura": "2025",
    "airchestra": "2025"
  };

  // ===== Funzione per evidenziare anno sulla timeline =====
  function highlightYear(project) {
    const year = projectYearMap[project];
    timelineItems.forEach(li => {
      li.classList.toggle('active-year', li.dataset.year === year);
    });
  }

  // ===== Creazione box alert brutalista per Airchestra =====
  const createUpdateBox = () => {
    const box = document.createElement('div');
    box.classList.add('update-box');
    box.innerHTML = `
      <p>Airchestra is now available on App Store!</p>
      <div class="buttons">
        <button class="open-store">Open</button>
        <button class="close-box">Close</button>
      </div>
    `;
    document.body.appendChild(box);

    // Centra la box
    box.style.position = 'fixed';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.background = '#000000ff';
    box.style.border = '4px solid #ffffffff';
    box.style.padding = '30px';
    box.style.zIndex = 9999;
    box.style.fontFamily = "'Courier New',";
    box.style.textAlign = 'center';
    

    // Eventi bottoni
    box.querySelector('.open-store').addEventListener('click', () => {
      window.open('https://apps.apple.com/it/app/airchestra/id6754012641?l=en-GB', '_blank');
      box.remove();
    });
    box.querySelector('.close-box').addEventListener('click', () => box.remove());
  };

  // ===== Apertura overlay cliccando la card =====
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const project = card.dataset.project;
      const overlay = document.querySelector(`.card-overlay[data-project="${project}"]`);
      if (!overlay) return;

      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';

      // Evidenzia anno nella timeline
      highlightYear(project);

      // Mostra il primo media all’apertura
      const slides = overlay.querySelectorAll('.slides > *');
      slides.forEach((s,i) => s.style.display = i === 0 ? 'block' : 'none');
      overlay.dataset.currentIndex = 0;
    });
  });

  // ===== Chiusura overlay con X =====
  overlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.overlay-close');
    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';

      // Se è Airchestra, mostra la box brutalista al centro
      if (overlay.dataset.project === "airchestra") {
        createUpdateBox();
      }
    });
  });

  // ===== SLIDESHOW =====
  overlays.forEach(overlay => {
    const slides = overlay.querySelectorAll('.slides > *');
    const prev = overlay.querySelector('.prev');
    const next = overlay.querySelector('.next');

    if (!slides.length) return;

    function showSlide(idx){
      slides.forEach((s,i) => s.style.display = i===idx ? 'block' : 'none');
      overlay.dataset.currentIndex = idx;
    }

    // Eventi frecce
    prev?.addEventListener('click', () => {
      let idx = parseInt(overlay.dataset.currentIndex) || 0;
      idx = (idx - 1 + slides.length) % slides.length;
      showSlide(idx);
    });

    next?.addEventListener('click', () => {
      let idx = parseInt(overlay.dataset.currentIndex) || 0;
      idx = (idx + 1) % slides.length;
      showSlide(idx);
    });
  });
});
