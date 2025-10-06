// Typing effect for header
const typingText = "Welcome to My Portfolio 👋";
let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  e.target.reset();
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

faders.forEach(fade => observer.observe(fade)); 
