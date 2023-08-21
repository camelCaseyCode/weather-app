let now = new Date();
let dayTime = document.querySelector("#day-time");

let currentDay = now.getDay();
console.log(currentDay);

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDay];

dayTime.innerHTML = `<strong>${day} ${hours}:${minutes}</strong>`;

function showWeather(response) {
  console.log(response);
  console.log(response.data.name);
  let temperatureRound = Math.round(response.data.main.temp);
  let tempDisplay = document.querySelector("#temp");
  let cityDisplay = document.querySelector("#cityName");
  cityDisplay.innerHTML = `<strong>${response.data.name}</strong>`;
  tempDisplay.innerHTML = `${temperatureRound}°C`;
}

//this takes the search and changes name of city//
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#cityName");
  let city = document.querySelector("#searchQuery");
  cityElement.innerHTML = `<strong>${city.value}</strong>`;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let cityInput = document.querySelector("#search");
cityInput.addEventListener("submit", search);

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

function getCurrentPosition(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

/* let temperature = document.querySelector("#temp");
  let searchInput = document.querySelector("#searchQuery");
  let city = document.querySelector("#cityName");
  city = `${searchInput.value}`;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  city.innerHTML = `<strong>${city}</strong>`
  */

/*function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature} degrees° C`;
}

axios.get(apiUrl).then(showTemperature);

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", clickFahrenheit);

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", clickCelsius);

function clickCelsius(event) {
  event.preventDefault();
  let tempDisplay = document.querySelector("#temp");
  tempDisplay.innerHTML = `22`;
}

function clickFahrenheit(event) {
  event.preventDefault();
  let tempDisplay = document.querySelector("#temp");
  tempDisplay.innerHTML = "72";
}

let city = "Knoxville";
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
*/
