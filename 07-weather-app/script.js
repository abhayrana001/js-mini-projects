async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "7b347581703bb5bc477dab39ffd8166f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const weatherBox = document.getElementById("weatherResult");
    if (data.main) {
        weatherBox.innerHTML = `
                       <h2>${data.name}</h2>
                       <p>Temperature: ${data.main.temp}°C</p>
                       <p>Humidity: ${data.main.humidity}%</p>
                       <p>Weather: ${data.weather[0].description}</p>
                   `;
    } else {
        weatherBox.textContent = "City not found. Please try again.";
    }
}