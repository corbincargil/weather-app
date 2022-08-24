export default async function processData(data) {
  const cleanData = {
    city: await data.name,
    country: await data.sys.country,
    description: await data.weather[0].description,
    maxTemp: await data.main.temp_max,
    minTemp: await data.main.temp_min,
    feelsLike: await data.main.feels_like,
    humidity: await data.main.humidity,
    temp: await data.main.temp,
    timezone: await data.timezone,
    visibility: await data.visibility,
    windSpeed: await data.wind.speed,
    windDirection: await data.wind.deg,
  };
  return cleanData;
}
