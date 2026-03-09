/* =============================================
   PROJECTS PAGE SCRIPT :: projects.js
   ============================================= */

// ── PROJECT DATA ──────────────────────────────
const PROJECTS = {
  econap: {
    title:    'EcoNap',
    eyebrow:  'App Design · 2024',
    role:     'UX / UI Designer',
    desc:     'EcoNap is the winning idea of Napoli\'s Hackathon, designed to encourage sustainable lifestyle choices through playful interactions. The challenge was to turn dry eco-data into something people actually want to engage with daily.',
    design:   'The core design challenge was making sustainability feel rewarding rather than guilt-inducing. I leaned into soft, nature-inspired tones and a gamified loop, short daily actions, instant visual feedback, and a gentle creature that grows alongside your habits. Every micro-interaction was designed to feel like a small celebration.',
    media: [
      { type: 'img', src: 'img/Schermata 1.jpg' },
      { type: 'img', src: 'img/Schermata 2.jpg' },
      { type: 'img', src: 'img/Schermata 3.jpg'},
      { type: 'img', src: 'img/Schermata 4.jpg'}
    ],
    meta: [
      { label: 'Timeline',  value: '2 months · 2024' },
      { label: 'Team',      value: '4 people' },
      { label: 'Platform',  value: 'iOS, Android' },
      { label: 'Status',    value: '3rd Place Hackathon Winner 🏆' },
    ],
    tech:    ['none'],
    tools:   ['Figma'],
  },

  sortify: {
    title:    'Sortify',
    eyebrow:  'iPad Game · 2025',
    role:     'Coder & Designer',
    desc:     'A game developed for the Swift Student Challenge 2025. Children often lack awareness about proper recycling practices, and traditional educational methods fail to engage them effectively. Through gamified learning — interactive sorting challenges, visual feedback, and rewards — Sortify makes recycling education engaging and memorable.',
    design:   'I wanted the visuals to feel like a toy rather than a classroom app — bold primary colours, chunky shapes, and satisfying physics-like feedback when an item lands in the right bin. The UI was deliberately kept minimal so young users could focus on the sorting mechanics without distraction. Procreate illustrations gave it a handmade warmth that polished vector art wouldn\'t.',
    media: [
      { type: 'img', src: 'img/Sortify 1.jpeg' },
      { type: 'img', src: 'img/Sortify 2.jpeg' },
      { type: 'img', src: 'img/Sortify 3.jpeg' },
      { type: 'img', src: 'img/Sortify 4.jpeg' },
    ],
    meta: [
      { label: 'Timeline',  value: '1 day · 2025' },
      { label: 'Team',      value: 'Solo project' },
      { label: 'Platform',  value: 'iPad (iOS)' },
      { label: 'Status',    value: 'Swift Student Challenge' },
    ],
    tech:    ['Swift', 'Swift Playgrounds'],
    tools:   ['Figma', 'Procreate'],
  },

  airchestra: {
    title:    'Airchestra',
    eyebrow:  'visionOS App · 2025',
    role:     'UX / UI Designer & 3D Artist',
    desc:     'Experience music not just by listening, but by living it. Airchestra is a visionary app built for visionOS that transforms your physical space into a living, breathing orchestra. Floating islands orbit around you, each resonating with its own melody — move them, conduct, watch your room come alive.',
    design:   'Designing for visionOS meant rethinking every spatial convention. Elements needed to feel like they belonged in physical space — depth, shadow, and parallax were tools, not decoration. I chose a deep cosmic palette so the floating islands would pop against any real-world environment. The interaction model was kept gestural and intuitive: no menus, just reach and conduct.',
    media: [
      { type: 'video', src: 'video/Airchestra video.mp4' },
      { type: 'img',   src: 'img/Airchestra 1.png' },
      { type: 'img',   src: 'img/Airchestra 2.png' },
      { type: 'img',   src: 'img/Airchestra 3.png' },
      { type: 'img',   src: 'img/Airchestra 4.png' },
    ],
    meta: [
      { label: 'Timeline',  value: '1 month · 2025' },
      { label: 'Team',      value: '10 people' },
      { label: 'Platform',  value: 'Apple Vision Pro (visionOS)' },
      { label: 'Status',    value: 'Published' },
    ],
    tech:    ['Swift', 'Xcode'],
    tools:   ['Sketch', 'Blender', 'Reality Composer Pro'],
    link:    { label: 'DOWNLOAD ON APP STORE ↗', href: 'https://lnkd.in/dk4Fh6hi' },
  },

  voxtura: {
    title:    'Voxtura',
    eyebrow:  'Music Software · WIP',
    role:     'UX / UI Designer & Game Artist',
    desc:     'Shape your voice with a gesture. Touchscreens offer gestures, but we\'re still tapping buttons like it\'s 2007. What if the hand became the interface? Voxtura is an iPad app that lets users sculpt their voice in real time using hand gestures — the gesture becomes the plugin, editing becomes performing.',
    design:   'The central design question was: how do you make an invisible thing (sound) feel tangible? I explored visual metaphors — waveforms that react to hand shape, spatial effects that expand or compress as you spread or close your fingers. The UI had to disappear so the performer could focus on expression. Minimalism wasn\'t an aesthetic choice, it was a functional one.',
    media: [
      { type: 'img', src: 'img/voxtura 1.png' },
      { type: 'img', src: 'img/Voxtura 2.png' },
      { type: 'img', src: 'img/voxtura 3.png' },
      { type: 'img', src: 'img/voxtura 4.png' },
    ],
    meta: [
      { label: 'Timeline',  value: 'Work in Progress' },
      { label: 'Team',      value: 'Solo project' },
      { label: 'Platform',  value: 'iPad, macOS' },
      { label: 'Status',    value: '🔧 In development' },
    ],
    tech:    ['Swift', 'Apple Vision Framework'],
    tools:   ['Figma'],
  },

  mollys: {
    title:    "Molly's Canvas",
    eyebrow:  'Psychological Thriller Game · 2026',
    role:     'UX / UI Designer & Game Artist',
    desc:     "A psychological thriller game that tells the story of Molly, a girl struggling with anorexia. Mental health topics — especially eating disorders — are often misunderstood or stigmatised. Through interactive storytelling and emotional visualisation, players experience Molly's journey firsthand, building empathy and understanding. The game has been praised by mental health professionals who supported the development process.",
    design:   "Every visual choice was intentional and emotionally loaded. The colour palette drains as Molly's condition worsens — from warm, saturated tones to cold, desaturated greys. UI elements distort and fracture to reflect her mental state. We deliberately avoided sensationalism; the goal was empathy, not shock. Typography became a character — fragile, inconsistent, sometimes breaking apart.",
    media: [
      { type: 'video', src: "video/Molly's Canvas video.mp4" },
    ],
    meta: [
      { label: 'Timeline',  value: 'Out in 2026' },
      { label: 'Team',      value: '3 people' },
      { label: 'Platform',  value: 'iOS, Windows, macOS' },
      { label: 'Status',    value: '🎮 Coming 2026' },
    ],
    tech:    ['Unity 6', 'C#'],
    tools:   ['Figma', 'Procreate'],
  },

  trustfall: {
    title:    'Trustfall',
    eyebrow:  'Multiplayer Game · 2026',
    role:     'UX / UI Designer & Game Artist',
    desc:     'A cooperative puzzle game that challenges players to complete tasks by collaborating, communicating, and trusting each other — with deliberately limited perception. You cannot win alone. The design forces players to rely on what their partner sees, building communication and trust as core mechanics.',
    design:   'Limited perception was the design pillar — each player sees only part of the world, so the visual language had to make the "missing" information feel tangible and frustrating in a satisfying way. Fog, vignettes, and asymmetric UI layouts reinforce each player\'s restricted viewpoint. The audio design (GarageBand) was built to give players spatial cues they couldn\'t get visually.',
    media: [
      { type: 'video', src: 'video/Trustfall video.mp4' },
    ],
    meta: [
      { label: 'Timeline',  value: 'Out in 2026' },
      { label: 'Team',      value: '2 people' },
      { label: 'Platform',  value: 'iOS, Windows, macOS' },
      { label: 'Status',    value: '🎮 Coming 2026' },
    ],
    tech:    ['Unreal Engine'],
    tools:   ['Figma', 'Procreate', 'GarageBand'],
  },

  maskshop: {
    title:    'Maskshop',
    eyebrow:  'Solo Game · 2026',
    role:     '3D Assets Creator & Sound Artist',
    desc:     'You are a Graphic Designer for a fantasy video game trapped in your own files by the teams Coder, who complains about how messy they are. Your goal is to get out of the file by organizing it, using masking tools to move object layers or hide them.',
    design:   'During this project I was in charge of making the music, making the 3D assets, and drawing the texture that we used. Although the game is released in a beta version, it is totally playable, though we are looking forward to proceed with its development!',
    media: [
      { type: 'video', src: 'video/Maskshop - The Ed Ucati.mp4' },
    ],
    meta: [
      { label: 'Timeline',  value: 'January 2026' },
      { label: 'Team',      value: '5 people' },
      { label: 'Platform',  value: 'Windows' },
      { label: 'Status',    value: 'Playable Beta' },
    ],
    tech:    ['Unity'],
    tools:   ['Figma', 'Procreate', 'Unreal Engine', 'Fab Libraries'],
    link:    { label: 'DOWNLOAD BETA ↓', href: 'https://lucapucchione.itch.io/maskshop' },
  },

  napolitarots: {
    title:    'Napoli Tarots',
    eyebrow:  'Tourism App · 2026',
    role:     'UX / UI Designer & Assets Artist',
    desc:     'A guide to unpopular places in the city of Napoli, Italy. Each unpopular place you go to, you collect a tarot card with its own traditional tale and reference to neapolitan culture.',
    design:   'This app was built to try and solve a big problem in our city, which is overtourism and mediatic tourism. Napoli is full of legends, traditions, and it has such a rich culture, that not many people know of. We believe that this app will help people appreciate that more, like it helped us! My role for this app was drawing the tarot cards and come up with creative designs, and assist my colleague in the development of an intuitive User Interface.',
    media: [
      { type: 'img', src: 'img/Np1.png' },
      { type: 'img', src: 'img/Np2.png' },
      { type: 'img', src: 'img/Sangue_Di_San_Gennaro.png' },
      { type: 'img', src: 'img/Parthenope_.png' },
      { type: 'img', src: 'img/Munaciello.png' },
    ],
    meta: [
      { label: 'Timeline',  value: 'Out in 2026' },
      { label: 'Team',      value: '3 people' },
      { label: 'Platform',  value: 'iOS' },
      { label: 'Status',    value: 'Coming 2026' },
    ],
    tech:    ['Swift'],
    tools:   ['Figma', 'Procreate'],
  },
};


