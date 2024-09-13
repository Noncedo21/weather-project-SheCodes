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
}
let submitSearch = document.querySelector(".search-button");
submitSearch.addEventListener("click", Searching);
