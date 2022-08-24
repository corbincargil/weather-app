import getData from "./functions/getData.js";
import processData from "./functions/processData.js";
import {
  generateResults,
  displayTempC,
  displayTempF,
} from "./functions/generateResults.js";

//DOM elements
const button = document.querySelector("button");
const searchBar = document.getElementById("search");
const tempConverter = document.getElementById("slider");

//Init
let cleanData;

//getWeather
const getWeather = async () => {
  const allData = await getData(searchBar.value);
  cleanData = await processData(allData);
  generateResults(cleanData);
  searchBar.value = "";
};

button.addEventListener("click", getWeather);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

tempConverter.addEventListener("click", () => {
  if (tempConverter.classList.contains("temp-f")) {
    console.log("switching to F");
    displayTempC(cleanData);
    tempConverter.classList.remove("temp-f");
    tempConverter.classList.add("temp-c");
  } else if (tempConverter.classList.contains("temp-c")) {
    console.log("switching to C");
    displayTempF(cleanData);
    tempConverter.classList.remove("temp-c");
    tempConverter.classList.add("temp-f");
  }
});
