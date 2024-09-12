const weatherBlock = document.querySelector("#weather");

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "79af3dc963c806f6f2c45da9e76dd158";
const city = "Kyiv";

// const BASE_URL = "http://api.weatherapi.com/v1/current.json";
// const API_KEY = "57ae304b87234faf8d6165600230910";
// const city = "Kyiv";

async function loadWeather(e) {
  weatherBlock.innerHTML = `<p>Loading...</p>`;

  const server = `${BASE_URL}?q=${city}&${API_KEY}`;

  const response = await fetch(server, { method: "GET" });

  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
    console.log(responseResult.message);
  }
}

function getWeather(data) {
  //   console.log(data);

  const template = `  
<div class="weather-header">
    <div class="weather-main">
        <p class="weather-city">${data}</p>
        <p class="weather-status">${data}</p>
    </div>

    <div class="weather-icon">
        <img src="https://api.openweathermap.org/img/w/${data}" alt="${data}">
    </div>
</div>
<p class="weather-temp">${data}</p>
<p class="weather-feels">Feels like: ${data}</p>`;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}
