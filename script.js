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

/* Handle Star Rating */
const stars = document.querySelectorAll(".movie-rating .star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-rating");

    // Remove selected class from all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Add selected class to stars up to the clicked rating
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("selected");
    }
  });
}
