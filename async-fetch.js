async function fetchCityCoordinates(city) {
  let response = await fetch(`https://geocode.xyz/${city}?json=1`);
  let data = await response.json();
  console.log(`City: ${city} Latitude: ${data.latt} Longitude: ${data.longt}`);
}

fetchCityCoordinates("seattle");
fetchCityCoordinates("austin");
fetchCityCoordinates("miami");
