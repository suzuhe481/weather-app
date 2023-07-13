import weatherForm from "../../weatherForm/UI/weatherForm";
import weatherCard from "../UI/weatherCard";
import getWeather from "./getWeather";
import weatherLocation from "../UI/weatherLocation";

const updateWeatherCards = (event) => {
  event.preventDefault();

  var card;

  const weatherCardsContainer = document.getElementById(
    "weather-cards-container"
  );
  weatherCardsContainer.innerHTML = "";

  const weatherLocationContainer = document.getElementById(
    "weather-location-container"
  );
  weatherLocationContainer.innerHTML = "";

  getWeather()
    .then((weatherData) => {
      console.log(weatherData);
      // Updates the weather location
      weatherLocationContainer.appendChild(
        weatherLocation(weatherData.location)
      );

      // Creates cards for each forecast day.
      // Index is passed to know which is the current day, at i == 0.
      for (var i = 0; i < weatherData.forecast.length; i++) {
        card = weatherCard(weatherData, i);
        weatherCardsContainer.appendChild(card);
      }
    })
    .catch((error) => {
      console.log(error);

      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = "Weather data could not be displayed.";
      card = errorMessage;

      weatherCardsContainer.appendChild(card);
    });
};

export default updateWeatherCards;
