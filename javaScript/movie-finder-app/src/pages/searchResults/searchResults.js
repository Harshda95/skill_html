const apiKey = "9d8101f";

window.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const movieName = queryParams.get("movieName"); 
  const genreName = queryParams.get("genreName");

  const loader = document.getElementById("loader");
  const resultBox = document.getElementById("resultBox");

  if (movieName) {
    fetchMoviesByName(movieName);
  } else if (genreName) {
    fetchMoviesByGenre(genreName);
  } else {
    resultBox.innerHTML = "<p>No query found.</p>";
  }

  async function fetchMoviesByName(name) {
    loader.style.display = "block";
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=movie`);
      const data = await res.json();
      loader.style.display = "none";

      if (data.Response === "False") {
        resultBox.innerHTML = `<p>No results found for "${name}".</p>`;
        return;
      }

      resultBox.innerHTML = `<h2>Results for "${name}"</h2>`;
      data.Search.forEach(movie => resultBox.appendChild(createMovieCard(movie)));

    } catch (err) {
      loader.style.display = "none";
      console.error(err);
      resultBox.innerHTML = "<p>Something went wrong while searching for the movie.</p>";
    }
  }

  async function fetchMoviesByGenre(genreName) {
    loader.style.display = "block";
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${genreName}&type=movie`);
      const data = await res.json();
      loader.style.display = "none";

      if (data.Response === "False") {
        resultBox.innerHTML = `<p>No movies found for "${genreName}" genre.</p>`;
        return;
      }

      resultBox.innerHTML = `<h2>Movies in ${genreName} Genre</h2>`;
      data.Search.forEach(movie => resultBox.appendChild(createMovieCard(movie)));

    } catch (err) {
      loader.style.display = "none";
      console.error(err);
      resultBox.innerHTML = "<p>Something went wrong while fetching movies by genre.</p>";
    }
  }

  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    const image = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
    card.innerHTML = `
      <img src="${image}" alt="${movie.Title || "No Title"}" />
      <h3>${movie.Title || "No Title Available"}</h3>
      <p>${movie.Year || "Year not available"}</p>
    `;
    card.addEventListener("click", () => {
      window.location.href = `./../movieDetails/movieDetails.html?i=${movie.imdbID}`;
    });
    return card;
  }
});
