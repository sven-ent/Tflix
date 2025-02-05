// JavaScript for Search Bar Functionality
function searchMovies() {
  let input = document.getElementById('search').value.toLowerCase();
  let movies = document.querySelectorAll('.movie-item');

  movies.forEach(function(movie) {
    let title = movie.querySelector('h3').textContent.toLowerCase();
    if (title.includes(input)) {
      movie.style.display = 'block'; // Show movie if it matches the search
    } else {
      movie.style.display = 'none'; // Hide movie if it doesn't match
    }
  });
}
