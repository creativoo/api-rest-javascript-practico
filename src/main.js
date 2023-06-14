const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

async function getTrendingMoviesPreview() {
  //Peliculas
  const { data } = await api("trending/movie/day");

  const movies = data.results;
  movies.forEach((movie) => {
    const trendingMoviesPreviewList = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieContainer);
  });
}

async function getCategoriesPreview() {
  // Categorias
  const { data } = await api("genre/movie/list");

  const categories = data.genres;
  categories.forEach((category) => {
    const categoriesPreviewList = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", category.name);

    const categoryTitleText = document.createTextNode(category.name);
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  });
}

async function getTVShowPreview() {
  //TV SHOWS
  const { data } = await api("trending/tv/day");

  const tvShows = data.results;
  tvShows.forEach((latest) => {
    const tvShowPreviewSection = document.querySelector(
      "#tvShow-Preview .tvShowPreview-List"
    );

    const tvShowContainer = document.createElement("div");
    tvShowContainer.classList.add("tvShow-container");

    const tvShowImg = document.createElement("img");
    tvShowImg.classList.add("tv-show-img");
    tvShowImg.setAttribute("alt", latest.title);
    tvShowImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + latest.poster_path
    );

    tvShowContainer.appendChild(tvShowImg);
    tvShowPreviewSection.appendChild(tvShowContainer);
  });
}
