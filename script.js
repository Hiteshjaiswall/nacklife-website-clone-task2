// Selecting elements related to the main carousel
const carousel = document.querySelector('.carousel'); // Get the main carousel container
const carouselWrapper = document.querySelector('.carousel-wrapper'); // Get the wrapper for carousel items
const items = document.querySelectorAll('.carousel-item'); // Get all individual carousel items

let currentIndex = 0; // Initialize the current index for tracking the active slide
let startX = null; // Initialize the start position for swipe detection

// Function to update the carousel display based on the current index
function updateCarousel() {
    const itemWidth = items[currentIndex].offsetWidth; // Get the width of the current item
    const offset = -itemWidth * currentIndex; // Calculate the offset for translating the carousel
    carouselWrapper.style.transform = `translateX(${offset}px)`; // Apply the translation
}

// Function to navigate to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length; // Update the current index for the next slide
    updateCarousel(); // Update the carousel display
}

// Function to navigate to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Update the current index for the previous slide
    updateCarousel(); // Update the carousel display
}

// Handling mouse events for sliding
carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX; // Record the starting X position when the mouse is pressed down
});

carousel.addEventListener('mouseup', (e) => {
    if (startX !== null) {
        const endX = e.clientX; // Get the ending X position when the mouse is released
        const deltaX = startX - endX; // Calculate the horizontal distance moved
        if (deltaX > 30) {
            nextSlide(); // Swipe left to go to the next slide if the movement is significant
        } else if (deltaX < -30) {
            prevSlide(); // Swipe right to go to the previous slide if the movement is significant
        }
        startX = null; // Reset the starting position
    }
});

// Automatically advance to the next slide every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Initialize the main carousel
updateCarousel();

// Rest of your code for the second carousel remains the same.
