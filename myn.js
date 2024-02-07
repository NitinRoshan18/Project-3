const slides = document.querySelectorAll('.slides img');
const bullets = document.querySelectorAll('.bullets .bullet');

let currentSlide = 0;

// Function to show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to handle bullet click
function bulletClick(index) {
  bullets.forEach((bullet, i) => {
    bullet.classList.remove('active');
    if (i === index) {
      bullet.classList.add('active');
    }
  });
  currentSlide = index;
  showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);

// Add event listeners to bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    bulletClick(index);
  });
});
