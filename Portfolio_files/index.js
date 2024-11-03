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

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const emailInput = document.getElementById('email-input');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (validateEmail(email)) {
      sendEmail(email);
    } else {
      alert('Please enter a valid email address.');
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function sendEmail(email) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: email,
      message: 'I would like your resume.'
    })
    .then((response) => {
      alert('Email sent successfully!');
    }, (error) => {
      alert('Failed to send email. Please try again later.');
    });
  }
});
