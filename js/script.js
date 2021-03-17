const movieList = document.getElementById('movieList');

const addMoviesToDom = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `<li><img src="${movie.Poster}"></li>`;
    })
    .join('');
};

addMoviesToDom();
