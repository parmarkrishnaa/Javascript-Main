const API_URL = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const API_KEY = '96a3a1314e4a76772865b873ce9fb8a6';
const movieInput = document.getElementById('movieInput');
const movieResult = document.getElementById('movieResult');

async function fetchMovies() {
    let movies = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    let moviesData = await movies.json();
    displayMovies(moviesData.results);
}

function displayMovies(movies) {
    movieResult.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${IMG_BASE + movie.poster_path}" alt="${movie.title} poster">
            <h4 style="font-size: 1.2rem; margin-top: 10px;">${movie.title}</h4>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating:⭐${movie.vote_average}</p>
        `;
        movieResult.appendChild(movieCard);
    })
}

async function searchMovie(query) {
    let response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
    let data = await response.json();
    displayMovies(data.results);
}

function renderMovie() {
    const query = movieInput.value;
    if (query) {
        searchMovie(query);
    } else {
        fetchMovies();
    }
}

fetchMovies();