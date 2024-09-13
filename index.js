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

let apiKey = "cca34be40btf00a3b62f839750cc64eo";
let citySearch = document.querySelector(".search-text");
let city = citySearch.value;
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";

function Searching(event) {
  event.preventDefault();
  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = `${citySearch.value}`;
}
let submitSearch = document.querySelector(".search-button");
submitSearch.addEventListener("click", Searching);
axios.get(apiUrl).then(Searching);
