const movieList = document.getElementById('movieList');

const addMoviesToDom = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `<li><img src="${movie.Poster}"></li>`;
    })
    .join('');
};

addMoviesToDom();
// 5. Oke, dan nu echt, we gaan iets doen op het moment dat er geklikt wordt op een van de radiobuttons.
