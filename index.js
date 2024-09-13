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
