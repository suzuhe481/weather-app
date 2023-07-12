import getWeather from "../functions/getWeather";

// Weather card element which contains weather data.
const weatherCard = () => {
  const card = document.createElement("div");
  card.innerHTML = "Weather card";

  getWeather()
    .then((weatherData) => {
      // Location
      const name = document.createElement("div");
      name.innerHTML = weatherData.currentDay.location.name;
      card.appendChild(name);

      const region = document.createElement("div");
      region.innerHTML = weatherData.currentDay.location.region;
      card.appendChild(region);

      const country = document.createElement("div");
      country.innerHTML = weatherData.currentDay.location.country;
      card.appendChild(country);

      // Temperature
      const tempF = document.createElement("div");
      tempF.innerHTML = weatherData.currentDay.temp.tempF;
      card.appendChild(tempF);

      const feelsLikeTempF = document.createElement("div");
      feelsLikeTempF.innerHTML = weatherData.currentDay.temp.feelsLikeTempF;
      card.appendChild(feelsLikeTempF);

      const tempC = document.createElement("div");
      tempC.innerHTML = weatherData.currentDay.temp.tempC;
      card.appendChild(tempC);

      const feelsLikeTempC = document.createElement("div");
      feelsLikeTempC.innerHTML = weatherData.currentDay.temp.feelsLikeTempC;
      card.appendChild(feelsLikeTempC);

      // Wind
      const windDir = document.createElement("div");
      windDir.innerHTML = weatherData.currentDay.wind.windDir;
      card.appendChild(windDir);

      const windKph = document.createElement("div");
      windKph.innerHTML = weatherData.currentDay.wind.windKph;
      card.appendChild(windKph);

      const windMph = document.createElement("div");
      windMph.innerHTML = weatherData.currentDay.wind.windMph;
      card.appendChild(windMph);

      // Condition
      const condition = document.createElement("div");
      condition.innerHTML = weatherData.currentDay.condition.condition;
      card.appendChild(condition);

      const conditionIcon = document.createElement("img");
      conditionIcon.src = weatherData.currentDay.condition.conditionIcon;
      card.appendChild(conditionIcon);

      // Last Updated
      const lastUpdated = document.createElement("div");
      lastUpdated.innerHTML = weatherData.currentDay.lastUpdated;
      card.appendChild(lastUpdated);
    })
    .catch((error) => {
      console.log(error);

      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = "Weather data could not be displayed.";
      card.appendChild(errorMessage);
    });

  return card;
};

export default weatherCard;
