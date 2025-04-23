const apiKey = "9d8101f"; 

const user = localStorage.getItem("user");
if (!user) {
  window.location.href = "../search/index.html";
}


document.getElementById("searchBtn").addEventListener("click", function () {
  const movieName = document.getElementById("searchInput").value.trim();
  if (movieName) {
    const encodedName = encodeURIComponent(movieName);
    window.location.href = `../searchResults/searchResults.html?movieName=${encodedName}`; // 🔧 fixed query param
  } else {
    alert("Please enter a movie name.");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  setupHamburger();
  getGenres();
});


function showGenres(genres) {
  const container = document.getElementById("genreContainer");
  container.innerHTML = "";

  genres.forEach(genre => {
    const btn = document.createElement("button");
    btn.innerText = genre.name;
    btn.className = "genre-btn";
    btn.onclick = () => fetchMoviesByGenre(genre.name);
    container.appendChild(btn);
  });
}


function getGenres() {
  const genres = [
    { name: "Action" }, { name: "Comedy" }, { name: "Drama" },
    { name: "Horror" }, { name: "Romance" }, { name: "Thriller" },
    { name: "Adventure" }, { name: "Science Fiction" }, { name: "Fantasy" },
    { name: "Mystery" }, { name: "Animation" }, { name: "Family" },
    { name: "Music" }, { name: "Documentary" }, { name: "History" },
    { name: "War" }, { name: "Western" }, { name: "Crime" },
    { name: "Musical" }, { name: "Film-Noir" }, { name: "Sport" }
  ];
  showGenres(genres);
}


function fetchMoviesByGenre(genreName) {
  const encodedName = encodeURIComponent(genreName);
  window.location.href = `../searchResults/searchResults.html?genreName=${encodedName}`;
}


function setupHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("active");
    });
  }
}


const autocompleteBox = document.createElement("div");
autocompleteBox.className = "autocomplete-box";
const searchInput = document.getElementById("searchInput");
searchInput.parentNode.appendChild(autocompleteBox);

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();
  if (query.length < 2) {
    autocompleteBox.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie`);
    const data = await res.json();
    
    if (data.Response === "True") {
      const results = data.Search;
      autocompleteBox.innerHTML = results
        .map(item => `<div class="suggestion-item" data-name="${item.Title}">${item.Title}</div>`)
        .join("");

      document.querySelectorAll(".suggestion-item").forEach(item => {
        item.addEventListener("click", () => {
          const name = item.getAttribute("data-name");
          window.location.href = `../searchResults/searchResults.html?movieName=${encodeURIComponent(name)}`; // 🔧 fixed query param
        });
      });

    } else {
      autocompleteBox.innerHTML = "<div>No results found</div>";
    }

  } catch (err) {
    console.error("Autocomplete error:", err);
  }
});


document.addEventListener("click", (e) => {
  if (!autocompleteBox.contains(e.target) && e.target !== searchInput) {
    autocompleteBox.innerHTML = "";
  }
});
