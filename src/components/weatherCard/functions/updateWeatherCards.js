import weatherCard from "../UI/weatherCard";

const updateWeatherCards = (event) => {
  event.preventDefault();

  const card = weatherCard();

  const weatherCardsContainer = document.getElementById(
    "weather-cards-container"
  );

  weatherCardsContainer.innerHTML = "";

  weatherCardsContainer.appendChild(card);
};

export default updateWeatherCards;
