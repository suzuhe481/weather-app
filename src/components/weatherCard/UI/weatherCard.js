import getWeather from "../functions/getWeather";
import weatherLocation from "./weatherLocation";

// Weather card element which contains weather data.
const weatherCard = (weatherData, i) => {
  const card = document.createElement("div");

  // Adds appropriate class for a card for today's date or a future date.
  if (i === 0) {
    card.classList.add("weather-card", "current");

    // Location
    const weatherLocationContainer = document.createElement("div");
    weatherLocationContainer.id = "weather-location-container";
    weatherLocationContainer.appendChild(
      weatherLocation(weatherData.forecast[i].location)
    );
    card.appendChild(weatherLocationContainer);

    // Temperature
    const tempF = document.createElement("div");
    tempF.innerHTML = weatherData.forecast[i].temp.tempF;
    card.appendChild(tempF);

    const feelsLikeTempF = document.createElement("div");
    feelsLikeTempF.innerHTML = weatherData.forecast[i].temp.feelsLikeTempF;
    card.appendChild(feelsLikeTempF);

    const tempC = document.createElement("div");
    tempC.innerHTML = weatherData.forecast[i].temp.tempC;
    card.appendChild(tempC);

    const feelsLikeTempC = document.createElement("div");
    feelsLikeTempC.innerHTML = weatherData.forecast[i].temp.feelsLikeTempC;
    card.appendChild(feelsLikeTempC);

    // Wind
    const windDir = document.createElement("div");
    windDir.innerHTML = weatherData.forecast[i].wind.windDir;
    card.appendChild(windDir);

    const windKph = document.createElement("div");
    windKph.innerHTML = weatherData.forecast[i].wind.windKph;
    card.appendChild(windKph);

    const windMph = document.createElement("div");
    windMph.innerHTML = weatherData.forecast[i].wind.windMph;
    card.appendChild(windMph);

    // Condition
    const condition = document.createElement("div");
    condition.innerHTML = weatherData.forecast[i].condition.condition;
    card.appendChild(condition);

    const conditionIcon = document.createElement("img");
    conditionIcon.src = weatherData.forecast[i].condition.conditionIcon;
    card.appendChild(conditionIcon);

    // Last Updated
    const lastUpdated = document.createElement("div");
    lastUpdated.innerHTML = weatherData.forecast[i].lastUpdated;
    card.appendChild(lastUpdated);
  } else {
    card.classList.add("weather-card", "future");

    // Temperature
    const maxtempF = document.createElement("div");
    maxtempF.innerHTML = weatherData.forecast[i].temp.maxtempF;
    card.appendChild(maxtempF);

    const mintempF = document.createElement("div");
    mintempF.innerHTML = weatherData.forecast[i].temp.mintempF;
    card.appendChild(mintempF);

    const maxtempC = document.createElement("div");
    maxtempC.innerHTML = weatherData.forecast[i].temp.maxtempC;
    card.appendChild(maxtempC);

    const mintempC = document.createElement("div");
    mintempC.innerHTML = weatherData.forecast[i].temp.mintempC;
    card.appendChild(mintempC);

    // Wind
    const maxWindMph = document.createElement("div");
    maxWindMph.innerHTML = weatherData.forecast[i].wind.maxWindMph;
    card.appendChild(maxWindMph);

    const maxWindKph = document.createElement("div");
    maxWindKph.innerHTML = weatherData.forecast[i].wind.maxWindKph;
    card.appendChild(maxWindKph);

    // Condition
    const condition = document.createElement("div");
    condition.innerHTML = weatherData.forecast[i].condition.condition;
    card.appendChild(condition);

    const conditionIcon = document.createElement("img");
    conditionIcon.src = weatherData.forecast[i].condition.conditionIcon;
    card.appendChild(conditionIcon);
  }

  return card;
};

export default weatherCard;
