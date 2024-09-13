const weatherBlock = document.querySelector("#weather");

const API_KEY = "79af3dc963c806f6f2c45da9e76dd158";

async function loadWeather(e) {
  weatherBlock.innerHTML = `<p>Loading...</p>`;

  const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${API_KEY}`;

  const response = await fetch(server, { method: "GET" });

  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `
    <div class="weather-main">
        <p class="weather-city text">${location}</p>
        <p class="weather-status text">${weatherStatus}</p>
        <p class="weather-temp text">Temperature: ${temp}</p>
        <p class="weather-feels text">Feels like: ${feelsLike}</p>
    </div>

    <div class="weather-icon">
        <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
    </div>`;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}
