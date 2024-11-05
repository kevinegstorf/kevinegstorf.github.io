const textArray = [
  'Typescript Developer',
  'React Developer',
  'Angular Developer',
  'JavaScript Developer',
  'Software Developer',
  'Frontend Developer',
  'Team Player',
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

updateText();

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.p-4 li');
  listItems.forEach(item => {
    const progress = item.getAttribute('data-progress');
    item.style.setProperty('--progress', progress);
    item.style.width = progress;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('show-more-btn');
  const moreContent = document.getElementById('more-content');
  const xpHeading = document.getElementById('xp-heading');

  showMoreBtn.addEventListener('click', () => {
    if (moreContent.classList.contains('d-none')) {
      moreContent.classList.remove('d-none');
      showMoreBtn.textContent = 'Show Less';
    } else {
      moreContent.classList.add('d-none');
      showMoreBtn.textContent = 'Show More';
      xpHeading.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
