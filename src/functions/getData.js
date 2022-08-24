import apikey from "../apikey.js";
const loader = document.getElementById("loader");

export default async function getData(location) {
  const key = apikey;
  loader.style.display = "block";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    { mode: "cors" }
  );
  loader.style.display = "none";
  const data = await response.json();
  return data;
}
