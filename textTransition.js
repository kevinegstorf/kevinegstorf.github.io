const textArray = [
  'Typescript Developer',
  'React Developer',
  'Angular Developer',
  'JavaScript Developer',
  'Software Developer',
  'Frontend Developer',
];
let currentIndex = 0;
const textElement = document.getElementById('text-transition');

function updateText() {
  // Fade out effect
  textElement.classList.add('fade-out');

  setTimeout(() => {
    // Update text and fade in after fade out is complete
    textElement.textContent = textArray[currentIndex];
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');

    // Move to the next text in the array
    currentIndex = (currentIndex + 1) % textArray.length;
  }, 500); // 500ms matches the fade-out time in CSS

  setTimeout(() => {
    textElement.classList.remove('fade-in');
  }, 1000); // Remove fade-in after it's complete (500ms duration)
}

// Run updateText every 6 seconds
setInterval(updateText, 3500);
// Initialize the first text immediately
updateText();
