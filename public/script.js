const tmdbKey = 'd8f049d72c753b01ba4f4a4c3c559c52';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const playBtn = document.getElementById('playBtn');

// Get Movie Genres
const getGenres = () => {
  const genreRequestEndpoint = 'genre/movie/list';

  const requestParams = `?api_key=${tmdbKey}`

  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
