/* Shows the filmposters to the DOM */
const movieList = document.getElementById('movieList');

const addMoviesToDom = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `<li><a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src="${movie.Poster}"></a></li>`;
    })
    .join('');
};

addMoviesToDom();

/* Radio buttons filter by select */

const movieTitles = movies.map((movie) => movie.Title);
console.log(movieTitles);
const filterMovies = (wordInMovieTitle) => {
  let selectedMovies = movieTitles.find((movie) => movie.Title == wordInMovieTitle);
  console.log(`wordInMovieTitle: ${wordInMovieTitle} | type: ${typeof wordInMovieTitle}`);
  console.log(`selectedMovies: ${selectedMovies} | type: ${typeof selectedMovies}`);
  console.log(`movieTitles: ${movieTitles} | type: ${typeof movieTitles}`);
};

const handleOnChangeEvent = document.body.addEventListener('change', (event) => {
  let target = event.target;
  let message;
  switch (target.value) {
    case 'alle-films':
      message = 'The Alle films radio button changed';
      break;
    case 'nieuwste-films':
      message = 'The Nieuwste Films radio button changed';
      break;
    case 'avengers-films':
      // message = 'The Avengers Films radio button changed';
      filterMovies('Avengers');
      break;
    case 'x-men-films':
      // message = 'The X-Men Films radio button changed';
      filterMovies('X-men');
      break;
    case 'princess-films':
      filterMovies('Princess');
      // message = 'The Princess Film radio button changed';
      break;
    case 'batman-films':
      // message = 'The Batman Films radio button changed';
      filterMovies('Batman');
      break;
  }
  // console.log(filterMovies);
  // console.log(message);
  // return message;
});
