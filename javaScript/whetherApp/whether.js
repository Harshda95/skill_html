
function weather() {
    
    let key = "452db3f0be50bfe0b1e8f057fffe36ea";
    let city=document.querySelector("#input").value.trim()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            document.getElementById("weather").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("errorMessage").innerText = "";
        }
        else{}
    })
}

