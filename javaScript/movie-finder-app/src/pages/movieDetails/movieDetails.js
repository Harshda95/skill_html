const apiKey = "9d8101f";
const imdbID = new URLSearchParams(window.location.search).get("i"); 
const detailsBox = document.getElementById("movieDetails");

fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`)
  .then(res => res.json())
  .then(movie => {
    if (movie.Response === "False") {
      detailsBox.innerHTML = "<p>Movie details not found.</p>";
      return;
    }

    detailsBox.innerHTML = `
      <div class="details-card">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : './fallback.jpg'}" alt="${movie.Title}" />
        <div class="info">
          <h2>${movie.Title}</h2>
          <p><strong>Year:</strong> ${movie.Year || "N/A"}</p>
          <p><strong>IMDb Rating:</strong> ${movie.imdbRating || "N/A"} / 10</p>
          <p><strong>Plot:</strong> ${movie.Plot || "No description available."}</p>
          <div class="btn-group">
            <button id="wishlistBtn">❤️ Add to Wishlist</button>
            <button id="favBtn">⭐ Add to Favorites</button>
          </div>
        </div>
      </div>
    `;

    const wishlistBtn = document.getElementById("wishlistBtn");
    wishlistBtn.addEventListener("click", () => {
      addToWishlist(movie);
      wishlistBtn.innerText = "✔ Added to Wishlist";
      wishlistBtn.disabled = true;
    });

    const favBtn = document.getElementById("favBtn");
    favBtn.addEventListener("click", () => {
      addToFavorites(movie);
      favBtn.innerText = "✔ Favorited";
      favBtn.disabled = true;
    });
  })
  .catch(err => {
    detailsBox.innerHTML = "<p>Movie details not found.</p>";
    console.error("Failed to load movie details:", err);
  });


function addToWishlist(movie) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.some(m => m.imdbID === movie.imdbID)) {
    wishlist.push(movie);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log("❤️ Added to Wishlist");
  }
}


function addToFavorites(movie) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some(m => m.imdbID === movie.imdbID)) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("⭐ Added to Favorites");
  }
}
