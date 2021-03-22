/* Shows the filmposters to the DOM */
const movieList = document.getElementById('movieList');

const addMoviesToDom = (array) =>
  array.forEach((movie) => {
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    const poster = document.createElement('img');

    newLink.target = '_blank';
    newLink.href = 'https://www.imdb.com/title/' + movie.imdbID;
    poster.src = movie.Poster;

    newLi.appendChild(newLink).appendChild(poster);
    movieList.appendChild(newLi);
  });

addMoviesToDom(movies);

/* Radio buttons filter by select */
const newMovies = movies.filter((movie) => movie.Year >= 2014);
const filteredMovies = (wordInMovieTitle) =>
  movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(wordInMovieTitle.toLocaleLowerCase()));

/* Radio buttons change */
const handleOnChangeEvent = document.body.addEventListener('change', (event) => {
  let target = event.target;
  let message;
  switch (target.value) {
    case 'alle-films':
      movieList.innerHTML = '';
      addMoviesToDom(movies);
      break;
    case 'nieuwste-films':
      movieList.innerHTML = '';
      addMoviesToDom(newMovies);
      break;
    case 'avengers-films':
      movieList.innerHTML = '';
      addMoviesToDom(filteredMovies('Avengers'));
      break;
    case 'x-men-films':
      movieList.innerHTML = '';
      addMoviesToDom(filteredMovies('x-men'));
      break;
    case 'princess-films':
      movieList.innerHTML = '';
      addMoviesToDom(filteredMovies('Princess'));
      break;
    case 'batman-films':
      movieList.innerHTML = '';
      addMoviesToDom(filteredMovies('batman'));
      break;
  }
});
