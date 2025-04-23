const API_KEY = "9d8101f"; // ✅ Replace with your OMDb API Key
const BASE_URL = "https://www.omdbapi.com";


export async function fetchMovieById(imdbID) {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  return res.json();
}


export async function fetchMovieCredits(imdbID) {
  return { cast: [], crew: [] };
}


export async function fetchMovieVideos(imdbID) {
  return { videos: [] };
}


export async function fetchMovieReviews(imdbID) {
  return { reviews: [] };
}


export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
  return res.json();
}


export async function fetchSimilarMovies(imdbID) {
  return { similar: [] };
}
