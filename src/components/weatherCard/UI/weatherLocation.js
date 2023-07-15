import "./weatherLocation.css";

// Creates div containing the location data.
const weatherLocation = (location) => {
  const weatherLocation = document.createElement("div");

  const name = document.createElement("div");
  name.classList.add("weather-location-name");
  name.innerHTML = location.name;
  weatherLocation.appendChild(name);

  const region = document.createElement("div");
  region.classList.add("weather-location-region");
  region.innerHTML = location.region;
  weatherLocation.appendChild(region);

  const country = document.createElement("div");
  country.classList.add("weather-location-country");
  country.innerHTML = location.country;
  weatherLocation.appendChild(country);

  const lastUpdated = document.createElement("div");
  lastUpdated.classList.add("weather-location-lastUpdated");
  lastUpdated.innerHTML = "Last Updated: " + location.lastUpdated;
  weatherLocation.appendChild(lastUpdated);

  return weatherLocation;
};

export default weatherLocation;
