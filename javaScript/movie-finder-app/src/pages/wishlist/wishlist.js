const container = document.getElementById("wishlistContainer");

function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    container.innerHTML = `
      <p>No movies in wishlist 😢</p>
      <button onclick="goHome()" class="home-btn">⬅ Back to Home</button>
    `;
    return;
  }

  container.innerHTML = `
    <div class="wishlist-header">
      
      <button onclick="goHome()" class="back-link">⬅ Back to Home</button>
    </div>
  `;

  wishlist.forEach(movie => {
    const card = document.createElement("div");
    card.className = "wishlist-card";

    const image = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
    const releaseYear = movie.Year || "N/A";

    card.innerHTML = `
      <img src="${image}" alt="${movie.Title}" />
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${releaseYear}</p>
        <button class="remove-btn">🗑 Remove</button>
      </div>
    `;

    
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("remove-btn")) {
        window.location.href = `/src/pages/movieDetails/movieDetails.html?i=${movie.imdbID}`;
      }
    });

   
    card.querySelector(".remove-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromWishlist(movie.imdbID);
    });

    container.appendChild(card);
  });
}


function removeFromWishlist(imdbID) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter(movie => movie.imdbID !== imdbID);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  loadWishlist();
}


function goHome() {
  window.location.href = "./../home/home.html";
}

loadWishlist();