// ── YEAR FILTER ───────────────────────────────
document.querySelectorAll('.year-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const year = btn.dataset.year;
    document.querySelectorAll('.project-card').forEach(card => {
      if (year === 'all' || card.dataset.year === year) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


// ── MODAL ─────────────────────────────────────
const backdrop   = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
let currentMedia = [];
let currentIndex = 0;

function openModal(id) {
  const p = PROJECTS[id];
  if (!p) return;

  // populate text
  document.getElementById('modalEyebrow').textContent = p.eyebrow;
  document.getElementById('modalTitle').textContent   = p.title;
  document.getElementById('modalRole').textContent    = p.role;
  document.getElementById('modalDesc').textContent    = p.desc;
  document.getElementById('modalDesign').textContent  = p.design;

  // meta grid
  const metaGrid = document.getElementById('modalMetaGrid');
  metaGrid.innerHTML = p.meta.map(m => `
    <div class="modal-meta-item">
      <p class="modal-meta-item__label">${m.label}</p>
      <p class="modal-meta-item__value">${m.value}</p>
    </div>
  `).join('');

  // tech + tools tags
  const tags = document.getElementById('modalTags');
  const allTags = [...(p.tech || []), ...(p.tools || [])];
  tags.innerHTML = allTags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // link button (optional)
  let linkBtn = document.getElementById('modalLinkBtn');
  if (p.link) {
    if (!linkBtn) {
      linkBtn = document.createElement('a');
      linkBtn.id = 'modalLinkBtn';
      linkBtn.className = 'modal-link-btn';
      linkBtn.target = '_blank';
      linkBtn.rel = 'noopener noreferrer';
      document.querySelector('.modal-info').appendChild(linkBtn);
    }
    linkBtn.textContent = p.link.label;
    linkBtn.href = p.link.href;
    linkBtn.style.display = 'inline-block';
  } else {
    if (linkBtn) linkBtn.style.display = 'none';
  }

  // media
  currentMedia = p.media || [];
  currentIndex = 0;
  buildMedia();

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildMedia() {
  const mediaEl = document.getElementById('modalMedia');
  if (!currentMedia.length) {
    mediaEl.innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-family:var(--mono);font-size:11px;letter-spacing:0.15em;">NO MEDIA</div>';
    return;
  }

  // Main display
  const mainDiv = document.createElement('div');
  mainDiv.className = 'modal-media__main';
  mainDiv.id = 'modalMainMedia';
  mediaEl.innerHTML = '';
  mediaEl.appendChild(mainDiv);

  // Thumbnails (only if >1)
  if (currentMedia.length > 1) {
    const thumbStrip = document.createElement('div');
    thumbStrip.className = 'modal-thumbs';
    thumbStrip.id = 'modalThumbs';
    mediaEl.appendChild(thumbStrip);

    currentMedia.forEach((item, i) => {
      let thumb;
      if (item.type === 'video') {
        thumb = document.createElement('div');
        thumb.className = 'modal-thumb-video' + (i === 0 ? ' active' : '');
      } else {
        thumb = document.createElement('img');
        thumb.className = 'modal-thumb' + (i === 0 ? ' active' : '');
        thumb.src = item.src;
        thumb.alt = '';
      }
      thumb.addEventListener('click', () => setMedia(i));
      thumbStrip.appendChild(thumb);
    });
  }

  setMedia(0);
}

function setMedia(index) {
  currentIndex = index;
  const item    = currentMedia[index];
  const mainDiv = document.getElementById('modalMainMedia');

  // Stop any playing video
  mainDiv.querySelectorAll('video').forEach(v => v.pause());

  if (item.type === 'video') {
    mainDiv.innerHTML = `
      <video controls autoplay playsinline>
        <source src="${item.src}" type="video/mp4"/>
        Your browser does not support video.
      </video>`;
  } else {
    mainDiv.innerHTML = `<img src="${item.src}" alt="" loading="lazy"/>`;
  }

  // Update thumb active state
  document.querySelectorAll('.modal-thumb, .modal-thumb-video').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function closeModal() {
  // Pause any video
  document.querySelectorAll('#modalMainMedia video').forEach(v => v.pause());
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on card click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.id));
});

// Close
modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


// ── SCROLL REVEAL ─────────────────────────────
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