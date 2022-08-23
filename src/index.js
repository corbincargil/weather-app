import getData from "./functions/getData.js";
import processData from "./functions/processData.js";

//DOM elements
const button = document.querySelector("button");
const searchBar = document.getElementById("search");
const resultsContainer = document.getElementById("results-container");
const location = document.getElementById("location");
const date = document.getElementById("date");
const currentTemp = document.getElementById("current-temp");
const description = document.getElementById("description");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");

//initialize
let cleanData = {};

//getWeather
const getWeather = async () => {
  const allData = await getData(searchBar.value);
  cleanData = await processData(allData);
  return cleanData;
  console.log(cleanData);
};

button.addEventListener("click", getWeather);
//assigning constants
location.value = cleanData.location;
date.textContent = cleanData.date;
currentTemp.textContent = cleanData.currentTemp;
description.textContent = cleanData.description;
maxTemp.textContent = cleanData.maxTemp;
minTemp.textContent = cleanData.minTemp;
