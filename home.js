// Add typing effect to mission control
const missionText = document.querySelector('.loading-text');
const messages = [
  'INITIALIZING SPACE MISSION...',
  'LOADING NAVIGATION SYSTEMS...',
  'CALIBRATING DESIGN PROTOCOLS...',
  'MISSION READY - WELCOME ABOARD!'
];

let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
  if (messageIndex < messages.length - 1) {
    if (charIndex < messages[messageIndex].length) {
      missionText.textContent = messages[messageIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeMessage, 50);
    } else {
      setTimeout(() => {
        messageIndex++;
        charIndex = 0;
        typeMessage();
      }, 800);
    }
  } else {
    missionText.textContent = messages[messageIndex];
  }
}



const projectFiles = {
  'mollys-canvas': {
    title: "Molly's Canvas - Game Demo",
    type: 'video',
    url: 'https://www.youtube.com/watch?v=0rowutVuBng',
    description: "Walkthrough showcasing the emotional storytelling mechanics and Unity-based gameplay of Molly's Canvas.",
    details: "This 2D novel game combines narrative storytelling with interactive elements to create awareness around eating disorders topics."
  },
  'eco-vibe-lumo': {
    title: "Echo.Vibe.Lumo",
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: "Demonstration of the revolutionary gesture-controlled music app that transforms hand movements into rhythmic beats.",
    details: "Built with advanced motion detection technology to create an immersive musical experience."
  },

  'drumkit': {
    title: "DrumKit - Gesture Control Demo",
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: "Demonstration of the revolutionary gesture-controlled music app that transforms hand movements into rhythmic beats.",
    details: "Built with advanced motion detection technology to create an immersive musical experience."
  },
  'napoli-tarots': {
    title: "Napoli Tarots - Project Prei",
    type: 'image',
    url: 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Napoli+Tarots+App+Screenshots',
    description: "Visual showcase of the mystical app combining Neapolitan legends with digital card collection.",
    details: "Explore the cultural mysteries of Naples through interactive tarot card readings and legendary stories."
  },
  'better-days': {
    title: "Better Days - Wellness Dashboard",
    type: 'pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: "Comprehensive overview of the emotional wellness companion app featuring mood tracking and progress visualization.",
    details: "Designed to support users in their mental health journey with intuitive tracking and meaningful insights."
  }
};

setTimeout(typeMessage, 500);