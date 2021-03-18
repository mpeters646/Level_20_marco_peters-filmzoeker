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
const selectedRadioButton = document.querySelector('input[name="film-filter"]').value;
const selectedMovies = selectedRadioButton.addEventListeners('change', () => {
  console.log(selectedRadioButton);
});

console.log(selectedMovies);
