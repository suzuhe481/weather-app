import getWeather from "../functions/getWeather";
import weatherLocation from "./weatherLocation";
import weatherTemperature from "./weatherTemperature";
import weatherWind from "./weatherWind";

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
    const weatherTempContainer = document.createElement("div");
    weatherTempContainer.id = "weather-temp-container";
    weatherTempContainer.appendChild(
      weatherTemperature(weatherData.forecast[i].temp, i)
    );
    card.appendChild(weatherTempContainer);

    // Wind
    const weatherWindContainer = document.createElement("div");
    weatherWindContainer.id = "weather-temp-container";
    weatherWindContainer.appendChild(
      weatherTemperature(weatherData.forecast[i].temp, i)
    );
    card.appendChild(weatherWindContainer);

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
    const weatherTempContainer = document.createElement("div");
    weatherTempContainer.id = "weather-temp-container";
    weatherTempContainer.appendChild(
      weatherTemperature(weatherData.forecast[i].temp, i)
    );
    card.appendChild(weatherTempContainer);

    // Wind
    const weatherWindContainer = document.createElement("div");
    weatherWindContainer.id = "weather-temp-container";
    weatherWindContainer.appendChild(
      weatherTemperature(weatherData.forecast[i].temp, i)
    );
    card.appendChild(weatherWindContainer);

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
