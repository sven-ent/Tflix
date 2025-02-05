/* Search Function */
function searchMovies() {
  const query = document.getElementById("search").value.toLowerCase(); // Get the query from search bar
  const movies = document.querySelectorAll(".movie-item"); // Get all movie items

  // Loop through each movie
  movies.forEach((movie) => {
    const title = movie.querySelector("h3").textContent.toLowerCase(); // Get movie title
    if (title.includes(query)) {
      movie.style.display = "block"; // Show matching movie
    } else {
      movie.style.display = "none"; // Hide non-matching movie
    }
  });
}

/* Filter Movies by Genre */
function filterMovies() {
  const genre = document.getElementById("genre").value;
  const movies = document.querySelectorAll(".movie-item");

  movies.forEach((movie) => {
    if (genre === "all" || movie.classList.contains(genre)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
