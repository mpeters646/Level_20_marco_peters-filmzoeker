/* Shows the filmposters to the DOM */
const movieList = document.getElementById('movieList');

const addMoviesToDom = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `<li><img src="${movie.Poster}"></li>`;
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
