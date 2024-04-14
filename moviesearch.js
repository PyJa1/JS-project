async function searchMovies() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const apiKey = "eeaf160c";
  const url = `https://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      displayError(data.Error);
    }
  } catch (error) {
    displayError("An error occurred. Please try again later.");
  }
}

function displayMovies(movies) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title} poster">
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>Year: ${movie.Year}</p>
        </div>
      `;
    resultsContainer.appendChild(movieElement);
  });
}

function displayError(message) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "<p>No movie or show found</p>";
}
function displayMovies(movies) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
  

    const link = document.createElement("a");
    link.href = `https://www.imdb.com/title/${movie.imdbID}`;
    link.target = "_blank";
    link.setAttribute("rel", "noopener noreferrer");

    link.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title} poster">
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>Year: ${movie.Year}</p>
        </div>
      `;

    movieElement.appendChild(link);

    resultsContainer.appendChild(movieElement);
  });
}
