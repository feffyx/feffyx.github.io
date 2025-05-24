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

setTimeout(typeMessage, 500);