const weatherDataDiv = document.getElementById('weather-data');
const cachedNotice = document.getElementById('cached-notice');
const loader = document.getElementById('loader');
const getWeatherButton = document.getElementById('getWeather');

// OpenWeatherMap API key (vervang dit met je eigen API-sleutel)
const apiKey = '5169dff1b444ceee22792bb39753218c'; 

// Functie om het weer op te halen
const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=nl&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            return {
                temperature: data.main.temp,
                description: data.weather[0].description,
                city: data.name,
                country: data.sys.country
            };
        } else {
            throw new Error('Weergegevens konden niet worden opgehaald');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

// Functie om de geolocatie op te halen
const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather, showError);
    } else {
        alert('Geolocatie wordt niet ondersteund door deze browser.');
    }
};

// Functie om het weer op te halen op basis van locatie
const fetchWeather = async (position) => {
    const { latitude, longitude } = position.coords;
    
    // Toon de laadindicator
    loader.style.display = 'block';
    weatherDataDiv.innerHTML = '';

    try {
        const weather = await getWeather(latitude, longitude);
        displayWeather(weather);
        saveWeatherToLocalStorage(weather);
    } catch (error) {
        alert('Er ging iets mis bij het ophalen van de weersgegevens');
    } finally {
        loader.style.display = 'none';
    }
};

// Functie om de weersinformatie te tonen
const displayWeather = (weather) => {
    weatherDataDiv.innerHTML = `
        <h2>${weather.city}, ${weather.country}</h2>
        <p>${weather.description}</p>
        <p><strong>${weather.temperature}°C</strong></p>
    `;
};

// Functie om de fouten van geolocatie weer te geven
const showError = (error) => {
    alert('Fout bij het ophalen van locatie: ' + error.message);
};

// Functie om de laatst opgehaalde weersgegevens op te slaan in localStorage
const saveWeatherToLocalStorage = (weather) => {
    const weatherData = JSON.stringify(weather);
    localStorage.setItem('weather', weatherData);
    localStorage.setItem('weatherTime', new Date().toISOString());
};

// Functie om de laatst opgehaalde weersgegevens weer te geven
const loadWeatherFromLocalStorage = () => {
    const weatherData = localStorage.getItem('weather');
    const weatherTime = localStorage.getItem('weatherTime');
    
    if (weatherData && weatherTime) {
        const timeDiff = new Date() - new Date(weatherTime);
        if (timeDiff < 600000) { // 10 minuten
            const weather = JSON.parse(weatherData);
            weatherDataDiv.innerHTML = `
                <h2>${weather.city}, ${weather.country}</h2>
                <p>${weather.description}</p>
                <p><strong>${weather.temperature}°C</strong></p>
            `;
            cachedNotice.innerText = 'Laatste weergegevens opgehaald uit de cache.';
        }
    }
};

// Event listener voor de weerknop
getWeatherButton.addEventListener('click', getLocation);

// Laad de weersgegevens uit localStorage wanneer de pagina wordt geladen
window.addEventListener('load', loadWeatherFromLocalStorage);
