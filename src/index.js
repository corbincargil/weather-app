import { ftoc, ktoc, ctof } from "./functions/tempConversion.js";
import getData from "./functions/getData.js";
import processData from "./functions/processData.js";
import generateResults from "./functions/generateResults.js";

//DOM elements
const button = document.querySelector("button");
const searchBar = document.getElementById("search");
const form = document.getElementById("form");

//getWeather
const getWeather = async () => {
  const allData = await getData(searchBar.value);
  const cleanData = await processData(allData);
  //   console.log(cleanData);
  generateResults(cleanData);
  searchBar.value = "";
};

button.addEventListener("click", getWeather);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
