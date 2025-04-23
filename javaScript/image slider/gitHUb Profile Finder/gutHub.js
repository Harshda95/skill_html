function details() {
    let userName = document.querySelector("#name").value.trim();
    let displayContainer = document.getElementById("displayDetails");
    displayContainer.style.backgroundColor="black";
    displayContainer.style.boxShadow="1px 4px 13px black";
    

    if (!userName) {
        document.getElementById("error").innerText = "Please enter a username!";
        displayContainer.classList.add("hidden"); // Hide if empty
        return;
    }

    let url = `https://api.github.com/users/${userName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.login) {
                displayContainer.innerHTML = `
                    <div class="profile-card">
                        <div class="profile-left">
                            <img src="${data.avatar_url}" alt="Profile Picture">
                            <h2>${data.name || "No Name Available"}</h2>
                            <p><strong>Username:</strong> ${data.login}</p>
                            <p>Followers: ${data.followers}</p>
                            <p>Following: ${data.following}</p>
                        </div>
                        <div class="profile-right">
                            <h2>Repos</h2>
                            <div class="repo-section">
                                <p><strong>${data.login}</strong></p>
                                <p>📂 ${data.public_repos} Public Repos</p>
                                <p><a href="${data.html_url}" class="profile-link" target="_blank">View Profile</a></p>
                            </div>
                        </div>
                    </div>
                `;

                displayContainer.classList.remove("hidden"); // Show profile
                document.getElementById("error").innerText = "";
            } else {
                document.getElementById("error").innerText = "User not found!";
                displayContainer.classList.add("hidden"); // Hide if user not found
            }
        })
        .catch(error => {
            document.getElementById("error").innerText = "Failed to fetch details!";
            displayContainer.classList.add("hidden"); // Hide on fetch error
            console.error("Fetch error:", error);
        });

        
}
