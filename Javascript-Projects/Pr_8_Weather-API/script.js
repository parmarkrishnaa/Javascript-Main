const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "38b0d81d8b01731a4f5b44d5deb4eb80";
const ICON_URL = "https://openweathermap.org/img/wn/";
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

function displayWeather(weather) {
    weatherResult.innerHTML = "";

    if (weather.cod !== 200) {
        weatherResult.innerHTML = `<p>❌ ${weather.message}</p>`;
        return;
    }

    const { name, sys, main, weather: w, wind } = weather;
    const iconCode = w[0].icon; // example: "04d"
    const iconUrl = `${ICON_URL}${iconCode}@2x.png`;

    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.innerHTML = `
        <h2>${name}, ${sys.country}</h2>
        <img src="${iconUrl}" alt="${w[0].description}" />
        <h3>${w[0].main}</h3>
        <p>🌡 Temp: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
        <p>💨 Wind: ${wind.speed} m/s</p>
        <p>🌅 Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
    `;
    weatherResult.appendChild(weatherCard);
}

async function searchWeather(query) {
    let res = await fetch(`${API_URL}/weather?q=${query}&appid=${API_KEY}&units=metric`);
    let data = await res.json();
    displayWeather(data);
}

function renderWeather() {
    const query = cityInput.value.trim();
    if (query) {
        searchWeather(query);
    } else {
        fetchWeather("London");
    }
}

fetchWeather();