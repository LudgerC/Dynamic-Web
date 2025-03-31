const apiKey = "5169dff1b444ceee22792bb39753218c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherDisplay = document.getElementById("weather-display");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    weatherDisplay.innerHTML = "<p class='loading'>Laden...</p>";  // Toont een laadbericht
    try {
        // Correcte URL aanroep, met de stad als queryparameter
        const url = `${apiUrl}&q=${city}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Stad niet gevonden");
        }
        const data = await response.json();
        displayWeather(data);  // Data wordt verwerkt en getoond
    } catch (error) {
        weatherDisplay.innerHTML = `<p class='error'>${error.message}</p>`;  // Foutmelding
    }
}

function displayWeather(data) {
    const { name, main, weather, wind, sys } = data;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

    weatherDisplay.innerHTML = `
        <div class="weather-card">
            <h2>${name}</h2>
            <p><strong>Temperatuur:</strong> ${main.temp}°C</p>
            <p><strong>Weer:</strong> ${weather[0].description}</p>
            <p><strong>Luchtvochtigheid:</strong> ${main.humidity}%</p>
            <p><strong>Windsnelheid:</strong> ${wind.speed} m/s</p>
            <p><strong>Zonsopgang:</strong> ${sunrise}</p>
            <p><strong>Zonsondergang:</strong> ${sunset}</p>
        </div>
    `;
}
