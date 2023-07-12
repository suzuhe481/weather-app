import weatherForm from "../../weatherForm/UI/weatherForm";
import weatherCard from "../UI/weatherCard";
import getWeather from "./getWeather";

const updateWeatherCards = (event) => {
  event.preventDefault();

  var card;

  const weatherCardsContainer = document.getElementById(
    "weather-cards-container"
  );
  weatherCardsContainer.innerHTML = "";

  getWeather()
    .then((weatherData) => {
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
