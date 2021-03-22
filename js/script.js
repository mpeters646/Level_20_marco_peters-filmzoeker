/* Shows the filmposters to the DOM */
const movieList = document.getElementById('movieList');

const addMoviesToDom = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `<li><a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src="${movie.Poster}"></a></li>`;
    })
    .join('');
};

/* Radio buttons filter by select */
const filterMovies = (wordInMovieTitle) => {
  const movieTitles = [];
  movies.forEach((movie) => {
    return movieTitles.push(movie.Title);
  });

  let filter = movieTitles.filter((movieTitle) => {
    return movieTitle.includes(wordInMovieTitle);
  });
  console.log(filter);
  return filter;
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
      filterMovies('Avengers');
      break;
    case 'x-men-films':
      filterMovies('X-Men');
      break;
    case 'princess-films':
      filterMovies('Princess');
      break;
    case 'batman-films':
      filterMovies('Batman');
      break;
  }
  // console.log(message);
});

addMoviesToDom();
