fetch('movies.json')
    .then(response => response.json())
    .then(movies => {
        let sliderContainer = document.querySelector('.slider-container');
        let movieGrid = document.querySelector('.movie-grid');

        // Find latest movie
        let latestMovie = movies.find(movie => movie.latest);
        let otherMovies = movies.filter(movie => !movie.latest);

        // Add latest movie to slider
        if (latestMovie) {
            sliderContainer.innerHTML = `
                <div class="slide" onclick="openMovie('${latestMovie.link}')">
                    <img src="images/${latestMovie.image}" alt="${latestMovie.title}">
                    <div class="overlay">${latestMovie.title}</div>
                </div>
            `;
        }

        // Add all movies to grid
        otherMovies.forEach(movie => {
            let movieHTML = `
                <div class="movie" onclick="openMovie('${movie.link}')">
                    <img src="images/${movie.image}" alt="${movie.title}">
                    <div class="title">${movie.title}</div>
                </div>
            `;
            movieGrid.innerHTML += movieHTML;
        });
    });

// Open movie page
function openMovie(title) {
    window.location.href = `https://7ent2.github.io/Tflixdata/movie.html?title=${encodeURIComponent(title)}`;
}
}

// Search movies
function searchMovies() {
    let searchValue = document.getElementById('searchBar').value.toLowerCase();
    let movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        let title = movie.querySelector('.title').textContent.toLowerCase();
        movie.style.display = title.includes(searchValue) ? 'block' : 'none';
    });
}
const urlParams = new URLSearchParams(window.location.search);
const movieTitle = urlParams.get('title');
document.querySelector('h1').textContent = movieTitle;
