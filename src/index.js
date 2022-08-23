import getData from "./functions/getData.js";
import processData from "./functions/processData.js";

//DOM elements
const button = document.querySelector("button");
const searchBar = document.getElementById("search");
const resultsContainer = document.getElementById("results-container");
const location = document.getElementById("location");
const currentTemp = document.getElementById("current-temp");
const description = document.getElementById("description");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");

//initialize
//let cleanData = {};

//getWeather
const getWeather = async () => {
  const allData = await getData(searchBar.value);
  const cleanData = await processData(allData);
  console.log(cleanData);
  generateResults(cleanData);
};

button.addEventListener("click", getWeather);

const generateResults = async (data) => {
  //assigning constants
  const location = document.getElementById("location");
  const temp = document.getElementById("current-temp");
  const description = document.getElementById("description");
  const feelsLike = document.getElementById("feels-like");
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");

  //adding text content
  location.textContent = data.location;
  temp.textContent = data.temp;
  description.textContent = data.description;
  feelsLike.textContent = `Feels like: ${data.feelsLike}`;
  maxTemp.textContent = `Max: ${data.maxTemp}`;
  minTemp.textContent = `Min: ${data.minTemp}`;
};
