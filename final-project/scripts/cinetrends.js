const apiKey = "db15aa200e7bdc3710a6bb1d52621cb0";
const moviesContainer = document.getElementById('movie-container');
const modal = document.getElementById('detailsModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

async function fetchMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
        const data = await response.json();
        if (data.results) {
            data.results.forEach(movie => moviesContainer.appendChild(createMovieCard(movie)));
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function createMovieCard(movie) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-2 mb-4';

    const card = document.createElement('div');
    card.className = 'movie-card card';

    const img = createImage(movie);
    img.addEventListener('click', () => showMovieDetailsModal(movie));

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = createTextElement('h4', 'card-title', movie.title);

    const releaseDate = createTextElement('p', 'card-text', `Release Date: ${movie.release_date}`);

    cardBody.appendChild(title);
    cardBody.appendChild(releaseDate);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardCol.appendChild(card);

    return cardCol;
}

function createImage(movie) {
    const img = document.createElement('img');
    img.src = movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : 'https://via.placeholder.com/200';
    img.alt = `${movie.title} Poster`;
    img.className = 'card-img-top';
    return img;
}

function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function showMovieDetailsModal(movie) {
    while (modalBody.firstChild) {
        modalBody.removeChild(modalBody.firstChild);
    }

    modalBody.appendChild(createTextElement('h2', '', movie.title));
    modalBody.appendChild(createTextElement('p', '', `Overview: ${movie.overview}`));
    modalBody.appendChild(createTextElement('p', '', `Release Date: ${movie.release_date}`));
    modalBody.appendChild(createTextElement('p', '', `Vote Average: ${movie.vote_average}`));
    modalBody.appendChild(createTextElement('p', '', `Popularity: ${movie.popularity}`));

    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

fetchMovies();