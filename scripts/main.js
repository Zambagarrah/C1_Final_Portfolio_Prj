// Toggle content visibility
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.target);
    if (target) {
      target.classList.toggle('hidden');
    }
  });
});

// Light/Dark mode switch
const modeSwitch = document.getElementById('mode-switch');
modeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeSwitch.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  const name = contactForm.querySelector('[name="name"]');
  const email = contactForm.querySelector('[name="email"]');
  const message = contactForm.querySelector('[name="message"]');
  let valid = true;

  if (!name.value.trim()) {
    alert('Please enter your name.');
    valid = false;
  } else if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    alert('Please enter a valid email address.');
    valid = false;
  } else if (!message.value.trim()) {
    alert('Please enter your message.');
    valid = false;
  }

  if (!valid) e.preventDefault();
});
