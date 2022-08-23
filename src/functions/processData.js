export default async function processData(data) {
  console.log(data);
  const cleanData = {
    location: await data.name,
    description: await data.weather[0].description,
    // maxT: data.,
    // minT
  };
  return cleanData;
}
