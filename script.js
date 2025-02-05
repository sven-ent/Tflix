// Auto-scroll for the slider
let index = 0;
const slides = document.querySelectorAll('.slider a');
const totalSlides = slides.length;

function nextSlide() {
  index = (index + 1) % totalSlides; // Loop back to the first slide
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Function to search movies by title
function searchMovies() {
  let searchQuery = document.getElementById('search').value.toLowerCase();
  let movieItems = document.querySelectorAll('.movie-item');

  movieItems.forEach(function(movieItem) {
    let title = movieItem.querySelector('h3').innerText.toLowerCase();
    if (title.indexOf(searchQuery) !== -1) {
      movieItem.style.display = 'block'; // Show the movie item
    } else {
      movieItem.style.display = 'none'; // Hide the movie item
    }
  });
}
