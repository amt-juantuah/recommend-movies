const tmdbKey = 'd8f049d72c753b01ba4f4a4c3c559c52';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/';
const playBtn = document.getElementById('playBtn');

// Get Movie Genres
const getGenres = async () => {
  const genreRequestEndpoint = 'genre/movie/list';

  const requestParams = `?api_key=${tmdbKey}`

  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
// --------------------------------------
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.genres;
    }
    throw new Error('Request failed');
  } catch (error) {
    console.log(error);
  }
  // ------------------------------------------
  // try {
  //   await fetch(urlToFetch)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Response failed")
  //     })
  //     .then(jsonResponse => {
  //       return jsonResponse.genres;
  //     })
  // } catch (error) {
  //   console.log(error)
  // }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();

  const discoverMovieEndpoint = "discover/movie"

  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;

  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

// -----------------------------------------
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.results;
    }
    throw new Error("Request failed!")

  } catch (error) {
    console.log(error);
  }
// --------------------------------------------
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;

  const movieEndpoint = `movie/${movieId}`;

  const requestParams = `?api_key=${tmdbKey}`

  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

// ----------------------------------
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
// ----------------------------------
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

  const movies = await getMovies();
  const randomMovie = await getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
