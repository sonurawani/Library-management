let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}
