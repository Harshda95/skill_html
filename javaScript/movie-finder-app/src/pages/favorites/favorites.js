const favContainer = document.getElementById("favContainer");
const favMovies = JSON.parse(localStorage.getItem("favorites")) || [];

if (favMovies.length === 0) {
  favContainer.innerHTML = "<p style='color:#aaa; font-size:1.2rem;'>You haven't added any favorite movies yet.</p>";
} else {
  favMovies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "fav-card";

    const image = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
    const releaseYear = movie.Year || "N/A";

    card.innerHTML = `
      <img src="${image}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${releaseYear}</p>
      <button onclick="removeFromFavorites('${movie.imdbID}')">Remove</button>
    `;
    favContainer.appendChild(card);
  });
}

function removeFromFavorites(imdbID) {
  const updated = favMovies.filter(movie => movie.imdbID !== imdbID);
  localStorage.setItem("favorites", JSON.stringify(updated));
  location.reload();
}
