import { ftoc, ktoc, ctof } from "./tempConversion.js";

//assigning constants
const location = document.getElementById("location");
const temp = document.getElementById("current-temp");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");

export async function generateResults(data) {
  //adding text content
  location.textContent = `${data.city}, ${data.country}`;
  temp.textContent = `${ctof(ktoc(data.temp))}\u00B0`;
  description.textContent = `${data.description}`;
  feelsLike.textContent = `Feels like: ${ctof(ktoc(data.feelsLike))}\u00B0`;
  maxTemp.textContent = `Hi ${ctof(ktoc(data.maxTemp))}\u00B0`;
  minTemp.textContent = `Lo ${ctof(ktoc(data.minTemp))}\u00B0`;
}

//Display temp in different units
export function displayTempF(data) {
  console.log(data);
  temp.textContent = `${ctof(ktoc(data.temp))}\u00B0`;
  feelsLike.textContent = `Feels like: ${ctof(ktoc(data.feelsLike))}\u00B0`;
  maxTemp.textContent = `Hi ${ctof(ktoc(data.maxTemp))}\u00B0`;
  minTemp.textContent = `Lo ${ctof(ktoc(data.minTemp))}\u00B0`;
}

export function displayTempC(data) {
  console.log(data);
  temp.textContent = `${ktoc(data.temp)}\u00B0`;
  feelsLike.textContent = `Feels like: ${ktoc(data.feelsLike)}\u00B0`;
  maxTemp.textContent = `Hi ${ktoc(data.maxTemp)}\u00B0`;
  minTemp.textContent = `Lo ${ktoc(data.minTemp)}\u00B0`;
}
