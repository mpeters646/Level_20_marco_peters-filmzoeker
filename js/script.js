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
// let movieTitles = movies.filter((movie) => movie.Title);

const filterMovies = (wordInMovieTitle) => {
  const movieTitles = [];
  movies.forEach((movie) => {
    return movieTitles.push(movie.Title);
  });

  movieTitles.filter((movieTitle) => {
    console.log(movieTitle.includes(wordInMovieTitle));
  });
};

console.log(movies);

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
  // console.log(message);
  // return message;
});
