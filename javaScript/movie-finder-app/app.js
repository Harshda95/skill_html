let isLogin = true;

const formTitle = document.getElementById("formTitle");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const toggleText = document.getElementById("toggleText");

function updateFormUI() {
  if (isLogin) {
    formTitle.textContent = "Login to MovieMainia";
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "none";
    toggleText.innerHTML = `Don't have an account? <a href="#" id="switchBtn">Signup</a>`;
  } else {
    formTitle.textContent = "Create an Account";
    loginBtn.style.display = "none";
    signupBtn.style.display = "inline-block";
    toggleText.innerHTML = `Already have an account? <a href="#" id="switchBtn">Login</a>`;
  }

  // ✅ Re-bind switchBtn every time
  document.getElementById("switchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    updateFormUI();
  });
}

updateFormUI(); // Initial setup

// ✅ Login Handler
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const storedUser = localStorage.getItem("user");

  if (username && storedUser === username) {
    window.location.href = "./src/pages/home/home.html"; // ✅ Adjust this path if needed
  } else {
    alert("User not found. Please sign up first.");
  }
});

// ✅ Signup Handler
signupBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();

  if (username) {
    localStorage.setItem("user", username);
    alert("Signup successful! Redirecting...");
    window.location.href = "./src/pages/home/home.html"; // ✅ Same consistent redirect
  } else {
    alert("Please enter a valid name.");
  }
});
