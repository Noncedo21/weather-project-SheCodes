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
let currentTime = document.querySelector(".time");
currentTime.innerHTML = `${timeHour}:${timeMin}`;
let citySearch = document.querySelector(".search-text");
let apiKey = "cca34be40btf00a3b62f839750cc64eo";

function Searching(event) {
  event.preventDefault();

  let city = citySearch.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = `${citySearch.value}`;
  axios.get(apiUrl).then(displayTemp);
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
let submitSearch = document.querySelector(".search-button");
submitSearch.addEventListener("click", Searching);

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
function getForecast(city) {
  let apiKey = "cca34be40btf00a3b62f839750cc64eo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        ` <div class="weather-forecast">
        <div class="weather-today">${formatDay(day.time)}</div>
        <div class="weather-icon"><img src="${day.condition.icon - url}"/></div>
        <div class="max-temp"> ${day.temperature.maximum}</div>
        <span class="min-temp">${day.temperature.minimum}</span>
        </div>`;
    }
  });
}
