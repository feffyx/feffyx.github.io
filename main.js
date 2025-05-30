



 // Create space particles
    function createSpaceParticles() {
      const spaceBackground = document.getElementById('spaceBackground');
      const particleCount = 100;
      const starCount = 50;
      
      // Create floating particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        spaceBackground.appendChild(particle);
      }
      
      // Create twinkling stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 4 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        spaceBackground.appendChild(star);
      }
    }

    // Modal functionality
    function openFileModal(projectId) {
      const modal = document.getElementById('fileModal');
      const modalTitle = document.getElementById('modalTitle');
      const fileContent = document.getElementById('fileContent');
      const fileInfo = document.getElementById('fileInfo');
      
      const project = projectFiles[projectId];
      if (!project) return;
      
      modalTitle.textContent = project.title;
      
      // Clear previous content
      fileContent.innerHTML = '';
      fileInfo.innerHTML = '';
      
      // Load content based on file type
      switch (project.type) {
        case 'video':
          fileContent.innerHTML = `
            <iframe src="${project.url}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          `;
          break;
        case 'image':
          fileContent.innerHTML = `
            <img src="${project.url}" alt="${project.title}">
          `;
          break;
        case 'pdf':
          fileContent.innerHTML = `
            <iframe src="${project.url}" type="application/pdf"></iframe>
          `;
          break;
        default:
          fileContent.innerHTML = `
            <p>File type not supported for preview.</p>
          `;
      }
      
      // Add file info
      fileInfo.innerHTML = `
        <h4>Project Description</h4>
        <p>${project.description}</p>
        <br>
        <h4>Details</h4>
        <p>${project.details}</p>
      `;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeFileModal() {
      const modal = document.getElementById('fileModal');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
      
      // Clear iframe content to stop videos
      const fileContent = document.getElementById('fileContent');
      fileContent.innerHTML = '';
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize space environment
      createSpaceParticles();
      
      // Project card click handlers
      document.querySelectorAll('.project-pod').forEach(pod => {
        pod.addEventListener('click', function() {
          const projectId = this.getAttribute('data-project');
          openFileModal(projectId);
        });
      });
      
      // Modal close handlers
      document.getElementById('closeModal').addEventListener('click', closeFileModal);
      
      document.getElementById('fileModal').addEventListener('click', function(e) {
        if (e.target === this) {
          closeFileModal();
        }
      });
      
      // Close modal with Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeFileModal();
        }
      });
      
      // Smooth scrolling for navigation
      document.querySelectorAll('.nav-link, .space-btn').forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
      
      // Add parallax scrolling effect
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.querySelector('.space-background').style.transform = `translateY(${rate}px)`;
      });
    });

    // Mouse follow effect for particles
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        if (index % 5 === 0) { // Only affect every 5th particle for performance
          const speed = (index % 3 + 1) * 0.5;
          const currentLeft = parseFloat(particle.style.left);
          const currentTop = parseFloat(particle.style.top);
          particle.style.left = (currentLeft + (mouseX * 100 - currentLeft) * 0.01 * speed) + '%';
          particle.style.top = (currentTop + (mouseY * 100 - currentTop) * 0.01 * speed) + '%';
        }
      });
    });