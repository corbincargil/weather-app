import apikey from "../apikey.js";

export default async function getData(location) {
  const key = apikey;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
