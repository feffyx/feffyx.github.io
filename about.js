// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Star Twinkling Animation (Optional, requires small stars added to .space-background)
const starField = document.querySelector('.space-background');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  star.style.opacity = Math.random();
  starField.appendChild(star);
}

// Add smooth scrolling animation for navigation
     document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', function(e) {
         const href = this.getAttribute('href');
         if (href.startsWith('#')) {
           e.preventDefault();
           const target = document.querySelector(href);
           if (target) {
             target.scrollIntoView({ behavior: 'smooth' });
           }
         }
       });
     });

     // Add intersection observer for fade-in animations
     const observerOptions = {
       threshold: 0.1,
       rootMargin: '0px 0px -50px 0px'
     };

     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.style.opacity = '1';
           entry.target.style.transform = 'translateY(0)';
         }
       });
     }, observerOptions);

     // Set initial styles and observe sections
     document.querySelectorAll('.section').forEach((section, index) => {
       section.style.opacity = '0';
       section.style.transform = 'translateY(30px)';
       section.style.transition = `all 0.6s ease ${index * 0.1}s`;
       observer.observe(section);
     });

     // Tool items hover effect
     document.querySelectorAll('.tool-item').forEach(item => {
       item.addEventListener('mouseenter', function() {
         this.style.transform = 'translateY(-8px) scale(1.02)';
       });
       
       item.addEventListener('mouseleave', function() {
         this.style.transform = 'translateY(0) scale(1)';
       });
     });