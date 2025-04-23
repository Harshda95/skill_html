function weather() {
    let key = "452db3f0be50bfe0b1e8f057fffe36ea";
    let city = document.querySelector("#userinput").value.trim();
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        key}`;
    
    let displayContainer = document.getElementById("weather");
    displayContainer.style.backgroundColor="background: rgba(255, 255, 255, 0.2);";
    displayContainer.style.boxShadow="1px 4px 13px black";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            displayContainer.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("errorMessage").innerText = "";
        } else {
            displayContainer.innerHTML = "";
            document.getElementById("errorMessage").innerText = "Error in fetching the details";  
        }
    })
    .catch(error => {
        document.getElementById("errorMessage").innerText = "Failed to fetch details!";
        displayContainer.classList.add("hidden"); 
        console.error("Fetch error:", error);
    });
}
