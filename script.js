document.addEventListener('DOMContentLoaded', (event) => {
    let currentActiveIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const numberOfSlides = slides.length;

    // Function to update the slide display
    function updateSlideDisplay() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none'; // Hide all slides
        });
        slides[currentActiveIndex].style.display = 'block'; // Show the current slide
    }

    // Function to go to the next slide
    function goToNextSlide() {
        currentActiveIndex = (currentActiveIndex + 1) % numberOfSlides; // Cycle back to first slide after the last
        updateSlideDisplay();
    }

    // Initial update of the slide display
    updateSlideDisplay();

    // Set an interval to automatically go to the next slide
    setInterval(goToNextSlide, 3000); // Change slides every 3 seconds
});
