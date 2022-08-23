import { ftoc, ktoc, ctof } from "./tempConversion.js";

export default async function generateResults(data) {
  //assigning constants
  const location = document.getElementById("location");
  const temp = document.getElementById("current-temp");
  const description = document.getElementById("description");
  const feelsLike = document.getElementById("feels-like");
  const maxTemp = document.getElementById("max-temp");
  const minTemp = document.getElementById("min-temp");

  //adding text content
  location.textContent = data.location;
  temp.textContent = ctof(ktoc(data.temp));
  description.textContent = data.description;
  feelsLike.textContent = `Feels like: ${ctof(ktoc(data.feelsLike))}`;
  maxTemp.textContent = `Max: ${ctof(ktoc(data.maxTemp))}`;
  minTemp.textContent = `Min: ${ctof(ktoc(data.minTemp))}`;
}
