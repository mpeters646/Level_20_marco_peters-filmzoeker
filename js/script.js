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
const addEventListeners = () => {
  console.log('Nothing to do jet!!!!');
};

const radioButtons = document.getElementsByName('film-filter');

const radioButtonIsChecked = () => {
  radioButtons.forEach((radioButton) => {
    console.log(`Radio button ${radioButton.value} checked is ${radioButton.checked}!`);
  });
};

radioButtonIsChecked();
addEventListeners();
console.log(radioButtons);
