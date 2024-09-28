let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector(".day");
currentDay.innerHTML = `${day}`;

let timeHour = now.getHours();
let timeMin = now.getMinutes();
if (timeMin < 10) {
  timeMin = "0" + timeMin; // Add a leading zero to minutes if necessary
}
let currentTime = document.querySelector(".time");
currentTime.innerHTML = `${timeHour}:${timeMin}`;

let citySearch = document.querySelector(".search-text");
let apiKey = "cca34be40btf00a3b62f839750cc64eo";

function Searching(event) {
  event.preventDefault();

  let city = citySearch.value; // Define the city variable
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = `${citySearch.value}`;
  axios
    .get(apiUrl)
    .then(displayTemp)
    .catch((error) => {
      console.log("Error fetching current weather:", error);
    });

  getForecast(city); // Fetch forecast data
}

function displayTemp(response) {
  let temperatureCurrent = document.querySelector(".temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureCurrent.innerHTML = `${temperature}`;

  let weatherIcon = document.querySelector(".weather-emoji");
  let currentIcon = response.data.condition.icon_url;
  weatherIcon.innerHTML = `<img src="${currentIcon}" alt="Weather Icon" />`;

  let humidityNow = document.querySelector(".hum-perc");
  let currentHumidity = response.data.temperature.humidity;
  humidityNow.innerHTML = `${currentHumidity}%`;

  let windSpeed = document.querySelector(".wind-speed");
  let currentSpeed = response.data.wind.speed;
  windSpeed.innerHTML = `${currentSpeed}km/h`;

  let skyCondition = document.querySelector(".weather-descrip");
  let currentCondition = response.data.condition.description;
  skyCondition.innerHTML = `${currentCondition}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHTML = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML += `
        <div class="weather-forecast">
          <div class="weather-today">${formatDay(day.time)}</div>
          <div class="weather-icon"><img src="${
            day.condition.icon_url
          }" alt="Weather Icon"/></div>
          <div class="max-temp">${Math.round(day.temperature.maximum)}°C</div>
          <span class="min-temp">${Math.round(day.temperature.minimum)}°C</span>
        </div>`;
    }
  });
  let forecastEl = document.querySelector(".weather-forecast-container");
  forecastEl.innerHTML = forecastHTML;
}

let submitSearch = document.querySelector(".search-button");
submitSearch.addEventListener("click", Searching);
