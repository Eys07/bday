let currentSlide = 1;  // Start from the first real image
const slideWidth = 100; // Image width as a percentage of container
let autoSlideInterval;

function showSlide(slideIndex) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    slides.style.transition = 'transform 0.5s ease';  // Enable transition for regular moves
    slides.style.transform = `translateX(-${slideIndex * slideWidth}%)`;

    // Wait for the transition to complete, then "snap" to the duplicated slide
    setTimeout(() => {
        if (slideIndex === 0) {
            slides.style.transition = 'none';  // Disable transition for snap
            currentSlide = totalSlides - 2;  // Jump to last real image
            slides.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        }
        if (slideIndex === totalSlides - 1) {
            slides.style.transition = 'none';  // Disable transition for snap
            currentSlide = 1;  // Jump to first real image
            slides.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        }
    }, 500);  // This matches the transition duration
}

function moveSlides(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlides(1);
    }, 5000);  // Change every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startAutoSlide();  // Start the automatic slide
});
