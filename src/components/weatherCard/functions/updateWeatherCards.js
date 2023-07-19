import weatherCard from "../UI/weatherCard";
import getWeather from "./getWeather";
import weatherLocation from "../UI/weatherLocation";
import forecastSliderButton from "../../forecastSliderButton/UI/forecastSliderButton";

const updateWeatherCards = (event) => {
  event.preventDefault();

  // var card;

  // Gets and clears multiple containers.
  const weatherCardsContainer = document.getElementById(
    "weather-cards-container"
  );
  weatherCardsContainer.innerHTML = "";

  const weatherLocationContainer = document.getElementById(
    "weather-location-container"
  );
  weatherLocationContainer.innerHTML = "";

  const forecastTypeSliderContainer = document.getElementById(
    "forecast-slider-container"
  );
  forecastTypeSliderContainer.innerHTML = "";

  getWeather()
    .then((weatherData) => {
      // Updates the weather location
      weatherLocationContainer.appendChild(
        weatherLocation(weatherData.location)
      );

      weatherCardsContainer.classList.add("current-forecast");

      // Adds the slider button.
      forecastTypeSliderContainer.appendChild(forecastSliderButton());

      // Creates cards for each forecast day.
      // Index is passed to know which is the current day, at i == 0.
      for (var i = 0; i < weatherData.forecast.length; i++) {
        const card = weatherCard(weatherData, i);
        weatherCardsContainer.appendChild(card);
      }
    })
    .catch((error) => {
      console.log(error);

      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = "Weather data could not be displayed.";
      const errorCard = errorMessage;

      weatherCardsContainer.appendChild(errorCard);
    });
};

export default updateWeatherCards;
