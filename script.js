let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let slideInterval = setInterval(moveToNextSlide, 3000);

document.querySelector('.left-arrow').addEventListener('click', function() {
    moveToPrevSlide();
    restartSlideInterval();
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    moveToNextSlide();
    restartSlideInterval();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[currentSlide].classList.add('active');
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function restartSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(moveToNextSlide, 3000);
}