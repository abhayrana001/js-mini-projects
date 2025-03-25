async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "bdc2646d376ae5582a4c88f1b9d5f29a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.main) {
        document.getElementById("weatherResult").textContent = `Temperature: ${data.main.temp}°C`;
    } else {
        document.getElementById("weatherResult").textContent = "City not found";
    }
}